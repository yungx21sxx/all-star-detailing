import portfolioService from '#server/service/portfolio.service';
import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  const { id } = event.context.params;
  return await portfolioService.removeCar(parseInt(id));
});
