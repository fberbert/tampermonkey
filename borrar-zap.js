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

  console.log('Borrar WhatsApp iniciado!');
  // 🟢 WHITELIST de nomes que **não devem ser borrados**
  const whitelist = [
    "Rebeca",
    "NBA Brasil",
    "Elaine",
    "Luluca"
  ];

  // Função principal
  function borrar(fator = 4) {
    if (typeof escondeFunc !== 'undefined') {
      clearTimeout(escondeFunc);
    }

    // Seleciona todos os contatos visíveis no painel esquerdo
    const itens = document.querySelectorAll('#pane-side [role="listitem"]');

    itens.forEach(item => {
      // Tenta pegar a imagem e o nome dentro do item
      const img = item.querySelector('img');
      const nomeSpan =
        item.querySelector('.x78zum5 > span') ||  // nome de contatos individuais
        item.querySelector('._ak8q > span');      // nome de grupos (fallback)

      if (!nomeSpan) return;

      const nome = nomeSpan.innerText.trim();

      // Verifica se o nome está na whitelist
      const isPermitido = whitelist.some(entry => nome === entry);

      // Aplica ou remove blur com base na whitelist
      if (!isPermitido) {
        if (img) img.style.filter = `blur(${fator}px)`;
        nomeSpan.style.filter = `blur(${fator}px)`;
      } else {
        if (img) img.style.filter = 'none';
        nomeSpan.style.filter = 'none';
      }
    });

    escondeFunc = setTimeout(() => {
      if (typeof esconder === 'function') esconder();
    }, 1000);
  }

  //  Tecla de atalho Ctrl + Alt + B → toggle do borrado
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'b') {
      borrado = !borrado;
      borrar(borrado ? 4 : 0);
    }
  });


})();
