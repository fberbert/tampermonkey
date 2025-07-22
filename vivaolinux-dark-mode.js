// ==UserScript==
// @name         Viva o Linux Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tema escuro para o site vivaolinux.com.br
// @author       Fábio Berbert de Paula
// @match        https://www.vivaolinux.com.br/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var css = `
        body, .content, .container {
            background-color: #0f0f0f !important;
            color: #e0e0e0 !important;
        }

        h1, h2, h3, h4, h5, .breadcrumbs h1, .breadcrumb>li.active {
            color: #e0e0e0 !important;
            text-shadow: none !important;
        }

        a, a:hover, a:visited, a:link {
            color: #ccc !important;
        }

        .postHeader a, .postHeader a:visited, .postHeader a:active, .postHeader a:link,
        .header .navbar-default .navbar-nav>li>a, .header .navbar-default .navbar-toggle:hover,
        .header .navbar-default .navbar-toggle:focus, .header .navbar-default .navbar-nav .dropdown>a,
        .header .navbar-default .navbar-nav>li>a:hover {
            color: #ddd !important;
        }

        .cinza, .comentarioItem:nth-child(even), #tabPerfil div p:nth-child(odd), #tabContrib div p:nth-child(odd), .service:hover, .pinned {
            background-color: #2c2c2c !important;
            color: #ccc !important;
        }

        .minhaconta, .fotoPost, .postCorpo, .comentarioItem, .perfil-sidebar li ul, .perfil-sidebar li.active ul a, .service, #corpoArtigo pre:not(.prettyprint) {
            background-color: #252525 !important;
            box-shadow: 0 1px 3px #111 !important;
        }

        .codigo, .prettyprint, .quote, .teclado {
            background-color: #2a2a2a !important;
            border-color: #444 !important;
            color: #d0d0d0 !important;
        }

        .perfil-sidebar li a, .altFoto, .sky-form textarea, .home-link, .tab-v1 .nav-tabs>a, .tab-v1 .nav-tabs>li>a, .tab-v1 .btn-default, .caixa-pequena a, .caixa-pequena a:visited, .btn-default a, .btn-default a:visited, .btn-default {
            color: #e0e0e0 !important;
            background-color: transparent !important;
        }

        .perfil-sidebar li a:hover {
            background-color: #048 !important;
            color: #fff !important;
        }

        .tab-v1 .nav-tabs {
            border-bottom: 1px solid #ccc !important;
            margin-bottom: 20px !important;
        }

        .tab-v1 .nav-tabs>.active>a, .tab-v1 .nav-tabs>.active>a:hover, .tab-v1 .nav-tabs>li>a:hover, .tab-v1 .nav-tabs>.active>a:focus {
            background: #ccc !important;
            color: #0f0f0f !important;
        }

        .header, .header-fixed .header.header-fixed-shrink, .postHeader, .btn-u, .btn-u:active, .btn-u:focus, .btn-u:hover {
            background-color: #15371f !important;
        }

        .header .dropdown-menu {
            border-top-color: 1px solid #666 !important;
            border-bottom-color: 1px solid #666 !important;
        }

        .header .dropdown-menu li a {
            background-color: #2c2c2c !important;
            color: #e0e0e0 !important;
        }

        .header .dropdown-menu li a:hover, .navbar-nav .dropdown .dropdown-menu .active>a, .header .dropdown-menu li a:focus {
            background-color: #15371f !important;
            color: #fff !important;
        }

        .funny-boxes-left-orange, .funny-boxes-left-orange:hover {
            border-left-color: #666 !important;
        }

        #destaques>p>a, #top10>p>a {
            color: #ccc !important;
        }

        .caixa-pequena {
            border-bottom-color: #444 !important;
        }

        blockquote:hover {
            border-color: #ccc !important;
        }

        div.gallery img:hover {
            border-color: #ccc !important;
        }

        div.gallery img {
            border-color: #252525 !important;
        }

        .headline h2, .headline h3, .headline h4 {
            border-bottom-color: #ccc !important;
        }

        #toolbar li, .commentBar li {
            border-right-color: #444 !important;
        }

        #toolbar li:first-child, .commentBar li:first-child {
            border-left-color: #444 !important;
        }

        .wrapper, .blog-twitter .blog-twitter-inner, .breadcrumbs  {
            background: transparent !important;
        }

        li, li a, p {
        color: #ccc !important;
        }

        .header .navbar-default, .navbar > .container {
            background: #15371f !important;
            background-image: none !important;
        }

        .header {
            background-color: #15371f !important;
            border-bottom: solid 3px #15371f !important;
        }

        blockquote.hero, .service-block-light {
            background-color: #111 !important;
        }

        .service-block-dark {
            background: #15371f !important;
        }

        .service-block-light {
            border: 1px solid #ccc !important;
        }

        table.table a, div a.btn {
           color: #aaa !important;
        }

        .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th,
        .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td,
        .table>tfoot>tr>td {
            border-top: 1px solid #3b3a3a !important;
        }

        .breadcrumbs {
            border-bottom: 1px solid #3b3a3a !important;
        }

        .footer-v1 .footer,
        .testimonials .carousel-arrow i,
        .header .navbar .nav>li>.search,
        .funny-boxes,
        .profile .table,
        .profile .profile-edit,
        .owl-btn {
            background: transparent !important;
        }

        .header .navbar .nav>li>.search {
            border: 0px !important;
         }

        .header .dropdown-menu li a {
            border-bottom: 1px solid #666 !important;
        }

        .headline {
            border-bottom: 0px !important;
        }

        .headline h2, .headline h3, .headline h4 {
            display: flex;
        }

        #artigos .media, #dicas .media, #script .media {
            margin-bottom: 30px !important;
        }

        .btn {
            border: 1px solid #666 !important;
         }

         div > table.table-hover > tbody > tr:hover {
             background-color: #222 !important;
         }

         .header.header-fixed-shrink {
             box-shadow: none !important;
         }

         .service-block-light {
             border: 1px solid #333 !important;
         }

         textarea, input, checkbox, select {
             background: #222 !important;
             color: #dedede !important;
             border: 1px solid #333 !important;
         }

         .sky-form, .sky-form fieldset, .sky-form header, .sky-form footer {
             background: transparent !important;
             box-shadow: none;
             border: 0px !important;
         }

         span.badge-light, span.label-light {
             color: #ccc;
             background: #666;
         }

         .alert-info {
             color: #ddd;
             background-color: #121212;
             border-color: #232323;
         }

         .alert-danger {
             color: #ddd;
             background-color: #2b0000;
             border-color: #4f0000;
         }

         .alert-warning {
              background-color: #453e1a;
              border-color: #8e7f32;
         }

         .alert-success {
              background-color: #15371f;
              border-color: #26483f;
         }

         .btn.btn-default.but-distro {
                 background: #999 !important;
         }

         .but-distro a, .but-distro a:active, .but-distro a:visited {
             color: #ccc !important;
             text-decoration: none !important;
         }
    `;

    GM_addStyle(css);
})();
