// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:slug',
            create: true,
          },
        },
        resolveAbsolutePaths: true,
        remark: {
          autolinkClassName: 'fas fa-hashtag',
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          plugins: [
            ['gridsome-plugin-remark-shiki', { theme: 'nord' }],
            ['gridsome-plugin-remark-twitter', {}],
          ],
        },
      },
    },
  ],
};
