interface ContactBody {
  name?: string
  email?: string
  projectType?: string
  message?: string
  website?: string
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as ContactBody

  // Honeypot: bots fill this hidden field
  if (body.website) return { ok: true, spam: true }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Name, email, and message are required.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter a valid email address.' })
  }

  const toEmail = process.env.CONTACT_EMAIL || 'biinorman1@gmail.com'
  const html = `
    <h2>New inquiry from ${name}</h2>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Project type:</strong> ${body.projectType || 'Not specified'}</p>
    <hr/>
    <p>${message.replace(/</g, '&lt;').replace(/\n/g, '<br/>')}</p>
  `

  // Preferred: Resend
  if (process.env.RESEND_API_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Norman Bii Portfolio <portfolio@normanbii.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio] New inquiry from ${name}`,
        html,
      }),
    })
    if (!res.ok) throw createError({ statusCode: 502, statusMessage: 'Email provider rejected the request.' })
    return { ok: true }
  }

  // Alternative: generic webhook (Formspree etc.)
  if (process.env.CONTACT_WEBHOOK_URL) {
    const res = await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, projectType: body.projectType, message }),
    })
    if (!res.ok) throw createError({ statusCode: 502, statusMessage: 'Delivery service rejected the request.' })
    return { ok: true }
  }

  throw createError({
    statusCode: 501,
    statusMessage: 'Contact endpoint not configured. Set RESEND_API_KEY or CONTACT_WEBHOOK_URL, or email directly.',
  })
})
