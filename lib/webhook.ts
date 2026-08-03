const WEBHOOK_TIMEOUT_MS = 5000;

export async function sendMakeWebhook(
  url: string | undefined,
  payload: unknown,
): Promise<void> {
  if (!url) {
    console.error("MAKE_WEBHOOK_URL is not configured. Payload:", payload);
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    });
  } catch (error) {
    console.error("Make webhook request failed:", error);
  } finally {
    clearTimeout(timeout);
  }
}
