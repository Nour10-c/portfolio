<template>
  <section class="skills-page">
    <div class="container">
      <h1 class="page-title">Mes Compétences</h1>
      <p class="page-subtitle">Les technologies et outils que je maîtrise</p>

      <!-- Frontend -->
      <div class="skill-category">
        <h2 class="category-title">
          <span class="category-icon">🎨</span>
          Frontend
        </h2>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Vue.js 3</span>
              <span class="skill-level">90%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 90%"></div>
            </div>
            <p class="skill-desc">Composition API, Vue Router, Pinia, Vuex</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">JavaScript / TypeScript</span>
              <span class="skill-level">85%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 85%"></div>
            </div>
            <p class="skill-desc">ES6+, DOM, AJAX, TypeScript</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">HTML5 / CSS3</span>
              <span class="skill-level">90%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 90%"></div>
            </div>
            <p class="skill-desc">Flexbox, Grid, Animations, Sass, Tailwind</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">React</span>
              <span class="skill-level">75%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 75%"></div>
            </div>
            <p class="skill-desc">Hooks, Context API, React Router</p>
          </div>
        </div>
      </div>

      <!-- Backend -->
      <div class="skill-category">
        <h2 class="category-title">
          <span class="category-icon">⚙️</span>
          Backend
        </h2>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Node.js</span>
              <span class="skill-level">85%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 85%"></div>
            </div>
            <p class="skill-desc">Express, APIs REST, Microservices</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Postman/Cypres</span>
              <span class="skill-level">80%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 80%"></div>
            </div>
            <p class="skill-desc">Testing et automatisation</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">API REST / GraphQL</span>
              <span class="skill-level">85%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 85%"></div>
            </div>
            <p class="skill-desc">Conception, Documentation, Swagger</p>
          </div>
        </div>
      </div>

      <!-- Base de données -->
      <div class="skill-category">
        <h2 class="category-title">
          <span class="category-icon">🗄️</span>
          Base de données
        </h2>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">PostgreSQL</span>
              <span class="skill-level">80%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 80%"></div>
            </div>
            <p class="skill-desc">SQL, Requêtes complexes, Administration</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">MongoDB</span>
              <span class="skill-level">75%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 75%"></div>
            </div>
            <p class="skill-desc">NoSQL, Mongoose, Aggregation</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Sequelize / Prisma</span>
              <span class="skill-level">80%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 80%"></div>
            </div>
            <p class="skill-desc">ORM pour Node.js</p>
          </div>
        </div>
      </div>

      <!-- DevOps -->
      <div class="skill-category">
        <h2 class="category-title">
          <span class="category-icon">🚀</span>
          DevOps & Cloud
        </h2>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Docker</span>
              <span class="skill-level">75%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 75%"></div>
            </div>
            <p class="skill-desc">Conteneurisation, Docker Compose</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Git / GitHub</span>
              <span class="skill-level">85%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 85%"></div>
            </div>
            <p class="skill-desc">Version control, GitHub Actions, CI/CD</p>
          </div>

          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Linux</span>
              <span class="skill-level">70%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 70%"></div>
            </div>
            <p class="skill-desc">Administration, Scripting Bash</p>
          </div>
        </div>
      </div>

      <!-- Outils -->
      <div class="skill-category">
        <h2 class="category-title">
          <span class="category-icon">🔧</span>
          Outils
        </h2>
        <div class="tools-grid">
          <div class="tool-tag">VS Code</div>
          <div class="tool-tag">Postman</div>
          <div class="tool-tag">Insomnia</div>
          <div class="tool-tag">Figma</div>
          <div class="tool-tag">Docker Desktop</div>
          <div class="tool-tag">MongoDB Compass</div>
          <div class="tool-tag">pgAdmin</div>
          <div class="tool-tag">Git Bash</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-page {
  padding: 120px 20px 80px;
  min-height: 100vh;
  background: linear-gradient(180deg, #020617, #0f172a);
  color: white;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #fff, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  text-align: center;
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 60px;
}

.skill-category {
  margin-bottom: 50px;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.category-icon {
  font-size: 1.8rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.skill-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: #38bdf8;
  box-shadow: 0 15px 40px rgba(56, 189, 248, 0.15);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.skill-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.skill-level {
  color: #38bdf8;
  font-weight: 600;
}

.progress-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #38bdf8, #6366f1);
  border-radius: 4px;
  transition: width 1s ease;
}

.skill-desc {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tool-tag {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  font-size: 0.95rem;
  color: #cbd5f5;
  transition: all 0.3s ease;
}

.tool-tag:hover {
  background: rgba(56, 189, 248, 0.15);
  border-color: #38bdf8;
  color: #38bdf8;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .page-title { font-size: 2rem; }
  .skills-grid { grid-template-columns: 1fr; }
}
</style>

