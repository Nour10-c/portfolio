<template>
  <nav class="navbar">
    <h1 class="logo"> Nourou Diagouraga</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
      
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

ul {
  display: flex;
  gap: 20px;
  list-style: none;
}

a {
  text-decoration: none;
  font-weight: 500;
}

a.router-link-active {
  color: var(--accent);
}
</style>
