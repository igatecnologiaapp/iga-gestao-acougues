import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ReadingProgress } from "@/components/site/ReadingProgress";
import { Hero } from "@/components/site/Hero";
import {
  EcossistemaERP,
  ModulosResumo,
  PerguntaCentral,
} from "@/components/site/SectionsOperacao";
import {
  CustoDeNaoMudar,
  DespesaOuInvestimento,
  ErpXGestaoInteligente,
  MercadoMudou,
  MudancaMentalidade,
  ReceitaNaoELucro,
} from "@/components/site/SectionsNarrativa";
import { AtencaoHoje } from "@/components/site/AtencaoHoje";
import { Desossa, Perdas } from "@/components/site/SectionsPerdasDesossa";
import { Etiquetas } from "@/components/site/SectionsProducaoEtiquetas";
import { CentralAlertas, Cmv, DashboardExecutivo, Margens } from "@/components/site/SectionsFinanceiro";
import { Simulador } from "@/components/site/Simulador";
import { AntesDepois, ChamadaFinal, JornadaDados, Persuasao } from "@/components/site/SectionsFechamento";
import { ConviteDemonstracao } from "@/components/site/ConviteDemonstracao";

const TITLE = "Gestão Inteligente para Açougues e Casas de Carnes | IGA";
const DESC =
  "Descubra onde a sua casa de carnes ganha e onde perde dinheiro: perdas, desossa, CMV, margens, etiquetas e leitura gerencial em uma plataforma de gestão inteligente.";

export const Route = createFileRoute("/")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "IGA Tecnologia",
          description:
            "Soluções em gestão, tecnologia e análise de dados para açougues e casas de carnes.",
          url: "https://iga-gestao-acougues.lovable.app",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <SiteNav />
      <main>
        {/* Reconhecimento */}
        <Hero />
        {/* Problema */}
        <PerguntaCentral />
        {/* Impacto financeiro */}
        <ReceitaNaoELucro />
        {/* Custo de permanecer igual */}
        <CustoDeNaoMudar />
        {/* Mudança do mercado */}
        <MercadoMudou />
        {/* Despesa x investimento */}
        <DespesaOuInvestimento />
        {/* ERP x Gestão Inteligente */}
        <ErpXGestaoInteligente />
        <EcossistemaERP />
        {/* Mudança de mentalidade */}
        <MudancaMentalidade />
        {/* Solução */}
        <ModulosResumo />
        <Perdas />
        <Desossa />
        <Cmv />
        <Margens />
        <Etiquetas />
        {/* Prova visual */}
        <AtencaoHoje tone="surface" />
        <DashboardExecutivo />
        <CentralAlertas />
        <Simulador />
        {/* Desejo */}
        <AntesDepois />
        <JornadaDados />
        <Persuasao />
        <ConviteDemonstracao />
        {/* Ação comercial */}
        <ChamadaFinal />
      </main>
      <SiteFooter />
    </div>
  );
}
