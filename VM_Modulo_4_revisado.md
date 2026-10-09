# Ventilação Mecânica — Módulo 4
## PSV, ciclagem a fluxo, assincronias e rise time

> **Objetivos:** compreender os fundamentos do modo pressão de suporte (PSV), dominar o ajuste da sensibilidade expiratória (critério de ciclagem a fluxo), identificar as principais assincronias de disparo e ciclagem e ajustar adequadamente o rise time (tempo de subida).
>
> **Nota de segurança:** material de estudo e consulta. Parâmetros e valores citados variam conforme o ventilador, a situação clínica e o protocolo local. Não usar exemplos numéricos isolados como prescrição universal.

---

## 1. Pressão de suporte (PSV)

O **PSV (pressure support ventilation)** é um modo espontâneo assistido: em sua forma convencional, cada inspiração é iniciada por esforço do paciente. O ventilador fornece pressão de suporte acima da PEEP configurada.

- **Variável controlada:** pressão de suporte durante a inspiração.
- **Disparo:** geralmente por pressão ou fluxo, conforme a configuração.
- **Ciclagem:** geralmente a fluxo; a inspiração termina quando o fluxo inspiratório cai até o critério de ciclagem configurado.
- **Frequência respiratória:** resulta dos ciclos iniciados pelo paciente; não há, no PSV convencional, uma frequência mandatória que garanta ciclos regulares.
- **Apneia/backup:** muitos ventiladores permitem configurar uma janela de apneia e uma ventilação de segurança. O comportamento, o intervalo e o modo de backup dependem do equipamento e da configuração. Não presumir que todo PSV muda automaticamente para um modo controlado após um intervalo fixo.

PSV exige monitorização contínua, pois a ventilação depende do *drive* respiratório e da capacidade muscular do paciente. A presença de um backup de apneia não substitui a avaliação clínica.

---

## 2. Ciclagem a fluxo e sensibilidade expiratória

Na ciclagem a fluxo, o ventilador encerra a inspiração quando o fluxo inspiratório cai até uma fração ou um limiar configurado (sensibilidade expiratória / critério de ciclagem), segundo a lógica específica do equipamento. Em muitos ventiladores, o critério é expresso como porcentagem do pico de fluxo inspiratório; outros equipamentos podem apresentar opções ou algoritmos diferentes.

**Exemplo ilustrativo:** se o pico de fluxo for 60 L/min e a ciclagem estiver ajustada para 25% do pico, o ciclo pode terminar quando o fluxo cair para aproximadamente 15 L/min, se o equipamento usar esse critério.

O valor de 25% é comum em muitos sistemas como padrão de fábrica, mas não é universal. Faixa de ajuste, nomenclatura e algoritmo variam por fabricante e modelo.

### Ajustes por perfil clínico

| Situação | Problema possível | Ajuste que pode ser considerado | Cuidado |
|---|---|---|---|
| **Obstrução (DPOC/asma)** | Esvaziamento prolongado e ciclagem tardia podem encurtar o tempo expiratório e contribuir para hiperinsuflação dinâmica | Aumentar a porcentagem de ciclagem (ex.: 40–50%) encerra a inspiração mais cedo | Individualizar pelo fluxo, esforço, curvas, volume corrente e conforto; não usar uma faixa fixa como regra |
| **Restrição/SARA/fibrose** | A demanda inspiratória pode não combinar com o tempo inspiratório entregue; ciclagem precoce pode contribuir para duplo disparo | Reduzir a porcentagem (ex.: 10–15%) prolonga a inspiração quando apropriado | Nem todo paciente restritivo precisa de ciclagem mais tardia; observar esforço, curvas e volume corrente |

**Conceito-chave:**
- **Aumentar** a porcentagem de ciclagem (ex.: de 25% para 40%) faz a inspiração terminar **mais cedo** (ideal para permitir mais tempo expiratório na obstrução).
- **Reduzir** a porcentagem de ciclagem (ex.: de 25% para 15%) faz a inspiração terminar **mais tarde** (prolonga o tempo inspiratório).
- A direção do ajuste deve ser escolhida a partir da assincronia observada na curva de fluxo, e não apenas do rótulo diagnóstico.

---

## 3. Assincronias paciente–ventilador

### Assincronias de disparo

#### Autodisparo (*auto-triggering*)
- O ventilador inicia um ciclo sem esforço inspiratório efetivo do paciente.
- **Causas possíveis:** sensibilidade excessiva, vazamento (ex.: balonete desinsuflado, fístula), água condensada no circuito, oscilações cardíacas transmitidas às vias aéreas ou artefatos de movimento.
- **Conduta:** avaliar paciente, circuito, drenar condensado, checar vazamentos e recalibrar o limiar de sensibilidade do gatilho.

