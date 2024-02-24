import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", {rel: "icon", href: "/favicon.ico" }]
  ],
  title: "rflow_docs",
  outDir: "./docs",
  base: "/rflow_docs",
  description: "rflow docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: "/favicon.ico"
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Blaaa section', link: '/my_page' }
        ]
      },
      {
        text: 'Installing rflow',
        collapsed: true,
        items: [

          { text: 'Installing rflow', link: '/installing_rflow' }

        ]
      },
      {
        text: 'Section 2',
        collapsed: true,
        items: [
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Blaaa section', link: '/my_page' }

        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
