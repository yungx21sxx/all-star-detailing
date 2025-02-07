import { prisma } from "./prisma.service";
import {ICar} from "~/types/client";
import {PortfolioAppendDTO, PortfolioItemUpdateDTO, PortfolioPhotoConnectDTO} from "~/types/dto";
import path from "path";
import fs from "fs";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "../../");

class PortfolioService {
    async getPortfolio() {
        const cars = await prisma.car.findMany({
            include: {photos: true},
            orderBy: {
                createdAt: 'desc',
            },
        })

        return cars.map(car => {
            const {photos, ...carData} = car;
            return {
                ...carData,
                photos: photos.sort((a, b) => a.position - b.position)
            }
        })
    }

    async updatePhotosPosition(photos: PortfolioPhotoConnectDTO[]) {
        let photosWithPosition = []

        for (let i = 0; i < photos.length; i++) {
            const currentPhoto = {
                ...photos[i],
                position: i
            }
            photosWithPosition.push(currentPhoto)
        }

        for (const photoToUpdate of photosWithPosition) {
            await prisma.photo.update({
                where: {id: photoToUpdate.photoId},
                data: {
                    position: photoToUpdate.position
                }
            })
        }
        return photosWithPosition;
    }

    async addCar(car: PortfolioAppendDTO) {
        const {photos: photosWithNewPosition, ...portfolioItem} = car;
        const photos = await this.updatePhotosPosition(photosWithNewPosition);
        return prisma.car.create({
            data: {
                ...portfolioItem,
                photos: {
                    connect: photos.map(photo => ({id : photo.photoId}))
                },
            }
        })
    }

    async removeCar(id: number) {

        const portfolioItem = await prisma.car.findUnique({
            where: {id},
            include: {photos: true},
        })

        if (!portfolioItem) {
            return createError({
                message: 'Ошибка удаления',
                statusCode: 404
            });
        }

        let uploadDir = ''
        if (process.env.NODE_ENV === 'development') {
            uploadDir = './uploads'
        } else {
            uploadDir = path.join(__dirname, './uploads');
        }

        for (const photo of portfolioItem.photos) {
            const filePathFull = uploadDir + '/' + photo.urlFull.split('/')[2];
            const filePathMin = uploadDir + '/' + photo.urlMin.split('/')[2];
            if (!fs.existsSync(filePathFull) || !fs.existsSync(filePathMin)) {
                continue;
            }
            fs.rmSync(filePathFull)
            fs.rmSync(filePathMin)
        }
        return prisma.car.delete({
            where: {id}
        })

    }

     async updateCar(dto: PortfolioItemUpdateDTO){
        const {id, name, description} = dto
        return prisma.car.update({
            where: {id},
            data: {
                name, description
            }
        });
    }
}

export default new PortfolioService();