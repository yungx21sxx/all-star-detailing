import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const { date, phone, name, chosenService } = await readBody<{
    date: string
    phone: string
    name: string
    chosenService: string
  }>(event)
  if (!phone || !name || !chosenService || !date) {
    return createError({ statusCode: 400, message: 'bad payload' })
  }
  const config = useRuntimeConfig()
  const token: string = config.telegramBotToken as string
  const chatId: number = Number(config.telegramChatId)
  if (!token || !chatId) {
    return createError({ statusCode: 500, message: 'telegram not configured' })
  }
  const formatedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const text =
    `Клиент записался на услугу:\n` +
    `🚗 ${chosenService}\n` +
    `👶Имя: ${name}\n` +
    `📱Номер телефона: 8 ${phone}\n` +
    `📅Хочет записаться на: ${formatedDate}`

  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const res = await $fetch(url, {
    method: 'POST',
    body: {
      chat_id: chatId,
      text,
    },
  })
  return res
})
