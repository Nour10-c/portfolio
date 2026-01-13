<template>
  <section class="contact">
    <h1>Contact</h1>

    <form class="form">
      <input type="text" placeholder="Nom" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button>Envoyer</button>
    </form>
  </section>
</template>

<style scoped>
/* ===== SECTION CONTACT ===== */
.contact {
  padding: 140px 20px;
  min-height: 100vh;

  background: radial-gradient(
      circle at top,
      rgba(56, 189, 248, 0.12),
      transparent 60%
    ),
    linear-gradient(
      180deg,
      #020617,
      #0f172a
    );

  color: #e5e7eb;
  text-align: center;
}

/* ===== CARTE FORMULAIRE ===== */
.form {
  max-width: 520px;
  margin: 60px auto 0;
  padding: 36px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );

  border-radius: 22px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
}

/* ===== INPUTS ===== */
input,
textarea {
  padding: 15px 16px;
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid transparent;

  color: #e5e7eb;
  font-size: 0.95rem;

  outline: none;
  transition: all 0.3s ease;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

/* Focus UX */
input:focus,
textarea:focus {
  border-color: #38bdf8;
  background: rgba(255, 255, 255, 0.12);
}

/* Placeholder */
input::placeholder,
textarea::placeholder {
  color: #94a3b8;
}

/* ===== BOUTON ===== */
button {
  margin-top: 10px;
  padding: 14px;

  border-radius: 14px;
  border: none;

  background: linear-gradient(
    135deg,
    #38bdf8,
    #0ea5e9
  );

  color: #020617;
  font-weight: 600;
  font-size: 1rem;

  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.4);
}
</style>