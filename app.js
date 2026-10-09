// Navigation & UI Helpers
document.addEventListener('DOMContentLoaded', () => {
  setupScrollSpy();
  setupDeltaPPChecklist();
  setupSearch();
});

// Toggle mobile sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.btn-mobile-toggle');
  if (sidebar && sidebar.classList.contains('open')) {
    if (!sidebar.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
      sidebar.classList.remove('open');
    }
  }
});

// Scrollspy for sidebar links
function setupScrollSpy() {
  const sections = document.querySelectorAll('.module-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const bottomNavLinks = document.querySelectorAll('.bottom-nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.pageYOffset + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });

      bottomNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Global Search Filter
function setupSearch() {
  const searchInput = document.getElementById('filterNav');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    filterContent();
  });
}

function filterContent() {
  const query = document.getElementById('filterNav').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.card, .calc-item');
  const sections = document.querySelectorAll('.module-section');

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (query === '' || text.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });

  // Ensure sections show up if any of their cards are visible
  sections.forEach(sec => {
    if (query === '') {
      sec.style.display = '';
      return;
    }
    const visibleCards = sec.querySelectorAll('.card:not([style*="display: none"]), .calc-item:not([style*="display: none"])');
    if (visibleCards.length > 0 || sec.querySelector('.section-title').innerText.toLowerCase().includes(query)) {
      sec.style.display = '';
    } else {
      sec.style.display = 'none';
    }
  });
}

function clearSearch() {
  const input = document.getElementById('filterNav');
  if (input) {
    input.value = '';
    filterContent();
  }
}

// ================= CALCULADORAS CLÍNICAS =================

// 1. PBW e Volumes Protetores
function calcPBW() {
  const sex = document.querySelector('input[name="pbw-sex"]:checked').value;
  const height = parseFloat(document.getElementById('pbw-height').value);
  const res = document.getElementById('pbw-result');

  if (!height || height < 100 || height > 240) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Insira uma altura válida entre 100 e 240 cm.';
    return;
  }

  const diff = height - 152.4;
  const pbw = sex === 'male' ? (50 + 0.91 * diff) : (45.5 + 0.91 * diff);

  const vt4 = Math.round(pbw * 4);
  const vt5 = Math.round(pbw * 5);
  const vt6 = Math.round(pbw * 6);
  const vt7 = Math.round(pbw * 7);
  const vt8 = Math.round(pbw * 8);

  res.style.display = 'block';
  res.className = 'result-badge success';
  res.innerHTML = `
    <div style="font-size: 1.05rem; font-weight:700; margin-bottom: 0.5rem; color:#38bdf8;">
      ⚖️ Peso Predito (PBW): ${pbw.toFixed(1)} kg (${sex === 'male' ? 'Masculino' : 'Feminino'})
    </div>
    <div style="font-size: 0.88rem; line-height: 1.6;">
      • <strong>4 mL/kg:</strong> <strong>${vt4} mL</strong> <span style="color:#94a3b8;">(SARA grave / Hipercapnia permissiva)</span><br>
      • <strong>5 mL/kg:</strong> <strong>${vt5} mL</strong> <span style="color:#94a3b8;">(SARA moderada)</span><br>
      • <strong>6 mL/kg:</strong> <strong>${vt6} mL</strong> <span style="color:#86efac; font-weight:bold;">★ Meta Protetora Ouro</span><br>
      • <strong>7 mL/kg:</strong> <strong>${vt7} mL</strong> <span style="color:#94a3b8;">(Transição)</span><br>
      • <strong>8 mL/kg:</strong> <strong>${vt8} mL</strong> <span style="color:#fcd34d;">(Teto máximo protetor / Não lesado)</span>
    </div>
  `;
}

