"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContact } from "./actions";
import type { ContactState } from "./service-labels";
import { Button } from "@/components/ui/button";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-md border border-or/20 bg-noir-soft px-4 py-3 text-blanc placeholder:text-blanc/35 transition-colors focus:border-or focus:outline-none";
const labelClass = "mb-1.5 block text-sm font-medium text-blanc/85";
const errorClass = "mt-1.5 text-xs text-red-400";

export function ContactForm({ serviceLabels }: { serviceLabels: string[] }) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-lg border border-or/30 bg-noir-soft p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-or" />
        <h2 className="text-2xl font-medium text-blanc">Demande reçue</h2>
        <p className="max-w-md leading-relaxed text-blanc/70">{state.message}</p>
      </div>
    );
  }

  const fe = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot anti-spam (masqué) */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Société (ne pas remplir)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom complet <span className="text-or">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!fe.name}
            aria-describedby={fe.name ? "name-error" : undefined}
            className={inputClass}
            placeholder="Votre nom"
          />
          {fe.name ? (
            <p id="name-error" className={errorClass}>
              {fe.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-or">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!fe.email}
            aria-describedby={fe.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="vous@exemple.com"
          />
          {fe.email ? (
            <p id="email-error" className={errorClass}>
              {fe.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!fe.phone}
            aria-describedby={fe.phone ? "phone-error" : undefined}
            className={inputClass}
            placeholder="+33 6 ..."
          />
          {fe.phone ? (
            <p id="phone-error" className={errorClass}>
              {fe.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Type de prestation <span className="text-or">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            aria-invalid={!!fe.service}
            aria-describedby={fe.service ? "service-error" : undefined}
            className={inputClass}
          >
            <option value="" disabled>
              Sélectionnez une prestation
            </option>
            {serviceLabels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
          {fe.service ? (
            <p id="service-error" className={errorClass}>
              {fe.service}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Votre message <span className="text-or">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!fe.message}
          aria-describedby={fe.message ? "message-error" : undefined}
          className={inputClass + " resize-y"}
          placeholder="Décrivez votre besoin en toute confidentialité."
        />
        {fe.message ? (
          <p id="message-error" className={errorClass}>
            {fe.message}
          </p>
        ) : null}
      </div>

      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.message}
        </p>
      ) : null}

      <div className="pt-2">
        <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Envoi…
            </>
          ) : (
            "Demande de devis confidentielle"
          )}
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-blanc/45">
        En soumettant ce formulaire, vous acceptez que vos données soient
        utilisées pour traiter votre demande, dans le respect de notre{" "}
        <a href="/confidentialite" className="text-or hover:underline">
          politique de confidentialité
        </a>
        . Chaque échange est couvert par un accord de confidentialité.
      </p>
    </form>
  );
}
