import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#custo-nao-mudar", label: "Custo de não mudar" },
  { href: "/#investimento", label: "Investimento" },
  { href: "/#mentalidade", label: "Mentalidade" },
  { href: "/#solucao", label: "Solução" },
  { href: "/#atencao-hoje", label: "Leitura gerencial" },
  { href: "/#simulador", label: "Simulador" },
];


export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-ember shadow-[var(--shadow-ember)]">
            <Flame className="size-5 text-primary-foreground" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-tight">IGA TECNOLOGIA</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Gestão inteligente
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link to="/demonstracao">Solicitar demonstração</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border/70"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background/95 px-5 pb-5 pt-2 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-3">
              <Link to="/demonstracao" onClick={() => setOpen(false)}>
                Solicitar demonstração
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
