# Task: Compilar Documento Final de Planejamento

## Objetivo

Ler todos os outputs aprovados e consolidar em um único documento coeso, formatado para apresentação ao cliente SmartBase.

## Processo

1. Ler todos os outputs:
   - `output/{run-folder}/contexto-cliente.md`
   - `output/{run-folder}/diagnostico-posicionamento.md`
   - `output/{run-folder}/estrategia-instagram.md`
   - `output/{run-folder}/estrategia-seo.md`
   - `output/{run-folder}/calendario-editorial-90d.md`
2. Identificar redundâncias e contradições
3. Reorganizar em estrutura narrativa coesa
4. Escrever sumário executivo
5. Escrever próximos passos concretos

## Checklist antes de escrever

- [ ] As declarações de posicionamento em todos os arquivos são consistentes entre si?
- [ ] Os pilares do Instagram e do SEO se complementam ou se contradizem?
- [ ] Os KPIs estão todos presentes e alinhados?
- [ ] O calendário conecta com as estratégias de cada canal?

## Output Format

Seguir a estrutura definida no agente (`compilador-final.agent.md`):

```
# Planejamento de Presença Digital — SmartBase
**Elaborado em:** [data]
**Horizonte:** 90 dias (Maio–Julho 2026)

## Sumário Executivo
[3-5 bullets, máx. 1 página]

## 1. Diagnóstico
## 2. Posicionamento Digital
## 3. Estratégia Instagram
## 4. Estratégia SEO/Google
## 5. Calendário Editorial 90 Dias
## 6. KPIs e Métricas de Acompanhamento
## 7. Próximos Passos
```

## Regras de Edição

- Remover qualquer texto de "instruções para agente" que vazou para o output
- Padronizar heading levels (H1 para título, H2 para seções principais, H3 para subseções)
- Converter referências a arquivos (como `output/{run-folder}/...`) para linguagem de cliente
- Garantir que cada seção começa com uma frase de contexto antes de listas ou tabelas

## Quality Criteria

- [ ] Sumário executivo: máx. 5 bullets, máx. 1 página
- [ ] Sem contradições entre seções
- [ ] Sem redundâncias maiores
- [ ] Próximos Passos: mínimo 10 ações com responsável e prazo
- [ ] Linguagem do documento = linguagem SmartBase (direto, premium)
- [ ] Tempo estimado de leitura: menos de 30 minutos
