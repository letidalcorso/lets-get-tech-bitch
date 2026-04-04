```yaml
task: "Gerar Feedback de Revisão"
order: 2
input:
  - tabela_scores: Output da task pontuar-briefing
  - briefing_cliente: Briefing original para referência dos trechos
output:
  - revisao_completa: Documento de revisão com verdict, strengths, required changes e suggestions
```

## Process

1. Usar tabela de scores para construir o documento de revisão estruturado
2. Identificar 2-3 Strengths (pontos fortes genuínos do briefing)
3. Para cada score < 7: escrever Required change com: trecho problemático + problema + como corrigir
4. Para scores 7-8: escrever Suggestions (non-blocking) de melhoria
5. Determinar verdict final baseado nas regras: APPROVE (≥7, nenhum < 4), CONDITIONAL APPROVE (≥7 mas algum 4-6 não crítico), REJECT (< 7 ou qualquer < 4)
6. Se REJECT: escrever "Path to Approval" com lista numerada de changes obrigatórios

## Output Format

```markdown
# Revisão do Briefing — [Nome do Cliente]
Revision: N of 3

## VERDICT: [APPROVE / CONDITIONAL APPROVE / REJECT]

## Score Geral: X/10

[Tabela de scores]

## Strengths

Strength: [o que está bem, com referência ao trecho]
Strength: [outro ponto forte]

## Required Changes (se REJECT ou CONDITIONAL APPROVE)

Required change: [descrição exata do problema] — Localização: [seção] — Como corrigir: [instrução]
Required change: [...]

## Suggestions (non-blocking)

Suggestion: [melhoria opcional com justificativa]

## Path to Approval (se REJECT)
1. [Change 1]
2. [Change 2]
...

VERDICT: [APPROVE/REJECT] — [1 frase de justificativa]
```

## Quality Criteria

- [ ] Mínimo 2 Strengths identificados
- [ ] Cada Required change tem: onde está + o que está errado + como corrigir
- [ ] Verdict é inequívoco
- [ ] Path to Approval presente quando REJECT

## Veto Conditions

1. Verdict sem justificativa
2. Required change sem instrução de como corrigir (feedback que não pode ser acionado)
