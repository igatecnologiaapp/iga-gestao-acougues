import {
  AlertTriangle,
  Boxes,
  ClipboardList,
  FileDown,
  LineChart,
  PackageSearch,
  Receipt,
  Scale,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import { Bar as RBar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AlertRow, Bar, DemoTag, FeaturePill, Kpi, Panel, Section, brl2 } from "@/components/site/primitives";
import { comparativoFornecedores } from "@/lib/demo-data";

export function PerguntaCentral() {
  const causas = [
    "Compras inadequadas",
    "Aumento do custo das mercadorias",
    "Preços desatualizados",
    "Perdas de estoque",
    "Quebras",
    "Desossa ineficiente",
    "Desperdícios",
    "Produtos parados",
    "Baixo giro",
    "Custos operacionais",
    "Margens inadequadas",
  ];

  return (
    <Section
      tone="surface"
      eyebrow="A pergunta central"
      title={<>Você sabe exatamente quanto sua empresa lucrou no mês passado?</>}
      description="Faturamento não significa lucro. Uma empresa pode vender muito e ainda perder rentabilidade — e normalmente isso acontece em pontos que ninguém está medindo."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Panel>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Onde a rentabilidade escapa
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {causas.map((c) => (
              <FeaturePill key={c}>{c}</FeaturePill>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            A plataforma conecta compras, estoque, produção, desossa, etiquetas, vendas e financeiro
            para chegar progressivamente ao resultado econômico real da empresa.
          </p>
        </Panel>

        <Panel className="flex flex-col justify-center gap-4">
          <div className="rounded-xl border border-border/70 bg-surface-2/50 p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">O que se enxerga hoje</p>
            <p className="mt-2 font-display text-3xl font-bold">R$ 512.400</p>
            <p className="text-sm text-muted-foreground">Faturamento do mês</p>
          </div>
          <div className="rounded-xl border border-primary/45 bg-primary/10 p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-primary">O que realmente sobra</p>
            <p className="mt-2 font-display text-3xl font-bold">R$ 56.180</p>
            <p className="text-sm text-muted-foreground">Resultado líquido estimado · 10,9%</p>
          </div>
          <DemoTag />
        </Panel>
      </div>
    </Section>
  );
}

export function EcossistemaERP() {
  const modulos = [
    { icon: PackageSearch, t: "Cadastros", d: "Produtos, clientes, fornecedores, usuários e permissões." },
    { icon: Truck, t: "Compras", d: "Pedidos, entradas, NF-e de compra e histórico de custos." },
    { icon: Boxes, t: "Estoque", d: "Movimentações, lotes, custo médio e inventário." },
    { icon: Receipt, t: "Fiscal e vendas", d: "NFC-e, NF-e, pedidos, caixa e frente de loja." },
    { icon: Wallet, t: "Financeiro", d: "Contas a pagar, a receber, caixa e conciliação." },
    { icon: ClipboardList, t: "Relatórios", d: "Operacionais e gerenciais, exportáveis por período." },
  ];

  return (
    <Section
      id="solucao"
      eyebrow="ERP especializado"
      title="Um ERP feito para a rotina de quem trabalha com carnes"
      description="O ERP é a fonte estruturada dos dados operacionais que alimentam todo o ambiente de análise. Nada de planilhas paralelas: cada operação vira dado, e cada dado vira indicador."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modulos.map(({ icon: Icon, t, d }) => (
          <Panel key={t} className="group transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
            <span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </Panel>
        ))}
      </div>
    </Section>
  );
}

export function ComprasInteligentes() {
  return (
    <Section
      tone="surface"
      eyebrow="Compras"
      title="Gestão inteligente de compras a partir do XML da NF-e"
      description="A importação do XML identifica fornecedor, produtos, quantidades e custo unitário. A partir daí, a plataforma acompanha histórico de preços, variação de custo, frequência de compra, prazo médio e necessidade de reposição."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Panel>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <FileDown className="size-4 text-accent" /> Importação de NF-e (XML)
          </div>
          <div className="mt-4 space-y-2 font-mono text-xs">
            {[
              "NFe 35240... · Frigorífico Modelo A · 18 itens",
              "NFe 41240... · Distribuidora Modelo B · 26 itens",
              "NFe 52240... · Frigorífico Modelo C · 11 itens",
            ].map((l, i) => (
              <div
                key={l}
                className="flex items-center justify-between rounded-lg border border-border/70 bg-surface-2/60 px-3 py-2.5"
              >
                <span className="truncate text-muted-foreground">{l}</span>
                <span className={i === 2 ? "text-warning" : "text-success"}>
                  {i === 2 ? "processando" : "importada"}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Kpi label="Custo médio kg" value="R$ 31,80" delta="+2,4%" trend="down" />
            <Kpi label="Prazo médio" value="27 dias" delta="estável" />
          </div>
          <DemoTag className="mt-4" />
        </Panel>

        <Panel>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Comparação entre fornecedores
          </p>
          <div className="mt-4 space-y-3">
            {comparativoFornecedores.map((f) => (
              <div
                key={f.fornecedor}
                className="flex items-center justify-between rounded-xl border border-border/70 bg-surface-2/50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold">{f.fornecedor}</p>
                  <p className="text-xs text-muted-foreground">{f.produto} · variação {f.variacao}</p>
                </div>
                <p
                  className={
                    f.tone === "success"
                      ? "font-display text-lg font-semibold text-success"
                      : "font-display text-lg font-semibold"
                  }
                >
                  {brl2(f.preco)}/kg
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-success/40 bg-success/10 p-4">
            <p className="text-sm font-semibold text-success">Economia potencial: R$ 2,20/kg</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Em 1.200 kg/mês, representa cerca de R$ 2.640 de diferença de custo.
            </p>
          </div>
        </Panel>
      </div>
    </Section>
  );
}

export function EstoqueInteligente() {
  const curva = [
    { faixa: "Curva A", valor: 118 },
    { faixa: "Curva B", valor: 47 },
    { faixa: "Curva C", valor: 23 },
  ];

  return (
    <Section
      eyebrow="Estoque"
      title="Estoque medido por giro, cobertura e margem — não por sensação"
      description="Estoque atual, mínimo, máximo, valor financeiro, giro, cobertura, ruptura, excesso, validade, curva ABC, custo médio e margem por produto em um só lugar."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Kpi label="Valor do estoque" value="R$ 188.600" />
            <Kpi label="Giro" value="4,3x" delta="+9%" trend="up" />
            <Kpi label="Cobertura" value="7,1 dias" />
            <Kpi label="Ruptura" value="1,8%" delta="-0,6 p.p." trend="up" />
          </div>
          <div className="mt-6 h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={curva} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="faixa" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: "var(--color-surface-2)" }}
                  contentStyle={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <RBar dataKey="valor" name="Valor em estoque (R$ mil)" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <DemoTag className="mt-3" />
        </Panel>

        <div className="space-y-3">
          <AlertRow level="warning" title="Produto com baixo giro" description="Músculo bovino: 21 dias sem movimentação relevante." />
          <AlertRow level="warning" title="Estoque acima do recomendado" description="Costela com cobertura de 19 dias frente ao giro esperado." />
          <AlertRow level="critical" title="Margem abaixo da meta" description="Picanha operando a 18,4% contra meta de 24%." />
          <AlertRow level="ok" title="Reposição sugerida" description="Linguiça artesanal atingirá o estoque mínimo em 3 dias." />
        </div>
      </div>
    </Section>
  );
}

export function ModulosResumo() {
  const itens = [
    { icon: Scale, t: "Desossa", d: "Rendimento por peça, subprodutos e custo resultante." },
    { icon: AlertTriangle, t: "Perdas", d: "Mapa completo por categoria, produto e setor." },
    { icon: LineChart, t: "Análise de dados", d: "Indicadores, tendências e alertas gerenciais." },
    { icon: Users, t: "Etiquetas", d: "Nutricional, alergênicos, lote, validade e produção." },
  ];
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
      {itens.map(({ icon: Icon, t, d }) => (
        <div key={t} className="rounded-xl border border-border/70 bg-surface/50 p-4">
          <Icon className="size-5 text-accent" />
          <p className="mt-3 font-semibold">{t}</p>
          <p className="mt-1 text-sm text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}

export function BarrasDemo({ items }: { items: { nome: string; pct: number }[] }) {
  return (
    <div className="space-y-3">
      {items.map((i) => (
        <div key={i.nome}>
          <div className="flex items-center justify-between text-sm">
            <span>{i.nome}</span>
            <span className="text-muted-foreground">{i.pct}%</span>
          </div>
          <div className="mt-1.5">
            <Bar value={i.pct} />
          </div>
        </div>
      ))}
    </div>
  );
}
