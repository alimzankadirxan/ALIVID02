"use client";

import { FormEvent, useMemo, useState } from "react";
import { contactTimes, objectTypes } from "@/config/content";
import { services } from "@/config/services";
import { leadWhatsappUrl, validateLead, type LeadPayload } from "@/lib/lead";
import { Reveal } from "@/components/ui/Reveal";

const empty: LeadPayload = {
  name: "",
  phone: "",
  objectType: "",
  service: "",
  quantity: "",
  comment: "",
  time: "",
};

export function Lead() {
  const startedAt = useMemo(() => Date.now(), []);
  const [data, setData] = useState(empty);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadPayload, string>>>({});
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const result = validateLead(data, honeypot, startedAt);
    setErrors(result.errors);
    if (!result.ok) {
      setStatus("Проверьте поля формы.");
      return;
    }
    window.open(leadWhatsappUrl(data), "_blank", "noopener,noreferrer");
    setStatus("Откроется WhatsApp. Отправьте сообщение самостоятельно.");
  };

  const field = (key: keyof LeadPayload, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="lead" className="relative z-10 px-5 py-28 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-5xl">
            Рассчитаем систему для вашего объекта
          </h2>
          <p className="mt-4 text-white/50">
            Заявка откроет WhatsApp с готовым текстом. Сообщение уйдёт только после вашего
            подтверждения.
          </p>
        </Reveal>
        <form onSubmit={onSubmit} className="mt-12 grid gap-4" noValidate>
          <div className="hidden">
            <label>
              Сайт компании
              <input
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>
          </div>
          <Field label="Имя" error={errors.name}>
            <input
              value={data.name}
              onChange={(e) => field("name", e.target.value)}
              className={inputClass}
              name="name"
              autoComplete="name"
              required
            />
          </Field>
          <Field label="Телефон" error={errors.phone}>
            <input
              value={data.phone}
              onChange={(e) => field("phone", e.target.value)}
              className={inputClass}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+7"
              required
            />
          </Field>
          <Field label="Тип объекта" error={errors.objectType}>
            <select
              value={data.objectType}
              onChange={(e) => field("objectType", e.target.value)}
              className={inputClass}
              required
            >
              <option value="">Выберите</option>
              {objectTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Какая услуга интересует" error={errors.service}>
            <select
              value={data.service}
              onChange={(e) => field("service", e.target.value)}
              className={inputClass}
              required
            >
              <option value="">Выберите</option>
              {services.map((item) => (
                <option key={item.slug} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Количество камер или устройств">
            <input
              value={data.quantity}
              onChange={(e) => field("quantity", e.target.value)}
              className={inputClass}
              inputMode="numeric"
            />
          </Field>
          <Field label="Комментарий">
            <textarea
              value={data.comment}
              onChange={(e) => field("comment", e.target.value)}
              className={`${inputClass} min-h-28`}
            />
          </Field>
          <Field label="Удобное время для связи" error={errors.time}>
            <select
              value={data.time}
              onChange={(e) => field("time", e.target.value)}
              className={inputClass}
              required
            >
              <option value="">Выберите</option>
              {contactTimes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <button
            type="submit"
            className="mt-4 h-14 rounded-full bg-accent text-sm font-medium tracking-wide"
          >
            Отправить заявку в WhatsApp
          </button>
          {status ? <p className="text-sm text-accent-2">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-[#0c1016] px-4 py-3 text-white outline-none focus:border-accent";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
