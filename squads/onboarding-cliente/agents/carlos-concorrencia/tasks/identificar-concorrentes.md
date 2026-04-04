```yaml
task: "Identificar Concorrentes"
order: 1
input:
  - dados_entrevista: Output da entrevista com Eduardo (especialmente: setor, cidade, público, estilo)
output:
  - lista_concorrentes: Lista de 4-6 concorrentes para análise profunda, com URLs
```

## Process

1. Ler dados da entrevista para entender: setor, cidade, público-alvo, posicionamento do cliente
2. Usar WebSearch com queries como: "[setor] [cidade] Instagram", "[tipo de negócio] [cidade] marketing", "@[nicho] instagram referências"
3. Separar em: diretos (mesmo produto, mesmo público), indiretos (produtos alternativos), aspiracionais (referências de excelência no setor)
4. Para cada candidato: verificar se tem presença no Instagram/redes, estimar escala
5. Selecionar os 4-6 mais relevantes para análise profunda (priorizando: mesmo mercado, mesma cidade/região, mesmo público-alvo)
6. Adicionar pelo menos 1 player aspiracional mesmo que não seja concorrente direto

## Output Format

```yaml
concorrentes:
  diretos:
    - nome: "[Nome]"
      canal_principal: "Instagram / Site"
      url: "[URL]"
      justificativa: "Por que é concorrente direto"
  indiretos:
    - nome: "[Nome]"
      canal_principal: "[canal]"
      url: "[URL]"
      justificativa: "Por que é relevante analisar"
  aspiracionais:
    - nome: "[Nome]"
      canal_principal: "[canal]"
      url: "[URL]"
      justificativa: "Por que é referência de qualidade no setor"
```

## Output Example

```yaml
concorrentes:
  diretos:
    - nome: "Studio Araripe Arquitetura"
      canal_principal: "Instagram"
      url: "https://www.instagram.com/studioararipe/"
      justificativa: "Escritório de arquitetura residencial premium em SP, mesmo público, tamanho similar"
    - nome: "Arquiteto Paulo Mendes"
      canal_principal: "Instagram"
      url: "https://www.instagram.com/paulomendesarq/"
      justificativa: "Arquiteto solo de alto padrão em SP, tom aspiracional parecido"
  indiretos:
    - nome: "Mooui Móveis Planejados"
      canal_principal: "Instagram"
      url: "https://www.instagram.com/mooui/"
      justificativa: "Concorre pelo mesmo investimento do cliente — móveis vs. projeto completo"
  aspiracionais:
    - nome: "Escritório Triptyque"
      canal_principal: "Instagram"
      url: "https://www.instagram.com/triptyque/"
      justificativa: "Referência de excelência em arquitetura premium brasileira, comunicação de alto nível"
```

## Quality Criteria

- [ ] Mínimo 3 concorrentes identificados com URLs verificadas
- [ ] Ao menos 1 concorrente de cada categoria (direto, indireto ou aspiracional)
- [ ] Justificativa de relevância para cada um

## Veto Conditions

1. Menos de 3 concorrentes identificados
2. URLs não verificadas (links mortos ou inexistentes)
