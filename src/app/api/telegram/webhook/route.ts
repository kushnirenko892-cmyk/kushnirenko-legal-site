import { NextRequest } from "next/server";
import { createTelegramWebhookHandler } from "@/lib/telegram/bot";

export async function POST(request: NextRequest) {
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  const incomingSecret = request.headers.get("x-telegram-bot-api-secret-token");

  if (secret && incomingSecret !== secret) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const handler = createTelegramWebhookHandler();
    return handler(request);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Telegram webhook error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ ok: true, endpoint: "telegram-webhook" });
}