// 2. Mecânica Ventilatória Completa (All-in-One)
function calcMechanicsAll() {
  const vt = parseFloat(document.getElementById('all-vt').value);
  const ppico = parseFloat(document.getElementById('all-ppico').value);
  const pplat = parseFloat(document.getElementById('all-pplat').value);
  const peep = parseFloat(document.getElementById('all-peep').value);
  const flowMin = parseFloat(document.getElementById('all-flow').value);
  const res = document.getElementById('all-mech-result');

  if (isNaN(vt) || isNaN(ppico) || isNaN(pplat) || isNaN(peep) || isNaN(flowMin) || flowMin <= 0) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Preencha todos os parâmetros com valores numéricos válidos.';
    return;
  }

  if (pplat > ppico) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Erro fisiológico: A Pressão de Platô (Pplat) não pode ser superior à Pressão de Pico (Ppico).';
    return;
  }

  if (peep >= pplat) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Erro fisiológico: A PEEP total não pode ser igual ou maior que a Pressão de Platô.';
    return;
  }

  const dp = pplat - peep;
  const cest = vt / dp;
  const flowSec = flowMin / 60; // Converte L/min para L/s
  const rva = (ppico - pplat) / flowSec;
  const pres = ppico - pplat;

  let warnings = [];
  if (dp > 14) warnings.push('⚠️ <strong>Driving Pressure > 14 cmH₂O:</strong> Risco aumentado de VILI (estresse de cisalhamento alveolar). Avalie reduzir VT.');
  if (pplat > 30) warnings.push('⚠️ <strong>Pressão de Platô > 30 cmH₂O:</strong> Limite de segurança ultrapassado (barotrauma/volutrauma).');
  if (cest < 30) warnings.push('⚠️ <strong>Complacência Estática < 30 mL/cmH₂O:</strong> Pulmão extremamente rígido / SARA moderada a grave.');
  if (rva > 12) warnings.push('⚠️ <strong>Resistência > 12 cmH₂O/L/s:</strong> Componente resistivo aumentado (broncoespasmo, secreção ou tubo fino/dobrado).');

  let warningBox = '';
  if (warnings.length > 0) {
    warningBox = `
      <div style="margin-top: 0.75rem; padding: 0.65rem; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); border-radius: 6px; font-size: 0.85rem; color: #fca5a5;">
        ${warnings.join('<br>')}
      </div>
    `;
  }

  res.style.display = 'block';
  res.className = warnings.length === 0 ? 'result-badge success' : 'result-badge warning';
  res.innerHTML = `
    <div style="font-size: 1rem; font-weight:700; margin-bottom: 0.5rem; color:#38bdf8;">
      📊 Resultado da Mecânica Estática:
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.9rem;">
      <div>• <strong>Driving Pressure (ΔP):</strong> <span style="font-weight:700; color:${dp <= 14 ? '#86efac' : '#fca5a5'}">${dp.toFixed(1)} cmH₂O</span></div>
      <div>• <strong>Complacência (Cest):</strong> <span style="font-weight:700; color:${cest >= 50 ? '#86efac' : (cest >= 30 ? '#fcd34d' : '#fca5a5')}">${cest.toFixed(1)} mL/cmH₂O</span></div>
      <div>• <strong>Resistência (Rva):</strong> <span style="font-weight:700; color:${rva <= 12 ? '#86efac' : '#fca5a5'}">${rva.toFixed(1)} cmH₂O·s/L</span></div>
      <div>• <strong>Pressão Resistiva (Pres):</strong> ${pres.toFixed(1)} cmH₂O</div>
    </div>
    ${warningBox}
  `;
}

// 3. Driving Pressure Isolada
function calcDrivingPressure() {
  const pplat = parseFloat(document.getElementById('dp-pplat').value);
  const peeptot = parseFloat(document.getElementById('dp-peeptot').value);
  const res = document.getElementById('dp-result');

  if (isNaN(pplat) || isNaN(peeptot)) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Preencha os campos numéricos.';
    return;
  }

  const dp = pplat - peeptot;
  res.style.display = 'block';

  if (dp <= 14) {
    res.className = 'result-badge success';
    res.innerHTML = `<strong>Driving Pressure: ${dp.toFixed(1)} cmH₂O</strong><br>Status: <strong>PROTETORA (≤ 14 cmH₂O)</strong>`;
  } else {
    res.className = 'result-badge danger';
    res.innerHTML = `<strong>Driving Pressure: ${dp.toFixed(1)} cmH₂O</strong><br>Status: <strong>ELEVADA / ALTO RISCO DE VILI (> 14 cmH₂O)</strong><br><small>Conduta: Considere reduzir o volume corrente ou titular PEEP.</small>`;
  }
}

// 4. Complacência Estática Isolada
function calcCest() {
  const vt = parseFloat(document.getElementById('cest-vt').value);
  const dp = parseFloat(document.getElementById('cest-dp').value);
  const res = document.getElementById('cest-result');

  if (!vt || !dp || dp <= 0) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Preencha valores válidos com Driving Pressure maior que zero.';
    return;
  }

  const cest = vt / dp;
  res.style.display = 'block';

  if (cest >= 50) {
    res.className = 'result-badge success';
    res.innerHTML = `<strong>Cest: ${cest.toFixed(1)} mL/cmH₂O</strong><br>Classificação: <strong>NORMAL PARA INTUBADO (≥ 50 mL/cmH₂O)</strong>`;
  } else if (cest >= 30) {
    res.className = 'result-badge warning';
    res.innerHTML = `<strong>Cest: ${cest.toFixed(1)} mL/cmH₂O</strong><br>Classificação: <strong>COMPROMETIMENTO MODERADO (30 a 50 mL/cmH₂O)</strong>`;
  } else {
    res.className = 'result-badge danger';
    res.innerHTML = `<strong>Cest: ${cest.toFixed(1)} mL/cmH₂O</strong><br>Classificação: <strong>PULMÃO RÍGIDO / SARA GRAVE (< 30 mL/cmH₂O)</strong>`;
  }
}

