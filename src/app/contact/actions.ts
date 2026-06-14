"use server";

import { siteConfig } from "@/lib/site-config";
import { SERVICE_LABELS, type ContactState } from "./service-labels";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Server Action — traitement d'une demande de devis confidentielle.
 *
 * >>> CONFIGURATION ENVOI EMAIL (à compléter par le client) <<<
 * Cette action est prête à brancher un service d'envoi (ex. Resend).
 * Tant que `RESEND_API_KEY` n'est pas défini, la demande est journalisée
 * côté serveur (lead non perdu) et l'utilisateur reçoit une confirmation.
 *
 * Pour activer l'envoi réel :
 *   1. npm install resend
 *   2. Définir RESEND_API_KEY et CONTACT_TO_EMAIL dans l'environnement (voir .env.example)
 *   3. Décommenter le bloc « ENVOI EMAIL » ci-dessous.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot anti-spam (champ masqué : doit rester vide).
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) {
    // Probable bot : on simule un succès sans rien traiter.
    return {
      status: "success",
      message: "Merci, votre demande a bien été reçue.",
    };
  }

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Veuillez indiquer votre nom.";
  if (!isValidEmail(email)) fieldErrors.email = "Adresse email invalide.";
  if (phone.length > 0 && phone.replace(/[\s+().-]/g, "").length < 6)
    fieldErrors.phone = "Numéro de téléphone invalide.";
  if (!service || !SERVICE_LABELS.includes(service))
    fieldErrors.service = "Veuillez sélectionner une prestation.";
  if (message.length < 10)
    fieldErrors.message =
      "Votre message doit comporter au moins 10 caractères.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Veuillez corriger les champs indiqués.",
      fieldErrors,
    };
  }

  const lead = {
    name,
    email,
    phone,
    service,
    message,
    at: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

  if (!apiKey) {
    // Service d'envoi non configuré : on journalise le lead (échec propre).
    console.warn(
      "[contact] RESEND_API_KEY absent — lead journalisé sans envoi email :",
      lead,
    );
    return {
      status: "success",
      message:
        "Merci, votre demande confidentielle a bien été enregistrée. Nous vous recontacterons rapidement.",
    };
  }

  try {
    /* ====================== ENVOI EMAIL (à activer) ======================
    import { Resend } from "resend";
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Global Secure & Transport <contact@votre-domaine.com>",
      to: toEmail,
      replyTo: email,
      subject: `Demande de devis — ${service} — ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || "—"}\nPrestation: ${service}\n\n${message}`,
    });
    ===================================================================== */

    // Tant que le bloc ci-dessus est commenté, on journalise pour ne rien perdre.
    console.info(
      "[contact] lead reçu (destinataire prévu : %s) :",
      toEmail,
      lead,
    );

    return {
      status: "success",
      message:
        "Merci, votre demande confidentielle a bien été transmise. Nous vous recontacterons rapidement.",
    };
  } catch (err) {
    console.error("[contact] échec d'envoi :", err);
    return {
      status: "error",
      message:
        "Une erreur est survenue lors de l'envoi. Merci de nous contacter par téléphone ou WhatsApp.",
    };
  }
}
