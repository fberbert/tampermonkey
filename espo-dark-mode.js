// ==UserScript==
// @name         Dark Mode EspoCRM
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Aplica dark.css no hub.altarede.com.br
// @match        https://hub.altarede.com.br/*
// @match        http://espocrm/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const cssHref = 'https://hub.altarede.com.br/client/css/espo/dark.css?r=1753206786';

    function addDarkCss() {
        if (!document.querySelector(`link[href="${cssHref}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = cssHref;
            document.head.appendChild(link);
            console.log('Dark CSS adicionado');
        }
    }

    // Adiciona inicialmente
    addDarkCss();

    // Observa mudanças no <head>
    const observer = new MutationObserver(() => {
        addDarkCss();
    });

    observer.observe(document.head, { childList: true, subtree: true });
})();