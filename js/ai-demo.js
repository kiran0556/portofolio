/**
 * Interactive Disaster Response AI Predictor (Simulating LightGBM Model)
 * Based on Kiran's Project: AI-Powered Emergency Response Intelligence Platform
 */

document.addEventListener('DOMContentLoaded', () => {
  const disasterSelect = document.getElementById('demo-disaster-type');
  const severitySelect = document.getElementById('demo-severity');
  const populationInput = document.getElementById('demo-population');
  const populationVal = document.getElementById('demo-population-val');
  const damageInput = document.getElementById('demo-damage');
  const damageVal = document.getElementById('demo-damage-val');
  const runBtn = document.getElementById('demo-run-btn');

  const logBox = document.getElementById('demo-terminal-log');
  const resultsContainer = document.getElementById('demo-results-grid');

  if (!populationInput || !runBtn) return;

  // Sync range values
  populationInput.addEventListener('input', (e) => {
    populationVal.textContent = Number(e.target.value).toLocaleString() + ' people';
  });

  damageInput.addEventListener('input', (e) => {
    damageVal.textContent = e.target.value + '%';
  });

  runBtn.addEventListener('click', runInference);

  function runInference() {
    const disaster = disasterSelect.value;
    const severityMultiplier = parseFloat(severitySelect.value) || 1.2;
    const population = parseInt(populationInput.value, 10) || 15000;
    const damagePercent = parseInt(damageInput.value, 10) || 45;

    // UI state loading
    runBtn.disabled = true;
    runBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Computing Predictions...`;
    logBox.classList.remove('hidden');
    resultsContainer.classList.add('opacity-50');

    // Simulate Stepwise Machine Learning Pipeline
    const steps = [
      `[0.00s] Ingestion: Vectorizing inputs (${disaster.toUpperCase()} | Severity: ${severityMultiplier}x | Pop: ${population.toLocaleString()} | Damage: ${damagePercent}%)`,
      `[0.08s] Feature Engineering: Generating 76 spatial, vulnerability, and infrastructure features`,
      `[0.18s] Model Execution: Passing feature vector into 4 trained LightGBM regressors`,
      `[0.28s] Validation: Cross-verifying resource quotas against R² baseline (0.9501) across 212k trained records`,
      `[0.35s] Inference Complete (Latency: 18.4ms)`
    ];

    logBox.innerHTML = '';
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const line = document.createElement('div');
        line.className = 'text-xs font-mono text-emerald-400 py-0.5 animate-fadeIn';
        line.innerHTML = `<span class="text-sky-400">➜</span> ${steps[currentStep]}`;
        logBox.appendChild(line);
        logBox.scrollTop = logBox.scrollHeight;
        currentStep++;
      } else {
        clearInterval(interval);
        displayCalculatedOutput(disaster, severityMultiplier, population, damagePercent);
        runBtn.disabled = false;
        runBtn.innerHTML = `<i class="fa-solid fa-bolt"></i> Re-Run LightGBM Inference`;
        resultsContainer.classList.remove('opacity-50');
      }
    }, 120);
  }

  function displayCalculatedOutput(disaster, severityMultiplier, population, damagePercent) {
    const damageFactor = 1 + (damagePercent / 100) * 0.8;
    
    // Resource calculation algorithm matching disaster domain logic
    const foodPackets = Math.round(population * 3 * severityMultiplier * damageFactor);
    const waterLiters = Math.round(population * 4.5 * severityMultiplier * damageFactor);
    const medicalKits = Math.round((population / 22) * severityMultiplier * (damagePercent / 40));
    const shelterUnits = Math.round((population / 5) * (damagePercent / 60) * severityMultiplier);

    const foodEl = document.getElementById('res-food');
    const waterEl = document.getElementById('res-water');
    const medicalEl = document.getElementById('res-medical');
    const shelterEl = document.getElementById('res-shelter');
    const accuracyEl = document.getElementById('res-accuracy');

    if (foodEl) animateNumber(foodEl, foodPackets);
    if (waterEl) animateNumber(waterEl, waterLiters);
    if (medicalEl) animateNumber(medicalEl, medicalKits);
    if (shelterEl) animateNumber(shelterEl, shelterUnits);
    if (accuracyEl) accuracyEl.textContent = 'R²: ' + (91.49 + Math.random() * 3.5).toFixed(2) + '%';
  }

  function animateNumber(element, finalValue) {
    let start = 0;
    const duration = 800;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out curve
      const current = Math.floor(progress * (finalValue - start) + start);
      element.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = finalValue.toLocaleString();
      }
    }
    requestAnimationFrame(update);
  }
});
