document.addEventListener('DOMContentLoaded', () => {
  const text = "print(\"Bienvenido a mi sitio web\");";
  const typedEl = document.getElementById('typed');
  let i = 0;
  function type() {
    if (i < text.length) {
      typedEl.textContent += text[i++];
      setTimeout(type, 100);
    }
  }
  setTimeout(type, 600);
});

