# Step 10 — Valentina Figma: Criação de Designs (Sob Demanda)

**Tipo:** Execução de agente (inline) — opcional
**Agente:** valentina-figma
**Objetivo:** Criar os designs no Figma dos posts aprovados indicados pelo usuário.

---

## Ativação

Este step só é executado se o usuário confirmar no Step 09 que deseja criar designs no Figma.
Se o usuário responder "não" ou "depois", encerrar o pipeline normalmente.

---

## Instruções para a Valentina

### Pré-flight

1. Verificar se `FIGMA_FILE_KEY_CORNETA` está configurado no ambiente
   - Se não → solicitar o link do arquivo Figma ao usuário antes de continuar
   - Formato esperado: `figma.com/design/{fileKey}/...`

2. Apresentar ao usuário a lista de posts aprovados do mês:
   - Posts @soucorneta (01–20) com número, formato e mote
   - Posts @fazoubebe (01–20) com número, formato e mote
   - Roteiros UGC (01–15) se aplicável

3. Perguntar quais posts o usuário deseja criar no Figma

---

## Execução

Para cada post indicado, seguir o fluxo:

1. Ler `output/{run-folder}/{perfil}/post-{N}-{slug}.md`
2. Identificar formato (Reel cover / Carrossel / Estático / Stories)
3. Localizar template correspondente no arquivo Figma
4. Duplicar e preencher o frame
5. Nomear: `{YYYY-MM} | {perfil} | Post {N} | {slug}`
6. Capturar screenshot e confirmar com usuário
7. Avançar para o próximo somente após confirmação

---

## Encerramento

Ao concluir todos os designs solicitados:
- Informar quantos frames foram criados e em qual arquivo Figma
- Perguntar se o usuário deseja criar mais algum design
- Ao encerrar, salvar registro em `output/{run-folder}/figma-log.md` com lista de frames criados
