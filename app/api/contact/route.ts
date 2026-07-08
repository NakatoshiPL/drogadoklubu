import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    childAge: String(formData.get("childAge") ?? ""),
    countries: formData.getAll("countries").map(String),
    message: String(formData.get("message") ?? ""),
    source: "contact-form",
  };

  const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } else {
    console.info("MAKE_CONTACT_WEBHOOK_URL is missing. Payload:", payload);
  }

  return NextResponse.redirect(new URL("/kontakt?contact=ok", request.url));
}
