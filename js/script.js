// ==========================================================================
// MENU EM GAVETA (abrir/fechar)
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
  const botaoMenu = document.querySelector('.botao-menu');
  const botaoFechar = document.querySelector('.menu-fechar');
  const menu = document.querySelector('.menu-principal');
  const fundo = document.querySelector('.menu-fundo');

  function abrirMenu() {
    botaoMenu.classList.add('ativo');
    menu.classList.add('aberto');
    fundo.classList.add('aberto');
    document.body.style.overflow = 'hidden';
  }

  function fecharMenu() {
    botaoMenu.classList.remove('ativo');
    menu.classList.remove('aberto');
    fundo.classList.remove('aberto');
    document.body.style.overflow = '';
  }

  if (botaoMenu && menu && fundo) {
    botaoMenu.addEventListener('click', function () {
      const estaAberto = menu.classList.contains('aberto');
      estaAberto ? fecharMenu() : abrirMenu();
    });

    if (botaoFechar) {
      botaoFechar.addEventListener('click', fecharMenu);
    }

    fundo.addEventListener('click', fecharMenu);

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape') fecharMenu();
    });
  }

  // ========================================================================
  // DESTACA O LINK DA PÁGINA ATUAL NO MENU
  // ========================================================================
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  const todosLinks = document.querySelectorAll('.menu-lista a');

  todosLinks.forEach(function (link) {
    const destino = link.getAttribute('href').split('/').pop();
    if (destino === paginaAtual) {
      link.classList.add('ativo');
    }
  });
});
