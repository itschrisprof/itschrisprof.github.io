---
layout: base.njk
title: "Inicio"
---

<!-- Hero -->
<section id="hero" class="relative h-screen bg-black overflow-hidden">
  <!-- Terminal -->
  <pre id="terminal"
       class="absolute inset-0 m-0 p-8 font-mono text-green-400 text-lg select-none pointer-events-none">
    <span class="prompt">$ </span><span id="typed"></span><span class="cursor-blink inline-block w-1 bg-green-400"></span>
  </pre>
  <!-- Contenido -->
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white opacity-0 animate-fade-in-scale delay-500">
    <h1 class="font-pixel text-5xl md:text-7xl mb-4">Hola, soy yo</h1>
    <p class="font-mono text-lg md:text-xl mb-6">Desarrollador Full Stack, profesor y fan de Linux</p>
    <a href="#about"
       class="px-8 py-3 bg-white text-black rounded-lg hover:bg-term-amber transition">
      Sobre mí
    </a>
  </div>
</section>

<!-- Sobre mí -->
<!-- Sobre mí -->
<section id="about" class="py-16 bg-gray-50">
  <div class="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 items-center">
    <!-- Avatar -->
    <img
      src="/assets/images/tux-pixel.png"
      alt="Avatar Tux Pixel"
      class="w-40 h-40 mx-auto rounded-full border-4 border-term-green
             animate-fade-in-scale delay-200"
    />

    <!-- Texto de presentación -->
    <div class="space-y-4 animate-fade-in-scale delay-400">
      <h2 class="text-3xl font-pixel text-center md:text-left">
        Sobre mí
      </h2>
      <p class="font-mono text-term-text leading-relaxed">
        ¡Hola! Soy Juan Pérez, <strong>desarrollador Full Stack</strong> y
        apasionado de <em>Linux</em>. Me encanta crear herramientas web
        sencillas pero potentes, y en mi tiempo libre disfruto explorando
        comandos de terminal y perfeccionando mi pixel art.
      </p>
      <ul class="space-y-2 font-mono">
        <li><span class="font-bold">🖥️ 2020:</span> Comienzo con proyectos en JavaScript.</li>
        <li><span class="font-bold">🛠️ 2022:</span> Desarrollé mi propio editor de notas.</li>
        <li><span class="font-bold">📚 2024:</span> Profesor de desarrollo web en línea.</li>
      </ul>

      <!-- Botón CTA secundario -->
      <a href="#skills"
         class="inline-block mt-4 px-6 py-2 bg-term-green text-black rounded-lg
                hover:bg-term-amber transition animate-fade-in-scale delay-600"
      >
        Ver Skills
      </a>
    </div>
  </div>
</section>


<!-- Skills -->
<section id="skills" class="py-16">
  <div class="max-w-4xl mx-auto space-y-8">
    <!-- tu grid de skills... -->
  </div>
</section>

<!-- Contacto -->
<section id="contact" class="py-16 bg-gray-50">
  <div class="max-w-md mx-auto space-y-6 animate-fade-in-scale">
    <!-- tu formulario... -->
  </div>
</section>
