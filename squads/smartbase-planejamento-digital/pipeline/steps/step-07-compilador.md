---
agent: compilador-final
execution: inline
optional: true
outputFile: squads/smartbase-planejamento-digital/output/planejamento-smartbase.md
---

# Step 07 — Compilador Final: Documento de Planejamento Consolidado

**Agente:** Compilador Final 📄  
**Objetivo:** Unificar todos os outputs aprovados em um único documento de planejamento de presença digital da SmartBase, formatado para apresentação ao cliente.

---

## Ativação

Este step é **opcional** e executado apenas após aprovação explícita no Step 06.

## Input

- Diagnóstico e posicionamento: `output/{run-folder}/diagnostico-posicionamento.md`
- Estratégia Instagram: `output/{run-folder}/estrategia-instagram.md`
- Estratégia SEO: `output/{run-folder}/estrategia-seo.md`
- Calendário editorial: `output/{run-folder}/calendario-editorial-90d.md`
- Contexto do cliente: `output/{run-folder}/contexto-cliente.md`

## Processo

O Compilador deve:
1. Ler todos os outputs aprovados
2. Reorganizar e editar para um documento coeso (remover redundâncias, padronizar linguagem)
3. Adicionar sumário executivo e introdução
4. Formatar para apresentação (seções claras, tabelas, highlights)

## Output esperado

Arquivo `planejamento-smartbase.md` — documento único e polido contendo:

```
# Planejamento de Presença Digital — SmartBase
## Sumário Executivo
## 1. Diagnóstico
## 2. Posicionamento Digital
## 3. Estratégia Instagram
## 4. Estratégia SEO/Google
## 5. Calendário Editorial 90 Dias
## 6. KPIs e Métricas de Acompanhamento
## 7. Próximos Passos
```

## Veto Conditions

- Documento com seções copiadas sem edição (contradições ou repetições entre seções) → reprovar
- Sumário executivo com mais de 1 página → reprovar
- Próximos Passos sem ações concretas e datas → reprovar
