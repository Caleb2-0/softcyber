import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { category, product, price, email, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ORG_EMAIL,
      pass: process.env.ORG_EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Quote Request" <${process.env.ORG_EMAIL}>`,
    to: process.env.ORG_EMAIL,
    subject: "New Quote Request",
    html: `
      <h3>New Quote Request</h3>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Cost:</strong> $${price}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
