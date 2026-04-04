---
task: "Estruturar Escopo"
order: 2
input:
  - entregaveis_raw: Output da task anterior (extrair-entregaveis)
output:
  - escopo_aprovado: Documento de escopo completo em markdown, pronto para uso pela equipe
---

# Estruturar Escopo

## Objetivo

Transformar o output bruto da task `extrair-entregaveis` em um documento de escopo estruturado, navegável e pronto para uso pela equipe — especialmente pelo Eduardo Entrevista, que usará este documento como base para a entrevista de onboarding.

---

## Process

1. **Receber o output da task extrair-entregaveis** — Usar a lista de entregáveis, gaps e metadados como única fonte de verdade. Não retornar à proposta original.

2. **Organizar entregáveis em tabelas por canal/plataforma** — Cada canal recebe sua própria tabela com colunas: Item, Quantidade, Frequência, Observação.

3. **Estruturar cronograma e marcos de entrega** — Converter prazos relativos em datas absolutas sempre que possível (ex: "mês 1" → data real com base na data de aprovação da proposta). Quando não for possível, registrar o prazo relativo.

4. **Documentar investimento, vigência e processo de aprovação** — Incluir valor mensal, período de vigência, condições de reajuste, aprovador, rodadas de revisão incluídas e canal de feedback.

5. **Redigir seção de Gaps/Ambiguidades** — Para cada gap identificado na task anterior, adicionar uma ação recomendada clara: o que perguntar ou alinhar na entrevista de onboarding.

6. **Revisão final antes de salvar** — Verificar se cada entregável listado na task anterior aparece no documento estruturado. Confirmar que a seção de Gaps está presente mesmo que vazia.

---

## Output Format

```markdown
# Escopo Aprovado — [Nome do Cliente]
**Proposta:** [número/referência] | **Data:** [data]

## Entregáveis Contratados

### [Canal 1]
| Item | Quantidade | Frequência | Observação |

### [Canal 2]
| Item | Quantidade | Frequência | Observação |

## Investimento
- Valor mensal: R$ X.XXX
- Vigência: X meses (período)
- Reajuste: condições

## Marcos de Entrega
- [data]: [entregável]

## Aprovações
- Aprovador: [nome/cargo]
- Rodadas de revisão: [número]
- Canal de aprovação: [WhatsApp/e-mail/etc.]

## Gaps / Ambiguidades
1. [descrição do gap] — Ação recomendada: [o que perguntar na entrevista]
```

---

## Output Example

```markdown
# Escopo Aprovado — Studio Vivaldi
**Proposta:** #042 | **Data aprovada:** 2026-03-15

## Entregáveis Contratados

### Instagram
| Item | Quantidade | Frequência | Observação |
|---|---|---|---|
| Feed carrossel | 8/mês | 2x/semana | Educativo e institucional |
| Reels | 4/mês | 1x/semana | Até 60 segundos |
| Stories | 12/mês | 3x/semana | Interação: enquetes, caixinhas |
| Gestão de DMs | Contínuo | Diário | Respostas em até 24h |

### LinkedIn
| Item | Quantidade | Frequência | Observação |
|---|---|---|---|
| Posts de texto | 4/mês | 1x/semana | Tom profissional e de autoridade |

### Relatórios
| Item | Quantidade | Frequência |
|---|---|---|
| Relatório de performance | 1/mês | Todo dia 5 do mês seguinte |

## Investimento
- Valor mensal: R$ 3.500
- Vigência: 6 meses (abril–setembro 2026)
- Reajuste: IPCA ao final do contrato

## Marcos de Entrega
- 01/04/2026: Kickoff e entrega do briefing aprovado
- 05/04/2026: Calendário editorial do mês aprovado
- 10/04/2026: Primeiras peças para aprovação

## Aprovações
- Canal: WhatsApp
- Rodadas de revisão inclusas: 2 por peça
- Prazos de feedback: 48h úteis após envio

## Gaps / Ambiguidades
1. **Gestão de DMs:** Não especifica se inclui atendimento comercial ou apenas engajamento orgânico.
   → Ação: Perguntar na entrevista qual o escopo da gestão de DMs.
2. **Carrosseis:** Número de slides por peça não mencionado.
   → Ação: Alinhar expectativa de formato na entrevista (sugestão padrão: 5–8 slides).
3. **Bio e destaques:** Criação/atualização de bio e destaques do perfil não mencionada.
   → Ação: Confirmar se está incluído ou é serviço adicional.
```

---

## Quality Criteria

- [ ] Todos os entregáveis organizados por canal em tabelas
- [ ] Seção de Gaps presente com ação recomendada para cada item
- [ ] Marcos de entrega com datas (absolutas quando possível)
- [ ] Processo de aprovação documentado (canal, rodadas, prazos de feedback)

---

## Veto Conditions

1. Documento em formato de texto corrido sem tabelas — o output deve ser necessariamente tabular por canal
2. Seção de Gaps ausente mesmo quando ambiguidades foram identificadas na task anterior
