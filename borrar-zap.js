// ==UserScript==
// @name         Borrar WhatsApp
// @namespace    http://tampermonkey.net/
// @version      2025-07-05
// @description  Borra os nomes do WhatsApp
// @author       Fábio Berbert de Paula <fberbert@gmail.com>
// @match        https://web.whatsapp.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

  let escondeFunc;
  let borrado = false;

  console.log('Borrar WhatsApp 4 iniciado');
  const whitelist = [
    "Luluca",
    "Rafael",
    "Elaine",
    "Família",
    "Sieg",
  ];

  function borrar(fator = 4) {
    const itens = document.querySelectorAll('#pane-side [role="listitem"]');

    itens.forEach(item => {
      const img = item.querySelector('img');
      const nomeSpan =
        item.querySelector('.x78zum5 > span') ||
        item.querySelector('._ak8q > span');

      const ultimaMensagemSpan = item.querySelector('._ak8k span[title]');

      if (!nomeSpan) return;

      const nome = nomeSpan.innerText.trim();
      const isPermitido = whitelist.some(entry => nome === entry);

      if (!isPermitido) {
        if (img) img.style.filter = `blur(${fator}px)`;
        nomeSpan.style.filter = `blur(${fator}px)`;
        if (ultimaMensagemSpan) ultimaMensagemSpan.style.filter = `blur(${fator}px)`;
      } else {
        if (img) img.style.filter = 'none';
        nomeSpan.style.filter = 'none';
        if (ultimaMensagemSpan) ultimaMensagemSpan.style.filter = 'none';
      }
    });
  }

  function iniciarObserver() {
    const pane = document.querySelector('#pane-side');
    if (!pane) return;

    const observer = new MutationObserver(() => {
      if (borrado) borrar(4); else borrar(0);
    });

    observer.observe(pane, {
      childList: true,
      subtree: true
    });
  }

  // Tecla de atalho Ctrl + Alt + B para toggle
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'b') {
      borrado = !borrado;
      borrar(borrado ? 4 : 0);
    }
  });

  // Espera o DOM estar pronto para iniciar
  window.addEventListener('load', () => {
    setTimeout(() => {
      iniciarObserver();
      if (borrado) borrar(4); // reaplica ao carregar se estava ativado
    }, 2000); // delay para WhatsApp carregar
  });


})();
