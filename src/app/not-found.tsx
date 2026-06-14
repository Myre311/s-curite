import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="text-xs uppercase tracking-[0.28em] text-or">
        Erreur 404
      </span>
      <h1 className="mt-5 text-4xl font-medium text-blanc sm:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-blanc/65">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-9">
        <Button href="/">Retour à l&apos;accueil</Button>
      </div>
    </Container>
  );
}
