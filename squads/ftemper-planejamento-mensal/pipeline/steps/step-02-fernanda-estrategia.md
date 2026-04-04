---
agent: fernanda-estrategia
execution: inline
format: instagram-feed
outputFile: squads/ftemper-planejamento-mensal/output/plano-estrategico.md
---

# Step 02 — Fernanda Estratégia: Plano do Mês

**Agente:** Fernanda Estratégia 🧭
**Objetivo:** Criar o plano estratégico mensal da FTemper com distribuição dos 6 posts pelos 4 pilares de conteúdo.

---

## Input

- Contexto do mês coletado no Step 01
- Briefing completo da FTemper em `clientes/ftemper/briefing.md`

## Processo

A Fernanda deve executar as tasks em sequência:

1. **Task 1 — Mapear Contexto do Mês:** Sintetizar sazonalidade, datas relevantes e novidades do cliente
2. **Task 2 — Criar Plano Mensal:** Distribuir os 6 posts nos 4 pilares, sugerir temas e identificar alertas operacionais

## Output esperado

Arquivo `plano-estrategico.md` salvo em output, contendo:
- Contexto do mês sintetizado
- Foco estratégico do mês
- Distribuição dos 6 posts (pilar, formato, tema sugerido, público, alerta)
- Alertas operacionais consolidados
- Orientação de tom para o mês

## Veto Conditions

- Qualquer slot com tema genérico ("post sobre alumínio", "post institucional") → reprovar
- Distribuição diferente da frequência recomendada no briefing sem justificativa → reprovar
- Ausência de alerta quando post depende de foto autoral → reprovar
