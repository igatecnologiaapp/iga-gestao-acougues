import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Panel, Section } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AtencaoHoje } from "@/components/site/AtencaoHoje";
import { ComprasInteligentes, EstoqueInteligente } from "@/components/site/SectionsOperacao";
import { Desossa, Perdas } from "@/components/site/SectionsPerdasDesossa";
import { Etiquetas, InteligenciaEtiquetas, Producao } from "@/components/site/SectionsProducaoEtiquetas";
import {
  CentralAlertas,
  Cmv,
  Comercial,
  DashboardExecutivo,
  Financeiro,
  Margens,
} from "@/components/site/SectionsFinanceiro";
import { cn } from "@/lib/utils";

const TITLE = "Casa de Carnes Modelo | Ambiente demonstrativo IGA";
const DESC =
  "Explore livremente um ambiente demonstrativo de gestão para casas de carnes: dashboard, compras, estoque, perdas, desossa, produção, etiquetas, CMV, financeiro, comercial e alertas.";

export const Route = createFileRoute("/demonstracao")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "IGA Tecnologia" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Demonstracao,
});

const areas = [
  { id: "dashboard", label: "Dashboard", render: () => <><DashboardExecutivo /><AtencaoHoje tone="surface" /></> },
  { id: "compras", label: "Compras", render: () => <ComprasInteligentes /> },
  { id: "estoque", label: "Estoque", render: () => <EstoqueInteligente /> },
  { id: "perdas", label: "Perdas", render: () => <Perdas /> },
  { id: "desossa", label: "Desossa", render: () => <Desossa /> },
  { id: "producao", label: "Produção", render: () => <Producao /> },
  { id: "etiquetas", label: "Etiquetas", render: () => <><Etiquetas /><InteligenciaEtiquetas /></> },
  { id: "cmv", label: "CMV", render: () => <Cmv /> },
  { id: "financeiro", label: "Financeiro", render: () => <><Financeiro /><Margens /></> },
  { id: "comercial", label: "Comercial", render: () => <Comercial /> },
  { id: "alertas", label: "Alertas", render: () => <CentralAlertas /> },
] as const;

function Demonstracao() {
  const [ativo, setAtivo] = useState<string>("dashboard");
  const [enviado, setEnviado] = useState(false);
  const area = areas.find((a) => a.id === ativo) ?? areas[0];

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-16">
        <div className="border-b border-accent/30 bg-accent/10 px-5 py-2.5 text-center sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Ambiente demonstrativo — dados fictícios
          </p>
        </div>

        <section className="px-5 pb-8 pt-12 sm:px-8 lg:pt-16">
          <div className="mx-auto w-full max-w-6xl">
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Casa de Carnes Modelo
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.8rem]">
              Como essa gestão funciona na prática
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Este é um ambiente demonstrativo de uma casa de carnes fictícia. Navegue livremente
              pelas áreas, na ordem que preferir — não há sequência obrigatória nem cadastro para
              explorar.
            </p>
          </div>
        </section>

        <div className="sticky top-16 z-40 border-y border-border/60 bg-background/90 backdrop-blur-xl">
          <div
            className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:px-8"
            role="tablist"
            aria-label="Áreas do ambiente demonstrativo"
          >
            {areas.map((a) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                aria-selected={ativo === a.id}
                onClick={() => setAtivo(a.id)}
                className={cn(
                  "shrink-0 rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200",
                  ativo === a.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border/70 text-muted-foreground hover:border-primary/50 hover:text-foreground",
                )}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div key={area.id} className="animate-fade-in">
          {area.render()}
        </div>

        <Section
          id="especialista"
          tone="surface"
          eyebrow="Conversa comercial"
          title="Quer ver esses números com a realidade da sua empresa?"
          description="Depois de explorar o ambiente demonstrativo, o próximo passo é simples: conversar sobre a sua operação."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <Panel>
              {enviado ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle2 className="size-10 text-success" />
                  <h3 className="mt-4 font-display text-xl font-bold">Solicitação registrada</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Este formulário é demonstrativo e ainda não realiza envio real. Basta conectar o
                    canal oficial de contato para começar a receber as solicitações.
                  </p>
                  <Button variant="outline" className="mt-6" onClick={() => setEnviado(false)}>
                    Preencher novamente
                  </Button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEnviado(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input id="nome" required placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input id="empresa" required placeholder="Nome do açougue" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">WhatsApp / Telefone</Label>
                      <Input id="telefone" required placeholder="(00) 00000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" required placeholder="voce@empresa.com.br" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">O que você mais precisa controlar hoje?</Label>
                    <Textarea id="mensagem" rows={4} placeholder="Perdas, margem, desossa, estoque, etiquetas..." />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Solicitar demonstração
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Formulário demonstrativo: nenhum dado é enviado ou armazenado nesta versão.
                  </p>
                </form>
              )}
            </Panel>

            <Panel className="space-y-5">
              <div>
                <h3 className="font-display text-lg font-bold">O que você vai ver na apresentação</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Dashboard executivo com resultado, CMV, margem e perdas",
                    "Mapa de perdas por categoria, produto e setor",
                    "Gestão de desossa com rendimento e custo resultante",
                    "Custo real dos produtos de produção interna",
                    "Etiquetas com nutricional, alergênicos, lote e validade",
                    "Simulador de preço, custo, perda e margem",
                  ].map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border/70 bg-surface-2/50 p-4 text-sm">
                <p className="font-semibold">IGA TECNOLOGIA</p>
                <p className="mt-1 text-muted-foreground">
                  Soluções em Gestão, Tecnologia e Análise de Dados.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Canais oficiais (WhatsApp, telefone, e-mail e redes sociais) serão incluídos assim
                  que forem definidos.
                </p>
              </div>
            </Panel>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
