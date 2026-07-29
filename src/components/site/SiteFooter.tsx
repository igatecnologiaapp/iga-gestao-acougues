import { Link } from "@tanstack/react-router";
import { Flame, Globe, Mail, MessageCircle, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-ember">
              <Flame className="size-5 text-primary-foreground" />
            </span>
            <span>
              <span className="block font-display text-base font-bold">IGA TECNOLOGIA</span>
              <span className="block text-xs text-muted-foreground">
                Soluções em Gestão, Tecnologia e Análise de Dados
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Plataforma inteligente de gestão para açougues e casas de carnes: ERP, desossa, perdas,
            produção, etiquetas e análise de dados em um único ecossistema.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Navegação</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="/#solucao" className="transition-colors hover:text-foreground">Solução</a>
            <a href="/#perdas" className="transition-colors hover:text-foreground">Controle de perdas</a>
            <a href="/#desossa" className="transition-colors hover:text-foreground">Gestão de desossa</a>
            <a href="/#etiquetas" className="transition-colors hover:text-foreground">Etiquetas e nutricional</a>
            <a href="/#financeiro" className="transition-colors hover:text-foreground">Inteligência financeira</a>
            <Link to="/demonstracao" className="transition-colors hover:text-foreground">Demonstração</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Contato</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MessageCircle className="size-4" /> WhatsApp — a definir</span>
            <span className="flex items-center gap-2"><Phone className="size-4" /> Telefone — a definir</span>
            <span className="flex items-center gap-2"><Mail className="size-4" /> E-mail — a definir</span>
            <span className="flex items-center gap-2"><Globe className="size-4" /> Site e redes sociais — a definir</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground/80">
            Espaços reservados para os dados institucionais oficiais.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
        Site demonstrativo. Todos os dashboards, gráficos, alertas, relatórios, percentuais, valores,
        empresas, produtos, fornecedores e resultados apresentados são fictícios e destinados
        exclusivamente à demonstração comercial. Não representam resultados reais obtidos por
        clientes da IGA Tecnologia.
      </div>
    </footer>
  );
}
