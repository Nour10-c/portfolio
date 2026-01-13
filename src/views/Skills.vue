<template>
  <section class="fade-in">
    <h2>Compétences</h2>

    <ul class="skills">
      <li>JavaScript (ES6+)</li>
      <li>Docker</li>
      <li>Vue.js 3</li>
      <li>Node.js / Express</li>
      <li>PostgreSQL / Sequelize / MongoDB</li>
      <li>Architecture MVC</li>
      <li>Design Patterns</li>
    </ul>
  </section>
</template>

<style scoped>
.skills {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

li {
  background: #1e1e1e;
  padding: 12px;
  border-radius: 8px;
}
</style>
