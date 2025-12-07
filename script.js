// Kleines Script: Jahr einfügen + mobiles Menü
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      mainNav.classList.toggle('open');
    });
    // Nav nach Klick schließen (mobile)
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  // Beispiel: Formulardaten in Konsole (für später Backend-Anbindung ersetzen)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Form submission (lokal):', data);
      alert('Danke! Nachricht wurde lokal erfasst. Für echtes Senden integriere ein Backend oder Form-Service.');
      form.reset();
    });
  }
});