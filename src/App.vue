<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
.container {
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
}
</style>
