---
agent: lucas-calendario
execution: inline
outputFile: squads/smartbase-planejamento-digital/output/calendario-editorial-90d.md
---

# Step 05 — Lucas Calendário: Calendário Editorial 90 Dias

**Agente:** Lucas Calendário 📅  
**Objetivo:** Montar o calendário editorial integrado de 90 dias combinando Instagram e SEO/Blog para a SmartBase.

---

## Input

- Estratégia de Instagram: `output/{run-folder}/estrategia-instagram.md`
- Estratégia SEO: `output/{run-folder}/estrategia-seo.md`
- Briefing da SmartBase: `clientes/smartbase/briefing.md`

## Processo

O Lucas deve executar a task:

1. **Task 1 — Montar Calendário 90 Dias:** Criar calendário integrado com posts de Instagram, publicações de blog e ações SEO

## Output esperado

Arquivo `calendario-editorial-90d.md` em output, contendo:
- Tabela de visão geral por semana (12 semanas)
- Para Instagram: data, pilar, formato, tema, objetivo
- Para Blog/SEO: semana de publicação, H1, palavra-chave principal, intenção
- Campanhas e datas especiais destacadas
- Semana a semana: o que publicar em cada canal
- Alertas operacionais (posts que dependem de foto autoral, material do cliente)

## Veto Conditions

- Posts Instagram concentrados em uma semana → reprovar
- Calendário sem integração entre Instagram e SEO (posts e artigos sem relação temática) → reprovar
- Artigos de blog sem palavra-chave associada → reprovar
- Semanas vazias sem justificativa → reprovar
