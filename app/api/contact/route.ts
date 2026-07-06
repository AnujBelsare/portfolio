import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Escape HTML special characters to prevent XSS in email body
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "belsareanuj2004+work@gmail.com",
      replyTo: email,
      subject: `New message from ${safeName} — Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: monospace; background: #161616; color: #ffffff; padding: 32px; border-radius: 12px; max-width: 560px;">
          <p style="color: #ffdf2a; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 24px;">
            New message — Portfolio
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="color: #737373; font-size: 12px; padding: 6px 0; width: 80px;">Name</td>
              <td style="color: #e5e5e5; font-size: 14px; padding: 6px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="color: #737373; font-size: 12px; padding: 6px 0;">Email</td>
              <td style="font-size: 14px; padding: 6px 0;">
                <a href="mailto:${safeEmail}" style="color: #ffdf2a; text-decoration: none;">${safeEmail}</a>
              </td>
            </tr>
          </table>

          <div style="border-top: 1px solid #2a2a2a; padding-top: 20px;">
            <p style="color: #737373; font-size: 12px; margin: 0 0 10px;">Message</p>
            <p style="color: #d4d4d4; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="color: #404040; font-size: 11px; margin: 32px 0 0; border-top: 1px solid #2a2a2a; padding-top: 16px;">
            Sent via anujbelsare.online
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact/route] Error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
