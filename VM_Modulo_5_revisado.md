# Ventilação Mecânica — Módulo 5
## Mecânica ventilatória e interação coração–pulmão

> **Objetivos:** compreender as condições técnicas para cálculo fidedigno da complacência estática e resistência de vias aéreas, interpretar as repercussões hemodinâmicas da ventilação mecânica e analisar a variação da pressão de pulso (ΔPP / PPV) com rigor clínico.
>
> **Nota de segurança:** material de estudo e apoio ao raciocínio clínico. Medidas de mecânica exigem paciente passivo e ausência de vazamento. Índices de responsividade hemodinâmica possuem pré-requisitos rigorosos e não devem motivar hiper-hidratação indiscriminada.

---

## 1. Condições para medir mecânica respiratória

A interpretação das pressões e o cálculo de mecânica dependem de condições estritas de calibração e ventilação passiva:

1. **Paciente passivo:** ausência de esforço inspiratório ou expiratório ativo (sedação adequada ou bloqueio neuromuscular, quando indicado). Esforços distorcem a pressão de platô e a PEEP total.
2. **Modo VCV com fluxo constante (onda quadrada):** o fluxo constante permite calcular com precisão a resistência das vias aéreas.
3. **Ausência de vazamentos:** fístulas broncopleurais ou *cuff* desinsuflado impedem a estabilização do platô de pressão.
4. **Pausa inspiratória oclusiva:** duração suficiente (0,5 a 2 segundos) para permitir equilíbrio de pressões com fluxo zero.
5. **Pausa expiratória oclusiva:** mantida até equilíbrio para medir a PEEP total e quantificar a auto-PEEP.

---

## 2. Complacência estática do sistema respiratório

A **complacência estática ($C_{est}$)** expressa a capacidade de distensão elástica combinada do parênquima pulmonar e da caixa torácica.

\[
C_{est} = \frac{V_T}{P_{plat} - PEEP_{tot}}
\]

Em que:
- \(V_T\) = volume corrente entregue (em mL);
- \(P_{plat}\) = pressão de platô obtida em pausa inspiratória (em cmH₂O);
- \(PEEP_{tot}\) = PEEP total obtida em pausa expiratória (\(PEEP_{ext} + \text{auto-PEEP}\), em cmH₂O).

O denominador corresponde à **Pressão de Distensão (*Driving Pressure*, \(\Delta P\))**:

\[
\Delta P = P_{plat} - PEEP_{tot}
\]

Portanto:
\[
C_{est} = \frac{V_T}{\Delta P}
\]

### Exemplo de cálculo

- \(V_T = 400\) mL
- \(P_{plat} = 18\) cmH₂O
- \(PEEP_{tot} = 7\) cmH₂O

1. \(\Delta P = 18 - 7 = 11\ \text{cmH}_2\text{O}\)
2. \(C_{est} = \frac{400}{11} \approx 36{,}4\ \text{mL/cmH}_2\text{O}\)

### Interpretação clínica

- **Complacência reduzida:** necessária maior pressão para insuflar o mesmo volume. Ocorre em SARA, edema pulmonar cardiogênico, pneumonia extensa, atelectasias maciças, pneumotórax, fibrose pulmonar, e causas extrapulmonares (hipertensão intra-abdominal, derrame pleural maciço, obesidade severa, deformidades de caixa torácica).
- **Valores habituais de referência em ventilação mecânica:**
  - Pulmão normal intubado: ~50 a 80 mL/cmH₂O.
  - SARA moderada a grave: frequentemente < 30 a 35 mL/cmH₂O.
  - A gravidade da SARA não é definida apenas pela complacência, mas pela relação \(PaO_2/FiO_2\) conforme critérios de Berlim/Globais.

---

## 3. Resistência das vias aéreas

A **resistência das vias aéreas ($R_{va}$)** mede a oposição ao fluxo de gás através do tubo orotraqueal e da árvore traqueobrônquica durante a fase inspiratória.

Em modo VCV com fluxo constante (\(\dot V\)) e paciente passivo:

\[
R_{va} = \frac{P_{pico} - P_{plat}}{\dot V}
\]

> **Atenção à unidade de fluxo:** o fluxo \(\dot V\) deve ser convertido de **L/min para L/s** (dividindo por 60) para que o resultado seja expresso em **cmH₂O·s/L** (ou cmH₂O/(L/s)).

### Tabela de conversão de fluxo

| Fluxo em L/min | Conversão (\(\div 60\)) | Fluxo em L/s |
|---|---|---|
| **60 L/min** | \(60 / 60\) | **1,0 L/s** |
| **45 L/min** | \(45 / 60\) | **0,75 L/s** |
| **30 L/min** | \(30 / 60\) | **0,5 L/s** |
| **24 L/min** | \(24 / 60\) | **0,4 L/s** |

### Exemplo de cálculo

- \(P_{pico} = 30\) cmH₂O
- \(P_{plat} = 20\) cmH₂O
- Fluxo ajustado = 60 L/min = 1,0 L/s