// 5. Resistência Isolada
function calcRva() {
  const ppico = parseFloat(document.getElementById('rva-ppico').value);
  const pplat = parseFloat(document.getElementById('rva-pplat').value);
  const flowMin = parseFloat(document.getElementById('rva-flow').value);
  const res = document.getElementById('rva-result');

  if (isNaN(ppico) || isNaN(pplat) || !flowMin || flowMin <= 0) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Preencha valores válidos.';
    return;
  }

  const flowSec = flowMin / 60;
  const rva = (ppico - pplat) / flowSec;
  res.style.display = 'block';

  if (rva <= 12) {
    res.className = 'result-badge success';
    res.innerHTML = `<strong>Rva: ${rva.toFixed(1)} cmH₂O·s/L</strong><br>Status: <strong>NORMAL EM INTUBADO (≤ 12)</strong>`;
  } else {
    res.className = 'result-badge danger';
    res.innerHTML = `<strong>Rva: ${rva.toFixed(1)} cmH₂O·s/L</strong><br>Status: <strong>AUMENTADA (> 12)</strong><br><small>Investigar broncoespasmo, secreção retida no tubo ou circuito acotovelado.</small>`;
  }
}

// 6. Delta PP Numérico
function calcDPP() {
  const max = parseFloat(document.getElementById('dpp-max').value);
  const min = parseFloat(document.getElementById('dpp-min').value);
  const res = document.getElementById('dpp-result');

  if (!max || !min || (max + min) === 0) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Preencha pressões de pulso válidas.';
    return;
  }

  const mean = (max + min) / 2;
  const dpp = ((max - min) / mean) * 100;
  res.style.display = 'block';

  if (dpp > 13) {
    res.className = 'result-badge success';
    res.innerHTML = `
      <strong>ΔPP: ${dpp.toFixed(1)}%</strong><br>
      Interpretação: <strong>PROVÁVEL FLUIDO-RESPONSIVO (> 13%)</strong><br>
      <small>⚠️ Lembre-se de validar se o paciente cumpre TODOS os 7 critérios do checklist abaixo antes de prescrever expansão volêmica.</small>
    `;
  } else {
    res.className = 'result-badge warning';
    res.innerHTML = `
      <strong>ΔPP: ${dpp.toFixed(1)}%</strong><br>
      Interpretação: <strong>NÃO RESPONSIVO A VOLUME (≤ 13%)</strong><br>
      <small>Expansão volêmica pode não gerar ganho de débito e precipitar congestão pulmonar.</small>
    `;
  }
}

// 7. Checklist dos 7 Critérios do Delta PP
function setupDeltaPPChecklist() {
  const checkboxes = document.querySelectorAll('.deltapp-check');
  const banner = document.getElementById('deltapp-validation-banner');
  if (!checkboxes.length || !banner) return;

  function updateChecklist() {
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    banner.classList.remove('hidden');
    if (checkedCount === checkboxes.length) {
      banner.className = 'validation-banner valid';
      banner.innerHTML = '✅ <strong>MEDIDA DE ΔPP 100% VÁLIDA:</strong> Todos os 7 critérios obrigatórios estão atendidos. O valor do ΔPP pode orientar prova volêmica.';
    } else {
      banner.className = 'validation-banner invalid';
      banner.innerHTML = `❌ <strong>MEDIDA DE ΔPP INVÁLIDA (${checkedCount}/7 critérios atendidos):</strong> O valor do ΔPP não é confiável para predizer resposta volêmica. Risco de falsos positivos/negativos.`;
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateChecklist);
  });
}

// 8. Calculadora de Tempo de Ciclo e Relação I:E
function calcCycleTime() {
  const fr = parseFloat(document.getElementById('cycle-fr').value);
  const tinsp = parseFloat(document.getElementById('cycle-tinsp').value);
  const res = document.getElementById('cycle-result');

  if (!fr || fr <= 0 || !tinsp || tinsp <= 0) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = '⚠️ Insira uma FR e um Tempo Inspiratório válidos.';
    return;
  }

  const tCiclo = 60 / fr;

  if (tinsp >= tCiclo) {
    res.style.display = 'block';
    res.className = 'result-badge danger';
    res.innerHTML = `⚠️ Tempo Inspiratório (${tinsp}s) deve ser menor que o Tempo Total do Ciclo (${tCiclo.toFixed(2)}s).`;
    return;
  }

  const tExp = tCiclo - tinsp;
  const ratioE = tExp / tinsp;

  res.style.display = 'block';
  res.className = 'result-badge success';
  res.innerHTML = `
    <strong>Tempo do Ciclo Total:</strong> ${tCiclo.toFixed(2)} segundos<br>
    <strong>Tempo Expiratório (Texp):</strong> ${tExp.toFixed(2)} segundos<br>
    <strong>Relação I:E Resultante:</strong> 1 : ${ratioE.toFixed(1)}
  `;
}
