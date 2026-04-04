```yaml
task: "Analisar Concorrentes"
order: 2
input:
  - lista_concorrentes: Output da task anterior com URLs verificadas
output:
  - analise_competitiva: Análise completa com tabela de posicionamento e recomendações
```

## Process

1. Para cada concorrente, usar WebSearch e web_fetch para coletar: seguidores (estimado), frequência de post, formatos usados, tom de voz identificado, engajamento (likes/comentários em posts recentes), proposta de valor comunicada no bio
2. Construir tabela comparativa de posicionamento com atributos relevantes para o cliente
3. Identificar: o que cada concorrente faz bem, onde cada um é vulnerável
4. Construir mapa de posicionamento 2x2 (eixos relevantes para o cliente — ex: premium vs. acessível / técnico vs. emocional)
5. Identificar o "espaço vazio" — posicionamento que nenhum concorrente ocupa
6. Traduzir cada insight em recomendação acionável para o briefing do cliente

## Output Format

```markdown
# Análise Competitiva — [Nome do Cliente]

## Visão Geral

| Concorrente | Canal | Seguidores | Posts/semana | Tom | Proposta de Valor |
|---|---|---|---|---|---|

## Análise Individual

### [Nome do Concorrente]
**Canal principal:** [canal] | **Seguidores:** [número]
**Frequência:** [posts/semana]
**Tom de voz:** [descrição]
**Proposta de valor comunicada:** [frase do bio/site]
**Formatos preferidos:** [carrossel, reel, etc.]
**Ponto forte:** [o que faz bem]
**Ponto fraco:** [onde é vulnerável]
**Engajamento:** [estimativa baseada em posts visíveis]

## Mapa de Posicionamento

[Tabela 2x2 ou matriz com eixos relevantes]

## Gaps e Oportunidades

1. [Gap identificado] — Oportunidade para [cliente]: [recomendação]
2. [Gap identificado] — Oportunidade: [recomendação]

## Espaço Vazio no Mercado
[Posicionamento que nenhum concorrente ocupa e que o cliente poderia ocupar]

## Implicações para o Briefing
- [Recomendação 1]
- [Recomendação 2]
- [Recomendação 3]
```

## Output Example

```markdown
# Análise Competitiva — Studio Vivaldi

## Visão Geral

| Concorrente | Canal | Seguidores | Posts/semana | Tom | Proposta de Valor |
|---|---|---|---|---|---|
| Studio Araripe | Instagram | ~8.200 | 5x | Técnico/premium | "Projetos que transcendem" |
| Paulo Mendes Arq | Instagram | ~3.400 | 3x | Educacional | "Arquitetura acessível" |
| Triptyque | Instagram | ~45K | 4x | Aspiracional | "Architecture and more" |

## Análise Individual

### Studio Araripe Arquitetura
**Canal principal:** Instagram | **Seguidores:** ~8.200
**Frequência:** ~5 posts/semana (feed + stories)
**Tom de voz:** Técnico e premium — foco em materiais, volumetria e acabamentos
**Proposta de valor comunicada:** "Projetos que transcendem o espaço"
**Formatos preferidos:** Feed estático com fotos profissionais, poucos reels
**Ponto forte:** Qualidade visual impecável, portfólio consistente
**Ponto fraco:** Zero humanização — não mostra processo, equipe ou histórias de clientes
**Engajamento:** ~1.8% (médio para o nicho, sem picos virais)

### Paulo Mendes Arquitetura
**Canal principal:** Instagram | **Seguidores:** ~3.400
**Frequência:** ~3 posts/semana
**Tom de voz:** Educacional — explica conceitos de arquitetura de forma didática
**Proposta de valor:** "Arquitetura que você entende e pode realizar"
**Formatos preferidos:** Carrosseis educativos, antes/depois, Q&A em stories
**Ponto forte:** Alta taxa de salvamento (conteúdo útil e educativo)
**Ponto fraco:** Portfólio fraco — pouco uso de projetos reais como case
**Engajamento:** ~4.2% (acima da média pelo formato educativo)

## Mapa de Posicionamento

| | **Emocional / Storytelling** | **Técnico / Racional** |
|---|---|---|
| **Premium / Alto Padrão** | 🟢 OPORTUNIDADE (vazio) | Studio Araripe |
| **Acessível / Didático** | — | Paulo Mendes |

## Gaps e Oportunidades

1. **Gap: Nenhum player une premium + storytelling emocional**
   Oportunidade para Studio Vivaldi: posicionar-se como o único escritório de alto
   padrão em SP que conta histórias — dos clientes, dos projetos, do processo.

2. **Gap: Processo de projeto nunca mostrado**
   Araripe e concorrentes mostram apenas resultado final. Nenhum mostra como o
   projeto acontece — reuniões, decisões, dúvidas, bastidores.
   Oportunidade: Reels e stories de bastidores do processo constroem confiança e
   reduzem a principal objeção do cliente (medo de não ser entendido).

## Espaço Vazio no Mercado
Premium + Emocional + Processo visível — nenhum concorrente direto ocupa esta posição.
O Studio Vivaldi tem condições únicas de ocupá-la: já tem o diferencial declarado
("entregamos o lar que o cliente imaginava") e histórias reais para contar.

## Implicações para o Briefing
- Posicionamento recomendado: "O arquiteto que mostra como pensa, não apenas o que entrega"
- Formato prioritário: Reels de bastidores + carrosseis de storytelling de projetos
- Diferencial a comunicar: O processo colaborativo — mostra as conversas, as dúvidas, as decisões
```

## Quality Criteria

- [ ] Todos os concorrentes da lista têm análise individual completa
- [ ] Tabela comparativa incluída
- [ ] Mapa de posicionamento com espaço vazio identificado
- [ ] Recomendações acionáveis para o briefing (mínimo 3)

## Veto Conditions

1. Análise sem dados reais (apenas suposições sobre os concorrentes)
2. Sem identificação de espaço vazio / oportunidade de diferenciação
