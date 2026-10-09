const contentData = {
    modules: [
        {
            id: 'mod1',
            title: 'Módulo 1: Fundamentos',
            content: `
                <h3>Fisiologia Básica</h3>
                <p>Na respiração espontânea, a pressão pleural torna-se mais negativa, reduzindo a pressão alveolar em relação à pressão atmosférica e favorecendo a entrada de ar.</p>
                <p>Na ventilação mecânica invasiva (VMI), o ventilador gera <strong>pressão positiva</strong> na via aérea para movimentar o gás em direção aos pulmões.</p>
                <h3>Componentes do Circuito</h3>
                <ul>
                    <li><strong>Peça em Y:</strong> Conecta ramos inspiratório e expiratório.</li>
                    <li><strong>Espaço Morto Instrumental:</strong> Volume de gás entre a peça em Y e a via aérea do paciente (ex: traqueinha, HMEF). Aumenta a reinspiração de CO₂.</li>
                    <li><strong>HMEF:</strong> Trocador de calor/umidade e filtro. Não recomendado de rotina na VNI se aumentar excessivamente o espaço morto ou a resistência.</li>
                </ul>
                <h3>Curvas Básicas no Tempo (ex: PCV)</h3>
                <ul>
                    <li><strong>Pressão × Tempo:</strong> Mostra a PEEP, pressão inspiratória, pico de pressão e platô (se houver pausa).</li>
                    <li><strong>Fluxo × Tempo:</strong> Fluxo inspiratório acima de zero, expiratório abaixo. Em PCV, o fluxo inspiratório é tipicamente desacelerado. Fluxo expiratório que não zera sugere esvaziamento incompleto (auto-PEEP).</li>
                    <li><strong>Volume × Tempo:</strong> Variação de volume durante o ciclo.</li>
                </ul>
                <h3>Disparo, Ciclagem e I:E</h3>
                <p><strong>Disparo:</strong> Início da inspiração (por tempo ou esforço do paciente - pressão/fluxo).</p>
                <p><strong>Ciclagem:</strong> Fim da inspiração e início da expiração. (ex: tempo em PCV, fluxo em PSV).</p>
                <p><strong>Fórmula Tempo de Ciclo:</strong> T_ciclo = 60 / FR.</p>
            `
        },
        {
            id: 'mod2',
            title: 'Módulo 2: Pressões e Fenótipos',
            content: `
                <h3>Pressões da Mecânica</h3>
                <ul>
                    <li><strong>P_pico (Pressão de Pico):</strong> Maior pressão durante a inspiração. Reflete componentes resistivos + elásticos.</li>
                    <li><strong>P_plat (Pressão de Platô):</strong> Medida com pausa inspiratória (fluxo zero). Estima a pressão alveolar.</li>
                    <li><strong>PEEP_tot (PEEP Total):</strong> Medida com pausa expiratória. (PEEP_ext + auto-PEEP).</li>
                    <li><strong>ΔP (Driving Pressure):</strong> P_plat - PEEP_tot. Estima a pressão de distensão alveolar.</li>
                </ul>
                <h3>Constante de Tempo (τ)</h3>
                <p><strong>τ = Resistência × Complacência.</strong> Em L/s e cmH₂O. O equilíbrio de pressões leva de 3 a 5 constantes de tempo.</p>
                <h3>Fenótipos</h3>
                <p><strong>Obstrutivo (Asma/DPOC):</strong> Resistência ↑. Complacência normal ou ↑. Risco de auto-PEEP elevado. Prioridade: Permitir expiração longa (FR menor, fluxo alto).</p>
                <p><strong>Restritivo (SARA):</strong> Complacência ↓. P_plat elevada e ΔP alta. Prioridade: Ventilação protetora (Volume baixo, evitar P_plat > 30 e ΔP > 15).</p>
            `
        },
        {
            id: 'mod3',
            title: 'Módulo 3: V/Q e VCV',
            content: `
                <h3>Shunt vs Espaço Morto</h3>
                <p><strong>Shunt (V/Q Baixo):</strong> Perfusão sem ventilação (ex: atelectasia, consolidação). Gera hipoxemia frequentemente refratária ao aumento isolado de FiO₂.</p>
                <p><strong>Espaço Morto (V/Q Alto):</strong> Ventilação sem perfusão (ex: TEP, sobredistensão por PEEP). Gera retenção de CO₂ e ventilação desperdiçada.</p>
                <h3>Modo VCV (Volume Controlado)</h3>
                <ul>
                    <li>Variável de controle: Volume.</li>
                    <li>Variável dependente: Pressão.</li>
                    <li>Fluxo constante gera onda quadrada de fluxo e onda linear crescente de volume.</li>
                    <li>A pressão sobe até atingir o P_pico.</li>
                </ul>
                <h3>Mecanismos de Disparo</h3>
                <p><strong>Pressão:</strong> Sensibilidade habitualmente entre -1 a -2 cmH₂O.</p>
                <p><strong>Fluxo:</strong> Bias flow contínuo. Exige menos trabalho do paciente na fase inicial. Sensibilidade habitualmente 1 a 3 L/min.</p>
            `
        },
        {
            id: 'mod4',
            title: 'Módulo 4: PSV e Assincronias',
            content: `
                <h3>PSV (Pressão de Suporte)</h3>
                <p>Modo espontâneo. Ciclagem a fluxo. Não há FR mandatória fixa.</p>
                <h3>Ciclagem a Fluxo (Sensibilidade Expiratória)</h3>
                <p>Padrão: 25% do pico de fluxo.
                <ul>
                    <li><strong>Para Obstrutivos:</strong> Aumentar a % (ex: 40-50%) encerra a inspiração mais cedo, dando tempo expiratório.</li>
                    <li><strong>Para Restritivos (SARA):</strong> Reduzir a % (ex: 10-15%) prolonga a inspiração, acompanhando a forte demanda neural e evitando ciclagem precoce/duplo disparo.</li>
                </ul>
                <h3>Assincronias Principais</h3>
                <ul>
                    <li><strong>Autodisparo:</strong> Vazamentos, água no circuito, gatilho muito sensível.</li>
                    <li><strong>Disparo Ineficaz:</strong> Paciente tenta, mas não dispara. Causa comum: Auto-PEEP não vencida, fraqueza, sedação excessiva.</li>
                    <li><strong>Ciclagem Precoce:</strong> Ventilador cicla antes do paciente terminar o esforço. Gera duplo disparo (breath stacking).</li>
                    <li><strong>Ciclagem Tardia:</strong> Ventilador mantém inspiração enquanto paciente já quer exalar. Causa pico pressórico final e desconforto.</li>
                </ul>
            `
        },
        {
            id: 'mod5',
            title: 'Módulo 5: Mecânica e Hemodinâmica',
            content: `
                <h3>Mecânica Ventilatória</h3>
                <p><strong>Complacência Estática (C_est):</strong> V_T / (P_plat - PEEP_tot). Pulmão normal intubado: 50-80 mL/cmH₂O. SARA: < 35.</p>
                <p><strong>Resistência (R_va):</strong> (P_pico - P_plat) / Fluxo (L/s). Causa de resistência alta: Secreção, broncoespasmo, tubo dobrado/fino.</p>
                <h3>ΔPP (Variação de Pressão de Pulso)</h3>
                <p>Preditor de fluido-responsividade (> 12-13%). <strong>Mas exige 7 critérios rigorosos:</strong></p>
                <ol>
                    <li>Ritmo sinusal regular.</li>
                    <li>Ventilação puramente controlada.</li>
                    <li>Volume corrente > 8 mL/kg. <em>(Não aumentar V_T na SARA grave só para validar a ΔPP!)</em></li>
                    <li>Tórax fechado.</li>
                    <li>Complacência > 30.</li>
                    <li>Ausência de cor pulmonale / disfunção severa VD.</li>
                    <li>Relação FC/FR > 3.6.</li>
                </ol>
            `
        }
    ],
    emergencyGuides: [
        {
            title: 'P_pico Elevada',
            icon: '⚠️',
            content: `
                <div class="guide-card">
                    <h4>Passo 1: Pausa Inspiratória (Medir P_plat)</h4>
                    <p><strong>Se P_plat Normal (Aumento apenas resistivo):</strong></p>
                    <ul>
                        <li>Ouvir murmúrio vesicular: broncoespasmo? (Fazer broncodilatador)</li>
                        <li>Tubo dobrado, mordido ou deslocado seletivamente?</li>
                        <li>Muita secreção / rolha? (Aspirar)</li>
                        <li>HMEF sujo/condensado? (Trocar/Retirar)</li>
                    </ul>
                    <p><strong>Se P_plat Alta (Aumento elástico):</strong></p>
                    <ul>
                        <li>Pneumotórax hipertensivo? (Avaliar clínica/USG/Raio-x -> Drenagem)</li>
                        <li>Atelectasia maciça?</li>
                        <li>Edema Agudo de Pulmão (EAP)?</li>
                        <li>Piora da SARA / Auto-PEEP severa (medir PEEP_tot).</li>
                        <li>Problema extrapulmonar: distensão abdominal / obesidade severa / ascite.</li>
                    </ul>
                </div>
            `
        },
        {
            title: 'Hipotensão pós-Intubação',
            icon: '📉',
            content: `
                <div class="guide-card">
                    <h4>Causas e Condutas Rápidas</h4>
                    <ul>
                        <li><strong>Drogas:</strong> Efeito vasodilatador/inotrópico negativo das drogas de intubação (Propofol, Fentanil). <em>Conduta: Vasopressor (Noradrenalina), fluidos se indicado.</em></li>
                        <li><strong>Auto-PEEP / Hiperinsuflação (especial em asma/DPOC):</strong> Aumento da pressão intratorácica diminui brutalmente o retorno venoso. <em>Conduta: Desconexão breve do circuito (apnéia) até desinsuflar. Reduzir FR e aumentar fluxo para dar tempo expiratório.</em></li>
                        <li><strong>Pneumotórax:</strong> Especialmente se tentativa de acesso venoso central prévio ou barotrauma. <em>Conduta: Descompressão torácica por agulha / dreno.</em></li>
                    </ul>
                </div>
            `
        },
        {
            title: 'Assincronias: Ajuste Rápido',
            icon: '🔄',
            content: `
                <div class="guide-card">
                    <ul>
                        <li><strong>Paciente "brigando", volume sendo empilhado (Duplo Disparo):</strong> Ciclagem está precoce. Fluxo pode estar muito baixo em VCV ou % de ciclagem muito alta em PSV. Paciente está com alta demanda.</li>
                        <li><strong>Ventilador dispara sozinho (Autodisparo):</strong> Verificar vazamentos (cuff vazio?), diminuir sensibilidade (deixar menos sensível, ex: de 1 para 3 L/min).</li>
                        <li><strong>Paciente tenta mas não ganha volume (Disparo ineficaz):</strong> Provável Auto-PEEP alta. Tempo expiratório está curto. Aumentar tempo expiratório (reduzir FR, aumentar fluxo insp). Ajustar PEEP externa (~80% da auto-peep em obstrutivos para calçar vias aéreas).</li>
                    </ul>
                </div>
            `
        }
    ]
};
