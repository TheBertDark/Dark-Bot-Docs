import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/Dark-Bot-Docs/',
  title: "Dark-Bot",
  description:
    "Bot de Discord multifuncional para servidores de Genshin Impact",
  lang: "es-ES",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "rgb(125, 31, 219)" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "es_ES" }],
    ["meta", { property: "og:title", content: "Dark-Bot | Bot de Discord" }],
    ["meta", { property: "og:site_name", content: "Dark-Bot" }],
    ["meta", { property: "og:image", content: "/og-image.png" }],
    ["meta", { property: "og:url", content: "https://mibot.example.com/" }],
  ],

  lastUpdated: true,

  themeConfig: {
    logo: "../logoicono.png",

    nav: [
      { text: "Inicio", link: "/" },
      { text: "Guía Rápida", link: "/quickstart" },
      { text: "Comandos", link: "/commands/" },
      { text: "Configuración", link: "/config/" },
      {
        text: "Recursos",
        items: [
          { text: "FAQ", link: "/faq" },
          { text: "Soporte", link: "/support" },
          { text: "Changelog", link: "/changelog" },
        ],
      },
    ],

    sidebar: {
      "/": [
        {
          text: "🚀 Comenzar",
          items: [
            { text: "Introducción", link: "/" },
            { text: "Guía Rápida", link: "/quickstart" },
            { text: "Invitar el Bot", link: "/invite" },
            { text: "Configuración Inicial", link: "/setup" },
          ],
        },
        {
          text: "📖 Configuración",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "Autorooms Config", link: "/Configuracion/autorooms-config" },
            { text: "Birthday List", link: "/Configuracion/birthday-list" }
          ]
        },
        {
          text: "🎮 Juegos",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "Puzzle", link: "/Juegos/puzzle" },
            { text: "Codes", link: "/Juegos/codes" }
          ]
        },
        {
          text: "🛠️ Utilidad",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "TC", link: "/Utilidad/tc" },
            { text: "Ping", link: "/Utilidad/ping" },
            { text: "Server Info", link: "/Utilidad/serverinfo" },
            { text: "Avatar", link: "/Utilidad/avatar" }
          ]
        },
        {
          text: "⚙️ Configuración",
          items: [
            { text: "Configuración General", link: "/config/" },
            { text: "Sistema de Bienvenidas", link: "/config/welcome" },
            { text: "Sistema de Tickets", link: "/config/tickets" },
            { text: "Anti-Spam", link: "/config/antispam" },
            { text: "Logs y Moderación", link: "/config/logs" },
            { text: "Roles Automáticos", link: "/config/roles" },
            { text: "Notificaciones YouTube", link: "/config/youtube" },
          ],
        },
        {
          text: "🔧 Verificador KQMC",
          items: [
            { text: "Qué es KQMC", link: "/kqmc/" },
            { text: "Usar el Comando /tc", link: "/kqmc/usage" },
            { text: "Interpretar Resultados", link: "/kqmc/results" },
            { text: "Solucionar Errores", link: "/kqmc/troubleshooting" },
            { text: "Guía Completa", link: "/kqmc/guide" },
          ],
        },
        {
          text: "🎵 Sistema de Música",
          items: [
            { text: "Comandos Básicos", link: "/music/" },
            { text: "Playlists", link: "/music/playlists" },
            { text: "Configuración", link: "/music/config" },
          ],
        },
        {
          text: "🛠️ Administración",
          items: [
            { text: "Permisos", link: "/admin/permissions" },
            { text: "Migración", link: "/admin/migration" },
            { text: "Backup", link: "/admin/backup" },
          ],
        },
        {
          text: "❓ Ayuda",
          items: [
            { text: "FAQ", link: "/faq" },
            { text: "Soporte", link: "/support" },
            { text: "Changelog", link: "/changelog" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/tu-servidor" },
      { icon: "github", link: "https://github.com/tu-usuario/mi-bot-beta" },
    ],

    footer: {
      message: "Desarrollado con ❤️ para la comunidad de Genshin Impact",
      copyright: "Copyright © 2024 Dark-Bot",
    },

    editLink: {
      pattern:
        "https://github.com/tu-usuario/mi-bot-beta/edit/main/docs/docs/:path",
      text: "Editar esta página en GitHub",
    },
  },
});
