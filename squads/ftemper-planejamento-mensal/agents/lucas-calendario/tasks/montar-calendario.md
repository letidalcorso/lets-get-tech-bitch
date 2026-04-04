# Task: Montar Calendário Editorial

## Objetivo

Transformar o plano estratégico da Fernanda em um calendário editorial concreto com datas, fichas de briefing e instruções de produção para cada um dos 6 posts do mês.

## Processo

1. Ler o plano estratégico em `output/{run-folder}/plano-estrategico.md`
2. Ler o briefing da FTemper em `clientes/ftemper/briefing.md` para referência de pilares e formatos
3. Definir as datas de publicação dos 6 posts:
   - Distribuir ao longo do mês (~1,5x/semana)
   - Evitar posts consecutivos do mesmo pilar
   - Ajustar se houver feriados nacionais ou datas relevantes do setor

4. Para cada post, criar a ficha completa com:
   - Data sugerida de publicação
   - Pilar de conteúdo
   - Formato (estático ou carrossel; se carrossel, indicar nº de slides sugerido)
   - Público principal (serralheiro / vidraceiro / arquiteto)
   - Objetivo do post
   - Orientação de copy (ângulo, o que incluir, como deve soar)
   - Referência visual orientativa
   - Alerta operacional (se depende de material do cliente)

5. Montar a tabela de visão geral com todos os 6 posts

## Output Format

```markdown
# Calendário Editorial — FTemper — [Mês/Ano]

## Visão Geral

| # | Data | Pilar | Formato | Tema |
|---|------|-------|---------|------|
| 1 | DD/MM | Autoridade Técnica | Carrossel (5 slides) | [título curto] |
| 2 | DD/MM | Produto Aplicado | Estático | [título curto] |
| 3 | ... | ... | ... | ... |

---

## Fichas dos Posts

### Post #1 — [Título do Tema]

**Data sugerida:** DD/MM/AAAA
**Pilar:** Autoridade Técnica
**Formato:** Carrossel — 5 slides
**Público principal:** Serralheiro

**Objetivo:** [O que este post faz pelo posicionamento da marca]

**Orientação de copy:**
[Como deve soar, ângulo, o que incluir, o que evitar]

**Referência visual:**
[Ex: produto aplicado em janela de correr, fundo de chão de obra, mockup de perfil]

**Alerta operacional:**
[Se depende de foto autoral: "Solicitar ao cliente foto de [situação]. Alternativa: mockup com fundo limpo." / Se não depende: "—"]

---

[repetir para os 6 posts]
```

## Quality Criteria

- [ ] 6 fichas completas, uma por post
- [ ] Datas distribuídas ao longo do mês (sem concentração)
- [ ] Nenhum pilar repetido em posts consecutivos
- [ ] Orientação de copy específica em cada ficha (não "post sobre X" — mas "mostrar como X é instalado em Y, com linguagem direta ao serralheiro")
- [ ] Alertas operacionais identificados quando post depende de foto autoral ou material do cliente
- [ ] Mix de formatos: ~4 estáticos, ~2 carrosséis

## Veto Conditions

- Ficha com orientação de copy genérica → reprovar, exigir especificidade
- Dois posts do mesmo pilar em dias consecutivos → reprovar, redistribuir
- Post que depende de foto autoral sem alerta operacional → reprovar
