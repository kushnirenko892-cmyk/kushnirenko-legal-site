import type { LeadDirection } from "@/types/lead";

export const directionLabels: Record<LeadDirection, string> = {
  business: "Упаковать бизнес",
  licensing: "Получить лицензию",
  trades: "Торги / проверить лот",
  kush: "Запуск с KUSH",
  other: "Другое"
};

export function formatTeamLeadMessage(input: {
  direction: LeadDirection;
  message: string;
  name: string;
  contact: string;
}) {
  return [
    "Новая заявка с сайта",
    "",
    `Направление: ${directionLabels[input.direction]}`,
    `Имя: ${input.name}`,
    `Контакт: ${input.contact}`,
    `Описание задачи: ${input.message}`,
    "Источник: сайт",
    `Дата: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`
  ].join("\n");
}
