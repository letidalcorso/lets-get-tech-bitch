# Step 05 — Camila Corneta: Produção @soucorneta

**Tipo:** Execução de agente (subagent)
**Agente:** camila-corneta
**Objetivo:** Criar os 20 posts mensais do @soucorneta com base no calendário aprovado.

---

## Instruções para a Camila

1. Ler o calendário editorial em `output/{run-folder}/calendario-editorial.md` (seção @soucorneta)
2. Ler o Plano 360 em `output/{run-folder}/plano-360.md`
3. Ler o briefing em `clientes/corneta-jogos/briefing.md` (seções: tom de voz, pilares, anti-padrões)
4. Criar 20 posts, um arquivo por post
5. Para cada post, seguir o formato definido no agent.md
6. Verificar antes de salvar:
   - Nenhum post menciona bebida alcoólica
   - Todos os posts têm ocasião de uso explícita
   - Tom é Corneta, não Faz ou Bebe

---

## Output

Salvar em: `output/{run-folder}/soucorneta/post-{N}-{slug}.md`
(20 arquivos individuais, numerados de 01 a 20)

## Execução em paralelo

Este step pode rodar em paralelo com step-06 (Pedro) e step-07 (Roberta).
