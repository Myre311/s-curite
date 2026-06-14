import { services } from "@/content/services";

/** Libellés de prestations proposés dans le formulaire de contact. */
export const SERVICE_LABELS: string[] = [
  ...services.map((s) => s.name),
  "Autre / Plusieurs prestations",
];

/** État renvoyé par la Server Action du formulaire de contact. */
export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Erreurs par champ (validation côté serveur). */
  fieldErrors?: Partial<
    Record<"name" | "email" | "phone" | "service" | "message", string>
  >;
};
