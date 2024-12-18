import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { readFile } from 'fs/promises';
import path from 'path';

async function readJSONFile(fileName) {
  try {
    const filePath = path.join(new URL(import.meta.url).pathname, '..', fileName);
    const jsonData = await readFile(filePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    throw error;
  }
}
async function main() {
  console.log(`Start seeding ...`)
  const clients = await readJSONFile('cars.json')
  for (const car of clients) {
    const {photos, ...carData} = car

    const cars = await prisma.car.create({
      data: {
        ...carData,
        photos: {
          create: photos.map(photo => ({url: photo}))
        }
      }
    })
  }

  await prisma.admin.create({
    data: {
      login: 'Admin6754342',
      passwordHash: '$2b$10$K1PFoVQliCorWYIkAn9IVe3oz50rI4b3oFs8QEA4H6O7CEKQbCWCq'
    }
  })
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
