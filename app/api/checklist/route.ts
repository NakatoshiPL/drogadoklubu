import { NextResponse } from "next/server";
import { sendMakeWebhook } from "@/lib/webhook";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = String(formData.get("checklist-email") ?? "");

    const payload = {
      type: "checklist",
      email,
    };

    await sendMakeWebhook(process.env.MAKE_WEBHOOK_URL, payload);
  } catch (error) {
    console.error("Checklist endpoint fallback after processing error:", error);
  }

  return NextResponse.redirect(
    new URL("/przygotowanie-i-testy?checklist=sent", request.url),
  );
}
