# Task: Criar Plano Estratégico Mensal

## Objetivo

Com base no contexto do mês (output da task anterior), criar o plano estratégico completo que distribuirá os 6 posts do mês nos 4 pilares de conteúdo da FTemper.

## Processo

1. Revisar os 4 pilares do briefing:
   - **Pilar 1 — Autoridade Técnica** (2 posts/mês): Tutoriais, dicas, erros comuns, como escolher o produto certo
   - **Pilar 2 — Produto Aplicado** (2 posts/mês): Produto em uso real, obras, antes/depois
   - **Pilar 3 — Institucional e Proximidade Regional** (1 post/mês): Cobertura geográfica, equipe, entregas
   - **Pilar 4 — Novidades e Portfólio** (1 post/mês): Lançamentos, novas linhas, comparativos

2. Ajustar a distribuição conforme o contexto do mês (se houver lançamento, Pilar 4 pode ganhar relevância; se há evento setorial, Pilar 1 pode ter tema prioritário)

3. Para cada um dos 6 slots, sugerir:
   - Pilar
   - Formato (post estático ou carrossel)
   - Tema/ângulo sugerido
   - Público principal do post (serralheiro, vidraceiro ou arquiteto)
   - Alerta operacional se aplicável

4. Definir o foco estratégico do mês (qual narrativa une os posts)

5. Incluir orientação de tom se houver algo a ajustar no mês

## Output Format

```markdown
# Plano Estratégico — FTemper — [Mês/Ano]

## 1. Contexto do Mês
[output da task anterior]

## 2. Foco Estratégico
[qual é o fio condutor do mês e por quê]

## 3. Distribuição dos 6 Posts

| Slot | Pilar | Formato | Tema Sugerido | Público | Alerta |
|------|-------|---------|---------------|---------|--------|
| 1 | Autoridade Técnica | Carrossel | ... | Serralheiro | — |
| 2 | Produto Aplicado | Estático | ... | Serralheiro/Arquiteto | Depende de foto autoral |
| 3 | Autoridade Técnica | Estático | ... | Serralheiro | — |
| 4 | Produto Aplicado | Estático | ... | Arquiteto | — |
| 5 | Institucional | Estático | ... | Serralheiro | — |
| 6 | Novidades | Carrossel | ... | Serralheiro/Vidraceiro | — |

## 4. Alertas Operacionais
[lista de posts que dependem de material do cliente]

## 5. Orientação de Tom para o Mês
[se há algo específico a ajustar no tom — caso contrário, "Tom padrão conforme briefing"]
```

## Quality Criteria

- [ ] Distribuição respeita a frequência recomendada no briefing (Pilar 1: 2x, Pilar 2: 2x, Pilar 3: 1x, Pilar 4: 1x)
- [ ] Cada tema sugerido é específico e acionável — não "post sobre produto X" mas "como instalar o perfil X em janela de correr"
- [ ] Mix de formatos: ~4 estáticos + ~2 carrosséis
- [ ] Alertas operacionais identificados quando posts dependem de fotos autorais
- [ ] Foco estratégico está fundamentado no contexto do mês, não apenas na distribuição de pilares

## Veto Conditions

- Qualquer slot com tema genérico ("post sobre alumínio", "post institucional") → reprovar, exigir tema específico
- Distribuição de pilares diferente da recomendada no briefing sem justificativa → reprovar
- Ausência de alerta quando post claramente depende de foto autoral → reprovar
