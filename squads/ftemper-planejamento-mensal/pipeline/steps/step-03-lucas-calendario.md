---
agent: lucas-calendario
execution: inline
outputFile: squads/ftemper-planejamento-mensal/output/calendario-editorial.md
---

# Step 03 — Lucas Calendário: Calendário Editorial

**Agente:** Lucas Calendário 📅
**Objetivo:** Transformar o plano estratégico em um calendário editorial com datas e fichas de briefing para cada um dos 6 posts.

---

## Input

- Plano estratégico gerado pela Fernanda (`output/{run-folder}/plano-estrategico.md`)
- Briefing da FTemper (`clientes/ftemper/briefing.md`)
- Mês/ano de produção (do contexto coletado no Step 01)

## Processo

O Lucas deve executar a task:

1. **Task 1 — Montar Calendário:** Definir datas, distribuir posts ao longo do mês, criar ficha completa para cada post

## Output esperado

Arquivo `calendario-editorial.md` salvo em output, contendo:
- Tabela de visão geral com os 6 posts (data, pilar, formato, tema)
- 6 fichas individuais com: data, pilar, formato, público, objetivo, orientação de copy, referência visual e alerta operacional

## Veto Conditions

- Ficha com orientação de copy genérica → reprovar, exigir especificidade
- Dois posts do mesmo pilar em dias consecutivos → reprovar e redistribuir
- Post que depende de foto autoral sem alerta operacional → reprovar
- Datas concentradas em uma única semana sem justificativa → reprovar
