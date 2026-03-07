<template>
  <section class="about-page">
    <div class="container">
      <!-- Header -->
      <div class="about-header">
        <div class="profile-section">
          <div class="profile-image">
            <div class="profile-avatar">ND</div>
          </div>
          <div class="profile-info">
            <h1>À propos de moi</h1>
            <p class="subtitle">Développeur Fullstack Passionné par le DevOps/cloud</p>
          </div>
        </div>
      </div>

      <!-- Introduction -->
      <div class="about-intro">
        <div class="intro-card">
          <h2>Bonjour ! 👋</h2>
          <p>
            Je suis <strong>Nourou Diagouraga</strong>, développeur fullstack passionné par la création 
            d'applications web modernes, performantes et maintenables. J'aime concevoir des solutions 
            complètes, du backend au frontend, avec une attention particulière portée à l'expérience 
            utilisateur et à la qualité du code.
          </p>
          <p>
            À l'aise avec <strong>Vue.js; React.js</strong>, <strong>Node.js</strong> et <strong>PostgreSQL/MongoDB Atlass</strong>, 
            je travaille avec des architectures claires, des APIs robustes et des interfaces modernes. 
            Curieux et rigoureux, je cherche constamment à améliorer mes compétences et mes pratiques.
          </p>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">+10</div>
          <div class="stat-label">Projets réalisés</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">3+</div>
          <div class="stat-label">Années d'expérience</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">Motivation</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">∞</div>
          <div class="stat-label">Curiosité</div>
        </div>
      </div>

        <!-- Parcours -->
      <div class="timeline-section">
        <h2 class="section-title">Mon Parcours</h2>
        
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">2024 - Maintenant</span>
              <h3>Développeur Fullstack </h3>
              <p>Création d'applications web sur mesure. Stack: Vue.js/React, Node.js, PostgreSQL/MongoDB, Docker et Render/vercel</p>
              <div class="project-highlight">
                <strong>Projet actuel:</strong> Travel Agency - Application de gestion d'agence de voyage
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">2023 - 2024</span>
              <h3>Projets Personnels</h3>
              <p>Développement de plusieurs applications fullstack pour consolider mes compétences. DVD Rental, Coworking App, Market Place</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">2022 - 2023</span>
              <h3>Apprentissage Auto-didacte</h3>
              <p>Découverte du développement web. HTML, CSS, JavaScript, puis Vue.js et Node.js</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Valeurs -->
      <div class="values-section">
        <h2 class="section-title">Mes Valeurs</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3>Qualité</h3>
            <p>Un code propre, maintenable et bien architecturé est la clé d'un projet réussi</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🔄</div>
            <h3>Amélioration Continue</h3>
            <p>Je cherche constamment à apprendre et à m'améliorer</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>Le travail d'équipe et la communication sont essentiels</p>
          </div>
          <div class="value-card">
            <div class="value-icon">⚡</div>
            <h3>Performance</h3>
            <p>Optimiser pour une expérience utilisateur fluide</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-section">
        <h2>Intéressé par mon profil ?</h2>
        <p>N'hésitez pas à me contacter pour discuter de vos projets</p>
        <div class="cta-buttons">
          <a href="https://github.com/Nour10-c" target="_blank" class="btn-primary">Voir mes projets</a>
          <a href="mailto:diagouraganourou@gmail.com" class="btn-secondary">Me contacter</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  padding: 120px 20px 80px;
  min-height: 100vh;
  background: linear-gradient(180deg, #020617, #0f172a);
  color: white;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Header */
.about-header {
  text-align: center;
  margin-bottom: 50px;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.profile-image {
  position: relative;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 20px 40px rgba(56, 189, 248, 0.3);
}

.profile-info h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #fff, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
}

/* Intro */
.about-intro {
  margin-bottom: 50px;
}

.intro-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
}

.intro-card h2 {
  font-size: 1.8rem;
  color: #38bdf8;
  margin-bottom: 20px;
}

.intro-card p {
  color: #cbd5f5;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 16px;
}

.intro-card strong {
  color: #38bdf8;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.stat-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: #38bdf8;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 8px;
}

.stat-label {
  color: #94a3b8;
  font-size: 0.95rem;
}

/* Timeline */
.timeline-section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-align: center;
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #38bdf8, transparent);
}

.timeline-item {
  position: relative;
  padding-bottom: 30px;
}

.timeline-dot {
  position: absolute;
  left: -34px;
  top: 0;
  width: 12px;
  height: 12px;
  background: #38bdf8;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
}

.timeline-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.timeline-date {
  color: #38bdf8;
  font-size: 0.85rem;
  font-weight: 500;
}

.timeline-content h3 {
  font-size: 1.2rem;
  margin: 8px 0;
}

.timeline-content p {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.project-highlight {
  margin-top: 12px;
  padding: 12px 16px;
  background: rgba(56, 189, 248, 0.1);
  border-left: 3px solid #38bdf8;
  border-radius: 0 8px 8px 0;
  font-size: 0.9rem;
  color: #cbd5f5;
}

.project-highlight strong {
  color: #38bdf8;
}

/* Values */
.values-section {
  margin-bottom: 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.value-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  border-color: #38bdf8;
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.value-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #38bdf8;
}

.value-card p {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* CTA */
.cta-section {
  text-align: center;
  padding: 50px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(99, 102, 241, 0.1));
  border-radius: 24px;
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.cta-section p {
  color: #94a3b8;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary, .btn-secondary {
  padding: 14px 32px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

@media (max-width: 900px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .values-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .profile-info h1 { font-size: 1.8rem; }
  .stats-grid { grid-template-columns: 1fr; }
  .values-grid { grid-template-columns: 1fr; }
  .cta-buttons { flex-direction: column; }
}
</style>

