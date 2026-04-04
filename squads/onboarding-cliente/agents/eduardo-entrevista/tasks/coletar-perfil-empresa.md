---
task: "Coletar Perfil da Empresa"
order: 1
input:
  - escopo_aprovado: Documento de escopo gerado pelo Sílvio Scope
  - dados_iniciais: Nome da empresa, setor e website (coletados no checkpoint anterior)
output:
  - perfil_empresa: Dados completos sobre o negócio do cliente
---

## Task

Coletar todos os dados sobre o perfil da empresa do cliente.

## Process

1. Apresentar-se e contextualizar o onboarding (2-3 frases de boas-vindas)
2. Perguntar sobre a descrição do negócio em palavras do próprio cliente (aberta, sem sugerir resposta)
3. Explorar produtos/serviços com detalhes: o que, para quem, como diferencia
4. Investigar o histórico digital: quais canais usou, o que funcionou, o que não funcionou
5. Perguntar sobre a presença atual (site, redes, Google Meu Negócio, avaliações)
6. Fazer a pergunta sobre o maior obstáculo ao crescimento ("O que te impede de crescer mais rápido?")
7. Resumir o que foi coletado e pedir confirmação antes de avançar para a próxima etapa

## Output Format

```markdown
## Perfil da Empresa

**Razão Social:** [nome]
**Nome Fantasia:** [nome]
**Setor:** [setor]
**Descrição:** [descrição em palavras do cliente]

**Produtos/Serviços:**
- [item 1]: [descrição + diferencial]
- [item 2]: [descrição + diferencial]

**Diferencial Declarado:** "[frase exata do cliente]"

**Histórico Digital:**
- O que funcionou: [resposta]
- O que não funcionou: [resposta]
- Canais ativos hoje: [lista]

**Presença Atual:**
- Site: [URL ou "não tem"]
- Instagram: [@handle] ([seguidores] seguidores)
- LinkedIn: [URL ou "não tem"]
- Google Meu Negócio: [configurado/não | avaliação]

**Principal Obstáculo ao Crescimento:** "[frase do cliente]"
```

## Output Example

```markdown
## Perfil da Empresa

**Razão Social:** Studio Vivaldi Arquitetura Ltda.
**Nome Fantasia:** Studio Vivaldi
**CNPJ:** 12.345.678/0001-90
**Setor:** Arquitetura e design de interiores residencial

**Descrição:** Escritório de arquitetura especializado em residências de alto padrão
em São Paulo. Foco em projetos completos, da planta à execução. Fundado em 2018 por
dois arquitetos sócios. Atende clientes com renda familiar acima de R$25k/mês.

**Produtos/Serviços:**
- Projeto arquitetônico completo: Do briefing do cliente à entrega das chaves
- Design de interiores: Serviço separado ou integrado ao projeto arquitetônico
- Acompanhamento de obra: Gestão completa da execução
- Consultoria de decoração: Serviço avulso de 3 horas, para quem já tem projeto

**Diferencial Declarado:** "A gente não entrega planta. A gente entrega o lar que
o cliente sempre quis, mas nunca soube descrever."

**Histórico Digital:**
- O que funcionou: Posts de before/after tiveram ótimo engajamento
- O que não funcionou: Publicação irregular — parou 3 vezes nos últimos 2 anos
- Canais ativos hoje: Instagram (irregular), site estático

**Presença Atual:**
- Site: studiovivaldi.com.br (portfólio estático, sem blog, sem captação de leads)
- Instagram: @studiovivaldi.arq (2.100 seguidores, atualizado irregularmente)
- LinkedIn: não configurado
- Google Meu Negócio: ativo, 4.8 estrelas (23 avaliações)

**Principal Obstáculo ao Crescimento:** "A gente não tem consistência. A gente para
de postar quando fica ocupado com projetos, aí quando para de postar os leads somem."
```

## Quality Criteria

- [ ] Diferencial declarado capturado com as palavras exatas do cliente
- [ ] Histórico digital inclui tanto o que funcionou quanto o que não funcionou
- [ ] Presença atual com dados específicos (seguidores, avaliações)
- [ ] Principal obstáculo registrado

## Veto Conditions

1. Nenhuma informação sobre histórico digital — é obrigatório para o briefing
2. Diferencial genérico sem as palavras do cliente (ex: "qualidade e comprometimento")
