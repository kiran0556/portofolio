/**
 * Project Data & Modal Management
 */

const portfolioProjects = [
  {
    id: 'ai-emergency',
    title: 'AI-Powered Emergency Response Intelligence Platform',
    category: 'aiml',
    badge: 'Flagship AI/ML Project',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/40',
    date: '08/2026 – 10/2026',
    shortDesc: 'Disaster management prediction platform training LightGBM on 212k+ records and 76 features to forecast critical relief resources with 95.01% accuracy.',
    stack: ['Python', 'Pandas', 'NumPy', 'LightGBM', 'FastAPI', 'React.js', 'Machine Learning'],
    stats: [
      { label: 'Records Analyzed', value: '212,121' },
      { label: 'Features Extracted', value: '76' },
      { label: 'Model R² Accuracy', value: '91.49% - 95.01%' },
      { label: 'Prediction Targets', value: '4 Key Resources' }
    ],
    bullets: [
      'Developed an AI-powered disaster management platform using LightGBM, leveraging 212,121 records and 76 features to predict critical emergency resource requirements.',
      'Engineered end-to-end data preprocessing, missing-value imputation, feature selection, and machine learning models to predict food packets, water, medical kits, and shelter requirements, achieving R² scores of 91.49% to 95.01% across four distinct models.',
      'Integrated machine learning predictions with FastAPI application endpoints to deliver actionable real-time resource estimates, supporting data-driven decision-making and emergency relief logistics.'
    ],
    architecture: 'Processed raw disaster occurrence & damage datasets using Pandas & NumPy, engineered multi-dimensional spatial/impact features, trained regularized LightGBM regressors with hyperparameter tuning, and exposed high-throughput REST inference endpoints consumed by a modern React dashboard.',
    github: 'https://github.com/kiran0556',
    live: '#ai-demo-section',
    isDemoAvailable: true
  },
  {
    id: 'geo-attendance',
    title: 'Smart Geo-Attendance System',
    category: 'fullstack',
    badge: 'Full-Stack MERN + Geofencing',
    badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-950/40',
    date: '07/2026 – 08/2026',
    shortDesc: 'Full-stack MERN attendance verification platform used by 50+ students with GPS geofencing radius validation to eliminate proxy attendance in real time.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'GPS Geofencing', 'REST APIs'],
    stats: [
      { label: 'Active Users', value: '50+ Students' },
      { label: 'Validation Type', value: 'GPS Geofencing' },
      { label: 'Security', value: 'JWT + RBAC' },
      { label: 'Reporting', value: 'Automated CSV/PDF' }
    ],
    bullets: [
      'Built and deployed a full-stack MERN attendance platform used by 50+ students, with GPS-based geofencing to verify physical presence in real time.',
      'Designed separate Admin and Student portals with JWT authentication and role-based access control (RBAC) to secure sensitive routes and academic records.',
      'Developed RESTful APIs with Mongoose schemas for attendance, user profiles, and lecture sessions, plus automated report generation for administrators.',
      'Implemented geofencing with radius-based coordinates validation to strictly prevent proxy check-ins and unauthorized attempts.'
    ],
    architecture: 'MERN stack architecture with JWT cookie-based session handling, HTML5 Geolocation API cross-checked on Express server with mathematical Haversine distance bounding, and MongoDB time-series indexes for rapid aggregation.',
    github: 'https://github.com/kiran0556',
    live: 'https://github.com/kiran0556',
    isDemoAvailable: false
  },
  {
    id: 'cgpa-calc',
    title: 'Student-CGPA-Calculator',
    category: 'web',
    badge: 'OCR & Data Visualization',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40',
    date: '05/2025 – 06/2025',
    shortDesc: 'Client-side OCR web application that extracts student marks directly from grade sheets, visualizes academic trends with Chart.js, and exports PDF reports.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'OCR (Tesseract.js)', 'Chart.js', 'jsPDF'],
    stats: [
      { label: 'Input Mode', value: 'Image OCR Extraction' },
      { label: 'Client Processing', value: '100% In-Browser' },
      { label: 'Visualization', value: 'Chart.js Analytics' },
      { label: 'Export', value: 'Instant jsPDF' }
    ],
    bullets: [
      'Built an OCR-powered web app that extracts grades and marks from university result sheets, automating CGPA computation and eliminating error-prone manual entry.',
      'Integrated Tesseract.js client-side OCR for complete student data privacy with zero backend storage requirements.',
      'Added performance analytics with interactive Chart.js line and radar diagrams, plus 1-click comprehensive PDF report generation using jsPDF.'
    ],
    architecture: 'Pure client-side single-page app utilizing Web Workers for non-blocking OCR tokenization, regex-based grade parsing, dynamic credit weighting calculations, and reactive Chart.js canvas rendering.',
    github: 'https://github.com/kiran0556',
    live: 'https://github.com/kiran0556',
    isDemoAvailable: false
  }
];

