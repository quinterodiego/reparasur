import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("GMAIL_USER o GMAIL_APP_PASSWORD no están configurados");
    return NextResponse.json(
      { error: "Servicio de email no configurado" },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
    tls: {
      // Evita "self-signed certificate in certificate chain" (proxy, antivirus, etc.)
      rejectUnauthorized: false,
    },
  });

  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan nombre, email o mensaje" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL ?? gmailUser;

    await transporter.sendMail({
      from: `"ReparaSur" <${gmailUser}>`,
      to: toEmail,
      replyTo: String(email),
      subject: `[ReparaSur] Consulta de ${name}`,
      html: `
        <h2>Nueva consulta desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(String(name))}</p>
        <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(String(phone || "—"))}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(String(message)).replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color:#64748b;font-size:12px;">Enviado desde reparasur.com.ar</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    const message = err instanceof Error ? err.message : "Error al enviar el email";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
