<template>
  <section class="home fade-in">
   
    <div class="hero">
      <div class="hero-content">
        <p class="hero-greeting">Bonjour, je suis</p>
        <h1 class="hero-name">Nourou Diagouraga</h1>
        <h2 class="hero-title">Développeur Fullstack/DevOps</h2>
        <p class="hero-desc">
          Je crée des applications web modernes, performantes et maintenables.
          Spécialisé en Vue.js/React, Node.js et solutions cloud.
        </p>
<div class="hero-buttons">
          <a href="https://github.com/Nour10-c" target="_blank" class="btn-primary">Voir mes projets</a>
          <router-link to="/about" class="btn-secondary">Savoir plus</router-link>
        </div>
      </div>
      <div class="hero-visual">
        <div class="code-block">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre class="code-content"><code><span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="property">name</span>: <span class="string">"Nourou"</span>,
  <span class="property">role</span>: <span class="string">"Fullstack/DevOps"</span>,
  <span class="property">skills</span>: [<span class="string">"Vue.js, React"</span>, <span class="string">"Node.js"</span>],
  <span class="property">ready</span>: <span class="boolean">true</span>
};</code></pre>
        </div>
      </div>
    </div>

    <!-- GALLERY -->
    <div class="gallery slide-up">
      <img src="/images/code1.jpg" alt="code" />
      <img src="/images/code2.jpg" alt="code" />
      <img src="/images/code3.jpg" alt="code" />
    </div>

    <!-- SKILLS -->
    <div class="skills slide-up">
      <img src="/skills/vue.svg" alt="Vue" />
      <img src="/skills/node.svg" alt="Node" />
      <img src="/skills/postgres.svg" alt="PostgreSQL" />
      <img src="/skills/docker.svg" alt="Docker" />
      <img src="/skills/github.svg" alt="GitHub" />
      <img src="/skills/linux.svg" alt="Linux" />
    </div>

    <!-- TRANSITION -->
    <div class="section-divider"></div>
  </section>

  <!-- CONTACT ME -->
  <section class="contact-me slide-up">
    <h2>Me contacter</h2>
    <p class="contact-desc">Une question ? Un projet ? N'hésitez pas à me contacter</p>

    <div class="contact-cards">
      <a href="mailto:diagouraganourou@gmail.com" class="contact-card">
        <div class="card-icon">✉</div>
        <span>Email</span>
        <p>diagouraganourou@gmail.com</p>
      </a>

      <a href="tel:+330759167068" class="contact-card">
        <div class="card-icon">☎</div>
        <span>Téléphone</span>
        <p>+33 07 59 16 70 68</p>
      </a>

      <a href="https://github.com/Nour10-c" target="_blank" class="contact-card">
        <div class="card-icon">GH</div>
        <span>GitHub</span>
        <p>github.com/Nour10-c</p>
      </a>

      <a href="https://linkedin.com/in/nourou-diagouraga7575" target="_blank" class="contact-card">
        <div class="card-icon">in</div>
        <span>LinkedIn</span>
        <p>linkedin.com/in/nourou-diagouraga7575</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.home {
  padding: 120px 20px 80px;
  color: white;
  text-align: center;
  background: linear-gradient(135deg, #0f172a, #020617);
}

.hero {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  text-align: left;
}

.hero-content { flex: 1; }

.hero-greeting {
  color: #38bdf8;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
}

.hero-name {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #fff, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: 1.8rem;
  color: #94a3b8;
  font-weight: 400;
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 1.1rem;
  color: #cbd5f5;
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
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

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.code-block {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 400px;
}

.code-header {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }

.code-content {
  padding: 20px;
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  line-height: 1.8;
  color: #cbd5f5;
}

.keyword { color: #c792ea; }
.variable { color: #82aaff; }
.property { color: #7fdbca; }
.string { color: #c3e88d; }
.boolean { color: #f78c6c; }

.gallery {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 80px;
  background: rgba(255, 255, 255, 0.05);
  padding: 22px;
  border-radius: 22px;
  backdrop-filter: blur(12px);
}

.gallery img {
  width: 260px;
  border-radius: 16px;
  transition: transform 0.4s ease;
}

.gallery img:hover {
  transform: translateY(-10px);
}

.skills {
  margin: 60px auto 80px;
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 36px 50px;
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04));
  border-radius: 26px;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
}

.skills::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 28px;
  background: linear-gradient(90deg, #38bdf8, #6366f1, #22d3ee);
  opacity: 0.15;
  filter: blur(40px);
  z-index: -1;
}

.skills img {
  width: 60px;
  height: 60px;
  opacity: 0.95;
  filter: brightness(1.4) contrast(1.4);
  transition: all 0.3s ease;
}

.skills img:hover {
  transform: translateY(-6px) scale(1.1);
  filter: brightness(1.7) contrast(1.6);
}

.section-divider {
  height: 120px;
  margin-top: -40px;
  background: linear-gradient(180deg, transparent, rgba(15, 23, 42, 0.85), #020617);
}

.contact-me {
  padding: 80px 20px 140px;
  text-align: center;
  color: #e5e7eb;
  background: linear-gradient(180deg, #020617, #0f172a);
}

.contact-me h2 {
  font-size: 2.4rem;
  margin-bottom: 12px;
}

.contact-desc {
  color: #94a3b8;
  margin-bottom: 60px;
}

.contact-cards {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.contact-card {
  padding: 28px;
  text-decoration: none;
  color: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.85);
  border-color: #38bdf8;
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 189, 248, 0.15);
  border-radius: 12px;
  color: #38bdf8;
  margin-bottom: 16px;
  font-weight: bold;
}

.contact-card span {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 8px;
}

.contact-card p {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
}

.fade-in {
  animation: fade 1.2s ease forwards;
}

.slide-up {
  animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(80px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .hero-content { text-align: center; }
  .hero-desc { margin: 0 auto 32px; }
  .hero-buttons { justify-content: center; }
  .hero-visual { display: none; }
}
</style>

