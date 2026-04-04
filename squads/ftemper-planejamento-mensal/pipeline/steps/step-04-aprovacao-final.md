---
type: checkpoint
---

# Step 04 — Aprovação Final

**Tipo:** Checkpoint
**Objetivo:** Apresentar o plano estratégico e o calendário editorial para aprovação antes de encerrar o pipeline.

---

## Fluxo

### 1. Apresentar o resumo da entrega

Exibir ao usuário:
- Resumo do plano estratégico (foco do mês, distribuição dos 6 posts)
- Tabela de visão geral do calendário editorial

### 2. Solicitar aprovação via AskUserQuestion

**Pergunta:** O plano e o calendário estão aprovados?
- Aprovado — pode encerrar o pipeline
- Ajustar o plano estratégico — voltar para a Fernanda com feedback
- Ajustar o calendário — voltar para o Lucas com feedback

### 3. Se aprovado

Encerrar o pipeline com mensagem de conclusão.
Registrar em memories.md: mês planejado, foco estratégico, quaisquer preferências ou ajustes solicitados.

### 4. Se ajuste solicitado

Coletar o feedback específico do usuário e re-executar o step correspondente com o feedback como input adicional.

---

## Instruções para o checkpoint

- Sempre mostrar a tabela do calendário editorial neste checkpoint (não apenas dizer que foi gerada)
- Coletar feedback específico se o usuário solicitar ajuste — não re-executar sem entender o que precisa mudar
- Registrar aprendizados em memories.md após aprovação

---

## Output esperado

- Plano e calendário aprovados pelo usuário
- Arquivos salvos em `output/{run-folder}/`
- memories.md atualizado com contexto do mês planejado
