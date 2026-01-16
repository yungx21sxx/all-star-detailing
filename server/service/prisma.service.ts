import Prisma from '@prisma/client';

const { PrismaClient: PrismaService } = Prisma;

const prisma = new PrismaService();

export { prisma };
