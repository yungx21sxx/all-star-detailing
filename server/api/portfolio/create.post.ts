import portfolioService from "~/server/service/portfolio.service";
import {H3Event} from "h3";

export default defineEventHandler(async (event: H3Event) => {
	const car = await readBody(event)
	return await portfolioService.addCar(car)
})