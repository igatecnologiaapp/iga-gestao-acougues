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

export const Route = createFileRoute("/demonstracao")({
  head: () => ({
    meta: [
      { title: "Solicitar demonstração | IGA Tecnologia" },
      {
        name: "description",
        content:
          "Agende uma demonstração da plataforma de gestão inteligente para açougues e casas de carnes: ERP, desossa, perdas, etiquetas e análise de dados.",
      },
      { property: "og:title", content: "Solicitar demonstração | IGA Tecnologia" },
      {
        property: "og:description",
        content:
          "Fale com um especialista e veja na prática como transformar os dados do seu açougue em decisões mais lucrativas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Demonstracao,
});

function Demonstracao() {
  const [enviado, setEnviado] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-16">
        <Section
          eyebrow="Demonstração"
          title="Veja a plataforma funcionando com o cenário do seu açougue"
          description="Preencha os dados abaixo e nossa equipe entrará em contato para agendar uma apresentação, presencial ou remota."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <Panel id="especialista">
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
