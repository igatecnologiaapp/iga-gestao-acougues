import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoTag, Panel, Section } from "@/components/site/primitives";

export function AntesDepois() {
  const antes = [
    "Decisões por percepção",
    "Falta de indicadores",
    "Perdas desconhecidas",
    "Estoque desorganizado",
    "Margens desconhecidas",
    "Compras sem análise",
    "Dificuldade para conhecer o lucro real",
  ];
  const depois = [
    "Indicadores",
    "Alertas",
    "Previsões",
    "Controle de perdas",
    "Gestão de margens",
    "Compras analisadas",
    "Estoque inteligente",
    "Custos conhecidos",
    "Resultados acompanhados",
    "Decisões baseadas em dados",
  ];

  return (
    <Section
      eyebrow="Antes e depois"
      title="A diferença entre administrar por sensação e administrar por dados"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Panel className="border-destructive/30">
          <h3 className="font-display text-xl font-bold text-muted-foreground">Gestão sem inteligência</h3>
          <ul className="mt-4 space-y-2.5">
            {antes.map((a) => (
              <li key={a} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                {a}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel className="border-success/35">
          <h3 className="font-display text-xl font-bold">Gestão com inteligência</h3>
          <ul className="mt-4 space-y-2.5">
            {depois.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                {d}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </Section>
  );
}

export function JornadaDados() {
  const etapas = [
    "NF-e de compra",
    "Compras",
    "Estoque",
    "Produção / Desossa",
    "Etiquetas",
    "Vendas",
    "Financeiro",
    "Análise de dados",
    "Indicadores",
    "Decisões",
    "Resultados",
  ];

  return (
    <Section
      tone="surface"
      eyebrow="Jornada dos dados"
      title="Cada operação da sua empresa produz um dado. Cada dado pode virar decisão."
      description="A plataforma acompanha o dado desde a entrada da nota fiscal até o indicador que aparece no painel do dono."
    >
      <div className="relative">
        <div className="absolute left-[15px] top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-success sm:block" />
        <ol className="space-y-3">
          {etapas.map((e, i) => (
            <li key={e} className="flex items-center gap-4">
              <span
                className={
                  i === etapas.length - 1
                    ? "relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-ember font-mono text-xs font-bold text-primary-foreground"
                    : "relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-border bg-surface-2 font-mono text-xs text-muted-foreground"
                }
              >
                {i + 1}
              </span>
              <span
                className={
                  i === etapas.length - 1
                    ? "flex-1 rounded-xl border border-primary/45 bg-primary/10 px-4 py-3 font-display text-lg font-bold"
                    : "flex-1 rounded-xl border border-border/70 bg-surface-2/40 px-4 py-3 text-sm transition-colors hover:border-accent/50"
                }
              >
                {e}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Persuasao() {
  return (
    <Section
      eyebrow="Mensagem"
      title="Sua empresa produz dados todos os dias. A pergunta é: você está usando esses dados para ganhar mais dinheiro?"
      description="Compras, vendas, estoque, produção, etiquetas, desossa e financeiro produzem informações valiosas diariamente. A plataforma transforma essas informações em indicadores capazes de auxiliar o empresário a identificar problemas, oportunidades e tendências."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["↓ 18%", "Perdas"],
          ["↑ 12%", "Margem"],
          ["↑ 9%", "Giro de estoque"],
          ["↓ 14%", "Produtos parados"],
        ].map(([v, l]) => (
          <Panel key={l} className="text-center transition-transform duration-300 hover:-translate-y-1">
            <p className="font-display text-4xl font-bold text-ember">{v}</p>
            <p className="mt-2 text-sm text-muted-foreground">{l}</p>
          </Panel>
        ))}
      </div>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
        Indicadores fictícios utilizados exclusivamente para demonstrar visualmente como os
        resultados podem ser apresentados na plataforma. Não representam promessa comercial nem
        resultado garantido.
      </p>
      <div className="mt-2 flex justify-center">
        <DemoTag />
      </div>
    </Section>
  );
}

export function ChamadaFinal() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 px-5 py-24 sm:px-8">
      <div className="pointer-events-none absolute inset-0 glow-top" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Sparkles className="mx-auto size-6 text-accent" />
        <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
          Pare de administrar sua empresa <span className="text-ember">no escuro.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Descubra onde sua empresa ganha dinheiro, onde perde dinheiro e quais decisões podem
          melhorar seus resultados.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="group">
            <Link to="/demonstracao">
              Solicitar demonstração
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/demonstracao" hash="especialista">
              <MessageCircle className="size-4" />
              Falar com um especialista
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
