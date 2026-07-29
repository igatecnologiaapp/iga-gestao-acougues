export const receitaLucro = [
  { mes: "Jan", receita: 412, cmv: 268, lucro: 34 },
  { mes: "Fev", receita: 398, cmv: 262, lucro: 30 },
  { mes: "Mar", receita: 441, cmv: 281, lucro: 39 },
  { mes: "Abr", receita: 466, cmv: 296, lucro: 43 },
  { mes: "Mai", receita: 489, cmv: 302, lucro: 48 },
  { mes: "Jun", receita: 512, cmv: 311, lucro: 56 },
];

export const perdasMensais = [
  { mes: "Jan", perda: 9.4 },
  { mes: "Fev", perda: 8.8 },
  { mes: "Mar", perda: 8.1 },
  { mes: "Abr", perda: 7.2 },
  { mes: "Mai", perda: 6.6 },
  { mes: "Jun", perda: 5.9 },
];

export const perdasCategoria = [
  { nome: "Desossa / erros de corte", valor: 4820, pct: 34 },
  { nome: "Quebra e desidratação", valor: 3110, pct: 22 },
  { nome: "Vencimento e descarte", valor: 2540, pct: 18 },
  { nome: "Divergência de estoque", valor: 1980, pct: 14 },
  { nome: "Avarias e sobras", valor: 1690, pct: 12 },
];

export const desossaProdutos = [
  { nome: "Picanha", peso: 9.4, tone: "primary" as const },
  { nome: "Contrafilé", peso: 21.6, tone: "accent" as const },
  { nome: "Maminha", peso: 12.2, tone: "primary" as const },
  { nome: "Fraldinha", peso: 10.8, tone: "accent" as const },
  { nome: "Músculo / retalho", peso: 28.0, tone: "primary" as const },
];

export const etiquetasRanking = [
  { produto: "Hambúrguer Artesanal", categoria: "Produção interna", etiquetas: 4820, peso: "1.446 kg", pct: 100 },
  { produto: "Espetinho Bovino", categoria: "Produção interna", etiquetas: 3910, peso: "1.173 kg", pct: 81 },
  { produto: "Linguiça Artesanal", categoria: "Produção interna", etiquetas: 3240, peso: "1.620 kg", pct: 67 },
  { produto: "Carne Temperada", categoria: "Preparados", etiquetas: 2180, peso: "1.744 kg", pct: 45 },
  { produto: "Almôndega", categoria: "Produção interna", etiquetas: 1460, peso: "584 kg", pct: 30 },
];

export const comparativoFornecedores = [
  { fornecedor: "Fornecedor A", produto: "Picanha", preco: 48.9, variacao: "+3,1%", tone: "destructive" as const },
  { fornecedor: "Fornecedor B", produto: "Picanha", preco: 46.7, variacao: "-1,4%", tone: "success" as const },
  { fornecedor: "Fornecedor C", produto: "Picanha", preco: 49.4, variacao: "+4,0%", tone: "destructive" as const },
];

export const produtosMargem = [
  { produto: "Picanha", venda: 79.9, margem: 18.4, giro: "Alto" },
  { produto: "Costela", venda: 34.9, margem: 11.2, giro: "Médio" },
  { produto: "Hambúrguer Artesanal", venda: 44.9, margem: 38.6, giro: "Alto" },
  { produto: "Linguiça Artesanal", venda: 32.9, margem: 33.1, giro: "Alto" },
  { produto: "Músculo", venda: 27.9, margem: 8.7, giro: "Baixo" },
];

export const vendasHora = [
  { h: "08h", v: 12 },
  { h: "10h", v: 28 },
  { h: "12h", v: 44 },
  { h: "14h", v: 31 },
  { h: "16h", v: 39 },
  { h: "18h", v: 62 },
  { h: "20h", v: 41 },
];
