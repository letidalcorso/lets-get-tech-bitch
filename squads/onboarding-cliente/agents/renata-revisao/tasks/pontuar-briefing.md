```yaml
task: "Pontuar Briefing"
order: 1
input:
  - briefing_cliente: Briefing redigido pela Beatriz Briefing
  - quality_criteria: squads/onboarding-cliente/pipeline/data/quality-criteria.md
output:
  - tabela_scores: Pontuação de cada critério com justificativa
  - hard_rejections: Lista de critérios com score < 4/10 (triggers de rejeição automática)
```

## Process

1. Ler quality-criteria.md completamente antes de ler o briefing
2. Ler o briefing completo do início ao fim sem pontuar — primeira leitura
3. Na segunda leitura, avaliar cada critério individualmente (1-10) com justificativa específica
4. Para cada score < 7, identificar o trecho exato que causou a redução
5. Verificar hard rejections: critérios < 4/10 que trigam reprovação automática
6. Calcular média geral
7. Determinar verdict preliminar (será finalizado na task gerar-feedback)

## Output Format

```markdown
# Scoring — Briefing [Nome do Cliente]
Revision: 1 of 3

## Tabela de Scores

| Critério | Score | Justificativa resumida |
|---|---|---|
| Completude das 11 seções | X/10 | [justificativa] |
| Alinhamento com escopo | X/10 | [justificativa] |
| Qualidade das personas | X/10 | [justificativa] |
| Especificidade dos KPIs | X/10 | [justificativa] |
| Tom de voz documentado | X/10 | [justificativa] |
| Insights competitivos | X/10 | [justificativa] |

**Score Geral:** X/10

## Hard Rejections
[Lista de critérios com score < 4/10, ou "Nenhum" se não houver]

## Verdict Preliminar
[APPROVE / REJECT / CONDITIONAL APPROVE]
```

## Quality Criteria

- [ ] Todos os 6 critérios pontuados com justificativa
- [ ] Score geral calculado corretamente
- [ ] Hard rejections identificados
- [ ] Nenhum score sem justificativa

## Veto Conditions

1. Algum critério pontuado sem justificativa
2. Score geral não bate com a média dos critérios individuais
