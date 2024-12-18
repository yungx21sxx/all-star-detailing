import {H3Event} from "h3";
import portfolioService from "~/server/service/portfolio.service";
import {PortfolioItemUpdateDTO} from "~/types/dto";

export default defineEventHandler(async (event: H3Event) => {
	const car = await readBody<PortfolioItemUpdateDTO>(event)
	const portfolioItem = await portfolioService.updateCar(car)
	if (!portfolioItem) {
		return createError({
			message: "",
			statusCode: 400
		})
	}
	return portfolioItem
})