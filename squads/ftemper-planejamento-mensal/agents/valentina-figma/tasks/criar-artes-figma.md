# Task: Criar Artes no Figma

## Objetivo

Criar os frames no arquivo Figma da FTemper para cada post indicado pelo usuário, seguindo as fichas do calendário editorial aprovado.

## Processo

1. Verificar se `FIGMA_FILE_KEY_FTEMPER` está disponível
   - Se não → solicitar link do arquivo Figma ao usuário (figma.com/design/...)
   - Extrair o fileKey da URL e orientar onde salvar: `FIGMA_FILE_KEY_FTEMPER={fileKey}` no `.env`

2. Ler `output/{run-folder}/calendario-editorial.md` completo
   - Mapear os 6 posts: número, formato, tema, alerta operacional

3. Apresentar lista dos posts e aguardar usuário indicar quais criar

4. Para cada post indicado, executar em sequência:

   a. **Ler a ficha do post** — formato, objetivo, orientação visual, alerta operacional

   b. **Verificar alerta operacional:**
      - Se "Depende de foto autoral" → perguntar ao usuário: aguardar material ou usar placeholder?
      - Se "—" → prosseguir normalmente

   c. **Localizar template no Figma:**
      - Use `search_design_system` ou `get_design_context` para localizar o template correto
      - Post estático → template de feed estático
      - Carrossel → template de carrossel (criar um frame por slide)

   d. **Criar o frame:**
      - Use `use_figma` para duplicar o template e preencher com o conteúdo da ficha
      - Título/chamada do briefing como texto de referência
      - Placeholder visível se foto autoral não disponível: "[FOTO AUTORAL — AGUARDANDO CLIENTE]"

   e. **Nomear o frame:**
      ```
      {YYYY-MM} | @ftempercomponentes | Post {N} | {slug}
      ```
      Exemplos:
      - `2026-04 | @ftempercomponentes | Post 01 | instalacao-perfil-deslizante`
      - `2026-04 | @ftempercomponentes | Post 03 | entrega-interior-rs`

   f. **Capturar screenshot** com `get_screenshot` e apresentar ao usuário

   g. **Aguardar confirmação** antes de avançar para o próximo post

5. Ao concluir todos os posts solicitados, informar:
   - Quantos frames foram criados
   - Quais têm placeholder aguardando material do cliente
   - Nome da seção no Figma onde os frames estão organizados

## Nomenclatura de Frames

Padrão obrigatório:
```
{YYYY-MM} | @ftempercomponentes | Post {N} | {slug}
```

O slug é gerado a partir do tema do post em kebab-case, máximo 4-5 palavras.

## Quality Criteria

- [ ] Todos os posts solicitados foram criados no Figma
- [ ] Frames nomeados corretamente seguindo o padrão
- [ ] Screenshot capturado e confirmado para cada frame
- [ ] Placeholders visuais presentes e identificados quando foto autoral está pendente
- [ ] Carrosséis com slides individuais agrupados em seção nomeada

## Veto Conditions

- Frame criado sem screenshot de confirmação → reprovar
- Frame nomeado incorretamente → reprovar, renomear antes de avançar
- Post com alerta operacional criado sem consultar o usuário → reprovar
