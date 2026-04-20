---
type: checkpoint
---

# Step 05 — Aprovação da Pauta

**Tipo:** Checkpoint
**Objetivo:** Apresentar o plano estratégico e o calendário editorial ao usuário para aprovação **antes** de iniciar a produção de copy e design. Esta é a porta de entrada para a fase de produção — nada avança sem aprovação aqui.

---

## Fluxo

### 1. Apresentar o resumo consolidado

Exibir ao usuário:

**Do plano estratégico (Fernanda):**
- Foco estratégico do mês e justificativa
- Distribuição dos 6 posts pelos 4 pilares

**Do calendário editorial (Lucas):**
- Tabela de visão geral com os 6 posts (data, pilar, formato, tema)
- Alertas operacionais identificados (posts que dependem de foto do cliente)

Exemplo de tabela a exibir:

| # | Data | Pilar | Formato | Tema |
|---|------|-------|---------|------|
| 1 | dia/mês | Autoridade Técnica | Carrossel | ... |
| 2 | dia/mês | Produto Aplicado | Estático | ... |
| ... | ... | ... | ... | ... |

### 2. Solicitar aprovação via AskUserQuestion

**Pergunta:** A pauta do mês está aprovada?
- **Aprovada — iniciar produção de copy e design**
- **Ajustar o plano estratégico** — voltar para a Fernanda com feedback
- **Ajustar o calendário de datas/formatos** — voltar para o Lucas com feedback

### 3. Se aprovada

Avançar para o Step 06 — Copywriter.

Registrar em `output/{run-folder}/pauta-aprovada.md`:
- Data de aprovação
- Tabela final dos 6 posts aprovados
- Alertas operacionais pendentes

### 4. Se ajuste solicitado

Coletar o feedback específico do usuário via AskUserQuestion ou texto livre.

- Se o ajuste for no **plano** → re-executar Step 03 (Fernanda) com o feedback como input adicional
- Se o ajuste for no **calendário** → re-executar Step 04 (Lucas) com o feedback como input adicional
- Após re-execução, retornar a este checkpoint para nova aprovação

---

## Instruções para o checkpoint

- **Sempre mostrar a tabela completa** — não apenas dizer que foi gerada
- **Destacar os alertas operacionais** — posts que dependem de foto autoral do cliente precisam de atenção especial
- **Coletar feedback específico** se o usuário solicitar ajuste — não re-executar sem entender o que precisa mudar
- **Este checkpoint é obrigatório** — nenhum copywriter ou art director começa antes da aprovação aqui

---

## Output esperado

- Pauta aprovada pelo usuário
- `output/{run-folder}/pauta-aprovada.md` criado
- Pipeline avança para Step 06
