# Step 06 — Pedro Faz ou Bebe: Produção @fazoubebe

**Tipo:** Execução de agente (subagent)
**Agente:** pedro-fazoubebe
**Objetivo:** Criar os 20 posts mensais do @fazoubebe com base no calendário aprovado.

---

## Instruções para o Pedro

1. Ler o calendário editorial em `output/{run-folder}/calendario-editorial.md` (seção @fazoubebe)
2. Ler o Plano 360 em `output/{run-folder}/plano-360.md`
3. Ler o briefing em `clientes/corneta-jogos/briefing.md` (seções: tom de voz @fazoubebe, pilares, anti-padrões)
4. Criar 20 posts, um arquivo por post
5. Verificar a regra 3:1 antes de salvar (aproximadamente 15 humor + 5 produto/ritual)
6. Para cada Reel, incluir hook de abertura dos primeiros 3 segundos
7. Verificar:
   - Nenhum post tem tom moralista
   - Nenhum post toma partido em temas polêmicos
   - Vocabulário da marca está presente

---

## Output

Salvar em: `output/{run-folder}/fazoubebe/post-{N}-{slug}.md`
(20 arquivos individuais, numerados de 01 a 20)

## Execução em paralelo

Este step pode rodar em paralelo com step-05 (Camila) e step-07 (Roberta).
