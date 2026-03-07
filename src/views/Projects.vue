<template>
  <section class="projects-page">
    <div class="container">
      <h1 class="page-title">Mes Projets</h1>
      <p class="page-subtitle">Découvrez mes réalisations récentes</p>

      <div class="projects-grid">
        <!-- Project 1 - Travel Agency -->
        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">✈️</div>
          </div>
          <div class="project-content">
            <h3>Travel Agency</h3>
            <p>Application de gestion d'agence de voyage avec réservation de vols, hôtels et circuits. Interface utilisateur moderne et backoffice complet.</p>
            <div class="project-tags">
              <span class="tag">React.js</span>
              <span class="tag">Node.js</span>
              <span class="tag">MongoDB Atalss</span>
              <span class="tag">Render/Vercel</span>
              <span class="tag">Docker</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/Nour10-c/travel-agency" target="_blank" class="project-link">
                Voir le code →
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">DVD Rental</div>
          </div>
          <div class="project-content">
            <h3>DVD Rental Fullstack</h3>
            <p>Application de location de DVDs avec gestion des clients, films et locations. Architecture fullstack avec Vue.js et Node.js.</p>
            <div class="project-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Node.js</span>
              <span class="tag">PostgreSQL</span>
              <span class="tag">Docker</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/Nour10-c/dvd-rental-fullstack" target="_blank" class="project-link">
                Voir le code →
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">Coworking</div>
          </div>
          <div class="project-content">
            <h3>Coworking App</h3>
            <p>Application de réservation d'espaces de coworking avec système d'authentification et API REST.</p>
            <div class="project-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Express</span>
              <span class="tag">MongoDB</span>
              <span class="tag">JWT</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/Nour10-c/coworking-app" target="_blank" class="project-link">
                Voir le code →
              </a>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">Market</div>
          </div>
          <div class="project-content">
            <h3>Market Fullstack</h3>
            <p>Boutique en ligne complète avec gestion du panier, commandes et architecture en couches.</p>
            <div class="project-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Node.js</span>
              <span class="tag">PostgreSQL</span>
              <span class="tag">Stripe</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/Nour10-c/market-fullstack" target="_blank" class="project-link">
                Voir le code →
              </a>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">API</div>
          </div>
          <div class="project-content">
            <h3>REST API Backend</h3>
            <p>API REST robuste avec Express.js, documentation Swagger, authentification et gestion des erreurs.</p>
            <div class="project-tags">
              <span class="tag">Node.js</span>
              <span class="tag">Express</span>
              <span class="tag">PostgreSQL</span>
              <span class="tag">Swagger</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Bientôt disponible →</a>
            </div>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">Portfolio</div>
          </div>
          <div class="project-content">
            <h3>Portfolio Vue.js</h3>
            <p>Mon portfolio personnel créé avec Vue 3, Vite et design moderne glassmorphism.</p>
            <div class="project-tags">
              <span class="tag">Vue.js 3</span>
              <span class="tag">Vite</span>
              <span class="tag">CSS3</span>
              <span class="tag">Router</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">En production →</a>
            </div>
          </div>
        </div>

        <!-- Project 6 -->
        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">Docker</div>
          </div>
          <div class="project-content">
            <h3>Docker Compose Stack</h3>
            <p>Configuration Docker Compose pour environnements de développement multi-services.</p>
            <div class="project-tags">
              <span class="tag">Docker</span>
              <span class="tag">Docker Compose</span>
              <span class="tag">PostgreSQL</span>
              <span class="tag">MongoDB</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Bientôt disponible →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  padding: 120px 20px 80px;
  min-height: 100vh;
  background: linear-gradient(180deg, #020617, #0f172a);
  color: white;
}

.container {
  max-width: 1200px;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border-color: #38bdf8;
}

.project-image {
  height: 180px;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-placeholder {
  font-size: 1.5rem;
  font-weight: 600;
  color: #475569;
}

.project-content {
  padding: 24px;
}

.project-content h3 {
  font-size: 1.3rem;
  color: #38bdf8;
  margin-bottom: 12px;
}

.project-content p {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  padding: 6px 12px;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
  color: #38bdf8;
}

.project-link {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .page-title { font-size: 2rem; }
  .projects-grid { grid-template-columns: 1fr; }
}
</style>

