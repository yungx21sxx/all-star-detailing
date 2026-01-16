import { H3Event } from 'h3';
import portfolioService from '#server/service/portfolio.service';
import { PortfolioItemUpdateDTO } from '~/types/dto';
import { prisma } from '#server/service/prisma.service';

export default defineEventHandler(async (event: H3Event) => {
  const dto = await readBody<PortfolioItemUpdateDTO>(event);
  const { photos, date, description, name } = dto;

  for (const [index, photo] of photos.entries()) {
    await prisma.photo.update({
      where: {
        id: photo.photoId,
      },
      data: {
        position: index,
      },
    });
  }

  return prisma.car.update({
    where: {
      id: dto.id,
    },
    data: {
      photos: {
        connect: photos.map((photo) => ({ id: photo.photoId })),
      },
      date,
      name,
      description,
    },
  });
});
