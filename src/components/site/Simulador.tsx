import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { DemoTag, Kpi, Panel, Section, brl, brl2 } from "@/components/site/primitives";

function Control({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-display font-semibold">{display}</span>
      </div>
      <Slider
        className="mt-3"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(v[0])}
      />
    </div>
  );
}

export function Simulador() {
  const [custo, setCusto] = useState(32);
  const [preco, setPreco] = useState(49.9);
  const [perda, setPerda] = useState(8);
  const [volume, setVolume] = useState(1200);
  const [metaMargem, setMetaMargem] = useState(30);

  const r = useMemo(() => {
    const vendavel = volume * (1 - perda / 100);
    const receita = vendavel * preco;
    const cmv = volume * custo;
    const margem = receita > 0 ? ((receita - cmv) / receita) * 100 : 0;
    const resultado = receita - cmv;
    const precoIdeal = (custo / (1 - perda / 100)) / (1 - metaMargem / 100);
    return { receita, cmv, margem, resultado, precoIdeal, vendavel };
  }, [custo, preco, perda, volume, metaMargem]);

  const atingiuMeta = r.margem >= metaMargem;

  return (
    <Section
      id="simulador"
      tone="surface"
      eyebrow="Simulador gerencial"
      title="Mexa nas variáveis e veja o impacto no resultado"
      description="Altere custo de compra, preço de venda, percentual de perda, volume vendido e margem desejada para entender, em tempo real, como cada decisão afeta o resultado do mês."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <Panel className="space-y-6">
          <Control label="Custo de compra (R$/kg)" value={custo} display={brl2(custo)} min={15} max={70} step={0.5} onChange={setCusto} />
          <Control label="Preço de venda (R$/kg)" value={preco} display={brl2(preco)} min={20} max={120} step={0.5} onChange={setPreco} />
          <Control label="Percentual de perda" value={perda} display={`${perda}%`} min={0} max={25} step={0.5} onChange={setPerda} />
          <Control label="Volume comprado (kg/mês)" value={volume} display={`${volume.toLocaleString("pt-BR")} kg`} min={200} max={5000} step={50} onChange={setVolume} />
          <Control label="Margem desejada" value={metaMargem} display={`${metaMargem}%`} min={5} max={60} step={1} onChange={setMetaMargem} />
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Kpi label="Receita estimada" value={brl(r.receita)} hint={`${Math.round(r.vendavel)} kg vendáveis`} />
            <Kpi label="CMV" value={brl(r.cmv)} />
            <Kpi
              label="Margem resultante"
              value={`${r.margem.toFixed(1)}%`}
              trend={atingiuMeta ? "up" : "down"}
              delta={atingiuMeta ? "acima da meta" : "abaixo da meta"}
            />
            <Kpi label="Resultado bruto" value={brl(r.resultado)} />
          </div>

          <Panel className={atingiuMeta ? "border-success/45" : "border-warning/45"}>
            <p className="text-sm text-muted-foreground">Preço sugerido para atingir a margem desejada</p>
            <p className="mt-1 font-display text-3xl font-bold text-ember">{brl2(r.precoIdeal)}/kg</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Considerando custo de {brl2(custo)}/kg e {perda}% de perda no processo.
            </p>
          </Panel>

          <p className="rounded-lg border border-border/70 bg-surface-2/50 p-3 text-xs leading-relaxed text-muted-foreground">
            Simulação demonstrativa. Os valores apresentados são estimativas para fins de
            demonstração comercial e não constituem resultado contábil ou fiscal oficial.
          </p>
          <DemoTag />
        </div>
      </div>
    </Section>
  );
}
