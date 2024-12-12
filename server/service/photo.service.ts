import path from "path";
import * as uuid from "uuid";
import fs from "fs";
import sharp from "sharp";
import {fileURLToPath} from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "../");

class PhotoService {
	createFileUrl() {
		const staticUrl = '/uploaded-img/'
		const fileName = uuid.v4() + '.webp'
		let uploadDir = ''

		if (process.env.NODE_ENV === 'development') {
			uploadDir = './public/portfolio'
		} else {
			uploadDir = path.join(__dirname, '/public/portfolio');
		}
		return {
			url: staticUrl + fileName,
			fileName,
			uploadDir,
			filePath: uploadDir + '/' + fileName
		}
	}
	async writePhoto(file: any, maxWidth: number) {
		const {url, uploadDir, filePath} = this.createFileUrl()
		console.log(url)

		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir, '0777', true);
		}
		const meta: sharp.Metadata = await sharp(file.data).metadata()
		try {
			// @ts-ignore
			if (meta.width > maxWidth) {
				const buffer = await sharp(file.data)
					.webp({quality: 85})
					.resize({
						width: maxWidth
					})
					.toBuffer()

				fs.writeFileSync(filePath, buffer)
			} else {
				const buffer = await sharp(file.data)
					.webp({quality: 90})
					.toBuffer()
				fs.writeFileSync(filePath, buffer)
			}
		} catch (e) {
			console.log(e)
			throw new Error(e)
		}
		return url
	}
}

export default new PhotoService()