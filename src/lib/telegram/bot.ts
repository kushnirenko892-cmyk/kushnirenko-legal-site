import { Bot, InlineKeyboard, webhookCallback } from "grammy";
import { formatTeamLeadMessage } from "./messages";
import type { LeadDirection } from "@/types/lead";

type SessionStep = "direction" | "message" | "name" | "contact";

type LeadSession = {
  step: SessionStep;
  direction?: LeadDirection;
  message?: string;
  name?: string;
};

const sessions = new Map<number, LeadSession>();

const directionKeyboard = new InlineKeyboard()
  .text("Упаковать бизнес", "direction:business")
  .row()
  .text("Получить лицензию", "direction:licensing")
  .row()
  .text("Торги / проверить лот", "direction:trades")
  .row()
  .text("Запуск с KUSH", "direction:kush")
  .row()
  .text("Другое", "direction:other");

export function createTelegramBot() {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    throw new Error("TELEGRAM_BOT_TOKEN is not configured");
  }

  const bot = new Bot(token);

  bot.command("start", async (ctx) => {
    const chatId = ctx.chat.id;
    sessions.set(chatId, { step: "direction" });
    await ctx.reply(
      "Здравствуйте! Я помогу записаться на стратегический разбор к Елизавете.\n\nВыберите, с какой задачей вы пришли:",
      { reply_markup: directionKeyboard }
    );
  });

  bot.callbackQuery(/^direction:(.+)$/, async (ctx) => {
    const chatId = ctx.chat?.id;
    const direction = ctx.match[1] as LeadDirection;

    if (!chatId) return;

    sessions.set(chatId, { step: "message", direction });
    await ctx.answerCallbackQuery();
    await ctx.reply("Кратко опишите вашу задачу.");
  });

  bot.on("message:text", async (ctx) => {
    const chatId = ctx.chat.id;
    const text = ctx.message.text.trim();
    const session = sessions.get(chatId) || { step: "direction" };

    if (session.step === "direction") {
      sessions.set(chatId, { step: "direction" });
      await ctx.reply("Выберите направление:", { reply_markup: directionKeyboard });
      return;
    }

    if (session.step === "message") {
      sessions.set(chatId, { ...session, step: "name", message: text });
      await ctx.reply("Как к вам обращаться?");
      return;
    }

    if (session.step === "name") {
      sessions.set(chatId, { ...session, step: "contact", name: text });
      await ctx.reply("Оставьте контакт для связи: Telegram, телефон или email.");
      return;
    }

    if (session.step === "contact") {
      const completed = { ...session, contact: text };

      if (completed.direction && completed.message && completed.name) {
        const teamChatId = process.env.TELEGRAM_TEAM_CHAT_ID;

        if (teamChatId) {
          await ctx.api.sendMessage(
            teamChatId,
            formatTeamLeadMessage({
              direction: completed.direction,
              message: completed.message,
              name: completed.name,
              contact: completed.contact
            })
          );
        }
      }

      sessions.delete(chatId);
      await ctx.reply(
        "Спасибо! Мы получили вашу заявку. Команда изучит задачу и свяжется с вами в ближайшее время."
      );
    }
  });

  return bot;
}

export function createTelegramWebhookHandler() {
  return webhookCallback(createTelegramBot(), "std/http");
}
