import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Clé Resend non configurée." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    const from = process.env.RESEND_FROM_EMAIL || "no-reply@my-portfolio.com";
    const to = process.env.RESEND_TO_EMAIL || "francoisdigitalworks@gmail.com";

    await resend.emails.send({
      from,
      to,
      subject: `Nouveau message de ${name}`,
      text: `Message reçu de ${name} <${email}>:\n\n${message}`,
      html: `
        <div style="font-family:Arial, sans-serif; line-height:1.6; color:#111">
          <h2>Nouveau message depuis le portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Impossible d'envoyer le message." }, { status: 500 });
  }
}
