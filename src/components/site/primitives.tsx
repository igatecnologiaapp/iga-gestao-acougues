import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-border/60 px-5 py-20 sm:px-8 lg:py-28",
        tone === "surface" && "bg-surface/40",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || description) && (
          <header className="max-w-3xl">
            {eyebrow && (
              <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

export function Panel({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn("panel p-5 sm:p-6", className)}>
      {children}
    </div>
  );
}

export function DemoTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/70",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-accent/70" />
      Dados demonstrativos
    </span>
  );
}

export function Kpi({
  label,
  value,
  delta,
  trend = "neutral",
  hint,
}: {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "neutral";
  hint?: string;
}) {
  const trendClass =
    trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground";
  return (
    <div className="rounded-xl border border-border/70 bg-surface-2/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">{value}</p>
      {(delta || hint) && (
        <p className={cn("mt-1 text-xs font-medium", trendClass)}>
          {delta}
          {hint && <span className="ml-1 text-muted-foreground">{hint}</span>}
        </p>
      )}
    </div>
  );
}

export function AlertRow({
  level,
  title,
  description,
}: {
  level: "critical" | "warning" | "ok";
  title: string;
  description: string;
}) {
  const dot =
    level === "critical" ? "bg-destructive" : level === "warning" ? "bg-warning" : "bg-success";
  const ring =
    level === "critical"
      ? "border-destructive/40"
      : level === "warning"
        ? "border-warning/40"
        : "border-success/40";
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border bg-surface-2/50 p-4 transition-colors hover:bg-surface-2",
        ring,
      )}
    >
      <span className={cn("mt-1.5 size-2.5 shrink-0 rounded-full animate-pulse-soft", dot)} />
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function FeaturePill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg border border-border/70 bg-surface-2/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">
      {children}
    </span>
  );
}

export function Bar({ value, tone = "primary" }: { value: number; tone?: "primary" | "accent" | "success" | "destructive" }) {
  const bg =
    tone === "accent"
      ? "bg-accent"
      : tone === "success"
        ? "bg-success"
        : tone === "destructive"
          ? "bg-destructive"
          : "bg-primary";
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
      <div className={cn("h-full rounded-full transition-all duration-700", bg)} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const brl2 = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
