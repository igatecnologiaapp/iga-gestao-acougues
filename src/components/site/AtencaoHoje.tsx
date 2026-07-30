import { AlertTriangle, ArrowDownRight, ArrowUpRight, Info, Lightbulb } from "lucide-react";
import { DemoTag, Panel, Section } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

type Leitura = {
  nivel: "atencao" | "alerta" | "oportunidade";
  titulo: string;
  numero: string;
  leitura: string;
  acao: string;
};

const leituras: Leitura[] = [
  {
    nivel: "alerta",
    titulo: "Margem da bovinocultura",
    numero: "22,4% → 19,8%",
    leitura: "A margem caiu porque o custo aumentou mais que o preço praticado.",
    acao: "Revisar o preço dos cortes dianteiros ou renegociar a próxima compra.",
  },
  {
    nivel: "atencao",
    titulo: "Capital em estoque",
    numero: "R$ 78.400 parados",
    leitura: "Existe capital concentrado em produtos de baixo giro.",
    acao: "Priorizar giro dos itens com mais de 21 dias em estoque.",
  },
  {
    nivel: "alerta",
    titulo: "Rendimento de desossa",
    numero: "68,2% (ref. 72%)",
    leitura: "A desossa apresentou rendimento abaixo da referência interna.",
    acao: "Conferir o processo da equipe do turno da tarde nesta semana.",
  },
  {
    nivel: "oportunidade",
    titulo: "Custo de fornecedor",
    numero: "-R$ 0,74 / kg",
    leitura: "Outro fornecedor apresentou custo inferior para o mesmo produto.",
    acao: "Comparar prazo, qualidade e frequência antes da próxima compra.",
  },
  {
    nivel: "atencao",
    titulo: "CMV do período",
    numero: "69,1% → 71,3%",
    leitura: "O CMV apresentou crescimento em relação ao período anterior.",
    acao: "Verificar se o aumento vem de compra, perda ou mix de vendas.",
  },
  {
    nivel: "oportunidade",
    titulo: "Horário de pico",
    numero: "17h – 19h",
    leitura: "A maior concentração de vendas ocorre fora do reforço atual de equipe.",
    acao: "Avaliar escala e reposição de vitrine nesse intervalo.",
  },
];

const estilo = {
  alerta: {
    ring: "border-destructive/40",
    chip: "bg-destructive/10 text-destructive",
    Icon: AlertTriangle,
    label: "Requer decisão",
  },
  atencao: {
    ring: "border-warning/40",
    chip: "bg-warning/10 text-warning",
    Icon: Info,
    label: "Acompanhar",
  },
  oportunidade: {
    ring: "border-success/40",
    chip: "bg-success/10 text-success",
    Icon: Lightbulb,
    label: "Oportunidade",
  },
} as const;

export function AtencaoHoje({ tone = "default" }: { tone?: "default" | "surface" }) {
  return (
    <Section
      id="atencao-hoje"
      tone={tone}
      eyebrow="Leitura gerencial"
      title="O que merece sua atenção hoje?"
      description="Receber números é uma coisa. Receber informação pronta para decidir é outra. Abaixo, o mesmo dado da operação traduzido em leitura e próximo passo."
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(["alerta", "atencao", "oportunidade"] as const).map((k) => (
            <span
              key={k}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
                estilo[k].chip,
              )}
            >
              {estilo[k].label}
            </span>
          ))}
        </div>
        <DemoTag />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {leituras.map((l) => {
          const s = estilo[l.nivel];
          return (
            <div
              key={l.titulo}
              className={cn(
                "flex flex-col rounded-2xl border bg-surface-2/50 p-5 transition-all duration-300 hover:-translate-y-0.5",
                s.ring,
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold">{l.titulo}</p>
                <s.Icon className={cn("size-4 shrink-0", s.chip.split(" ")[1])} />
              </div>
              <p className="mt-3 font-display text-lg font-bold tabular-nums">{l.numero}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.leitura}</p>
              <div className="mt-4 flex items-start gap-2 border-t border-border/60 pt-3 text-sm">
                {l.nivel === "oportunidade" ? (
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-success" />
                ) : (
                  <ArrowDownRight className="mt-0.5 size-4 shrink-0 text-accent" />
                )}
                <span className="text-muted-foreground">{l.acao}</span>
              </div>
            </div>
          );
        })}
      </div>

      <Panel className="mt-6 border-primary/30">
        <p className="text-base leading-relaxed sm:text-lg">
          A diferença entre um relatório e uma decisão está na interpretação. É exatamente esse o
          papel de uma Plataforma de Gestão Inteligente.
        </p>
      </Panel>
    </Section>
  );
}
