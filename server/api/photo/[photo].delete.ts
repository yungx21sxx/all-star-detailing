import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "../");
export default defineEventHandler(async event => {
	const {photo} = event.context.params
	let uploadDir = ''
	if (process.env.NODE_ENV === 'development') {
		uploadDir = './public/portfolio'
	} else {
		uploadDir = path.join(__dirname, '/public/portfolio');
	}
	const filePath = uploadDir + '/' + photo
	if (!fs.existsSync(filePath)) {
		return {status: 500}
	}
	fs.rmSync(filePath)
	return filePath
})