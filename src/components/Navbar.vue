<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="logo">
        <span class="logo-text">Nourou</span>
        <span class="logo-dot">.</span>
      </router-link>
      
      <ul class="nav-links">
        <li>
          <router-link to="/" class="nav-link">Accueil</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">À propos</router-link>
        </li>
        <li>
          <router-link to="/projects" class="nav-link">Projets</router-link>
        </li>
        <li>
          <router-link to="/skills" class="nav-link">Compétences</router-link>
        </li>
      </ul>

      <a href="mailto:diagouraganourou@gmail.com" class="contact-btn">
        Me contacter
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.logo-dot {
  font-size: 1.5rem;
  font-weight: 700;
  color: #38bdf8;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #38bdf8;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: white;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #38bdf8;
}

.nav-link.router-link-active::after {
  width: 100%;
}

.contact-btn {
  padding: 10px 24px;
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.3);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .navbar-container {
    padding: 12px 16px;
  }
}
</style>

