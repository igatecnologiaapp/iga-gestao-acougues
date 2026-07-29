import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, ShieldCheck, TrendingUp } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { DemoTag, Kpi } from "@/components/site/primitives";
import { receitaLucro } from "@/lib/demo-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] glow-top" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <ShieldCheck className="size-3.5" />
            Plataforma para açougues e casas de carnes
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Transforme os dados do seu açougue em{" "}
            <span className="text-ember">decisões mais lucrativas.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            ERP, Gestão de Desossa, Controle de Perdas, Produção, Etiquetas e Inteligência de Dados
            trabalhando juntos para mostrar onde sua empresa ganha, onde perde e como pode melhorar
            seus resultados.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href="#solucao">
                Conhecer a solução
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/demonstracao">
                <PlayCircle className="size-4" />
                Solicitar uma demonstração
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground sm:grid-cols-4">
            {["Compras & NF-e", "Estoque & Giro", "Desossa & Rendimento", "CMV & Margem"].map((t) => (
              <span key={t} className="border-l border-primary/50 pl-3">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="panel animate-fade relative p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Painel executivo
              </p>
              <p className="font-display text-lg font-semibold">Junho · Casa de Carnes Modelo</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-xs font-semibold text-success">
              <TrendingUp className="size-3.5" /> +9,4%
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Kpi label="Faturamento" value="R$ 512.400" delta="+4,7%" trend="up" />
            <Kpi label="CMV" value="60,7%" delta="+1,2 p.p." trend="down" />
            <Kpi label="Lucro bruto" value="R$ 201.300" delta="+3,9%" trend="up" />
            <Kpi label="Lucro líquido" value="R$ 56.180" delta="+6,1%" trend="up" />
            <Kpi label="Margem líquida" value="10,9%" delta="+0,4 p.p." trend="up" />
            <Kpi label="Perdas" value="R$ 14.140" delta="-18,2%" trend="up" />
          </div>

          <div className="mt-4 h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={receitaLucro} margin={{ top: 8, right: 4, left: 4, bottom: 0 }}>
                <defs>
                  <linearGradient id="heroReceita" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.65} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="heroLucro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-3)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="var(--color-chart-3)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="mes"
                  stroke="var(--color-muted-foreground)"
                  tickLine={false}
                  axisLine={false}
                  fontSize={11}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "var(--color-muted-foreground)" }}
                />
                <Area
                  type="monotone"
                  dataKey="receita"
                  name="Receita (R$ mil)"
                  stroke="var(--color-chart-1)"
                  fill="url(#heroReceita)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="lucro"
                  name="Lucro líq. (R$ mil)"
                  stroke="var(--color-chart-3)"
                  fill="url(#heroLucro)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              ["Ticket médio", "R$ 78,40"],
              ["Estoque", "R$ 188.600"],
              ["Giro", "4,3x / mês"],
            ].map(([l, v]) => (
              <div key={l} className="rounded-lg border border-border/60 bg-surface/60 p-3">
                <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{l}</p>
                <p className="mt-1 font-display text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>

          <DemoTag className="mt-4" />
        </div>
      </div>
    </section>
  );
}
