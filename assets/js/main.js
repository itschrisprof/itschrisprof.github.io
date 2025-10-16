document.addEventListener('DOMContentLoaded', () => {
  const text = [
    'neofetch --user "Christian"',
    '→ Multiuso: docencia, SRE y cultura libre',
    '→ Clases presenciales + virtuales con infraestructura propia',
    '→ Mentorías para ex alumnos y equipos curiosos'
  ].join('\n');
  const typedEl = document.getElementById('typed');
  let i = 0;
  function type() {
    if (i < text.length) {
      typedEl.textContent += text[i++];
      setTimeout(type, 90);
    }
  }
  setTimeout(type, 500);
});

