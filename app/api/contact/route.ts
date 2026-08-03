import { NextResponse } from "next/server";
import { sendMakeWebhook } from "@/lib/webhook";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    type: "contact",
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  await sendMakeWebhook(process.env.MAKE_WEBHOOK_URL, payload);

  return NextResponse.redirect(new URL("/kontakt?contact=ok", request.url));
}
