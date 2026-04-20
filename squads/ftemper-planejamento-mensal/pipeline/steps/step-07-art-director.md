---
agent: sofia-visual
execution: inline
outputFile: squads/ftemper-planejamento-mensal/output/briefing-visual.md
---

# Step 07 — Marina Direção: Briefing Visual

**Agente:** Sofia Visual 🎯
**Objetivo:** Criar o briefing visual detalhado para cada um dos 6 posts — composição, paleta, referência fotográfica, prompt de imagem e template Figma a usar.

---

## Input

- Textos e legendas: `output/{run-folder}/textos-e-legendas.md`
- Calendário editorial aprovado: `output/{run-folder}/calendario-editorial.md`
- Briefing da FTemper: `clientes/ftemper/briefing.md`

## Processo

A Marina deve executar a task em sequência:

1. **Ler os textos** gerados pelo Rafael para cada post — o headline é o ponto de partida visual
2. **Ler a ficha** do post no calendário editorial — formato, pilar, público e alertas operacionais
3. **Definir a composição** de cada frame: hierarquia de elementos, áreas de texto, área de imagem
4. **Especificar o visual** de suporte: tipo de imagem, estilo, referência de ambiente
5. **Gerar o prompt** de imagem (quando o post não usar foto autoral do cliente)
6. **Identificar o template** Figma correspondente ao formato
7. **Sinalizar alertas** de posts que dependem de material do cliente

## Output esperado

Arquivo `briefing-visual.md` salvo em `output/{run-folder}/`, contendo:
- 6 briefings visuais (um por post)
- Cada briefing: composição + texto na arte + referência visual + prompt + paleta + template Figma + alertas

## Veto Conditions

- Briefing visual genérico que não especifica o que aparece no frame → reprovar
- Prompt de imagem vago ou em português → reprovar (prompts em inglês, específicos)
- Cor fora da paleta FTemper sem justificativa → reprovar
- Template Figma não identificado → reprovar
- Post com alerta operacional processado sem sinalização → reprovar
