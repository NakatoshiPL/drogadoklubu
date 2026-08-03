import { NextResponse } from "next/server";
import { sendMakeWebhook } from "@/lib/webhook";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    type: "newsletter",
    email: String(formData.get("newsletter-email") ?? ""),
  };

  await sendMakeWebhook(process.env.MAKE_WEBHOOK_URL, payload);

  return NextResponse.redirect(new URL("/kontakt?newsletter=ok", request.url));
}
