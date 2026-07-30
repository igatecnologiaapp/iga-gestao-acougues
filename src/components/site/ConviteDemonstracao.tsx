import { Link } from "@tanstack/react-router";
import { ArrowRight, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, Section } from "@/components/site/primitives";

const areas = [
  "Dashboard",
  "Compras",
  "Estoque",
  "Perdas",
  "Desossa",
  "Produção",
  "Etiquetas",
  "CMV",
  "Financeiro",
  "Comercial",
  "Alertas",
];

export function ConviteDemonstracao() {
  return (
    <Section
      id="ambiente-demonstrativo"
      tone="surface"
      eyebrow="Experiência prática"
      title="Agora que você já sabe o porquê, veja como funciona na prática"
      description="Criamos um ambiente demonstrativo completo — a Casa de Carnes Modelo — para você explorar livremente, na ordem que quiser, sem cadastro e sem compromisso."
    >
      <Panel className="border-primary/30">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <MonitorPlay className="size-5 text-primary" />
              <h3 className="font-display text-xl font-bold">Casa de Carnes Modelo</h3>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Onze áreas navegáveis com dados fictícios, criadas para mostrar como a informação chega
              ao gestor no dia a dia.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-lg border border-border/70 bg-surface-2/50 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link to="/demonstracao">
              Explorar ambiente demonstrativo
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
      </Panel>
    </Section>
  );
}
