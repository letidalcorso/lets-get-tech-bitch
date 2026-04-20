---
agent: ana-copy
execution: inline
format: instagram-feed
outputFile: squads/ftemper-planejamento-mensal/output/textos-e-legendas.md
---

# Step 06 — Rafael Copy: Textos e Legendas

**Agente:** Ana Copy ✍️
**Objetivo:** Criar o texto principal da arte (headline) e a legenda completa do Instagram para cada um dos 6 posts aprovados no calendário editorial.

---

## Input

- Calendário editorial aprovado: `output/{run-folder}/calendario-editorial.md`
- Pauta aprovada: `output/{run-folder}/pauta-aprovada.md`
- Briefing da FTemper: `clientes/ftemper/briefing.md`

## Processo

O Rafael deve executar a task em sequência:

1. **Ler as 6 fichas** do calendário editorial — para cada post, identificar: pilar, formato, público, tema, orientação de copy e alertas operacionais
2. **Adaptar o tom** conforme o pilar e o público de cada post
3. **Escrever o headline** (texto da arte — até 2 linhas, impacto visual)
4. **Escrever a legenda** (abertura forte + desenvolvimento + CTA + hashtags)
5. **Sinalizar** qualquer ficha incompleta ou dado técnico ausente antes de inventar

## Output esperado

Arquivo `textos-e-legendas.md` salvo em `output/{run-folder}/`, contendo:
- 6 blocos estruturados (um por post)
- Cada bloco: headline + legenda completa (abertura, desenvolvimento, CTA, hashtags)
- Notas sobre dados técnicos ausentes ou alertas operacionais (quando aplicável)

## Veto Conditions

- Headline genérico que poderia ser de qualquer distribuidora → reprovar e reescrever
- Legenda que começa com o nome da empresa → reprovar
- Especificação técnica inventada (não presente na ficha ou no briefing) → sinalizar ao usuário
- Post com alerta operacional processado sem consulta ao usuário → reprovar
- Mais de 10 hashtags por post → reprovar
