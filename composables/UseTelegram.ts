export default () => {
	const token = '6193438455:AAG9HZ3kPfSEdT73gboU4X_Dokpk-h8NTvk\n'
	const chatID = -1001746507788
	const getUrl = (text: string): string => `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`
	// @ts-ignore
	const fetchForCallData = async ({phone, name}) => {
		const text = `Клиент оставил заявку: %0AИмя: ${name} %0AНомер телефона: ${phone}`
		const url = getUrl(text)
		return useFetch(url)
	}

	// @ts-ignore
	const fetchForRegistrationData = async ({date, phone, name, chosenService}) => {
		const text = `🚗Клиент записался на услугу🚗: ${chosenService} %0A👶Имя: ${name} %0A📱Номер телефона: +7 ${phone} %0A📅Хочет записаться на: ${date}`
		const url = getUrl(text)
		return useFetch(url)
	}

	return {
		fetchForCallData,
		fetchForRegistrationData
	}

}