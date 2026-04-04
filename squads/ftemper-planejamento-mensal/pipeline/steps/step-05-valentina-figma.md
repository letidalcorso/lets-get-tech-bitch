---
agent: valentina-figma
execution: inline
optional: true
---

# Step 05 — Valentina Figma: Criação das Artes

**Agente:** Valentina Figma 🎨
**Objetivo:** Criar os frames dos posts aprovados no arquivo Figma da FTemper.

---

## Ativação

Este step é **opcional** e executado sob demanda após a aprovação do calendário editorial (Step 04).

O usuário indica quais posts deseja criar — não é obrigatório criar todos de uma vez.

## Input

- Calendário editorial aprovado: `output/{run-folder}/calendario-editorial.md`
- Arquivo Figma da FTemper: `FIGMA_FILE_KEY_FTEMPER`

## Processo

A Valentina deve:
1. Verificar se `FIGMA_FILE_KEY_FTEMPER` está configurado — se não, solicitar o link
2. Apresentar a lista dos 6 posts do calendário
3. Aguardar o usuário indicar quais posts criar
4. Para cada post: ler a ficha → verificar alertas → criar frame → capturar screenshot → confirmar

## Output esperado

Frames criados no Figma, nomeados seguindo o padrão:
```
{YYYY-MM} | @ftempercomponentes | Post {N} | {slug}
```

## Veto Conditions

- Frame criado sem screenshot de confirmação → reprovar
- Frame nomeado incorretamente → reprovar
- Post com alerta operacional criado sem consultar o usuário → reprovar
