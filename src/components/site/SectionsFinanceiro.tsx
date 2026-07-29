import { ArrowDown, Bell, Calculator, TrendingDown, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar as RBar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AlertRow, Bar, DemoTag, Kpi, Panel, Section, brl, brl2 } from "@/components/site/primitives";
import { produtosMargem, receitaLucro, vendasHora } from "@/lib/demo-data";

export function Cmv() {
  return (
    <Section
      tone="surface"
      eyebrow="CMV"
      title="Custo da Mercadoria Vendida, explicado de forma simples"
      description="O CMV é o indicador que separa o faturamento do resultado. Acompanhá-lo mês a mês, por categoria e frente à receita, é o primeiro passo para proteger a margem."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Panel className="flex flex-col justify-center">
          <div className="rounded-xl border border-border/70 bg-surface-2/50 p-5 text-center">
            <p className="font-display text-lg font-semibold leading-relaxed">
              Estoque Inicial <span className="text-accent">+</span> Compras{" "}
              <span className="text-accent">−</span> Estoque Final
            </p>
            <ArrowDown className="mx-auto mt-3 size-5 text-primary" />
            <p className="mt-3 font-display text-3xl font-bold text-ember">= CMV</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
            {[
              ["Estoque inicial", brl(174000)],
              ["Compras", brl(325000)],
              ["Estoque final", brl(188600)],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{k}</p>
                <p className="mt-1 font-semibold">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 p-4">
            <p className="text-sm font-semibold text-destructive">
              Seu CMV aumentou 4,8% em relação ao mês anterior.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Impacto estimado sobre a margem bruta: −1,9 ponto percentual.
            </p>
          </div>
          <DemoTag className="mt-4" />
        </Panel>

        <Panel>
          <p className="text-sm font-semibold text-muted-foreground">CMV x Faturamento (R$ mil)</p>
          <div className="mt-4 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={receitaLucro} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="cmvGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="cmv" name="CMV" stroke="var(--color-chart-1)" fill="url(#cmvGrad)" strokeWidth={2} />
                <Line type="monotone" dataKey="receita" name="Faturamento" stroke="var(--color-chart-2)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <Kpi label="CMV mensal" value="60,7%" trend="down" delta="+1,2 p.p." />
            <Kpi label="Bovinos" value="63,4%" />
            <Kpi label="Produção interna" value="48,1%" trend="up" delta="melhor categoria" />
          </div>
        </Panel>
      </div>
    </Section>
  );
}

export function Margens() {
  return (
    <Section
      eyebrow="Formação e proteção de margens"
      title="Quando o custo sobe, o sistema avisa antes do prejuízo aparecer"
      description="A plataforma acompanha cada alteração de custo de compra e confronta com o preço praticado, sinalizando os produtos que passaram a operar abaixo das regras comerciais configuradas."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Panel>
          <h3 className="font-semibold">Alerta de custo · Picanha</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-border/70 bg-surface-2/50 p-3 text-sm">
              <span className="text-muted-foreground">Custo anterior</span>
              <span className="font-semibold">{brl2(32)}/kg</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm">
              <span className="text-muted-foreground">Novo custo</span>
              <span className="flex items-center gap-1.5 font-semibold text-destructive">
                <TrendingUp className="size-4" /> {brl2(36.5)}/kg
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/70 bg-surface-2/50 p-3 text-sm">
              <span className="text-muted-foreground">Preço atual</span>
              <span className="font-semibold">{brl2(49.9)}/kg</span>
            </div>
            <div className="rounded-lg border border-warning/40 bg-warning/10 p-3 text-sm">
              <p className="font-semibold text-warning">Margem comprometida</p>
              <p className="mt-1 text-muted-foreground">
                Margem caiu de 35,9% para 26,9%. Sugestão de revisão de preço conforme regra
                comercial configurada (meta 34%): <span className="font-semibold text-foreground">{brl2(55.3)}/kg</span>.
              </p>
            </div>
          </div>
          <DemoTag className="mt-4" />
        </Panel>

        <Panel>
          <h3 className="font-semibold">Margem por produto</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  <th className="pb-3">Produto</th>
                  <th className="pb-3">Venda/kg</th>
                  <th className="pb-3">Margem</th>
                  <th className="pb-3">Giro</th>
                </tr>
              </thead>
              <tbody>
                {produtosMargem.map((p) => (
                  <tr key={p.produto} className="border-t border-border/60">
                    <td className="py-3 font-medium">{p.produto}</td>
                    <td className="py-3 text-muted-foreground">{brl2(p.venda)}</td>
                    <td className="py-3">
                      <span
                        className={
                          p.margem >= 30
                            ? "font-semibold text-success"
                            : p.margem >= 15
                              ? "font-semibold text-warning"
                              : "font-semibold text-destructive"
                        }
                      >
                        {p.margem.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 text-muted-foreground">{p.giro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DemoTag className="mt-4" />
        </Panel>
      </div>
    </Section>
  );
}

export function Financeiro() {
  const etapas = [
    { label: "FATURAMENTO", valor: 512400, pct: 100, tone: "accent" as const },
    { label: "(−) CMV", valor: -311100, pct: 61, tone: "destructive" as const },
    { label: "= LUCRO BRUTO", valor: 201300, pct: 39, tone: "primary" as const },
    { label: "(−) DESPESAS OPERACIONAIS", valor: -118900, pct: 23, tone: "destructive" as const },
    { label: "(−) OUTROS CUSTOS E DESPESAS", valor: -26220, pct: 5, tone: "destructive" as const },
    { label: "= RESULTADO LÍQUIDO", valor: 56180, pct: 11, tone: "success" as const },
  ];

  return (
    <Section
      id="financeiro"
      tone="surface"
      eyebrow="Inteligência financeira"
      title="Saiba quanto realmente sobra depois de pagar tudo"
      description="Receita, despesas, custos, CMV, lucro bruto, despesas operacionais, resultado operacional, lucro líquido, margem líquida, contas a pagar e a receber, fluxo de caixa, capital de giro e ponto de equilíbrio."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <Panel>
          <h3 className="font-semibold">Do faturamento ao resultado líquido</h3>
          <div className="mt-5 space-y-4">
            {etapas.map((e) => (
              <div key={e.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{e.label}</span>
                  <span className="font-display font-semibold">{brl(e.valor)}</span>
                </div>
                <div className="mt-1.5">
                  <Bar value={e.pct} tone={e.tone === "accent" ? "accent" : e.tone} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-lg border border-primary/40 bg-primary/10 p-3 text-center font-display text-lg font-bold">
            Faturamento ≠ Lucro
          </p>
          <DemoTag className="mt-4" />
        </Panel>

        <div className="grid gap-4 sm:grid-cols-2">
          <Kpi label="Receita" value={brl(512400)} delta="+4,7%" trend="up" />
          <Kpi label="Despesas operacionais" value={brl(118900)} delta="+1,9%" trend="down" />
          <Kpi label="Resultado operacional" value={brl(82400)} delta="+5,2%" trend="up" />
          <Kpi label="Lucro líquido" value={brl(56180)} delta="+6,1%" trend="up" />
          <Kpi label="Margem líquida" value="10,9%" delta="+0,4 p.p." trend="up" />
          <Kpi label="Contas a pagar" value={brl(96300)} hint="próximos 30 dias" />
          <Kpi label="Contas a receber" value={brl(41200)} hint="próximos 30 dias" />
          <Kpi label="Capital de giro" value={brl(133500)} />
          <Kpi label="Ponto de equilíbrio" value={brl(384900)} hint="faturamento mínimo" />
          <Kpi label="Fluxo de caixa (30d)" value={brl(28700)} trend="up" delta="projetado" />
        </div>
      </div>
    </Section>
  );
}

export function Comercial() {
  const categorias = [
    { nome: "Bovinos", valor: 246 },
    { nome: "Suínos", valor: 98 },
    { nome: "Aves", valor: 71 },
    { nome: "Produção interna", valor: 68 },
    { nome: "Mercearia", valor: 29 },
  ];
  const cores = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)", "var(--color-chart-5)"];

  return (
    <Section
      eyebrow="Inteligência comercial"
      title="O que vende, o que dá lucro e o que só ocupa espaço"
      description="Produtos mais e menos vendidos, produtos mais lucrativos, margens, ticket médio, vendas por horário, por dia e por categoria, evolução mensal, curva ABC e sazonalidade."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Panel>
          <p className="text-sm font-semibold text-muted-foreground">Vendas por horário (R$ mil)</p>
          <div className="mt-4 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vendasHora} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="h" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: "var(--color-surface-2)" }}
                  contentStyle={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }}
                />
                <RBar dataKey="v" name="Vendas" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel>
          <p className="text-sm font-semibold text-muted-foreground">Participação por categoria</p>
          <div className="mt-2 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categorias} dataKey="valor" nameKey="nome" innerRadius={48} outerRadius={78} paddingAngle={3} stroke="none">
                  {categorias.map((c, i) => (
                    <Cell key={c.nome} fill={cores[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
            {categorias.map((c, i) => (
              <span key={c.nome} className="flex items-center gap-1.5">
                <span className="size-2 rounded-full" style={{ background: cores[i] }} />
                {c.nome}
              </span>
            ))}
          </div>
        </Panel>

        <Panel>
          <p className="text-sm font-semibold text-muted-foreground">Destaques do período</p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-lg border border-success/40 bg-success/10 p-3">
              <p className="flex items-center gap-1.5 font-semibold text-success">
                <TrendingUp className="size-4" /> Mais lucrativos
              </p>
              <p className="mt-1 text-muted-foreground">Hambúrguer artesanal, linguiça artesanal, espetinho bovino.</p>
            </div>
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3">
              <p className="flex items-center gap-1.5 font-semibold text-destructive">
                <TrendingDown className="size-4" /> Margem baixa
              </p>
              <p className="mt-1 text-muted-foreground">Músculo, costela e cortes com preço desatualizado.</p>
            </div>
            <Kpi label="Ticket médio" value={brl2(78.4)} delta="+3,2%" trend="up" />
            <Kpi label="Curva A" value="14 produtos" hint="72% do faturamento" />
          </div>
          <DemoTag className="mt-4" />
        </Panel>
      </div>
    </Section>
  );
}

export function DashboardExecutivo() {
  return (
    <Section
      tone="surface"
      eyebrow="Dashboard executivo"
      title="Toda a empresa em uma única tela"
      description="A visão que o dono precisa ter antes de tomar qualquer decisão: resultado, custo, perdas, estoque e caixa lado a lado."
    >
      <Panel>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <Kpi label="Faturamento" value={brl(512400)} delta="+4,7%" trend="up" />
          <Kpi label="Lucro líquido" value={brl(56180)} delta="+6,1%" trend="up" />
          <Kpi label="Margem líquida" value="10,9%" delta="+0,4 p.p." trend="up" />
          <Kpi label="CMV" value="60,7%" delta="+1,2 p.p." trend="down" />
          <Kpi label="Perdas" value={brl(14140)} delta="-18,2%" trend="up" />
          <Kpi label="Ticket médio" value={brl2(78.4)} delta="+3,2%" trend="up" />
          <Kpi label="Giro de estoque" value="4,3x" delta="+9%" trend="up" />
          <Kpi label="Valor do estoque" value={brl(188600)} />
          <Kpi label="Contas a receber" value={brl(41200)} />
          <Kpi label="Contas a pagar" value={brl(96300)} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Receita × Lucro (R$ mil)</p>
            <div className="mt-3 h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={receitaLucro} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="var(--color-border)" />
                  <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: "var(--color-surface-2)" }}
                    contentStyle={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }}
                  />
                  <RBar dataKey="receita" name="Receita" fill="var(--color-chart-5)" radius={[6, 6, 0, 0]} />
                  <RBar dataKey="lucro" name="Lucro líquido" fill="var(--color-chart-3)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Evolução da margem (%)</p>
            <div className="mt-3 h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={receitaLucro.map((r) => ({ mes: r.mes, margem: Number(((r.lucro / r.receita) * 100).toFixed(1)) }))}
                  margin={{ top: 8, right: 8, left: -24, bottom: 0 }}
                >
                  <CartesianGrid vertical={false} stroke="var(--color-border)" />
                  <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }}
                  />
                  <Line type="monotone" dataKey="margem" name="Margem líquida %" stroke="var(--color-chart-2)" strokeWidth={2.5} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <DemoTag className="mt-4" />
      </Panel>
    </Section>
  );
}

export function CentralAlertas() {
  return (
    <Section
      eyebrow="Central de alertas gerenciais"
      title="O sistema avisa. Você decide."
      description="Semáforos gerenciais monitoram margem, estoque, perdas, giro e oportunidades de compra — sem depender de alguém lembrar de olhar o relatório."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <AlertRow level="critical" title="🔴 Margem crítica" description="Picanha apresentou redução de margem." />
        <AlertRow level="warning" title="🟡 Estoque elevado" description="Costela possui estoque superior ao giro esperado." />
        <AlertRow level="critical" title="🔴 Perda acima do limite" description="Perdas de desossa ultrapassaram a meta definida." />
        <AlertRow level="ok" title="🟢 Oportunidade de compra" description="Fornecedor B apresenta preço 7,2% menor." />
        <AlertRow level="warning" title="🟡 Produto com baixo giro" description="Produto está há 21 dias sem movimentação relevante." />
        <AlertRow level="ok" title="🟢 Meta de aproveitamento" description="Desossa do lote 122 atingiu 93% de aproveitamento." />
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Bell className="size-3.5" /> Alertas configuráveis por indicador, meta e responsável. <DemoTag />
      </div>
    </Section>
  );
}

export function CalculadoraIcone() {
  return <Calculator className="size-4" />;
}
