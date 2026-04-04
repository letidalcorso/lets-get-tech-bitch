---
type: checkpoint
---

# Step 06: Validar Dados da Entrevista

## Context Loading

- `squads/onboarding-cliente/output/dados-entrevista.md` — Dados coletados pelo Eduardo Entrevista 🎙️ na entrevista de onboarding

---

## Instructions

### Process

1. Carregar `dados-entrevista.md` e gerar um resumo executivo conciso (não exibir o documento bruto)
2. Apresentar o resumo ao usuário com a mensagem:

> O **Eduardo Entrevista** concluiu a entrevista. Aqui está o resumo do que foi coletado antes de avançarmos para a pesquisa de mercado:

3. Exibir o resumo nos 3 blocos: **Quem é o cliente**, **Como a marca se comunica**, **O que quer alcançar**
4. Perguntar:
   > Há algo nesse resumo que está errado, incompleto ou que você quer ajustar antes de continuarmos?
5. Aceitar como resposta válida:
   - Confirmações diretas ("Está correto", "Pode seguir", "Ok")
   - Correções ou adições (aplicar no arquivo `dados-entrevista.md` e confirmar a atualização)
6. Após confirmação, informar sobre o próximo step:

> Perfeito. Agora o **Carlos Concorrência** vai fazer a pesquisa de mercado e análise de concorrentes em segundo plano — você não precisa fazer nada, ele trabalha de forma autônoma com dados reais da internet. Enquanto isso, pode tomar um café ☕
>
> Assim que a análise estiver pronta, voltamos com o resultado para revisão.

7. Aguardar confirmação do usuário para disparar o próximo step (subagent)

---

## Output Format

Este step não gera um arquivo de output próprio. Valida e eventualmente edita o arquivo `dados-entrevista.md`.

O resumo apresentado ao usuário deve seguir este formato visual:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESUMO DA ENTREVISTA — [Nome do Cliente]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QUEM É O CLIENTE
[2-3 frases sobre perfil e posicionamento]

COMO A MARCA SE COMUNICA
Tom de voz: [adjetivos]
O que não combina: [itens]
Referências: [nomes]

O QUE QUER ALCANÇAR
Objetivo principal: [texto]
KPIs: [lista curta com métricas]
Lançamentos previstos: [lista ou "nenhum"]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Output Example

**Exibição para o usuário:**

```
O Eduardo Entrevista concluiu a entrevista. Aqui está o resumo:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESUMO DA ENTREVISTA — Studio Ramos Arquitetura
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QUEM É O CLIENTE
Studio Ramos Arquitetura é um escritório de arquitetura residencial de alto
padrão fundado em 2018, atuando principalmente nos bairros nobres de SP.
Rodrigo Ramos, sócio-fundador, posiciona o escritório como "arquitetura com
memória" — design autoral que respeita a história do imóvel. A maioria dos
clientes chega por indicação, mas o Instagram é o segundo canal e o objetivo
é torná-lo mais estratégico.

COMO A MARCA SE COMUNICA
Tom de voz: Sofisticado, autoral, cuidadoso, humano, detalhista, discreto
Não combina: Memes, humor genérico, trends virais, texto sobreposto em fotos,
             qualquer coisa que pareça massificado ou barato
Referências: Studio MK27, Axel Vervoordt, @dezeen (curadoria editorial limpa)

O QUE QUER ALCANÇAR
Objetivo principal: Tornar o Instagram o 2º maior canal de leads —
passar de 20% para 35% dos clientes originados pelo canal
KPIs:
  • 3+ leads qualificados/mês via Instagram
  • +500 seguidores/mês (de 3.200 para ~6.200 ao final do contrato)
  • Engajamento no feed > 4%
  • 1 novo contato estratégico/semana no LinkedIn
Lançamentos previstos:
  • Maio: Case completo — projeto entregue em Perdizes (fotos autorizadas)
  • Junho: Parceria com designer de interiores (ainda confidencial)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Há algo nesse resumo que está errado, incompleto ou que você quer ajustar?
```

**Resposta do usuário (exemplo):**

```
Perfeito. Só uma correção: o objetivo de engajamento é > 3,5%, não 4%.
Fora isso pode seguir.
```

**Resposta do sistema:**

```
Anotado — engajamento mínimo ajustado para 3,5%. Arquivo atualizado.

Agora o Carlos Concorrência vai pesquisar o mercado de arquitetura de alto
padrão em SP e analisar os concorrentes relevantes. Ele trabalha em segundo
plano com dados reais — sem ação necessária da sua parte.

Assim que a análise estiver pronta, voltamos. Geralmente leva entre 3 e 5
minutos.
```

---

## Veto Conditions

1. **Avanço sem confirmação** — O Carlos Concorrência não pode ser disparado enquanto o usuário não confirmar os dados da entrevista. Respostas ambíguas (ex: "Hmm") devem gerar uma repergunta direta: "Posso confirmar que está correto e seguir?"
2. **Correção aplicada sem re-confirmação** — Se o usuário fez uma correção, o sistema deve mostrar a alteração feita e pedir novo "ok" antes de avançar para o Step 07.

---

## Quality Criteria

1. O resumo exibido é uma síntese inteligente — não um dump do arquivo bruto — organizando as informações nos 3 blocos (perfil, comunicação, objetivos) de forma escaneável.
2. A mensagem de transição para o Step 07 deixa claro que é um processo automático em background, gerenciando a expectativa de tempo do usuário.
3. Se houver lançamentos confidenciais ou informações sensíveis nos dados, eles são incluídos no resumo mas sinalizados com "(confidencial)" para que o usuário saiba que foram registrados corretamente.
