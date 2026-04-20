---
type: subagent
outputDir: squads/ftemper-planejamento-mensal/_investigations/
---

# Step 02 — Sherlock: Investigação de Perfis e Tendências

**Tipo:** Subagent (dispatcher)
**Objetivo:** Investigar os perfis de referência do setor e pesquisar tendências e novidades do mercado de alumínio e vidro para alimentar o planejamento mensal da Fernanda Estratégia.

---

## Perfis a Investigar

1. **@vitralsul** — https://www.instagram.com/vitralsul/
2. **@aluita_aluminio** — https://www.instagram.com/aluita_aluminio/
3. **@realvidros** — https://www.instagram.com/realvidros/

---

## Fluxo de Execução

### 1. Verificar disponibilidade do Playwright

Antes de investigar os perfis:
- Verificar se o MCP do Playwright está disponível (`mcp__playwright` ou similar)
- Se disponível → usar o modo `profile_5_10` do Sherlock para cada perfil (últimas 5-10 publicações)
- Se **não disponível** → executar o **Fallback via WebSearch** (ver abaixo)

### 2. Para cada perfil (com Playwright)

Seguir as instruções do prompt Sherlock em `_opensquad/core/prompts/sherlock.prompt.md`:

1. Acessar o perfil via browser com sessão persistente em `_opensquad/_browser_profile/`
2. Capturar as últimas 5-10 publicações
3. Salvar screenshots em `squads/ftemper-planejamento-mensal/_investigations/{username}/screenshots/`
4. Gerar `raw-content.md` com os textos extraídos
5. Gerar `pattern-analysis.md` com análise de padrões de conteúdo

### 3. Fallback via WebSearch (sem Playwright)

Para cada perfil, executar buscas:
- `"@{username}" instagram posts conteúdo {mês-atual}`
- `"ftemper concorrentes" alumínio vidro RS instagram`

Analisar o que for encontrado e documentar os padrões identificados.

### 4. Pesquisa de tendências e novidades do mercado

Após investigar os perfis, realizar pesquisa sobre o setor:

**Buscas recomendadas:**
- `alumínio esquadrias tendências {ano-atual}`
- `vidro temperado construção civil novidades {ano-atual}`
- `serralheiros RS mercado {mês-atual}`
- Qualquer novidade mencionada pelo usuário no contexto do mês (Step 01)

---

## Output Esperado

Salvar em `squads/ftemper-planejamento-mensal/_investigations/`:

### Por perfil investigado:
- `{username}/raw-content.md` — textos e legendas coletados
- `{username}/pattern-analysis.md` — padrões identificados:
  - Formatos mais usados (estático, carrossel, reel)
  - Temas predominantes
  - Tom de voz
  - Frequência de postagem
  - O que performou melhor (quando visível)
  - Lacunas e oportunidades para a FTemper

### Síntese consolidada:
- `_investigations/sintese-mercado.md` — relatório consolidado com:
  - Resumo dos 3 perfis
  - Tendências identificadas no setor
  - Oportunidades de diferenciação para a FTemper
  - Insights para o planejamento do mês

---

## Instruções para o Dispatcher

- Informar ao usuário que a investigação está em andamento
- Executar os 3 perfis sequencialmente (não em paralelo para não sobrecarregar sessão do browser)
- Se algum perfil não carregar, registrar o erro e continuar com os demais
- Ao concluir, apresentar um resumo dos principais achados ao usuário antes de passar para a Fernanda Estratégia
- Registrar data/hora da investigação nos arquivos de output

---

## Veto Conditions

- Não passar para o Step 03 sem ter ao menos a síntese `_investigations/sintese-mercado.md` gerada
- Se nenhum perfil for acessível e o WebSearch não retornar resultados úteis → parar e informar o usuário
