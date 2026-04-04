```yaml
task: "Redigir Briefing de Marketing"
order: 2
input:
  - perfil_marca: Output da task anterior
  - escopo_aprovado: Documento de escopo do Sílvio Scope
  - dados_entrevista: Output completo do Eduardo Entrevista
output:
  - briefing_cliente: Briefing de marketing completo em markdown, pronto para uso da equipe
```

## Process

1. Abrir com o contexto do projeto (história do cliente, o problema, por que agora)
2. Documentar objetivos e KPIs em tabela (de dados da entrevista)
3. Construir seção de público-alvo com as personas do perfil de marca
4. Definir mensagem principal e hierarquia de mensagens
5. Inserir guia de tom de voz com exemplos práticos do perfil de marca
6. Adicionar contexto competitivo com insights da análise do Carlos
7. Mapear canais e entregáveis alinhados ao escopo aprovado
8. Finalizar com cronograma, stakeholders e processo de aprovação
9. Revisar coerência interna — cada seção deve reforçar o posicionamento central

## Output Format

Template completo das 11 seções do briefing de marketing conforme domain-framework.md

## Quality Criteria

- [ ] 11 seções preenchidas sem lacunas
- [ ] Entregáveis alinhados ao escopo aprovado (nada a mais, nada a menos)
- [ ] Cada seção referencia o posicionamento central (coerência interna)
- [ ] Linguagem pronta para o time criativo usar sem tradução

## Veto Conditions

1. Mais de 2 seções com conteúdo genérico ou placeholder
2. Entregáveis no briefing não batem com o escopo aprovado
