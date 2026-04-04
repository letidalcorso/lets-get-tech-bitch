---
type: checkpoint
---

# Step 10: Aprovação Final e Entrega do Briefing

## Context Loading

- `squads/onboarding-cliente/output/briefing-cliente.md` — Briefing aprovado pela Renata Revisão ✅
- `squads/onboarding-cliente/output/revisao-briefing.md` — Resultado da revisão com score e verdict
- `squads/onboarding-cliente/output/escopo-aprovado.md` — Escopo para referência cruzada final

---

## Instructions

### Process

1. Carregar os três arquivos e preparar a apresentação final
2. Exibir o score e verdict da revisão de forma destacada:

> A **Renata Revisão** aprovou o briefing com score **[X.X]/10**. Aqui está o resultado final:

3. Exibir o briefing completo formatado de forma limpa para leitura (não o markdown bruto — renderizar as seções de forma legível)
4. Exibir os **Strengths** da revisão (pontos destacados pela Renata)
5. Exibir os **Optional Improvements** se houver (sugestões não bloqueantes)
6. Perguntar ao usuário:

> O briefing está do jeito que você esperava? Você aprova para compartilhar com a equipe de produção?
>
> **Opções:**
> - ✅ **Aprovar** — briefing pronto para compartilhar com a equipe
> - ✏️ **Ajuste manual** — quero mudar algo antes de finalizar
> - 🔄 **Refazer uma seção** — algo não está alinhado com a marca

### Se o usuário APROVAR:

1. **Criar a pasta permanente do cliente:**
   - Ler `squads/onboarding-cliente/pipeline/data/dados-iniciais.md` para extrair o `client_slug`
   - Criar os seguintes arquivos na pasta do cliente usando o Write tool:
     - `clientes/{client_slug}/briefing.md` — copiar o conteúdo de `briefing-cliente.md`
     - `clientes/{client_slug}/escopo.md` — copiar o conteúdo de `escopo-aprovado.md`
     - `clientes/{client_slug}/analise-competitiva.md` — copiar o conteúdo de `analise-competitiva.md`
     - `clientes/{client_slug}/README.md` — criar índice do cliente (ver formato abaixo)

2. Formato do `README.md` do cliente:
   ```markdown
   # [Nome do Cliente]

   **Onboarding concluído em:** [data]
   **Score do Briefing:** [score]/10
   **Responsável na agência:** Leti

   ## Arquivos

   - [briefing.md](briefing.md) — Briefing completo de marketing
   - [escopo.md](escopo.md) — Escopo aprovado da proposta comercial
   - [analise-competitiva.md](analise-competitiva.md) — Análise de concorrentes
   ```

3. Exibir mensagem de conclusão:

> Briefing entregue com sucesso! 🎉
>
> Pasta do cliente criada em:
> `clientes/{client_slug}/`
>
> **Próximos passos sugeridos:**
> - Compartilhe o briefing com o time de design e copywriting
> - Agende a reunião de alinhamento com o cliente para validar o briefing juntos
> - Configure o calendário editorial com base nos Pilares de Conteúdo (Seção 7)

4. Atualizar `_opensquad/_memory/memories.md` com os aprendizados desta execução (ver seção abaixo)

### Se o usuário pedir AJUSTE MANUAL:

1. Perguntar: "Qual seção ou trecho você quer ajustar? Me diga o que precisa mudar."
2. Coletar o feedback
3. Aplicar a correção diretamente no `briefing-cliente.md`
4. Exibir o trecho corrigido e perguntar: "Ficou assim: [trecho]. Está certo?"
5. Após confirmação, retornar ao passo de aprovação

### Se o usuário pedir REFAZER UMA SEÇÃO:

1. Perguntar: "Qual seção? O que está errado ou faltando?"
2. Coletar o feedback com contexto suficiente
3. Acionar a **Beatriz Briefing** apenas para a seção específica, passando o feedback
4. Beatriz reescreve a seção
5. Renata revisa apenas a seção alterada
6. Retornar ao passo de aprovação com a nova versão

### Atualizar Memories (após aprovação)

Registrar em `_opensquad/_memory/memories.md` os seguintes aprendizados:

```markdown
## Onboarding — [Nome do Cliente] — [data]

**Setor:** [setor]
**Score do Briefing:** [score]/10
**Ciclos de Revisão:** [n]

**O que funcionou bem:**
- [item]

**Gaps encontrados no processo:**
- [item]

**Particularidades do cliente para próximos contatos:**
- [item]
```

---

## Output Format

Este step não gera um novo arquivo de output — o `briefing-cliente.md` já é o entregável final.

Após aprovação, o sistema exibe:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ONBOARDING CONCLUÍDO ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cliente: [Nome]
Score do Briefing: [X.X]/10
Ciclos de Revisão: [n]
Arquivo: squads/onboarding-cliente/output/briefing-cliente.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Output Example

**Exibição inicial para o usuário:**

