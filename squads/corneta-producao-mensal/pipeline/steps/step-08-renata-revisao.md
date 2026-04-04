# Step 08 — Renata Revisão: Revisão e Pontuação Final

**Tipo:** Execução de agente (inline)
**Agente:** renata-revisao
**Objetivo:** Revisar toda a produção do mês, pontuar cada agente e emitir recomendação final antes da entrega ao usuário.

---

## Instruções para a Renata

1. Ler todos os outputs da squad:
   - `output/{run-folder}/plano-360.md`
   - `output/{run-folder}/calendario-editorial.md`
   - `output/{run-folder}/soucorneta/*.md` (20 posts)
   - `output/{run-folder}/fazoubebe/*.md` (20 posts)
   - `output/{run-folder}/roteiros/*.md` (15 roteiros)
2. Verificar cruzamentos proibidos de tom entre marcas
3. Verificar regra 3:1 do @fazoubebe com contagem real
4. Pontuar cada agente de 0–10 com justificativa
5. Identificar problemas críticos (bloqueantes) vs. melhorias sugeridas
6. Emitir recomendação final: Aprovado / Aprovado com ajustes / Requer retrabalho

---

## Critérios obrigatórios de bloqueio

Os seguintes problemas são **sempre bloqueantes** e impedem aprovação:
- Post do @soucorneta com menção a bebida alcoólica
- Post do @fazoubebe com tom moralista ou institucional
- Post tomando partido em tema político ou religioso
- Roteiro que parece script publicitário formal sem estrutura de UGC
- Plano 360 sem mecanismo de recompra

---

## Output

Salvar em: `output/{run-folder}/revisao-final.md`
