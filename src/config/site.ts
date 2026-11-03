export const site = {
  name: "ALIVID",
  legalName: "ALIVID",
  tagline: "Профессиональный монтаж. Грамотная настройка. Понятный результат.",
  headline: "Инженерные системы безопасности нового уровня.",
  description:
    "Проектируем, устанавливаем и настраиваем системы видеонаблюдения, контроля доступа и сетевой инфраструктуры для частных и коммерческих объектов.",
  shortDescription:
    "Инженерная компания ALIVID: видеонаблюдение, контроль доступа и сетевая инфраструктура в Караганде и области.",
  founder: "Кадырхан Алимжан Толегенулы",
  experienceYears: 5,
  region: "Караганда и Карагандинская область",
  city: "Караганда",
  country: "KZ",
  phone: "+77786241330",
  phoneDisplay: "+7 778 624 1330",
  whatsappNumber: "77786241330",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "ru_KZ",
  keywords: [
    "видеонаблюдение Караганда",
    "IP-камеры",
    "домофоны",
    "шлагбаумы",
    "турникеты",
    "Face ID",
    "контроль доступа",
    "локальные сети",
    "кабельная инфраструктура",
    "ALIVID",
  ],
} as const;

export const nav = [
  { href: "#systems", label: "Системы" },
  { href: "#method", label: "Процесс" },
  { href: "#result", label: "Результат" },
  { href: "#work", label: "Портфолио" },
  { href: "#lead", label: "Расчёт" },
  { href: "#contact", label: "Контакты" },
] as const;

export function telHref() {
  return `tel:${site.phone}`;
}

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const defaultWhatsappText =
  "Здравствуйте! Хочу проконсультироваться по системам безопасности ALIVID.";