function openProjectModal(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalContainer = document.getElementById('project-modal-container');

  let statsHtml = project.stats.map(s => `
    <div class="p-3 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-700/40">
      <div class="text-xs text-slate-400 font-medium">${s.label}</div>
      <div class="text-lg font-bold text-sky-400">${s.value}</div>
    </div>
  `).join('');

  let stackHtml = project.stack.map(tech => `
    <span class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
      ${tech}
    </span>
  `).join('');

  let bulletsHtml = project.bullets.map(b => `
    <li class="flex items-start gap-2.5 text-slate-300 dark:text-slate-300 text-sm leading-relaxed">
      <i class="fa-solid fa-circle-check text-sky-400 mt-1 flex-shrink-0 text-xs"></i>
      <span>${b}</span>
    </li>
  `).join('');

  let demoAction = project.isDemoAvailable 
    ? `<a href="#ai-demo-section" onclick="closeProjectModal()" class="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:brightness-110 transition shadow-lg shadow-sky-500/20 flex items-center gap-2">
         <i class="fa-solid fa-play"></i> Try Interactive Demo
       </a>`
    : `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:brightness-110 transition shadow-lg shadow-sky-500/20 flex items-center gap-2">
         <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Preview
       </a>`;

  modalContainer.innerHTML = `
    <div class="flex items-start justify-between border-b border-slate-700/50 pb-4">
      <div>
        <div class="flex items-center gap-3 mb-2 flex-wrap">
          <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full border ${project.badgeColor}">
            ${project.badge}
          </span>
          <span class="text-xs text-slate-400 font-mono">
            <i class="fa-regular fa-calendar-days mr-1"></i>${project.date}
          </span>
        </div>
        <h3 class="text-2xl font-bold text-white">${project.title}</h3>
      </div>
      <button onclick="closeProjectModal()" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
      ${statsHtml}
    </div>

    <!-- Tech Stack -->
    <div class="my-4">
      <h4 class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Technologies & Libraries</h4>
      <div class="flex flex-wrap gap-2">
        ${stackHtml}
      </div>
    </div>

    <!-- Key Contributions -->
    <div class="my-4">
      <h4 class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Key Engineering Contributions</h4>
      <ul class="space-y-2">
        ${bulletsHtml}
      </ul>
    </div>

    <!-- Architecture & Implementation -->
    <div class="my-4 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
      <span class="text-sky-400 font-bold block mb-1">Architecture Overview:</span>
      ${project.architecture}
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-700/50">
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-sm font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition flex items-center gap-2 border border-slate-700">
        <i class="fa-brands fa-github"></i> View GitHub Repository
      </a>
      ${demoAction}
    </div>
  `;

  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('modal-visible');
  modal.classList.add('modal-hidden');
  document.body.style.overflow = 'auto';
}

// Close on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Handle ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeModal();
    }
  });
});
