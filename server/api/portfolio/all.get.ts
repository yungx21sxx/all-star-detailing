import portfolioService from '#server/service/portfolio.service';
import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const rawLimit = Array.isArray(query.limit) ? query.limit[0] : query.limit;
  const limitParsed = rawLimit !== undefined ? Number.parseInt(String(rawLimit), 10) : undefined;
  const limit = limitParsed && Number.isFinite(limitParsed) && limitParsed > 0 ? limitParsed : undefined;
  const portfolio = await portfolioService.getPortfolio();
  return typeof limit === 'number' ? portfolio.slice(0, limit) : portfolio;
});
