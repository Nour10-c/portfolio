<template>
  <section class="projects">
    <h1>Projets</h1>

    <div class="cards">
      <ProjectCard
        title="DVD Rental Fullstack"
        description="Vue.js · Node.js · PostgreSQL · Docker"
        link="https://github.com/Nour10-c/dvd-rental-fullstack"
      />

      <ProjectCard
        title="Coworking App"
        description="Réservation salles · Auth · API REST"
        link="https://github.com/Nour10-c/coworking-app"
      />

      <ProjectCard
        title="Market Fullstack"
        description="Boutique en ligne · Panier · Architecture en couches"
        link="https://github.com/Nour10-c/market-fullstack"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
</script>

<style scoped>
/* ===== SECTION PROJECTS ===== */
.projects {
  padding: 140px 20px 160px;
  min-height: 100vh;

  background: radial-gradient(
      circle at top,
      rgba(56, 189, 248, 0.15),
      transparent 60%
    ),
    linear-gradient(
      180deg,
      #020617,
      #020617
    );

  text-align: center;
  color: #e5e7eb;
}

/* ===== GRID DE CARTES ===== */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 36px;

  max-width: 1200px;
  margin: 80px auto 0;
  padding: 0 10px;
}
</style>
