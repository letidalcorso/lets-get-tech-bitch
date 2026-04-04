# Step 01 — Contexto do Mês

**Tipo:** Checkpoint
**Objetivo:** Carregar o briefing mensal do cliente antes de iniciar o pipeline.

---

## Fluxo

### 1. Identificar o mês

Perguntar ao usuário qual mês/ano será produzido (ex: "abril 2026").

### 2. Localizar o briefing mensal

Procurar o arquivo em: `clientes/corneta-jogos/briefings/YYYY-MM.md`

Exemplo para abril 2026: `clientes/corneta-jogos/briefings/2026-04.md`

### 3. Se o arquivo existir

Ler o arquivo completo e confirmar ao usuário que o briefing foi carregado. Perguntar se há algo a adicionar ou corrigir antes de continuar.

### 4. Se o arquivo NÃO existir

Informar ao usuário que o arquivo não foi encontrado e perguntar:
- Deseja criar o briefing agora respondendo às perguntas?
- Ou prefere criar o arquivo manualmente e rodar o squad depois?

Se optar por responder na hora, coletar via `AskUserQuestion`:
1. Datas estratégicas e campanhas previstas para o mês
2. Orientações especiais da Corneta (foco em produto, feedback do mês anterior)
3. Lançamentos ou collabs previstos (produto/criador + data)

---

## Instruções para o checkpoint

- Sempre confirmar com o usuário antes de continuar para o Step 02
- Se o briefing foi carregado de arquivo, mostrar um resumo em 3–5 bullets
- Se foi coletado via perguntas, registrar as respostas como contexto equivalente
- Informar o usuário sobre o template disponível em `clientes/corneta-jogos/briefings/_template.md`

---

## Output esperado

Contexto do mês disponível para a Marina 360 e demais agentes:
- Mês/ano de produção
- Datas estratégicas e campanhas previstas
- Pautas ou orientações especiais
- Lançamentos ou collabs previstos
- Feedback do mês anterior (se houver)
