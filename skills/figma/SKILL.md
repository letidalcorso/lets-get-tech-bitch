---
name: figma
description: >
  Integração com o Figma via MCP oficial. Permite que agentes leiam templates,
  criem frames, preencham conteúdo e organizem designs em arquivos Figma existentes.
  Usado para produção visual de posts a partir de briefings de conteúdo aprovados.
type: mcp
version: "1.0.0"
mcp:
  server_name: figma
  transport: http
categories: [design, social-media, visual-production]
env:
  - FIGMA_FILE_KEY_FAZOUBEBE
  - FIGMA_FILE_KEY_SOUCORNETA
  - FIGMA_FILE_KEY_FTEMPER
---

## Figma — Instruções para Agentes

### Configuração

O arquivo Figma de cada cliente é referenciado por uma variável de ambiente específica:
- Corneta (@soucorneta): `FIGMA_FILE_KEY_SOUCORNETA`
- Corneta (@fazoubebe): `FIGMA_FILE_KEY_FAZOUBEBE`
- FTemper (@ftempercomponentes): `FIGMA_FILE_KEY_FTEMPER`

O fileKey é extraído da URL do Figma:
`figma.com/design/{fileKey}/...`

**Enquanto o fileKey não estiver configurado:** informar ao usuário que o link do arquivo Figma ainda não foi cadastrado e solicitar o link antes de prosseguir.

---

### Como usar o Figma MCP

#### 1. Ler contexto de um design/template
Use `get_design_context` com o `fileKey` e o `nodeId` do frame ou componente.
Retorna código de referência, screenshot e hints do design.

#### 2. Capturar screenshot de um frame
Use `get_screenshot` para visualizar o estado atual de um frame antes de editar.

#### 3. Criar ou editar designs
Use `use_figma` para executar ações no arquivo: criar frames, duplicar componentes,
preencher texto, trocar imagens, ajustar propriedades.

#### 4. Buscar no design system
Use `search_design_system` para localizar componentes, estilos ou variáveis da marca
antes de criar um novo elemento.

---

### Fluxo padrão para criação de post

1. Ler o arquivo de output do post (`output/{run-folder}/{perfil}/post-{N}-{slug}.md`)
2. Identificar o formato do post (Carrossel / Estático / Stories / Reel cover)
3. Localizar o template correspondente no arquivo Figma
4. Duplicar o frame template
5. Preencher com o conteúdo aprovado (texto, slides, CTA)
6. Nomear o frame seguindo o padrão: `{YYYY-MM} | {perfil} | Post {N} | {slug}`
7. Confirmar ao usuário com screenshot do resultado

---

### Nomenclatura de frames

Padrão obrigatório para frames criados:
```
{YYYY-MM} | {perfil} | Post {N} | {slug}
```

Exemplos:
- `2026-04 | @soucorneta | Post 03 | churrasco-do-mes`
- `2026-04 | @fazoubebe | Post 11 | noite-epica-roteiro`

---

### Quando o fileKey não estiver disponível

Informar ao usuário:
> "O arquivo Figma da Corneta ainda não foi configurado. Compartilhe o link do arquivo
> (figma.com/design/...) para eu cadastrar o fileKey e prosseguir."

Após receber o link, extrair o fileKey e informar onde salvar:
> "Adicione `FIGMA_FILE_KEY_CORNETA={fileKey}` ao seu arquivo `.env`"
