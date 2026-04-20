import { NextResponse } from "next/server";
import { Resend } from "resend";

// Mark as dynamic so Next.js never tries to statically render this route
export const dynamic = "force-dynamic";

/**
 * POST /api/contact
 * Body: { name, email, subject, message }
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body ?? {};

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 422 }
    );
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  const toEmail = process.env.EMAIL_TO ?? "booking@johnnydevils.com";
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Johnny Devils Website <noreply@johnnydevils.com>",
      to: [toEmail],
      replyTo: email,
      subject: `[${subject ?? "General"}] Message from ${name} — Johnny Devils`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #1A1208; background: #F2E8D0; padding: 32px;">
          <h2 style="font-size: 24px; margin-bottom: 8px;">New message via JohnnyDevils.com</h2>
          <p style="color: #7A6E5E; font-size: 14px; margin-bottom: 24px; border-bottom: 1px solid #C8893A; padding-bottom: 16px;">
            Subject: ${subject ?? "General"}
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #7A6E5E; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #7A6E5E;">Email</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #C8893A;">${email}</a></td>
            </tr>
          </table>
          <div style="background: #fff; border-left: 3px solid #C8893A; padding: 16px 20px; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          <p style="margin-top: 24px; font-size: 12px; color: #7A6E5E;">Sent from the contact form at JohnnyDevils.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact/route] Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
