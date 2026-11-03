import { site } from "@/config/site";

export type LeadPayload = {
  name: string;
  phone: string;
  objectType: string;
  service: string;
  quantity: string;
  comment: string;
  time: string;
};

export function buildLeadMessage(data: LeadPayload) {
  return [
    "Здравствуйте! Хочу получить расчёт стоимости услуг ALIVID.",
    "",
    `Имя: ${data.name}`,
    `Телефон: ${data.phone}`,
    `Объект: ${data.objectType}`,
    `Услуга: ${data.service}`,
    `Количество оборудования: ${data.quantity || "не указано"}`,
    `Комментарий: ${data.comment || "—"}`,
    `Время связи: ${data.time}`,
  ].join("\n");
}

export function leadWhatsappUrl(data: LeadPayload) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(buildLeadMessage(data))}`;
}

export function validateLead(data: LeadPayload, honeypot: string, startedAt: number) {
  const errors: Partial<Record<keyof LeadPayload, string>> = {};

  if (honeypot.trim()) {
    return { ok: false as const, errors: { name: "Заявка отклонена." } };
  }

  if (Date.now() - startedAt < 1200) {
    return { ok: false as const, errors: { name: "Подождите секунду и отправьте форму ещё раз." } };
  }

  if (data.name.trim().length < 2) errors.name = "Укажите имя.";
  if (!/^[\d+\-\s()]{10,20}$/.test(data.phone.trim())) {
    errors.phone = "Укажите телефон.";
  }
  if (!data.objectType) errors.objectType = "Выберите тип объекта.";
  if (!data.service) errors.service = "Выберите услугу.";
  if (!data.time) errors.time = "Укажите удобное время.";

  return Object.keys(errors).length
    ? { ok: false as const, errors }
    : { ok: true as const, errors };
}
