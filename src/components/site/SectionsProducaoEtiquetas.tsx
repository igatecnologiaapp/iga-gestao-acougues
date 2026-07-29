import { Barcode, ChefHat, Leaf, Printer } from "lucide-react";
import { Bar, DemoTag, Kpi, Panel, Section, brl2 } from "@/components/site/primitives";
import { etiquetasRanking } from "@/lib/demo-data";

export function Producao() {
  const composicao = [
    ["Matéria-prima (acém + peito)", 12.4],
    ["Ingredientes e temperos", 1.35],
    ["Embalagem", 0.82],
    ["Demais custos configurados", 0.94],
  ] as const;
  const custo = composicao.reduce((s, [, v]) => s + v, 0);
  const venda = 24.9;

  return (
    <Section
      eyebrow="Produção e custo real"
      title="Quanto custa, de verdade, cada produto que você fabrica"
      description="Hambúrguer artesanal, linguiça, almôndega, carne temperada, espetinhos e kits: cadastre matérias-primas, ingredientes, embalagens e insumos e veja o custo de produção formado item a item."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Panel>
          <div className="flex items-center gap-2">
            <ChefHat className="size-4 text-accent" />
            <h3 className="font-semibold">Ficha técnica · Hambúrguer artesanal 180g (pacote 4un)</h3>
          </div>
          <div className="mt-4 space-y-3">
            {composicao.map(([nome, valor]) => (
              <div key={nome}>
                <div className="flex items-center justify-between text-sm">
                  <span>{nome}</span>
                  <span className="text-muted-foreground">{brl2(valor)}</span>
                </div>
                <div className="mt-1.5">
                  <Bar value={(valor / custo) * 100} tone="accent" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-border/70 bg-surface-2/50 p-4 text-sm">
            <p className="text-muted-foreground">
              Matéria-prima + Ingredientes + Embalagem + demais custos configurados
            </p>
            <p className="mt-2 font-display text-2xl font-bold">= {brl2(custo)} de custo de produção</p>
          </div>
          <DemoTag className="mt-4" />
        </Panel>

        <Panel className="flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-3">
            <Kpi label="Custo unitário" value={brl2(custo)} />
            <Kpi label="Preço de venda" value={brl2(venda)} />
            <Kpi label="Margem" value={`${(((venda - custo) / venda) * 100).toFixed(1)}%`} trend="up" delta="acima da meta" />
            <Kpi label="Lucro estimado / un." value={brl2(venda - custo)} />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Ao alterar o custo de uma matéria-prima, a plataforma recalcula o custo de produção de
            todos os produtos que a utilizam e sinaliza os itens que passaram a operar abaixo da
            margem desejada.
          </p>
        </Panel>
      </div>
    </Section>
  );
}

export function Etiquetas() {
  return (
    <Section
      id="etiquetas"
      tone="surface"
      eyebrow="Etiquetas, nutricional e alergênicos"
      title="Etiquetas corretas na bancada, informação estruturada no sistema"
      description="Produtos, matérias-primas, ingredientes, receitas, informação nutricional, alergênicos, peso líquido, validade, lote, data de fabricação, conservação, layouts e impressão."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <Panel>
          <div className="flex items-center gap-2">
            <Leaf className="size-4 text-success" />
            <h3 className="font-semibold">Cadastro nutricional</h3>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            {[
              ["Valor energético", "248 kcal"],
              ["Carboidratos", "1,2 g"],
              ["Açúcares totais", "0,4 g"],
              ["Proteínas", "18,6 g"],
              ["Gorduras totais", "19,1 g"],
              ["Gorduras saturadas", "8,2 g"],
              ["Fibras", "0,3 g"],
              ["Sódio", "412 mg"],
              ["Porção", "100 g"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-border/70 bg-surface-2/50 p-3">
                <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{k}</p>
                <p className="mt-1 font-semibold">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Alergênicos:</span> contém glúten. Pode
            conter leite e soja.
          </p>
          <DemoTag className="mt-4" />
        </Panel>

        <Panel className="flex flex-col items-center justify-center bg-surface">
          <div className="w-full max-w-sm rounded-xl border-2 border-dashed border-border bg-background p-5 shadow-[var(--shadow-elev)] transition-transform duration-300 hover:-rotate-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg font-bold leading-tight">HAMBÚRGUER ARTESANAL</p>
                <p className="text-xs text-muted-foreground">Produção própria · Casa de Carnes Modelo</p>
              </div>
              <Printer className="size-5 text-muted-foreground" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              {[
                ["Peso líquido", "0,720 kg"],
                ["Preço/kg", "R$ 34,58"],
                ["Fabricação", "12/06/2026"],
                ["Validade", "19/06/2026"],
                ["Lote", "L-2026-0612-04"],
                ["Conservação", "0 °C a 4 °C"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-muted-foreground">{k}</p>
                  <p className="font-semibold">{v}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 border-t border-border pt-3">
              <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Tabela nutricional · porção 100 g
              </p>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                Valor energético 248 kcal (12% VD) · Carboidratos 1,2 g · Proteínas 18,6 g · Gorduras
                totais 19,1 g · Sódio 412 mg (17% VD)
              </p>
              <p className="mt-2 text-[11px] font-semibold">ALÉRGICOS: CONTÉM GLÚTEN.</p>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div className="flex h-10 items-end gap-[2px]">
                {Array.from({ length: 34 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-[2px] bg-foreground"
                    style={{ height: `${(i % 5) * 14 + 30}%` }}
                  />
                ))}
              </div>
              <p className="font-display text-2xl font-bold">R$ 24,90</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Etiqueta gerada automaticamente a partir da ficha técnica cadastrada.
          </p>
          <DemoTag className="mt-2" />
        </Panel>
      </div>
    </Section>
  );
}

export function InteligenciaEtiquetas() {
  return (
    <Section
      eyebrow="Diferencial"
      title="Inteligência a partir do histórico de etiquetas"
      description="Cada etiqueta impressa é um registro de produção e movimentação. Esse histórico vira um indicador precioso de demanda, ritmo de produção e comportamento dos produtos."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Panel>
          <div className="flex items-center gap-2">
            <Barcode className="size-4 text-accent" />
            <h3 className="font-semibold">Relatório · Produtos mais etiquetados (últimos 30 dias)</h3>
          </div>
          <div className="mt-5 space-y-4">
            {etiquetasRanking.map((e, i) => (
              <div key={e.produto}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2.5">
                    <span className="grid size-6 place-items-center rounded-md bg-primary/15 font-mono text-xs text-primary">
                      {i + 1}
                    </span>
                    <span>
                      <span className="font-semibold">{e.produto}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{e.categoria}</span>
                    </span>
                  </span>
                  <span className="shrink-0 text-right text-xs text-muted-foreground">
                    {e.etiquetas.toLocaleString("pt-BR")} etiquetas · {e.peso}
                  </span>
                </div>
                <div className="mt-2">
                  <Bar value={e.pct} tone="accent" />
                </div>
              </div>
            ))}
          </div>
          <DemoTag className="mt-5" />
        </Panel>

        <Panel className="flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-3">
            <Kpi label="Etiquetas no período" value="15.610" delta="+7,8%" trend="up" />
            <Kpi label="Peso etiquetado" value="6.567 kg" />
            <Kpi label="Categorias ativas" value="9" />
            <Kpi label="Pico de produção" value="Sextas · 18h" />
          </div>
          <div className="mt-5 rounded-xl border border-warning/40 bg-warning/10 p-4 text-sm leading-relaxed">
            <p className="font-semibold text-warning">Leitura correta do indicador</p>
            <p className="mt-1 text-muted-foreground">
              Etiquetas impressas não equivalem necessariamente a vendas concluídas. Elas funcionam
              como indicador de produção, movimentação e demanda, e devem ser conciliadas com as
              vendas efetivamente registradas no ERP para análises comerciais precisas.
            </p>
          </div>
        </Panel>
      </div>
    </Section>
  );
}
