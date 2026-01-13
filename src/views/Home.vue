<template>
  <section class="home fade-in">

    <!-- HERO -->
    <div class="hero">
      <h1>
        Bienvenue dans le Portfolio de votre
        <span>Développeur Fullstack junior</span>
      </h1>
      <p>Vue.js · Node.js · PostgreSQL · Docker etc...</p>
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
    <h2>Contact Me</h2>

    <div class="contact-cards">
      <a href="mailto:diagouraganourou@gmail.com" class="contact-card">
        <span>Email</span>
        <p>diagouraganourou@gmail.com</p>
      </a>

      <a href="tel:+330759167068" class="contact-card">
        <span>Téléphone</span>
        <p>+33 07 59 16 70 68</p>
      </a>

      <a href="https://github.com/Nour10-c" target="_blank" class="contact-card">
        <span>GitHub</span>
        <p>github.com/Nour10-c</p>
      </a>

      <a
        href="https://linkedin.com/in/nourou-diagouraga7575"
        target="_blank"
        class="contact-card"
      >
        <span>LinkedIn</span>
        <p>linkedin.com/in/nourou-diagouraga7575</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
/* =========================
   HOME
========================= */
.home {
  padding: 120px 20px 80px;
  color: white;
  text-align: center;

  background: linear-gradient(
    135deg,
    #0f172a,
    #020617
  );
}

/* HERO */
.hero h1 {
  font-size: 3rem;
}

.hero span {
  display: block;
  margin-top: 12px;
  color: #4fc3f7;
  font-size: 1.35rem;
}

.hero p {
  margin-top: 14px;
  color: #cbd5f5;
}

/* GALLERY */
.gallery {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 50px;

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

/* SKILLS */
.skills {
  margin: 60px auto 80px;
  display: flex;
  gap: 30px;
  justify-content: center;

  padding: 36px 50px;
  position: relative;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.14),
    rgba(255, 255, 255, 0.04)
  );

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

  background: linear-gradient(
    90deg,
    #38bdf8,
    #6366f1,
    #22d3ee
  );

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

/* TRANSITION */
.section-divider {
  height: 120px;
  margin-top: -40px;

  background: linear-gradient(
    180deg,
    transparent,
    rgba(15, 23, 42, 0.85),
    #020617
  );
}

/* =========================
   CONTACT ME
========================= */
.contact-me {
  padding: 80px 20px 140px;
  text-align: center;
  color: #e5e7eb;

  background: linear-gradient(
    180deg,
    #020617,
    #0f172a
  );
}

.contact-me h2 {
  font-size: 2.4rem;
  margin-bottom: 60px;
}

/* CONTACT CARDS */
.contact-cards {
  max-width: 1000px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
}

.contact-card {
  padding: 28px;
  text-decoration: none;
  color: inherit;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.03)
  );

  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px);

  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card span {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
}

.contact-card p {
  margin-top: 12px;
  font-size: 1.05rem;
  font-weight: 500;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.85);
}

/* =========================
   ANIMATIONS
========================= */
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
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>