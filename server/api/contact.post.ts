export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, telegram, topic, message } = body

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw createError({ statusCode: 500, message: 'Telegram credentials not configured' })
  }

  const text = [
    `📩 <b>Новая заявка с сайта</b>`,
    ``,
    `👤 <b>Имя:</b> ${name}`,
    email ? `📧 <b>Email:</b> ${email}` : null,
    telegram ? `✈️ <b>Telegram:</b> t.me/${telegram}` : null,
    `💬 <b>Тема:</b> ${topic}`,
    message ? `📝 <b>Сообщение:</b> ${message}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    body: {
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    },
  })

  return { ok: true }
})
