---
type: checkpoint
outputFile: squads/onboarding-cliente/pipeline/data/dados-iniciais.md
---

# Step 04: Coleta de Dados Iniciais do Cliente

## Context Loading

- `squads/onboarding-cliente/output/escopo-aprovado.md` — Para contextualizar as perguntas com base no setor e entregáveis confirmados

---

## Instructions

### Process

1. Introduzir o step com uma mensagem breve:

> Antes da entrevista completa, preciso de alguns dados básicos para o **Eduardo Entrevista** poder personalizar as perguntas. Vai levar menos de 2 minutos.

2. Fazer as perguntas a seguir em sequência, de forma conversacional (não como um formulário frio):

   **Pergunta 1 — Nome do cliente:**
   > Qual o nome da empresa e do responsável pelo onboarding?

   **Pergunta 2 — Setor/nicho:**
   > Qual o setor ou nicho da empresa?
   *(ex: arquitetura residencial de alto padrão, advocacia tributária, clínica de estética, e-commerce de moda)*

   **Pergunta 3 — Website:**
   > A empresa tem website? Se sim, qual a URL?
   *(pode colocar "não tem" se for o caso)*

   **Pergunta 4 — Redes sociais:**
   > Quais redes sociais a empresa já tem? Se possível, cole os @handles ou URLs.
   *(ex: @studioramosarq no Instagram, linkedin.com/company/studio-ramos)*

   **Pergunta 5 — Observação inicial (opcional):**
   > Há alguma coisa importante que eu deva saber sobre esse cliente antes da entrevista? Algo sensível, um contexto específico, ou uma expectativa particular?
   *(pode pular se não houver nada)*

3. Coletar todas as respostas antes de salvar o arquivo
4. Confirmar o resumo com o usuário:
   > Recebido! Aqui está o que registrei: [exibir resumo]. Está correto?
5. Salvar em `dados-iniciais.md` após confirmação
6. Informar que o Eduardo Entrevista vai iniciar a entrevista interativa no próximo step

---

## Output Format

```markdown
# Dados Iniciais — [Nome do Cliente]

**Coletado em:** [data]
**client_slug:** [nome-empresa-em-lowercase-com-hifens]

---

## Identificação

| Campo             | Valor                        |
|-------------------|------------------------------|
| Empresa           | [nome]                       |
| Responsável       | [nome do contato]            |
| Setor/Nicho       | [setor]                      |
| Website           | [URL ou "não tem"]           |

## Redes Sociais

| Rede              | Handle / URL                 |
|-------------------|------------------------------|
| Instagram         | [@handle ou URL]             |
| LinkedIn          | [URL]                        |
| [outras redes]    | [handle]                     |

## Observações Iniciais

[Contexto relevante fornecido pelo usuário, ou "Nenhuma observação adicional."]
```

> **Nota sobre client_slug:** Gerar automaticamente a partir do nome da empresa — lowercase, sem acentos, espaços substituídos por hífens, sem caracteres especiais. Ex: "Studio Ramos Arquitetura" → `studio-ramos-arquitetura`. Este slug será usado para criar a pasta do cliente em `clientes/{client_slug}/` ao final do onboarding.

---

## Output Example

```markdown
# Dados Iniciais — Studio Ramos Arquitetura

**Coletado em:** 28/03/2026

---

## Identificação

| Campo             | Valor                                      |
|-------------------|--------------------------------------------|
| Empresa           | Studio Ramos Arquitetura                   |
| Responsável       | Rodrigo Ramos (sócio-fundador)             |
| Setor/Nicho       | Arquitetura residencial de alto padrão — SP|
| Website           | www.studioramosarquitetura.com.br          |

## Redes Sociais

| Rede              | Handle / URL                                          |
|-------------------|-------------------------------------------------------|
| Instagram         | @studioramosarq (3.200 seguidores)                    |
| LinkedIn          | linkedin.com/company/studio-ramos-arquitetura         |
| Pinterest         | pinterest.com/studioramosarq (não gerenciado)         |

## Observações Iniciais

O Rodrigo é bastante reservado em relação a preços — não quer que valores de
projetos apareçam em nenhum conteúdo. Ele também mencionou que está lançando
um novo serviço de interiores em parceria com uma designer de Pinheiros, mas
isso ainda não é público. Tratar com discrição na entrevista.
```

---

## Veto Conditions

1. **Arquivo salvo sem nome da empresa ou do responsável** — Os campos de identificação são obrigatórios. Se o usuário não forneceu, perguntar novamente antes de salvar.
2. **Arquivo salvo sem pelo menos uma rede social** — Como o escopo inclui gestão de redes, ao menos uma rede deve ser registrada. Se o cliente realmente não tem nenhuma, registrar "Nenhuma rede ativa ainda" explicitamente.

---

## Quality Criteria

1. O arquivo `dados-iniciais.md` é salvo somente após confirmação do usuário, garantindo que não há erro de nome ou setor.
2. As observações iniciais (campo opcional) são registradas fielmente, sem interpretação ou edição — preservando o contexto exato fornecido pelo usuário.
3. A mensagem de transição para o Step 05 prepara o usuário para a entrevista interativa, explicando que o Eduardo vai fazer perguntas uma por vez e que as respostas serão salvas automaticamente.
