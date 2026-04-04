---
task: "Extrair Entregáveis"
order: 1
input:
  - proposta_texto: Texto completo da proposta comercial aprovada
output:
  - entregaveis_raw: Lista não estruturada de todos os entregáveis encontrados
  - gaps_iniciais: Lista de ambiguidades ou itens incompletos encontrados
---

# Extrair Entregáveis

## Objetivo

Ler a proposta comercial aprovada do início ao fim e extrair todos os entregáveis mencionados, com canal, quantidade, frequência e observações. Documentar qualquer ambiguidade como Gap para resolução na entrevista.

---

## Process

1. **Leitura completa primeiro** — Ler a proposta do início ao fim sem fazer nenhuma extração ainda. Nenhum entregável é registrado nesta passagem. O objetivo é entender o documento como um todo antes de fragmentá-lo.

2. **Segunda passagem: extração item a item** — Para cada entregável identificado, registrar: produto/serviço, canal, quantidade, frequência e prazo. Nenhum detalhe é assumido — somente o que está escrito na proposta.

3. **Identificação e registro de Gaps** — Para cada entregável ambíguo ou incompleto, registrar como Gap com descrição clara do que está faltando (ex: "quantidade não especificada", "canal não definido", "frequência ausente").

4. **Extração de metadados do contrato** — Verificar se há menção a: valor mensal, vigência, reajuste, processo de aprovação, stakeholders, rodadas de revisão. Registrar separadamente na seção `meta`.

5. **Produção do output raw** — Compilar a lista completa de entregáveis e gaps para ser consumida pela task `estruturar-escopo`.

---

## Output Format

```yaml
entregaveis:
  - item: "nome do entregável"
    canal: "Instagram / LinkedIn / etc."
    quantidade: "X por mês"
    observacao: "detalhes adicionais"
gaps:
  - descricao: "o que está ambíguo ou faltando"
meta:
  valor_mensal: "R$ X.XXX"
  vigencia: "X meses"
```

---

## Output Example

```yaml
entregaveis:
  - item: "Feed carrossel"
    canal: "Instagram"
    quantidade: "8/mês"
    observacao: "Educativo e institucional"
  - item: "Reels"
    canal: "Instagram"
    quantidade: "4/mês"
    observacao: "Até 60 segundos"
  - item: "Stories"
    canal: "Instagram"
    quantidade: "12/mês"
    observacao: "Inclui interação (enquetes, caixinhas)"
  - item: "Gestão de DMs"
    canal: "Instagram"
    quantidade: "Contínuo"
    observacao: "Respostas em até 24h"
  - item: "Posts de texto"
    canal: "LinkedIn"
    quantidade: "4/mês"
    observacao: "Tom profissional"
  - item: "Relatório de performance"
    canal: "Relatório"
    quantidade: "1/mês"
    observacao: "Todo dia 5 do mês seguinte"
gaps:
  - descricao: "Gestão de DMs não especifica se inclui atendimento comercial ou apenas engajamento"
  - descricao: "Número de slides por carrossel não especificado"
meta:
  valor_mensal: "R$ 3.500"
  vigencia: "6 meses (abr–set 2026)"
  reajuste: "IPCA ao final do contrato"
  aprovador: "Cliente aprova calendário + peças individualmente"
  revisoes_inclusas: "2 por peça"
```

---

## Quality Criteria

- [ ] Nenhum entregável mencionado na proposta foi omitido
- [ ] Cada entregável tem canal identificado
- [ ] Gaps documentados com descrição clara do que está faltando
- [ ] Meta (valor, vigência) registrada quando presente na proposta

---

## Veto Conditions

1. Se qualquer entregável mencionado explicitamente na proposta não aparece na lista
2. Se a task foi executada sem ler a proposta completa (output parcial sem coerência com o documento original)
