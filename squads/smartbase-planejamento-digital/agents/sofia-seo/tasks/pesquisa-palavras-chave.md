# Task: Pesquisa de Palavras-Chave

## Objetivo

Identificar e priorizar as palavras-chave mais relevantes para a SmartBase, organizadas por intenção de busca e potencial de conversão.

## Processo

1. Usar `web_search` para validar volumes e tendências de palavras-chave Apple no Brasil
2. Organizar em clusters temáticos (iPhone, Mac, trade-in, local, etc.)
3. Priorizar por: volume estimado, intenção de busca e concorrência
4. Identificar keywords locais (Caxias do Sul) como vantagem competitiva

## Clusters a pesquisar

- iPhone: "comprar iPhone [modelo]", "iPhone seminovo", "iPhone [modelo] preço", "iPhone usado"
- Mac: "MacBook usado", "MacBook seminovo preço", "comprar Mac"
- Trade-in: "trocar iPhone", "vender iPhone usado", "troca Apple", "quanto vale meu iPhone"
- Local: "loja Apple Caxias do Sul", "iPhone Caxias do Sul", "MacBook RS"
- Comparativos: "iPhone 14 vs 15", "qual iPhone comprar", "iPhone ou Samsung"
- Tutoriais: "como migrar iPhone", "configurar iPhone novo", "transfer de dados Apple"
- Acessórios: "AirPods original preço", "carregador Apple original"

## Output Format

```markdown
## 1. Pesquisa de Palavras-Chave — SmartBase

### Clusters e Priorização

| # | Palavra-Chave | Volume Est. | Intenção | Concorrência | Prioridade |
|---|---------------|-------------|----------|--------------|------------|
| 1 | [kw] | [vol] | [transacional/informacional/comercial] | [alta/média/baixa] | P1/P2/P3 |

**Legenda de Intenção:**
- Transacional: pessoa pronta para comprar
- Comercial: pesquisando para decidir
- Informacional: aprendendo, pode virar cliente

**Prioridade:**
- P1: atacar imediatamente (SEO + conteúdo + Ads)
- P2: atacar nos primeiros 60 dias
- P3: longo prazo / oportunidade futura

### Top 10 Palavras-Chave Prioritárias (P1)

Explicação de por que cada uma é prioritária para SmartBase.

### Oportunidades de Cauda Longa

Palavras-chave com volume menor mas intenção muito alta e concorrência baixa.
Especialmente: combinações com "Caxias do Sul" e "RS".

### Clusters de Trade-in

Destaque especial para o cluster trade-in — análise de por que é diferencial.
```

## Quality Criteria

- [ ] 25+ palavras-chave com intenção e prioridade definidas
- [ ] Cluster de trade-in com no mínimo 5 palavras-chave
- [ ] Palavras-chave locais (Caxias do Sul, RS) como cluster separado
- [ ] Uso de web_search para validar pelo menos 5 volumes
- [ ] Top 10 palavras-chave P1 com justificativa