```
A Renata Revisão aprovou o briefing com score 8.8/10.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRIEFING FINAL — Studio Ramos Arquitetura
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SOBRE A EMPRESA
Studio Ramos Arquitetura é um escritório paulistano fundado em 2018 por
Rodrigo Ramos, especializado em projetos residenciais de alto padrão.
Atuam nos Jardins, Itaim, Alto de Pinheiros, Perdizes e destinos de
segunda residência (Guarujá, Campos do Jordão). Posicionamento: "arquitetura
com memória" — design autoral que respeita a história do imóvel.

2. PÚBLICO-ALVO
Casais 35–55 anos, classe A/A+, em bairros nobres de SP. Chegam 70% por
indicação, 20% pelo Instagram. Valorizam exclusividade e relação próxima
com o arquiteto. Medo principal: projeto genérico. Seguem @dezeen, @casavogue.

3. POSICIONAMENTO
"Studio Ramos é o escritório para quem quer que o projeto conte uma história
— a deles. Cada detalhe tem intenção, cada escolha tem memória."

4. TOM DE VOZ
Sofisticado, autoral, humano, discreto. Frases médias, vocabulário refinado
mas acessível. Nunca múltiplos emojis, nunca gírias, nunca humor genérico.

[... demais seções ...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AVALIAÇÃO DA RENATA REVISÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Score: 8.8/10 — APROVADO

Destaques:
✓ Tom de Voz exemplar com exemplos positivos e negativos
✓ Posicionamento conecta análise competitiva com estratégia do cliente
✓ Pilares de conteúdo totalmente operacionais para a equipe de produção

Sugestões opcionais:
→ Adicionar orientação de tipografia para stories
→ Especificar horário sugerido de publicação no Instagram

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O briefing está do jeito que você esperava?

✅ Aprovar — pronto para compartilhar com a equipe
✏️ Ajuste manual — quero mudar algo antes de finalizar
🔄 Refazer uma seção — algo não está alinhado com a marca
```

**Após aprovação do usuário:**

```
Onboarding do Studio Ramos Arquitetura concluído com sucesso!

O briefing está salvo em:
squads/onboarding-cliente/output/briefing-cliente.md

Próximos passos sugeridos:
→ Compartilhe o briefing com o time de design e copywriting
→ Agende reunião de alinhamento com o Rodrigo para validar juntos
→ Configure o calendário editorial com base nos 4 Pilares de Conteúdo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESUMO DO ONBOARDING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cliente:            Studio Ramos Arquitetura
Responsável:        Rodrigo Ramos
Setor:              Arquitetura residencial de alto padrão — SP
Score do Briefing:  8.8/10
Ciclos de Revisão:  1
Arquivo:            clientes/{client_slug}/briefing.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Memories atualizado:**

```markdown
## Onboarding — Studio Ramos Arquitetura — 28/03/2026

**Setor:** Arquitetura residencial de alto padrão — SP
**Score do Briefing:** 8.8/10
**Ciclos de Revisão:** 1

**O que funcionou bem:**
- Tom de Voz com exemplos positivos e negativos facilita muito o trabalho
  de copywriting — manter esse formato nos próximos briefings
- A análise competitiva do Carlos Concorrência trouxe insights reais de
  posicionamento que a Beatriz integrou bem na Seção 3

**Gaps encontrados no processo:**
- O cliente foi sensível a valores de projetos — incluir essa pergunta
  diretamente no Step 04 (dados iniciais) para já registrar nos dados
  antes da entrevista
- A parceria confidencial com a designer gerou um item de "O que Evitar"
  que não estava previsto — criar campo "informações confidenciais" no
  template de dados iniciais

**Particularidades do cliente para próximos contatos:**
- Rodrigo Ramos responde melhor a perguntas abertas e reflexivas do que
  a formulários — o estilo conversacional do Eduardo foi acertado
- Alta sensibilidade a qualquer coisa que pareça "barato" ou massificado
- Case de Perdizes (maio/2026) e parceria de interiores (junho/2026)
  são oportunidades editoriais importantes a não perder
```

---

## Veto Conditions

1. **Aprovação sem exibição do briefing completo** — O usuário deve ter acesso ao conteúdo integral do briefing (não apenas o score) antes de poder aprovar. Aprovação "às cegas" não é permitida.
2. **Memories não atualizado após aprovação** — Se o usuário aprovou e o arquivo `_opensquad/_memory/memories.md` não foi atualizado com os aprendizados desta execução, o step está incompleto. O registro de memória é parte obrigatória da conclusão do pipeline.

---

## Quality Criteria

1. O briefing é exibido de forma renderizada e limpa — o usuário vê um documento legível, não um arquivo markdown cheio de símbolos `#`, `*` e `|`.
2. O caminho do arquivo final é exibido de forma clara e copiável, facilitando o compartilhamento com a equipe de produção.
3. O registro em `memories.md` é específico e útil para futuros onboardings — não apenas "o cliente gostou do resultado" mas aprendizados operacionais concretos que melhoram o processo na próxima execução.
