import portfolioService from "~/server/service/portfolio.service";


export default defineEventHandler(async event => {
	const portfolio = await portfolioService.getPortfolio()
	return portfolio
})