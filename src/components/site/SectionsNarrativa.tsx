import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Boxes,
  Compass,
  Eye,
  Gauge,
  LineChart,
  ScanSearch,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Tags,
  TrendingDown,
  Users,
} from "lucide-react";
import { Bar, DemoTag, Panel, Section } from "@/components/site/primitives";

/* -------------------------------------------------------------------------- */
/* Impacto financeiro — Receita não é lucro                                    */
/* -------------------------------------------------------------------------- */

export function ReceitaNaoELucro() {
  const etapas = [
    { label: "Receita de vendas", pct: 100, tone: "primary" as const, nota: "O número que todo mundo olha" },
    { label: "Custo da mercadoria (CMV)", pct: 71, tone: "destructive" as const, nota: "Nem sempre medido com precisão" },
    { label: "Perdas, quebras e desossa", pct: 9, tone: "accent" as const, nota: "Quase sempre invisível" },
    { label: "Despesas operacionais", pct: 14, tone: "accent" as const, nota: "Diluídas no dia a dia" },
    { label: "Resultado que realmente sobra", pct: 6, tone: "success" as const, nota: "O número que decide o futuro" },
  ];

  return (
    <Section
      id="receita-lucro"
      tone="surface"
      eyebrow="O que os números escondem"
      title="Vender bem não é a mesma coisa que ganhar dinheiro"
      description="Muitas casas de carnes crescem em faturamento e mesmo assim sentem o caixa apertado. O motivo raramente está na venda: está no caminho entre a receita e o resultado."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Panel>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold">Do faturamento ao resultado</h3>
            <DemoTag />
          </div>
          <div className="mt-6 space-y-5">
            {etapas.map((e) => (
              <div key={e.label}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-medium">{e.label}</span>
                  <span className="font-display text-sm font-semibold tabular-nums">{e.pct}%</span>
                </div>
                <div className="mt-2">
                  <Bar value={e.pct} tone={e.tone} />
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">{e.nota}</p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel className="border-primary/30">
            <p className="text-lg font-medium leading-relaxed">
              “Se o resultado depende de tudo o que acontece entre a compra e a venda, quanto da sua
              operação você consegue enxergar hoje?”
            </p>
          </Panel>
          <Panel>
            <h4 className="font-display text-base font-bold">Onde o resultado costuma se perder</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                { icon: ShoppingCart, t: "Compras feitas sem comparação de custo e rendimento" },
                { icon: Boxes, t: "Capital parado em produtos de giro lento" },
                { icon: TrendingDown, t: "Preço de venda desatualizado em relação ao custo atual" },
                { icon: ScanSearch, t: "Rendimento de desossa medido por estimativa" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Custo de não mudar                                                          */
/* -------------------------------------------------------------------------- */

export function CustoDeNaoMudar() {
  const visiveis = [
    "Mercadoria perdida por validade, quebra ou manuseio",
    "Compra mal negociada ou fora do momento certo",
    "Capital imobilizado em estoque parado",
    "Retrabalho e conferências manuais",
  ];
  const silenciosos = [
    "Margem caindo aos poucos, sem ninguém perceber",
    "Preços desatualizados diante do custo atual",
    "Desossa sem medição real de rendimento",
    "CMV desconhecido ou calculado por aproximação",
    "Resultado da operação conhecido apenas no fim do mês",
    "Oportunidades de melhoria que nunca aparecem",
  ];

  return (
    <Section
      id="custo-nao-mudar"
      eyebrow="Uma decisão que também tem preço"
      title="Não investir também é uma decisão"
      description="Adiar a organização da gestão não mantém a empresa no mesmo lugar. Ela continua operando — só que sem enxergar o que está acontecendo com o próprio dinheiro."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Panel>
          <div className="flex items-center gap-2.5">
            <Eye className="size-5 text-primary" />
            <h3 className="font-display text-lg font-bold">Custos visíveis</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            São percebidos, discutidos e, muitas vezes, aceitos como parte do negócio.
          </p>
          <ul className="mt-4 space-y-2.5">
            {visiveis.map((v) => (
              <li key={v} className="flex gap-2.5 text-sm text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {v}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="border-accent/40">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="size-5 text-accent" />
            <h3 className="font-display text-lg font-bold">Custos silenciosos</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Não aparecem em nenhuma conta específica. Aparecem no resultado — depois.
          </p>
          <ul className="mt-4 space-y-2.5">
            {silenciosos.map((v) => (
              <li key={v} className="flex gap-2.5 text-sm text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {v}
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="mt-6 border-primary/30">
        <p className="text-lg font-medium leading-relaxed sm:text-xl">
          O ponto não é assustar. É refletir: se algo está reduzindo o seu resultado todos os meses,
          <span className="text-primary"> quanto tempo faz sentido continuar sem saber o que é?</span>
        </p>
      </Panel>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Mercado mudou                                                               */
/* -------------------------------------------------------------------------- */

export function MercadoMudou() {
  const consumidor = [
    { icon: ScanSearch, t: "Pesquisa antes de comprar" },
    { icon: BarChart3, t: "Compara preço e qualidade" },
    { icon: Store, t: "Tem mais alternativas por perto" },
    { icon: Smartphone, t: "Transita entre o físico e o digital" },
    { icon: Compass, t: "Busca conveniência" },
    { icon: Users, t: "Valoriza a experiência de compra" },
  ];
  const empresas = [
    "Concorrência mais intensa",
    "Pressão constante sobre as margens",
    "Mudanças acontecendo em ritmo mais rápido",
    "Volume de dados muito maior do que antes",
    "Necessidade real de eficiência operacional",
    "Vários canais de relacionamento e de venda",
  ];

  return (
    <Section
      id="mercado"
      tone="surface"
      eyebrow="Contexto de mercado"
      title="Seu cliente mudou. O mercado mudou. Sua gestão também precisa evoluir."
      description="Não se trata de adotar tecnologia por moda. Trata-se de reconhecer que o ambiente comercial em que a sua empresa opera hoje é diferente do de alguns anos atrás."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel>
          <h3 className="font-display text-lg font-bold">O consumidor de hoje</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {consumidor.map(({ icon: Icon, t }) => (
              <div
                key={t}
                className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-surface-2/50 p-3 text-sm transition-colors hover:border-primary/50"
              >
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{t}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <h3 className="font-display text-lg font-bold">O que as empresas enfrentam</h3>
          <ul className="mt-5 space-y-3">
            {empresas.map((e) => (
              <li key={e} className="flex gap-2.5 text-sm text-muted-foreground">
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-accent" />
                {e}
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="mt-6 border-primary/30 text-center">
        <p className="font-display text-xl font-bold sm:text-2xl">
          Enquanto o consumidor evolui, a gestão também precisa evoluir.
        </p>
      </Panel>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Despesa ou investimento                                                     */
/* -------------------------------------------------------------------------- */

export function DespesaOuInvestimento() {
  const beneficios = [
    { icon: ShieldCheck, t: "Redução e prevenção de perdas", d: "Identificar onde, quando e por que a mercadoria deixa de virar receita." },
    { icon: Gauge, t: "Maior controle da operação", d: "Compras, estoque, produção e vendas acompanhados no mesmo lugar." },
    { icon: LineChart, t: "Proteção das margens", d: "Perceber variações de custo antes que elas cheguem ao resultado." },
    { icon: Boxes, t: "Melhor produtividade", d: "Menos conferência manual, menos retrabalho, mais tempo para decidir." },
    { icon: AlertTriangle, t: "Redução de riscos", d: "Validade, lote, rastreabilidade e conformidade acompanhados de perto." },
    { icon: BarChart3, t: "Decisões melhores", d: "Informação organizada no lugar da percepção e da memória." },
    { icon: ScanSearch, t: "Identificação de oportunidades", d: "Produtos, fornecedores e horários que merecem mais atenção." },
    { icon: Eye, t: "Conhecimento do próprio resultado", d: "Saber, com clareza, o que a operação realmente entrega." },
  ];

  return (
    <Section
      id="investimento"
      eyebrow="Mudança de percepção"
      title="Tecnologia: despesa ou investimento?"
      description="Toda despesa consome recursos. Um investimento empresarial existe para produzir benefícios ao longo do tempo. A diferença está no que ele passa a permitir dentro da operação."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <Panel className="border-primary/30">
            <p className="text-lg font-medium leading-relaxed">
              “A pergunta não é apenas quanto custa implantar uma Plataforma de Gestão Inteligente.
              <span className="text-primary">
                {" "}
                Quanto pode custar continuar administrando sem saber onde a empresa está perdendo
                dinheiro?”
              </span>
            </p>
          </Panel>
          <Panel>
            <h4 className="font-display text-base font-bold">Como avaliar essa decisão</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Cada empresa tem uma realidade própria: porte, mix de produtos, volume de desossa,
              estrutura de equipe e nível atual de controle. Por isso, não existe promessa de retorno
              financeiro garantido. O que existe é a possibilidade de enxergar, medir e agir sobre
              aquilo que hoje passa despercebido.
            </p>
          </Panel>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {beneficios.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-xl border border-border/70 bg-surface-2/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <Icon className="size-5 text-primary" />
              <p className="mt-3 text-sm font-semibold">{t}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* ERP x Gestão Inteligente                                                    */
/* -------------------------------------------------------------------------- */

export function ErpXGestaoInteligente() {
  const linhas = [
    { tema: "Foco", erp: "Registrar o que aconteceu", gi: "Interpretar o que aconteceu e apontar o que fazer" },
    { tema: "Perdas", erp: "Lançamento da baixa", gi: "Padrão de perdas por setor, produto e período" },
    { tema: "Desossa", erp: "Entrada e saída de peças", gi: "Rendimento real comparado à referência" },
    { tema: "Preço", erp: "Tabela cadastrada", gi: "Alerta quando o custo se aproxima do preço praticado" },
    { tema: "Resultado", erp: "Relatório no fechamento", gi: "Acompanhamento contínuo com leitura gerencial" },
    { tema: "Decisão", erp: "Depende da interpretação de quem lê", gi: "Chega pronta para a conversa do dia" },
  ];

  return (
    <Section
      id="erp-gestao"
      tone="surface"
      eyebrow="Duas coisas diferentes"
      title="Ter um sistema não é o mesmo que ter gestão inteligente"
      description="O ERP organiza a operação e é indispensável. A gestão inteligente começa quando esses dados passam a responder perguntas de negócio."
    >
      <Panel className="overflow-hidden p-0">
        <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-[0.8fr_1fr_1.2fr] sm:divide-x sm:divide-y-0">
          <div className="hidden bg-surface-2/60 p-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:block">
            Tema
          </div>
          <div className="hidden bg-surface-2/60 p-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:block">
            Sistema tradicional
          </div>
          <div className="hidden bg-surface-2/60 p-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary sm:block">
            Gestão inteligente
          </div>
        </div>
        <div className="divide-y divide-border/60">
          {linhas.map((l) => (
            <div key={l.tema} className="grid gap-2 p-4 sm:grid-cols-[0.8fr_1fr_1.2fr] sm:items-center sm:gap-4">
              <p className="font-display text-sm font-bold">{l.tema}</p>
              <p className="text-sm text-muted-foreground">
                <span className="mr-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70 sm:hidden">
                  Sistema
                </span>
                {l.erp}
              </p>
              <p className="text-sm text-foreground">
                <span className="mr-2 text-[10px] uppercase tracking-[0.14em] text-primary sm:hidden">
                  Gestão inteligente
                </span>
                {l.gi}
              </p>
            </div>
          ))}
        </div>
      </Panel>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Mudança de mentalidade                                                      */
/* -------------------------------------------------------------------------- */

export function MudancaMentalidade() {
  const de = [
    "“Acho que vendemos bem esse mês.”",
    "“A perda é normal nesse setor.”",
    "“O preço está bom porque sempre foi assim.”",
    "“Depois eu vejo o resultado com o contador.”",
  ];
  const para = [
    "“Vendemos mais, e a margem acompanhou?”",
    "“Qual produto concentra a maior parte da perda?”",
    "“O preço atual ainda cobre o custo de hoje?”",
    "“O que os números estão me dizendo esta semana?”",
  ];

  return (
    <Section
      id="mentalidade"
      eyebrow="Mudança de mentalidade"
      title="A gestão muda quando as perguntas mudam"
      description="Antes da ferramenta, vem a forma de olhar o negócio. A plataforma existe para sustentar esse novo olhar com informação confiável."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Panel>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Perguntas de antes
          </p>
          <ul className="mt-4 space-y-3">
            {de.map((t) => (
              <li key={t} className="rounded-xl border border-border/70 bg-surface-2/40 p-3 text-sm text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel className="border-primary/30">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            Perguntas de uma gestão orientada por dados
          </p>
          <ul className="mt-4 space-y-3">
            {para.map((t) => (
              <li key={t} className="rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Tags className="size-5 text-accent" />
        <p className="text-sm text-muted-foreground">
          O objetivo não é usar mais tecnologia. É conhecer melhor a própria empresa.
        </p>
      </div>
    </Section>
  );
}
