<template>
  <a :href="link" target="_blank" class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String
})
</script>

<style scoped>
.card {
  background: #0f172a;
  padding: 30px;
  border-radius: 16px;
  text-decoration: none;
  color: white;
  transition: transform 0.4s, box-shadow 0.4s;
}

.card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.6);
}

p {
  opacity: 0.8;
  margin-top: 10px;
}
</style>
