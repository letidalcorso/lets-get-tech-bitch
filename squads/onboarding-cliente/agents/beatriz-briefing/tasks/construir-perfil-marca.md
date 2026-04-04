```yaml
task: "Construir Perfil de Marca"
order: 1
input:
  - dados_entrevista: Output completo do Eduardo Entrevista
  - analise_competitiva: Output do Carlos Concorrência
output:
  - perfil_marca: Documento de identidade de marca completo com posicionamento diferenciado
```

## Process

1. Ler dados da entrevista (perfil, identidade e objetivos) e análise competitiva
2. Definir o arquétipo final confirmado e a proposta de valor central (single-minded proposition)
3. Posicionar a marca no mapa competitivo — onde se diferencia dos concorrentes analisados
4. Construir personas detalhadas (mínimo 2) com nome, contexto, dores, desejos e comportamento digital
5. Redigir o guia de tom de voz com posicionamento nas 4 dimensões NN/G + exemplos de textos
6. Produzir o documento de perfil de marca como input para a redação do briefing

## Output Format

```markdown
# Perfil de Marca — [Nome do Cliente]

## Identidade Central
**Arquétipo:** [nome] — [descrição em 1 frase]
**Single-Minded Proposition:** "[a mensagem única e central da marca]"
**Posicionamento Diferenciado:** "[como se diferencia dos concorrentes]"

## Personas

### Persona 1: [Nome], [o tipo]
**Perfil:** [idade, gênero, localização, renda/cargo]
**Momento de vida:** [contexto atual]
**Motivação central:** [o que ela realmente quer]
**Dor principal:** [o que a impede]
**Comportamento digital:** [como pesquisa, onde está, o que consome]
**CTA que funciona para ela:** [tipo de conteúdo que a move]

### Persona 2: [Nome], [o tipo]
[mesma estrutura]

## Guia de Tom de Voz

**As 4 Dimensões:**
- Humor: [X/10] — [o que isso significa na prática]
- Formalidade: [X/10] — [o que isso significa]
- Atitude: [X/10] — [o que isso significa]
- Energia: [X/10] — [o que isso significa]

**Como DEVE soar:**
> [exemplo de texto real, 2-3 frases]

**Como NÃO deve soar:**
> [exemplo de texto no tom errado, 2-3 frases]

**Vocabulário da Marca:**
Usar: [lista de palavras e expressões]
Evitar: [lista de palavras e expressões]
```

## Quality Criteria

- [ ] Single-minded proposition em 1 frase clara e memorável
- [ ] Mínimo 2 personas com nível de detalhe completo
- [ ] Guia de tom com posicionamento numérico nas 4 dimensões
- [ ] Exemplos de "como deve soar" e "como não deve soar" com textos reais

## Veto Conditions

1. Single-minded proposition genérica (poderia ser de qualquer empresa do mesmo setor)
2. Personas sem comportamento digital específico