#### Disparo ineficaz (*ineffective effort*)
- O paciente faz esforço inspiratório (observável clinicamente ou por deflexão negativa na curva de pressão/fluxo), mas o ventilador não reconhece o esforço e não entrega o ciclo.
- **Causas possíveis:** hiperinsuflação dinâmica com auto-PEEP importante (o paciente precisa vencer a auto-PEEP antes de defletir a pressão do circuito até o gatilho), fraqueza muscular grave, gatilho pouco sensível ou sedação excessiva.
- **Conduta:** em pacientes obstrutivos, otimizar tempo expiratório para reduzir auto-PEEP; titular PEEP externa criteriosa (geralmente até 70–80% da auto-PEEP para facilitar o disparo sem piorar a hiperinsuflação); ajustar sensibilidade.

### Assincronias de ciclagem

#### Ciclagem precoce (*premature cycling*)
- A inspiração mecânica termina antes de cessar o esforço neural inspiratório do paciente.
- **Consequência:** o paciente continua contraindo o diafragma na fase expiratória inicial do ventilador, o que pode gerar uma nova deflexão imediata e provocar **duplo disparo (*double triggering*)** com empilhamento de volume (*breath stacking*), elevando perigosamente as pressões alveolares.
- **Conduta:** em PSV, diminuir a porcentagem de ciclagem ou aumentar a pressão de suporte; em VCV/PCV, prolongar o tempo inspiratório.

#### Ciclagem tardia (*delayed cycling*)
- A inspiração mecânica persiste após o paciente ter encerrado seu esforço inspiratório ou já ter iniciado a expiração ativa.
- **Consequência:** esforço expiratório contra o ventilador com pico de pressão no fim da inspiração, desconforto acentuado e encurtamento do tempo expiratório subsequente.
- **Conduta:** em PSV, aumentar a porcentagem de ciclagem (critério expiratório mais alto); investigar vazamentos (vazamentos no circuito impedem o fluxo de cair até o limiar de ciclagem).

---

## 4. Rise time (tempo de subida ou rampa inspiratória)

O **rise time** determina a velocidade e a aceleração com que a pressão inspiratória atinge o nível programado após o disparo em modos pressóricos (PCV e PSV).

- **Muito rápido (rampa curta/íngreme):** a pressão sobe abruptamente. Pode causar picos pressóricos transitórios (*overshoot*), fechamento reflexo da glote e desconforto em vias aéreas reativas.
- **Muito lento (rampa longa/suave):** a pressão demora a atingir o alvo e a entrega inicial de fluxo pode ser insuficiente para satisfazer o *drive* ventilatório do paciente, gerando sensação de sufocamento (*fome de fluxo*) e aumento do trabalho muscular.
- **Ajuste prático:** individualizar observando o traçado da curva de pressão (evitar concavidade ou *overshoot*) e a expressão facial/conforto do paciente.

---

## 5. Revisão rápida — Módulo 4

- **PSV:** modo espontâneo, ciclado a fluxo, com pressão assistida constante acima da PEEP.
- **Ciclagem a fluxo:** encerrada ao atingir fração do pico de fluxo (padrão habitual em torno de 25%).
- **Ciclagem antecipada (aumentar %):** útil no paciente obstrutivo para encurtar inspiração e salvar tempo expiratório.
- **Ciclagem atrasada (reduzir %):** útil no paciente restritivo para acomodar tempos neurais mais longos.
- **Autodisparo:** disparo falso por vazamento, água no circuito ou gatilho excessivamente sensível.
- **Disparo ineficaz:** esforço que não abre a válvula; principal causa em UTI é auto-PEEP não equilibrada.
- **Duplo disparo:** frequentemente gerado por ciclagem precoce com *drive* elevado.
- **Rise time:** balanço entre atingir a meta de pressão rapidamente sem gerar desconforto ou *overshoot*.

---

## Pontos para conferir com o equipamento e referências

1. Nomenclatura específica do ventilador para ciclagem a fluxo (ex.: Esens, Exp%, Sens. Expiratória).
2. Como o equipamento exibe e parametriza o Rise Time (% de tempo, segundos ou escala numérica de 1 a 9).
3. Configuração do backup de apneia em PSV (tempo de retardo para entrada do backup e parâmetros de resgate).
