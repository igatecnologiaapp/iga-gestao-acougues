import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import {
  ComprasInteligentes,
  EcossistemaERP,
  EstoqueInteligente,
  ModulosResumo,
  PerguntaCentral,
} from "@/components/site/SectionsOperacao";
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
import { Simulador } from "@/components/site/Simulador";
import { AntesDepois, ChamadaFinal, JornadaDados, Persuasao } from "@/components/site/SectionsFechamento";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IGA Tecnologia | Gestão Inteligente para Açougues" },
      {
        name: "description",
        content:
          "Plataforma de ERP, desossa, controle de perdas, produção, etiquetas e análise de dados para açougues e casas de carnes. Veja onde sua empresa ganha e onde perde dinheiro.",
      },
      { property: "og:title", content: "IGA Tecnologia | Gestão Inteligente para Açougues" },
      {
        property: "og:description",
        content:
          "ERP, desossa, perdas, produção, etiquetas e inteligência de dados em uma única plataforma para casas de carnes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <ModulosResumo />
        <PerguntaCentral />
        <EcossistemaERP />
        <ComprasInteligentes />
        <EstoqueInteligente />
        <Perdas />
        <Desossa />
        <Producao />
        <Etiquetas />
        <InteligenciaEtiquetas />
        <Cmv />
        <Margens />
        <Financeiro />
        <Comercial />
        <DashboardExecutivo />
        <CentralAlertas />
        <Simulador />
        <AntesDepois />
        <JornadaDados />
        <Persuasao />
        <ChamadaFinal />
      </main>
      <SiteFooter />
    </div>
  );
}
