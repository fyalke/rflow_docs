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
      { text: 'Get Started', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is rflow', link: '/intro' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Blaaa section', link: '/my_page' }
        ]
      },
      {
        text: 'Getting Started',
        collapsed: true,
        items: [

          { text: 'Setup Environment', link: '/setup_environment' },
          { text: 'Get rflow', link: '/get_rflow' },
          { text: 'Create First Project', link: '/create_first_project' }

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
