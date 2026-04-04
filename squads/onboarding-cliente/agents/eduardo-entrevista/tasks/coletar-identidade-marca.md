---
task: "Coletar Identidade de Marca"
order: 2
input:
  - perfil_empresa: Output da task anterior
output:
  - identidade_marca: Tom de voz, arquétipo, referências e personalidade da marca
---

## Task

Extrair a identidade de marca, tom de voz e personalidade do cliente.

## Process

1. Fazer a pergunta de personalidade: "Se sua marca fosse uma pessoa, como ela seria?"
2. Explorar o arquétipo com referência a celebridades/personagens ("Se fosse um famoso, quem seria?")
3. Usar as 4 dimensões NN/G para posicionar o tom (humor, formalidade, atitude, energia)
4. Coletar 3 marcas que admira e por quê (o "por quê" é mais importante que o "quem")
5. Coletar o que a marca NUNCA deve parecer ser (anti-tom é tão importante quanto o tom)
6. Perguntar se tem histórico de comunicação que performou bem e o que ele acha que funcionou
7. Resumir o posicionamento de tom identificado e pedir confirmação

## Output Format

```markdown
## Identidade de Marca

**Personalidade em palavras do cliente:** "[frase do cliente]"

**Arquétipo identificado:** [nome do arquétipo] — justificativa

**Tom de Voz — 4 Dimensões NN/G:**
- Humor: [X/10] — [descrição]
- Formalidade: [X/10] — [descrição]
- Atitude: [X/10] — [descrição]
- Energia: [X/10] — [descrição]

**Marcas Admiradas:**
1. [marca] — "[motivo em palavras do cliente]"
2. [marca] — "[motivo]"
3. [marca] — "[motivo]"

**Como NÃO deve ser percebida:**
- "[frase do cliente]"
- "[frase do cliente]"

**Histórico de Conteúdo que Funcionou:** [descrição]

**Tom Resumido (síntese):** [3-4 adjetivos com explicação]
```

## Output Example

```markdown
## Identidade de Marca

**Personalidade em palavras do cliente:** "Quero que as pessoas se vejam nos
projetos. Não quero ser o arquiteto que mostra técnica. Quero ser o que mostra
como é morar numa casa que foi feita pra você."

**Arquétipo identificado:** Criador — transforma visões em realidade com paixão
e expertise. A marca existe para dar forma ao que o cliente imagina mas não
consegue articular.

**Tom de Voz — 4 Dimensões NN/G:**
- Humor: 5/10 — levemente bem-humorado, mas não cômico
- Formalidade: 5/10 — nem corporativo, nem informal
- Atitude: 3/10 — respeitoso, não irreverente
- Energia: 8/10 — entusiasmado e apaixonado pelo que faz

**Marcas Admiradas:**
1. Apartamento 103 — "Storytelling incrível, cada post conta uma história. Não
   parece propaganda, parece querer dividir algo especial"
2. Casa Vogue Brasil — "Qualidade visual impecável. É uma referência. Sinto que
   podemos alcançar esse nível com o tempo"
3. Deca — "Conseguem ser aspiracional mas acessível ao mesmo tempo. Não intimida"

**Como NÃO deve ser percebida:**
- "Caro demais, fora de alcance"
- "Arrogante ou elitista — detesto quando arquiteto parece estar acima do cliente"
- "Genérico — igual a todos os outros escritórios"

**Histórico de Conteúdo que Funcionou:** Before/after de projetos tiveram alto
engajamento. Clientes salvavam e mandavam para amigos. Storytelling funcionou
melhor que posts puramente técnicos.

**Tom Resumido:**
- Humano: fala de pessoas, não de projetos
- Apaixonado: transmite amor genuíno pela arquitetura
- Acessível: premium sem intimidar
- Preciso: técnico quando precisa, emocional quando importa
```

## Quality Criteria

- [ ] As 4 dimensões NN/G posicionadas com pontuação e descrição
- [ ] Arquétipo identificado com justificativa
- [ ] Anti-tom documentado (o que a marca NÃO quer ser)
- [ ] Referências com o motivo do cliente (não apenas o nome da marca)

## Veto Conditions

1. Tom de voz documentado apenas com adjetivos genéricos sem posicionamento nas 4 dimensões
2. Sem o anti-tom (o que a marca não quer ser é tão importante quanto o que quer)
