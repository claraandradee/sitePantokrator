/* ==========================================================================
   SCROLL REVEAL
   Faz textos e imagens marcados com a classe "reveal" aparecerem aos poucos
   (fade + leve deslocamento) conforme o usuário rola a página até eles.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.reveal');

  // Navegador muito antigo, sem suporte a IntersectionObserver:
  // mostra tudo direto, sem animação, pra não esconder conteúdo.
  if (!('IntersectionObserver' in window)) {
    elementos.forEach((el) => el.classList.add('reveal-visivel'));
    return;
  }

  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('reveal-visivel');
          observer.unobserve(entrada.target); // anima só uma vez
        }
      });
    },
    {
      threshold: 0.15, // dispara quando 15% do elemento aparece na tela
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elementos.forEach((el) => observer.observe(el));
});