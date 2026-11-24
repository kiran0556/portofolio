# N. Kiran Kumar — Professional IT & AI/ML Portfolio Website

A sleek, responsive, single-page professional portfolio website crafted for **N. Kiran Kumar** (Final-Year Computer Science and Engineering Undergraduate, Class of 2027) highlighting his expertise in **Artificial Intelligence, Machine Learning (LightGBM), Data Science, and Full-Stack Web Development (React / MERN)**.

---

## 🌟 Key Features & Visual Effects

1. **Interactive Neural Network / Constellation Canvas Background**:
   - High-performance 60fps HTML5 Canvas in the Hero section.
   - Dynamic particle nodes connect with neural synaptic lines and respond interactively to mouse position, symbolizing AI and connected data structures.

2. **Interactive Machine Learning Sandbox (Live AI Demo)**:
   - A hands-on simulation of Kiran's flagship project: *AI-Powered Emergency Response Intelligence Platform*.
   - Allows recruiters to select hazard incident types (Cyclone, Flash Floods, Earthquake), adjust intensity multipliers, population sliders (2k–80k), and damage indices.
   - Shows simulated real-time LightGBM inference logs and instant calculated relief allocations (Food packets, Water liters, Trauma kits, Shelters) with R² accuracy score metrics.

3. **Dynamic Typewriter & Hero Metrics**:
   - Animated cycling roles: *AI & Machine Learning Engineer*, *Full-Stack Web Developer (React / MERN)*, *Data Science & Predictive Modeling*, *Problem Solver (300+ LeetCode DSA)*.
   - Animated statistics counters for LeetCode problems (300+), top model accuracy (95.01%), internships & mentorship roles, and dataset size (212k+).

4. **Interactive Filterable Skills Matrix**:
   - Filter skills across *All Domains*, *AI & Machine Learning*, *Web & Full-Stack*, *Languages & Core CS*, and *Cloud & Tools*.
   - Visual tech cards with iconography and hover lift micro-interactions.

5. **Featured Projects Showcase with Deep Dive Modals**:
   - **AI-Powered Emergency Response Intelligence Platform** (LightGBM, Python, Pandas, FastAPI, React.js) — R² 95.01%, 212k+ records.
   - **Smart Geo-Attendance System** (React.js, Node.js, Express, MongoDB, GPS Geofencing, JWT).
   - **Student-CGPA-Calculator** (JavaScript, Tesseract.js OCR, Chart.js, jsPDF).
   - Modal deep-dive displays architecture details, stats, key contributions, and GitHub/Demo links.

6. **Professional Experience & Mentorship Timeline**:
   - *AI/ML Project Intern* — Infosys Springboard (08/2026 – 10/2026 | Remote)
   - *Web Developer Intern* — Elevate Labs (11/2025 – 12/2025 | Remote)
   - *AWS Cloud Virtual Intern* — EduSkills (AICTE) (10/2025 – 12/2025 | Remote)
   - *Technical Mentor* — SVR Engineering College (2025 – Present | Nandyal)

7. **Certifications & Competitive Coding Spotlight**:
   - Verified credentials: GitHub Foundations, AWS Academy Cloud Foundations, MongoDB Skill Badge, AI Primer, UiPath Automation Explorer.
   - Competitive honors: 300+ LeetCode DSA solved, 1st place in Technical Quiz, 2nd in Code Crush, 3rd in UiPath Hack.

8. **Education Section**:
   - SVR Engineering College (B.Tech CSE, 2023–2027) — 80% Aggregate
   - Kuppam Junior College (Intermediate MPC, 2021–2023) — 75%
   - ZP Settipalli High School (SSC, 2020–2021) — 98%

9. **Interactive Resume Modal & Print-to-PDF**:
   - Built-in digital resume popup with custom CSS print stylesheet for instant, clean PDF export without dark backgrounds.

10. **Modern UI/UX & Dark/Light Mode**:
    - Seamless dark mode by default with slate/midnight hues and glowing cyan/indigo accents.
    - Clean light mode switch with smooth transitions and persistent `localStorage` preference.
    - 1-click clipboard copy for Email & Phone with floating toast notifications.
    - Functional contact form with client-side validation and visual feedback.

---

## 📁 Project Structure

```
d:\info\Portfolio\
├── index.html          # Main single-page portfolio application
├── css/
│   └── styles.css      # Glassmorphism, animations, glow effects, print styles
├── js/
│   ├── app.js          # Core app controller, typewriter, filters, theme, toasts
│   ├── particles.js    # Interactive neural canvas constellation engine
│   ├── projects.js     # Project data model, modal controller, architecture deep dive
│   └── ai-demo.js      # Interactive LightGBM emergency response simulator
└── README.md           # Documentation & instructions
```

---

## 🚀 How to Run & Preview

### Option 1: Double-Click
Simply double-click `index.html` in File Explorer. It opens instantly in your default browser (Chrome, Edge, Brave, Firefox) with zero build steps required.

### Option 2: Local HTTP Server (Optional)
If you prefer running via a local server:
```bash
# Using Node.js
npx serve .

# Or using Python
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 3: Deploy to GitHub Pages / Netlify / Vercel
Because this is built with pure client-side frontend frameworks and modern standards, it deploys directly with zero configuration:
- **Netlify**: Drag and drop the `Portfolio` folder into [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel**: Run `vercel` or link your GitHub repository.
- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages in repository settings under `Source: Deploy from a branch (main / root)`.
