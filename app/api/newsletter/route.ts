import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    email: String(formData.get("newsletter-email") ?? ""),
    source: "newsletter-form",
  };

  const webhookUrl = process.env.MAKE_NEWSLETTER_WEBHOOK_URL;

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } else {
    console.info("MAKE_NEWSLETTER_WEBHOOK_URL is missing. Payload:", payload);
  }

  return NextResponse.redirect(new URL("/kontakt?newsletter=ok", request.url));
}
