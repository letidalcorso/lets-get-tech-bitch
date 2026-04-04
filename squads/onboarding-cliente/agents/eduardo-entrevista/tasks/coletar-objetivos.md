---
task: "Coletar Objetivos e KPIs"
order: 3
input:
  - perfil_empresa: Output da task 1
  - identidade_marca: Output da task 2
output:
  - objetivos_kpis: Metas, métricas, stakeholders e processo de aprovação do cliente
---

## Task

Coletar objetivos de negócio, KPIs, stakeholders e processo de aprovação.

## Process

1. Transicionar naturalmente: "Agora que já conheci bem a [empresa] e como vocês se comunicam, quero entender o que vocês esperam desta parceria."
2. Perguntar sobre o objetivo principal nos próximos 90 dias (específico, não vago)
3. Aprofundar: "Como você vai saber que conseguimos? Que número, em quanto tempo?" — não aceitar resposta vaga
4. Perguntar sobre objetivos de médio prazo (6-12 meses)
5. Mapear stakeholders: quem aprova, quem é acionado em urgências, quem recebe relatórios
6. Entender o processo de aprovação de conteúdo (canal, prazo, responsável)
7. Fazer a "pergunta de ouro": "Como você acha que pode atrapalhar este processo?"
8. Fechar com resumo completo dos 3 etapas e pedir validação final

## Output Format

```markdown
## Objetivos e KPIs

**Objetivo Principal (90 dias):**
"[frase do cliente]"
→ KPI: [métrica] | Meta: [número] | Prazo: [data] | Fonte: [onde medir]

**Objetivos Secundários:**
1. [objetivo] → KPI: [métrica] | Meta: [número] | Prazo: [data]
2. [objetivo] → KPI: [métrica] | Meta: [número] | Prazo: [data]

**Tabela de KPIs:**
| Métrica | Baseline | Meta | Prazo | Fonte |

**Stakeholders:**
- [nome]: [cargo] — [papel no projeto]
- [nome]: [cargo] — [papel no projeto]

**Processo de Aprovação:**
- Canal: [WhatsApp / e-mail / plataforma]
- Prazo de feedback: [X horas/dias úteis]
- Responsável por aprovar: [nome]
- Urgências: [como acionar]

**Restrições e Limitações:**
- [restrição 1]
- [restrição 2]

**Pergunta de Ouro — Como pode atrapalhar o processo:**
"[resposta literal do cliente]"
```

## Output Example

```markdown
## Objetivos e KPIs

**Objetivo Principal (90 dias):**
"Quero que o Instagram passe a gerar pelo menos 2 pedidos de orçamento por mês."
→ KPI: Pedidos de orçamento via DM ou link do Instagram
   Meta: 2/mês | Prazo: junho/2026 | Fonte: acompanhamento manual das DMs

**Objetivos Secundários:**
1. Crescer seguidores
   → KPI: Seguidores | Meta: 3.000 | Prazo: jun/2026 | Fonte: IG Insights
2. Publicar com consistência (não parar mais)
   → KPI: Posts publicados/mês | Meta: ≥16 (entre feed+reels+stories) | Prazo: mensal
3. Ser lembrado como referência em arquitetura residencial premium em SP
   → KPI: Alcance semanal | Meta: 3.000 contas/semana | Fonte: IG Insights

**Tabela de KPIs:**
| Métrica | Baseline | Meta | Prazo | Fonte |
|---|---|---|---|---|
| Seguidores | 2.100 | 3.000 | Jun/2026 | IG Insights |
| Leads via IG | ~0/mês | 2/mês | Jun/2026 | Manual/DMs |
| Taxa de engajamento | ~1.2% | 3.5% | Jun/2026 | IG Insights |
| Alcance semanal | ~800 contas | 3.000 contas | Jun/2026 | IG Insights |

**Stakeholders:**
- Ana (sócia): aprova comunicação, tom de voz e posicionamento
- Marcos (sócio): aprova projetos mostrados, cuida de releases de obras específicas
- Amanda (assistente): ponto de contato operacional, recebe relatórios

**Processo de Aprovação:**
- Canal: WhatsApp (grupo com Ana e Marcos para urgências)
- Prazo de feedback: 48 horas úteis
- Calendário: aprovado via WhatsApp com Ana até dia 28 de cada mês
- Peças individuais: link de revisão enviado 5 dias antes da publicação

**Restrições e Limitações:**
- Nenhum projeto pode ser publicado sem autorização do cliente da obra
- Fotos são obrigatórias — não aceita só texto ou ilustração
- Recesso em julho: redução de 50% nas publicações

**Pergunta de Ouro — Como pode atrapalhar o processo:**
"Honestamente? Eu sei que posso ser lento para aprovar. Quando estou na correria
da obra, WhatsApp vai pra baixo na lista. Se vocês precisarem de resposta rápida,
talvez seja melhor ter uma data fixa por semana para eu olhar tudo de uma vez."
```

## Quality Criteria

- [ ] Objetivo principal com KPI, número, prazo e fonte definidos
- [ ] Pelo menos 2 objetivos secundários mapeados
- [ ] Todos os stakeholders identificados com nome e papel
- [ ] Processo de aprovação com canal e prazo documentados
- [ ] "Pergunta de ouro" registrada com resposta literal

## Veto Conditions

1. KPIs sem número específico (ex: "aumentar engajamento" sem meta)
2. Processo de aprovação sem identificar quem tem a palavra final
