---
type: checkpoint
outputFile: squads/onboarding-cliente/pipeline/data/proposta-raw.md
---

# Step 01: Upload da Proposta Comercial

## Context Loading

Nenhum arquivo necessário — este é o ponto de entrada do pipeline.

---

## Instructions

### Apresentação do Squad

Ao iniciar este step, apresente o squad brevemente ao usuário:

> Olá! Sou o **Opensquad de Onboarding de Clientes** da sua agência. Meu trabalho é transformar a proposta comercial aprovada em um briefing completo, pronto para a equipe de produção. O processo leva cerca de 20 minutos e envolve leitura do escopo, entrevista com você sobre o cliente e pesquisa de mercado automática.

> Para começar, preciso da proposta comercial aprovada — pode ser o texto do email, o PDF copiado ou uma descrição dos entregáveis acordados.

### Process

1. Exibir a mensagem de boas-vindas acima
2. Solicitar que o usuário cole o texto completo da proposta aprovada
3. Aceitar qualquer formato: texto corrido, lista de itens, tabela copiada de PDF
4. Se o usuário colar algo muito curto (menos de 3 linhas), perguntar se há mais detalhes
5. Salvar o conteúdo exatamente como colado em `proposta-raw.md`
6. Confirmar o recebimento e informar que o próximo passo é a leitura automatizada do escopo pelo **Sílvio Scope**

---

## Output Format

O arquivo `proposta-raw.md` deve conter:

```
# Proposta Comercial — [Nome do Cliente se identificável]

[Texto exato colado pelo usuário, sem edição]
```

---

## Output Example

```markdown
# Proposta Comercial — Studio Ramos Arquitetura

**Data:** 10/03/2026
**Cliente:** Studio Ramos Arquitetura — Rodrigo Ramos
**Agência:** Impulso Digital

---

## Escopo de Serviços — Março a Agosto 2026

### Gestão de Redes Sociais

**Instagram:**
- 16 posts no feed por mês (mix: projetos, bastidores, dicas de arquitetura)
- 20 stories por semana (interativos + informativos)
- Gestão de comentários e DMs (horário comercial)
- 1 Reels por semana

**LinkedIn:**
- 8 posts por mês (cases, artigos de autoridade, conquistas do escritório)
- Gestão de conexões e mensagens

### Produção de Conteúdo

- Ensaio fotográfico mensal no escritório ou em obra (4h + edição de 20 fotos)
- Edição de 4 Reels por mês (material bruto enviado pelo cliente)
- Design de 30 peças/mês (feed + stories)

### Tráfego Pago

- Gestão de Meta Ads com budget de R$ 1.500/mês
- Campanhas de geração de leads para projetos residenciais de alto padrão
- Relatório mensal de performance

### Investimento

- Fee mensal de gestão: R$ 4.800/mês
- Produção fotográfica: R$ 800/ensaio
- Total estimado: R$ 5.600/mês

### Vigência

Contrato de 6 meses com renovação automática. Início previsto: 01/04/2026.

---

*Proposta aprovada por Rodrigo Ramos em 15/03/2026 via email.*
```

---

## Veto Conditions

1. **Proposta vazia ou ilegível** — Se o usuário colar menos de 5 linhas sem entregáveis identificáveis, solicitar complementação antes de avançar.
2. **Ausência de qualquer entregável ou valor** — Se o texto não mencionar nenhum serviço concreto (ex: só tem nome do cliente), bloquear avanço e pedir mais detalhes.

---

## Quality Criteria

1. O texto da proposta foi salvo integralmente, sem truncamento ou edição.
2. O arquivo `proposta-raw.md` começa com o cabeçalho `# Proposta Comercial` seguido do nome do cliente (se identificável).
3. O usuário foi informado de que o próximo passo é automático (Sílvio Scope) e que será consultado para confirmar o escopo logo em seguida.
