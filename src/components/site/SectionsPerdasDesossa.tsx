import { ArrowRight, Beef, PackageCheck, Scissors, TriangleAlert } from "lucide-react";
import { Bar as RBar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Bar, DemoTag, Kpi, Panel, Section, brl } from "@/components/site/primitives";
import { desossaProdutos, perdasCategoria, perdasMensais } from "@/lib/demo-data";

export function Perdas() {
  const fluxo = ["Compra", "Recebimento", "Estoque", "Produção", "Desossa", "Exposição", "Venda"];
  const grupos = [
    {
      t: "Perdas tangíveis",
      itens: ["Quebras", "Vencimentos", "Descarte", "Degelo", "Desidratação", "Erros de corte", "Sobras", "Avarias"],
    },
    {
      t: "Perdas financeiras",
      itens: ["Compra acima do preço ideal", "Estoque excessivo", "Produtos sem giro", "Margens inadequadas", "Preços desatualizados"],
    },
    {
      t: "Perdas operacionais",
      itens: ["Divergências de estoque", "Erros de lançamento", "Falhas de processo", "Falta de padronização"],
    },
  ];

  return (
    <Section
      id="perdas"
      tone="surface"
      eyebrow="Controle e prevenção de perdas"
      title="Onde, como, quando e por que sua empresa está perdendo dinheiro"
      description="A perda não acontece em um único ponto: ela se espalha por toda a cadeia. O mapa de perdas mostra o impacto financeiro de cada etapa e permite atacar primeiro o que mais custa caro."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {fluxo.map((f, i) => (
          <div key={f} className="flex items-center gap-2">
            <span className="rounded-lg border border-border/70 bg-surface-2/60 px-3 py-2 text-sm">{f}</span>
            {i < fluxo.length - 1 && <ArrowRight className="size-4 text-primary" />}
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {grupos.map((g) => (
          <Panel key={g.t}>
            <div className="flex items-center gap-2">
              <TriangleAlert className="size-4 text-warning" />
              <h3 className="font-semibold">{g.t}</h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {g.itens.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>

      <Panel className="mt-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Dashboard</p>
            <h3 className="font-display text-2xl font-bold">Mapa de perdas</h3>
          </div>
          <Kpi label="Perda total no mês" value={brl(14140)} delta="-18,2% vs. mês anterior" trend="up" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Perda por categoria</p>
            <div className="mt-4 space-y-3">
              {perdasCategoria.map((c) => (
                <div key={c.nome}>
                  <div className="flex items-center justify-between text-sm">
                    <span>{c.nome}</span>
                    <span className="text-muted-foreground">{brl(c.valor)}</span>
                  </div>
                  <div className="mt-1.5">
                    <Bar value={c.pct * 2.6} tone="destructive" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground">Evolução mensal (% sobre faturamento)</p>
            <div className="mt-4 h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={perdasMensais} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
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
                  <Line type="monotone" dataKey="perda" name="Perda %" stroke="var(--color-chart-1)" strokeWidth={2.5} dot={{ r: 3 }} />
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

export function Desossa() {
  const comparativo = [
    { op: "Lote 118", aproveitamento: 88 },
    { op: "Lote 119", aproveitamento: 91 },
    { op: "Lote 120", aproveitamento: 84 },
    { op: "Lote 121", aproveitamento: 90 },
    { op: "Lote 122", aproveitamento: 93 },
  ];

  return (
    <Section
      id="desossa"
      eyebrow="Gestão de desossa"
      title="Cada peça desossada vira um resultado financeiro medido"
      description="Da compra da peça ao rendimento final: peso comprado, peso recebido, produtos resultantes, subprodutos, descarte, aproveitamento, custo resultante e margem esperada."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {["Compra da peça", "Recebimento", "Pesagem", "Desossa", "Produtos", "Subprodutos", "Perdas", "Rendimento", "Resultado"].map(
          (f, i, arr) => (
            <div key={f} className="flex items-center gap-2">
              <span className="rounded-lg border border-accent/35 bg-accent/10 px-3 py-2 text-sm text-accent">{f}</span>
              {i < arr.length - 1 && <ArrowRight className="size-4 text-accent/70" />}
            </div>
          ),
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Panel>
          <div className="flex items-center gap-2">
            <Scissors className="size-4 text-primary" />
            <h3 className="font-semibold">Operação de desossa · Lote 122</h3>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {[
              ["Fornecedor", "Frigorífico Modelo A"],
              ["Data", "12/06"],
              ["Peso comprado", "100,0 kg"],
              ["Valor comprado", "R$ 3.180,00"],
              ["Custo/kg", "R$ 31,80"],
              ["Peso recebido", "99,4 kg"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-border/70 bg-surface-2/50 p-3">
                <dt className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm font-semibold text-muted-foreground">Produtos resultantes</p>
          <div className="mt-3 space-y-3">
            {desossaProdutos.map((p) => (
              <div key={p.nome}>
                <div className="flex items-center justify-between text-sm">
                  <span>{p.nome}</span>
                  <span className="text-muted-foreground">{p.peso.toFixed(1)} kg</span>
                </div>
                <div className="mt-1.5">
                  <Bar value={p.peso * 3} tone={p.tone} />
                </div>
              </div>
            ))}
          </div>
          <DemoTag className="mt-4" />
        </Panel>

        <div className="space-y-6">
          <Panel>
            <div className="flex items-center gap-2">
              <PackageCheck className="size-4 text-success" />
              <h3 className="font-semibold">Aproveitamento da desossa</h3>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Kpi label="Peso inicial" value="100 kg" />
              <Kpi label="Produtos aproveitados" value="82 kg" />
              <Kpi label="Subprodutos" value="8 kg" />
              <Kpi label="Perdas" value="10 kg" trend="down" delta="acima da meta (7%)" />
            </div>
            <div className="mt-5 rounded-xl border border-success/40 bg-success/10 p-4">
              <p className="text-sm text-muted-foreground">Aproveitamento total</p>
              <p className="font-display text-4xl font-bold text-success">90%</p>
              <div className="mt-3">
                <Bar value={90} tone="success" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Kpi label="Custo resultante/kg" value="R$ 38,78" />
              <Kpi label="Receita potencial" value="R$ 4.910" delta="margem esperada 26,4%" trend="up" />
            </div>
          </Panel>

          <Panel>
            <div className="flex items-center gap-2">
              <Beef className="size-4 text-accent" />
              <h3 className="font-semibold">Comparativo entre operações</h3>
            </div>
            <div className="mt-4 h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparativo} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="var(--color-border)" />
                  <XAxis dataKey="op" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis domain={[70, 100]} stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: "var(--color-surface-2)" }}
                    contentStyle={{
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <RBar dataKey="aproveitamento" name="Aproveitamento %" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <DemoTag className="mt-2" />
          </Panel>
        </div>
      </div>
    </Section>
  );
}
