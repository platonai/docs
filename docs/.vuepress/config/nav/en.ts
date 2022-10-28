import { NavItem } from 'vuepress/config'

export const NavItems4EN: NavItem[] = [
  {
    text: 'Guide',
    link: '/guide/'
  },
  {
    text: 'Config Reference',
    link: '/config/'
  },
  {
    text: 'Plugin',
    link: '/plugin/'
  },
  {
    text: 'Theme',
    link: '/theme/'
  },
  {
    text: 'Learn More',
    ariaLabel: 'Learn More',
    items: [
      {
        text: 'API',
        items: [
          {
            text: 'CLI',
            link: '/api/cli.html'
          },
          {
            text: 'Node',
            link: '/api/node.html'
          }
        ]
      },
      {
        text: 'Contributing Guide',
        items: [
          {
            text: 'Local Development',
            link: '/miscellaneous/local-development.html'
          },
          {
            text: 'Design Concepts',
            link: '/miscellaneous/design-concepts.html'
          },
          {
            text: 'FAQ',
            link: '/faq/'
          },
          {
            text: 'Glossary',
            link: '/miscellaneous/glossary.html'
          }
        ]
      },
      {
        text: 'Resources',
        items: [
          {
            text: 'Migrate from 0.x',
            link: '/miscellaneous/migration-guide.html'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/platonai/pulsarr/blob/1.10.x/CHANGELOG.md'
          }
        ]
      }
    ]
  },
  {
    text: 'v1.10.x',
    items: [
      {
        text: 'v1.10.x',
        link: 'https://github.com/platonai/pulsarr/tree/1.10.x'
      },
      {
        text: 'v1.9.x',
        link: 'https://github.com/platonai/pulsarr/tree/1.9.x'
      }
    ]
  }
]
