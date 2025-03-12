import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const inputDir = './public/services';

async function processImages(directory) {
	try {
		const files = await fs.readdir(directory);
		
		for (const file of files) {
			if (file !== 'img.png') continue;
			const filePath = path.join(directory, file);
			const fileExtension = path.extname(file).toLowerCase();
			const fileName = path.basename(file, fileExtension); // Оригинальное имя без расширения
			
			// Проверяем, является ли файл изображением
			if (!['.jpg', '.jpeg', '.png', '.webp'].includes(fileExtension)) continue;
			
			const tempFilePath = path.join(directory, `${fileName}.webp.tmp`); // Временный файл
			const outputFilePath = path.join(directory, `${fileName}.webp`);  // Финальное имя
			
			try {
				const image = sharp(filePath);
				const { width, height } = await image.metadata();
				
				if (!width || !height) continue;
				
				const isPortrait = height > width;
				let resizeOptions = null;
				
				if (isPortrait) {
					resizeOptions = height > 1080 ? { height: 700, fit: 'cover' } : null;
				} else {
					resizeOptions = width > 1920 ? { width: 700, fit: 'cover' } : null;
				}
				
				// Сохраняем временный файл
				await image.resize(resizeOptions).webp({ quality: 70 }).toFile(tempFilePath);
				
				// Удаляем оригинальный файл
				await fs.unlink(filePath);
				
				// Переименовываем временный файл в оригинальное название
				await fs.rename(tempFilePath, outputFilePath);
				
				console.log(`✔ Обработано: ${file} → ${fileName}.webp`);
				
			} catch (err) {
				console.error(`Ошибка обработки файла ${file}:`, err);
			}
		}
	} catch (err) {
		console.error('Ошибка при чтении директории:', err);
	}
}

processImages(inputDir);