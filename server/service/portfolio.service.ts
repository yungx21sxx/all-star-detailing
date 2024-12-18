import { prisma } from "./prisma.service";
import {ICar} from "~/types/client";
import {PortfolioItemUpdateDTO} from "~/types/dto";


class PortfolioService {
    async getPortfolio() {
        return prisma.car.findMany({
            include: {photos: true},
            orderBy: {
                createdAt: 'desc',
            },
        })
    }

    async addCar(car: ICar) {
        const {photos: photosRequest, ...portfolioItem} = car;
        const photos = photosRequest.map(photo => ({ url: photo }))
        return prisma.car.create({
            data: {
                ...portfolioItem,
                photos: {
                    create: photos
                }
            }
        })
    }

    async removeCar(id: number) {
        try {
            await prisma.photo.deleteMany({
                where: {carId: id}
            })
        } catch (e) {
            throw new Error(e)
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