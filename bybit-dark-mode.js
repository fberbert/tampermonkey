// ==UserScript==
// @name         Bybit Dark Mode
// @namespace    http://tampermonkey.net/
// @version      2025-07-05
// @description  Implementa modo escuro na interface da Bybit + destaque de lucros/perdas
// @author       Você
// @match        https://www.bybit.com/en/tradingbot/my-bot/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  window.addEventListener('load', () => {
    const darkCSS = `
      body, div, span, input, td, th, p {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
      }

      a {
        color: #80cbc4 !important;
      }

      .order-book, .chart, .positions, .sidebar, header, footer {
        background-color: #1e1e1e !important;
      }

      .button_btn__Cfilj {
        background-color: #222222 !important;
        border: 1px solid #444 !important;
        color: #aaa !important;
      }

      .button_btn__Cfilj > span, .button_btn__Cfilj > path {
        background: none !important;
        font-weight: normal;
        color: #aaa !important;
      }

      .tip_container__0z66C {
        /* background: #222 !important; */
      }

      .tip_container__0z66C > div,
      .tip_container__0z66C > span {
        background-color: transparent !important;
      }

      .tip_container__0z66C .fgrid_tipsPrice__ZSk36:first-of-type .fgrid_priceValue__yH18M {
        color: #00c853 !important;
      }

      .mainInfo_tag__DuYy_ {
        background-color: #AA8264 !important;
        color: #333 !important;
      }
    `;

    const style = document.createElement('style');
    style.textContent = darkCSS;
    document.head.appendChild(style);

    // Função para aplicar cor com base no valor numérico
    function applyColorBasedOnValue(el) {
      if (!el) return;
      const raw = el.innerText.replace(/[^\d\-.,]/g, '').replace(',', '.');
      const value = parseFloat(raw);
      if (isNaN(value)) return;

      el.style.setProperty(
        'color',
        value === 0
          ? '#aaa'
          : value > 0
            ? '#00c853'
            : '#BA071B',
        'important'
      );
    }

    // Observer para detectar alterações dinâmicas no DOM
    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('.fgrid_profitMark__zLOUL > div');
      els.forEach(applyColorBasedOnValue);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Aplicação inicial nas divs já carregadas
    document.querySelectorAll('.fgrid_profitMark__zLOUL > div').forEach(applyColorBasedOnValue);
  });
})();
