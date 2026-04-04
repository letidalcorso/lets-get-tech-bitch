# Task: Mapear Contexto do Mês

## Objetivo

Sintetizar o contexto do mês com base nas informações coletadas no checkpoint e no briefing da FTemper. Identificar o que está acontecendo no mês que pode (ou deve) influenciar o conteúdo.

## Processo

1. Ler o briefing da FTemper em `clientes/ftemper/briefing.md`
2. Processar as respostas do checkpoint (mês/ano, datas relevantes, novidades, foco especial)
3. Identificar:
   - Sazonalidade do setor (ex: inverno = maior demanda por fechamentos; verão = obras externas)
   - Datas relevantes para o público (Dia do Trabalhador, Semana da Construção Civil, etc.)
   - Novidades do cliente (produto novo, evento, marco institucional)
   - Feedback do mês anterior que deve influenciar o próximo

## Output Format

Seção estruturada em markdown:

```
## Contexto do Mês — [Mês/Ano]

**Sazonalidade:** [o que está acontecendo no setor de esquadrias/vidro neste mês]

**Datas relevantes:**
- [data]: [relevância para o público da FTemper]

**Novidades do cliente:**
- [se houver — produto novo, evento, marco]

**Feedback do mês anterior:**
- [se informado pelo usuário]

**Implicação estratégica:**
[1-2 frases sobre o que esse contexto significa para o conteúdo do mês]
```

## Quality Criteria

- [ ] Sazonalidade identificada e conectada ao setor (não genérica)
- [ ] Datas relevantes filtradas — só entram datas que fazem sentido para serralheiro/vidraceiro/arquiteto
- [ ] Implicação estratégica é específica, não óbvia
