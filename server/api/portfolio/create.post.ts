import portfolioService from '#server/service/portfolio.service';
import { H3Event } from 'h3';
import { PortfolioAppendDTO } from '~/types/dto';

export default defineEventHandler(async (event: H3Event) => {
  const car = await readBody<PortfolioAppendDTO>(event);
  return await portfolioService.addCar(car);
});