\[
R_{va} = \frac{30 - 20}{1{,}0} = 10\ \text{cmH}_2\text{O}\cdot\text{s/L}
\]

Se o fluxo fosse 30 L/min (0,5 L/s):
\[
R_{va} = \frac{30 - 20}{0{,}5} = 20\ \text{cmH}_2\text{O}\cdot\text{s/L}
\]

### Causas de elevação de resistência ($P_{pico} \uparrow$ com $P_{plat}$ normal)
1. **Intraluminais:** secreção espessa, rolha mucosa, sangue, corpo estranho.
2. **Prótese ventilatória:** tubo dobrado, mordido, de calibre muito pequeno (ex.: TOT 6.5 em adulto alto) ou filtro HME saturado com secreção/condensado.
3. **Brônquicas:** broncoespasmo severo (asma descompensada, exacerbação de DPOC).

---

## 4. Interação coração–pulmão e variação da pressão de pulso (ΔPP / PPV)

A ventilação com pressão positiva altera diretamente o retorno venoso, a pós-carga ventricular e o débito cardíaco:
- **Inspiração com pressão positiva:** eleva a pressão intratorácica, comprime a veia cava e diminui o retorno venoso ao ventrículo direito (VD).
- **Após 2 a 3 batimentos cardíacos:** essa diminuição de enchimento chega ao ventrículo esquerdo (VE), reduzindo transitoriamente o volume sistólico e a pressão de pulso arterial durante a expiração mecânica.

### Cálculo da ΔPP (Pulse Pressure Variation)

A partir da linha arterial invasiva (PAI):

\[
\Delta PP(\%) = \frac{PP_{max} - PP_{min}}{(PP_{max} + PP_{min}) / 2} \times 100
\]

Em que a Pressão de Pulso é a diferença entre a pressão arterial sistólica e diastólica: \(PP = PAS - PAD\).

### Interpretação e ponto de corte

- Valores acima de **12–13%** sugerem que o paciente pode ser respondedor a volume (isto é, aumentar o débito cardíaco em $\ge 10-15\%$ com infusão de cristaloides).
- **Atenção clínica:** "Responsividade a volume" **NÃO significa** necessidade obrigatória de infusão de volume. O paciente só deve receber fluidos se houver hipoperfusão tecidual (lactato elevado, tempo de enchimento capilar lentificado, oligúria) e baixo risco de edema pulmonar/congestão.

### Os 7 pré-requisitos obrigatórios para validação da ΔPP

A ΔPP perde totalmente a acurácia se esses critérios não forem rigorosamente cumpridos:

1. **Ritmo cardíaco sinusal regular:** arritmias (fibrilação atrial, extrassístoles frequentes) invalidam a medida.
2. **Ventilação puramente controlada:** sem nenhum esforço espontâneo do paciente.
3. **Volume corrente protetor adequado ($\ge 8\text{ mL/kg}$):** volumes baixos ($6\text{ mL/kg}$) podem gerar falso-negativos por não causarem variação intratorácica suficiente. *(Importante: NÃO aumentar o volume para 8 mL/kg em pacientes com SARA grave apenas para medir ΔPP; utilize manobras alternativas como o teste de elevação passiva das pernas ou o teste de oclusão expiratória final).*
4. **Tórax fechado:** toracotomias ou drenos com grande vazamento invalidam a dinâmica intratorácica.
5. **Complacência do sistema respiratório preservada ($> 30\text{ mL/cmH}_2\text{O}$):** em pulmões "duros" (SARA), a pressão alveolar não se transmite adequadamente às estruturas vasculares.
6. **Ausência de disfunção ventricular direita grave:** cor pulmonale agudo ou hipertensão pulmonar geram variações acentuadas sem relação com volemia.
7. **Relação FC/FR $> 3{,}6$:** evita interferências de ressonância mecânica.

---

## 5. Revisão rápida — Módulo 5

- **$C_{est} = V_T / (P_{plat} - PEEP_{tot})$**: avalia a complacência de todo o sistema respiratório.
- **$\Delta P = P_{plat} - PEEP_{tot}$**: meta protetora clássica habitualmente abaixo de 14–15 cmH₂O na SARA.
- **$R_{va} = (P_{pico} - P_{plat}) / \dot V$**: exige fluxo constante convertido em L/s.
- **$P_{pico} \uparrow$ isolada:** causa resistiva (secreção, broncoespasmo, dobra do tubo).
- **$P_{pico} \uparrow$ junto com $P_{plat} \uparrow$:** causa elástica/complacência (SARA, atelectasia, pneumotórax, ascite maciça).
- **ΔPP > 12–13%:** indicador dinâmico de responsividade a fluidos, válido apenas sob critérios rígidos (ritmo sinusal, sem esforço, volume adequado).

---

## Pontos para conferir com as referências

1. Unidades de fluxo na tela do ventilador utilizado no serviço (L/min vs. L/s).
2. Protocolo institucional para avaliação de fluido-responsividade (uso preferencial de elevação passiva das pernas / PLR ou oclusão expiratória na SARA).
3. Metas de complacência e driving pressure adotadas na rotina de UTI.
