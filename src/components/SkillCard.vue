<template>
  <div class="skill-card glass-card">
    <div class="skill-icon">
      <slot name="icon"></slot>
    </div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.skill-card {
  padding: 24px;
  text-align: center;
  transition: all var(--transition-normal);
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

.skill-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  color: var(--primary);
}

.skill-card h4 {
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.skill-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
}
</style>

