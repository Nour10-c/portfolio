<template>
  <section class="about">
    <div class="container">
      <div class="content">
        <h2>À propos</h2>

        <p>
          Développeur Fullstack passionné, spécialisé dans la création
          d’applications web modernes, performantes et maintenables.
          J’aime concevoir des solutions complètes, du backend au frontend,
          avec une attention particulière portée à l’expérience utilisateur
          et à la qualité du code.
        </p>

        <p>
          À l’aise avec Vue.js, Node.js et PostgreSQL, je travaille avec
          des architectures claires, des APIs robustes et des interfaces
          modernes. Curieux et rigoureux, je cherche constamment à
          améliorer mes compétences et mes pratiques.
        </p>
      </div>

      <div class="stats">
        <div class="stat">
          <span>+10</span>
          <p>Projets réalisés</p>
        </div>
        <div class="stat">
          <span>Fullstack</span>
          <p>Vue · Node · SQL</p>
        </div>
        <div class="stat">
          <span>Clean</span>
          <p>Code & Architecture</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about {
  padding: 140px 20px;
  min-height: 100vh;

  background: linear-gradient(
    180deg,
    #020617,
    #0f172a
  );

  color: #e5e7eb;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Texte */
.content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.content h2 {
  font-size: 2.6rem;
  margin-bottom: 32px;
}

.content p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #cbd5f5;
  margin-bottom: 20px;
}

/* Stats */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 28px;
  margin-top: 80px;
}

.stat {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );

  padding: 32px;
  border-radius: 20px;

  text-align: center;

  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.stat span {
  display: block;
  font-size: 1.8rem;
  font-weight: 600;
  color: #38bdf8;
}

.stat p {
  margin-top: 8px;
  font-size: 0.95rem;
  color: #e5e7eb;
}
</style>