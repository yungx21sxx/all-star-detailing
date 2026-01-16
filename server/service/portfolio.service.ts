import { Photo } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PortfolioAppendDTO, PortfolioItemUpdateDTO, PortfolioPhotoConnectDTO } from '~/types/dto';
import { prisma } from './prisma.service';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), '../../');

class PortfolioService {
  async getPortfolio(limit?: number) {
    const cars = await prisma.car.findMany({
      include: { photos: true },
      orderBy: {
        date: 'desc',
      },
      take: limit,
    });

    return cars.map((car) => {
      const { photos, ...carData } = car;
      return {
        ...carData,
        photos: photos.sort((a, b) => a.position - b.position),
      };
    });
  }

  async updatePhotosPosition(photos: PortfolioPhotoConnectDTO[]) {
    let photosWithPosition = [];

    for (let i = 0; i < photos.length; i++) {
      const currentPhoto = {
        ...photos[i],
        position: i,
      };
      photosWithPosition.push(currentPhoto);
    }

    for (const photoToUpdate of photosWithPosition) {
      await prisma.photo.update({
        where: { id: photoToUpdate.photoId },
        data: {
          position: photoToUpdate.position,
        },
      });
    }
    return photosWithPosition;
  }

  async addCar(car: PortfolioAppendDTO) {
    const { photos: photosWithNewPosition, date, ...portfolioItem } = car;
    const photos = await this.updatePhotosPosition(photosWithNewPosition);
    return prisma.car.create({
      data: {
        date: new Date(date).toISOString(),
        ...portfolioItem,
        photos: {
          connect: photos.map((photo) => ({ id: photo.photoId })),
        },
      },
    });
  }

  async removeCar(id: number) {
    const portfolioItem = await prisma.car.findUnique({
      where: { id },
      include: { photos: true },
    });

    if (!portfolioItem) {
      return createError({ message: 'Ошибка удаления', statusCode: 404 });
    }

    let uploadDir =
      process.env.NODE_ENV === 'development' ? './uploads' : path.join(__dirname, './uploads');

    for (const photo of portfolioItem.photos || []) {
      if (!photo.urlFull || !photo.urlMin) continue;

      const filePathFull = uploadDir + '/' + photo.urlFull.split('/')[2];
      const filePathMin = uploadDir + '/' + photo.urlMin.split('/')[2];

      if (fs.existsSync(filePathFull)) fs.rmSync(filePathFull);
      if (fs.existsSync(filePathMin)) fs.rmSync(filePathMin);
    }
    await prisma.photo.deleteMany({
      where: { carId: portfolioItem.id },
    });
    return prisma.car.delete({ where: { id } });
  }

  async updateCar(dto: PortfolioItemUpdateDTO) {
    const { id, name, description } = dto;
    return prisma.car.update({
      where: { id },
      data: {
        name,
        description,
      },
    });
  }
  async getCar(id: number) {
    const car = await prisma.car.findUnique({
      where: { id },
      include: {
        photos: true,
      },
    });
    if (!car) {
      return createError({ statusCode: 404, message: 'Машина не найдена' });
    }
    const { photos, createdAt, ...carData } = car;
    return {
      photos: photos
        .sort((a: Photo, b: Photo) => a.position - b.position)
        .map((photo: Photo) => ({
          photoId: photo.id,
          urlMin: photo.urlMin,
        })),
      ...carData,
    };
  }
}

export default new PortfolioService();
