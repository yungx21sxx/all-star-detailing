export default () => {
	const token = '7161194033:AAGBmx7I_ZipqmwAdS2SUsSwFYoCyGjS5jc';
	const chatID = -1002495293643;
	const getUrl = (text: string): string => `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`
	// @ts-ignore
	const fetchForCallData = async ({phone, name}) => {
		const text = `Клиент оставил заявку: %0A👶Имя: ${name} %0A📱Номер телефона: 8 ${phone}`
		const url = getUrl(text)
		return useFetch(url)
	}

	// @ts-ignore
	const fetchForRegistrationData = async (date: Date, phone: string, name: string, chosenService: string) => {

		const formatedDate = date.toLocaleDateString('ru-RU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
		const text = `Клиент записался на услугу:%0A🚗 ${chosenService} %0A👶Имя: ${name} %0A📱Номер телефона: 8 ${phone} %0A📅Хочет записаться на: ${formatedDate}`
		const url = getUrl(text)
		return useFetch(url)
	}

	return {
		fetchForCallData,
		fetchForRegistrationData
	}

}