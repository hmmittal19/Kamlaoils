import { company } from "@/lib/company";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Contact form delivers only to this Gmail inbox */
const recipientEmail = company.email;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "SMTP not configured." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const mailSubject = `[Kamla Oil Contact] ${subject || "General inquiry"} — ${name}`;
    const textBody = [
      `New message from ${company.shortName} website`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Subject: ${subject || "General inquiry"}`,
      "",
      "Message:",
      message,
      "",
      `Plant: ${company.plantLocation}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"${company.shortName}" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: mailSubject,
      text: textBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send via Gmail." },
      { status: 500 }
    );
  }
}
