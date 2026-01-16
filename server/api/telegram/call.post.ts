import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const { phone, name, question } = await readBody<{
    phone: string
    name: string
    question?: string
  }>(event)
  if (!phone || !name) {
    return createError({ statusCode: 400, message: 'bad payload' })
  }
  const config = useRuntimeConfig()
  const token: string = config.telegramBotToken as string
  const chatId: number = Number(config.telegramChatId)
  if (!token || !chatId) {
    return createError({ statusCode: 500, message: 'telegram not configured' })
  }
  const text =
    `Клиент оставил заявку на звонок:\n` +
    `👶Имя: ${name}\n` +
    `📱Номер телефона: 8 ${phone}\n` +
    `${question ? `Вопрос: ${question}` : ''}`

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
