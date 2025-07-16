// ==UserScript==
// @name         BJ-Share Dark Theme
// @namespace    http://tampermonkey.net/
// @version      2025-07-16
// @description  Implementa um tema escuro para o site BJ-Share.
// @author       GitHub Copilot
// @match        https://bj-share.info/*
// @grant        none
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// ==/UserScript==

(function() {
    'use strict';

    const darkThemeCSS = `
        :root {
            --dark-bg-primary: #121212;
            --dark-bg-secondary: #1e1e1e;
            --dark-bg-tertiary: #2a2a2a;
            --dark-text-primary: #e0e0e0;
            --dark-text-secondary: #b0b0b0;
            --dark-border-color: #444444;
            --dark-link-color: #80cbc4;
            --dark-link-hover-color: #a7ffeb;
            --dark-accent-color: #333333;
        }

        body, #wrapper {
            background-color: var(--dark-bg-primary) !important;
            color: var(--dark-text-primary) !important;
        }

        #header, #footer, .main_column, .sidebar, .box, #content, .well {
            background-color: var(--dark-bg-secondary) !important;
            border-color: var(--dark-border-color) !important;
            color: var(--dark-text-primary) !important;
        }

        .head, .colhead_dark, #menudrop {
            background: var(--dark-accent-color) !important;
            border-color: var(--dark-border-color) !important;
            background-image: none !important;
        }

        a {
            color: var(--dark-link-color) !important;
        }

        a:hover {
            color: var(--dark-link-hover-color) !important;
        }

        table, td, th, tr  {
            background-color: var(--dark-bg-primary) !important;
            color: var(--dark-text-primary) !important;
            border-color: var(--dark-border-color) !important;
        }

        tr.torrent {
            background-color: var(--dark-bg-tertiary) !important;
        }

        .torrent_table > tbody > tr:nth-child(2n+1) > td,
        .forum_post:nth-of-type(2n+1) .colhead_dark,
        .forum_post:nth-of-type(2n+1) .body {
             background-color: var(--dark-bg-tertiary) !important;
        }

        input[type="text"], input[type="search"], input[type="password"], textarea {
            background-color: var(--dark-accent-color) !important;
            color: var(--dark-text-primary) !important;
            border: 1px solid #555 !important;
        }

        button, .button, input[type="submit"], input[type="button"] {
            background: #444 !important;
            color: var(--dark-text-primary) !important;
            border: 1px solid #666 !important;
            background-image: none !important;
        }

        button:hover, .button:hover, input[type="submit"]:hover, input[type="button"]:hover {
            background: #555 !important;
        }

        #userinfo {
            background-color: transparent !important;
        }
        #userinfo_stats, #userinfo_minor, #menu ul, #menu ul li ul {
            background-color: transparent !important;
        }

        #menu ul li ul {
             background-color: var(--dark-accent-color) !important;
             border: 1px solid var(--dark-border-color) !important;
        }

        .chosen-container-single .chosen-single, .chosen-container-multi .chosen-choices {
            background: var(--dark-accent-color) !important;
            border-color: #555 !important;
            color: var(--dark-text-primary) !important;
            box-shadow: none !important;
        }

        .chosen-drop, .chosen-container .chosen-results {
            background: var(--dark-bg-tertiary) !important;
            border-color: #555 !important;
            color: var(--dark-text-primary) !important;
        }

        .chosen-container .chosen-results li.highlighted {
            background: #555 !important;
            background-image: none !important;
        }

        .alertbar, #alerts {
            background: #0d0a01ff !important;
            color: #fdd835 !important;
        }

        #noteAlertMsg {
            background: #003c50 !important;
        }

        #chatoutput, .pad {
            background-color: var(--dark-bg-secondary) !important;
            border-color: var(--dark-border-color) !important;
        }

        .news_post .pad, .shoutbox .pad {
             background-color: var(--dark-bg-secondary) !important;
        }

        #logo {
            filter: invert(1) hue-rotate(180deg);
        }

        .stat, .stat span {
            color: var(--dark-text-secondary) !important;
        }

        .r50 {
            color: #4caf50 !important;
        }

        #userinfo_stats .stat.bjtooltip {
             color: var(--dark-text-primary) !important;
        }

        #menudrop ul li ul li a:first-child {
            color: var(--dark-link-color) !important;
        }
        
        #menu {
            background-color: var(--dark-bg-secondary) !important;
            border-color: var(--dark-border-color) !important;
            box-shadow: none !important;
        }
        
        .group_torrent audio_header > td {
            background-color: var(--dark-bg-secondary) !important;
            color: var(--dark-text-primary) !important;
        }

        tr.resolution_header, table.forum_post td.body {
            background-color: var(--dark-bg-secondary) !important;
            color: var(--dark-text-primary) !important;
        }
        
        blockquote {
            background-color: transparent !important;
        }
        
        .BBCodeToolbar-icon {
            fill: var(--dark-text-primary) !important;
        }

        .browse_rating {
            background: transparent !important;
        }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = darkThemeCSS;
    document.head.appendChild(style);
})();
