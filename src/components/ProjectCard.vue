<template>
  <div class="project-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">Voir le projet</a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String
})
</script>

<style scoped>
.project-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );
  padding: 28px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
}

h3 {
  color: #38bdf8;
  margin-bottom: 12px;
  font-size: 1.2rem;
}

p {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 16px;
}

a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}
</style>
