---
type: checkpoint
---

# Step 03: Confirmar Escopo com o Usuário

## Context Loading

- `squads/onboarding-cliente/output/escopo-aprovado.md` — Escopo extraído pelo Sílvio Scope 📋

---

## Instructions

### Process

1. Carregar e exibir o conteúdo de `escopo-aprovado.md` para o usuário de forma formatada
2. Introduzir o escopo com uma mensagem curta:

> O **Sílvio Scope** terminou a leitura da proposta. Abaixo está o escopo estruturado que será usado como base do onboarding. Por favor, revise e confirme se está correto.

3. Exibir o escopo completo (resumo executivo + tabelas por canal + carga de produção)
4. Se houver Gaps e Ambiguidades (`⚠️ GAP`) identificados pelo Sílvio:
   - Destacar cada gap individualmente
   - Perguntar especificamente como resolver cada um:
     > **GAP 1:** [descrição]
     > Como devemos registrar isso no escopo? (ou podemos ignorar por enquanto?)
5. Após o usuário responder, perguntar:
   > O escopo acima está correto ou há algum entregável que precisa ser ajustado, adicionado ou removido?
6. Aceitar qualquer uma das respostas abaixo como confirmação válida:
   - "Ok", "Correto", "Pode seguir", "Está certo", afirmações em geral
   - Correções específicas (ex: "são 20 posts, não 16") — neste caso, aplicar a correção no arquivo `escopo-aprovado.md` antes de avançar
7. Só avançar para o Step 04 após confirmação explícita do usuário

### Fluxo de Correção

Se o usuário indicar correções:
1. Confirmar o que foi entendido: "Então o correto é: [correção]. Posso atualizar o escopo com isso?"
2. Após confirmação, aplicar a correção no arquivo `escopo-aprovado.md`
3. Informar: "Escopo atualizado. Podemos continuar?"
4. Aguardar nova confirmação

---

## Output Format

Este step não gera um arquivo de output — ele valida e potencialmente edita o arquivo já existente `escopo-aprovado.md`.

A confirmação do usuário é o gatilho para avançar ao próximo step.

```
Mensagem de avanço (exibir ao usuário após confirmação):
"Ótimo! Escopo confirmado. Agora vou precisar de alguns dados básicos do cliente
para personalizar a entrevista de onboarding. Isso leva menos de 2 minutos."
```

---

## Output Example

**Exibição para o usuário:**

```
O Sílvio Scope terminou a leitura da proposta. Aqui está o escopo estruturado:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ESCOPO APROVADO — Studio Ramos Arquitetura
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vigência: Abril–Setembro 2026 | Fee: R$ 5.600/mês

INSTAGRAM
• 16 posts/mês (projetos, bastidores, dicas)
• ~80 stories/mês (20/semana)
• 4 Reels/mês (edição de material do cliente)
• Gestão de comentários e DMs (horário comercial)

LINKEDIN
• 8 posts/mês (cases, autoridade, conquistas)
• Gestão de conexões e mensagens

PRODUÇÃO
• 1 ensaio fotográfico/mês (4h + 20 fotos editadas)
• 30 peças de design/mês
• 4 Reels editados/mês

TRÁFEGO PAGO (META ADS)
• Gestão com budget de R$ 1.500/mês
• Foco: leads de alto padrão residencial
• 1 relatório mensal

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ GAPS IDENTIFICADOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GAP 1: A proposta menciona "posts dinâmicos" no LinkedIn mas não especifica
o formato. São carrosséis PDF, vídeos curtos ou slides?

→ Como devemos registrar isso?

GAP 2: Gestão de DMs — inclui resposta completa ou só triagem/encaminhamento?

→ Como devemos registrar isso?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O escopo acima está correto? Há algo a ajustar antes de continuarmos?
```

**Resposta do usuário (exemplo):**

```
GAP 1: São carrosséis PDF mesmo.
GAP 2: Só triagem, o Rodrigo responde pessoalmente.
Fora isso está correto, pode seguir.
```

**Resposta do sistema:**

```
Entendido! Vou atualizar o escopo:
• LinkedIn: posts incluem carrosséis PDF
• DMs: triagem e encaminhamento (cliente fecha pessoalmente)

Escopo atualizado. Vamos agora coletar os dados básicos do cliente.
Isso vai personalizar a entrevista do Eduardo Entrevista 🎙️
```

---

## Veto Conditions

1. **Avanço sem confirmação explícita** — O pipeline não pode avançar para o Step 04 enquanto o usuário não responder confirmando ou corrigindo. Mensagens ambíguas devem gerar uma repergunta.
2. **Gap não endereçado** — Se houver gaps identificados pelo Sílvio e o usuário não os mencionou, perguntar especificamente sobre cada um antes de avançar. Não assumir resolução silenciosa.

---

## Quality Criteria

1. O escopo exibido ao usuário está formatado de forma legível (não é o markdown bruto), com seções claras por canal.
2. Cada gap identificado foi apresentado individualmente com uma pergunta específica de resolução.
3. O arquivo `escopo-aprovado.md` reflete fielmente as correções solicitadas pelo usuário, caso haja alguma.
