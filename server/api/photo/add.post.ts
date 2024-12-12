
import path from "path";
import {fileURLToPath} from "url";

import {H3Event, MultiPartData} from "h3";
import photoService from "~/server/service/photo.service";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "../");




export default defineEventHandler(async (event: H3Event) => {

	const files: MultiPartData[] | undefined  = await readMultipartFormData(event);
	let uploadedImages = [];

	if (!files) {
		return createError({
			statusCode: 403,
			message: 'Загрузите фотки'
		})
	}


	for (let file of files) {
		const [type, ext] = file.type.split("/")
		if (type !== "image") {
			return createError({
				statusCode: 403,
				message: 'Загружать можно только фотки'
			});
		}
		try {
			const url = await photoService.writePhoto(file, 1000)
			uploadedImages.push(url)
		} catch (e) {
			console.log(e)
			return createError({
				statusCode: 403,
				message: 'Возможно одна из фоток в неправильном формате, принимаем все кроме heic от айфона'
			})
		}
	}

	return uploadedImages;
});