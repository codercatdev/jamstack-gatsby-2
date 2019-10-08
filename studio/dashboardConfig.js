export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9d0398cd9de7a810ef4af4',
                  title: 'Sanity Studio',
                  name: 'jamstack-gatsby-2-studio',
                  apiId: '9eb0f52b-7ae0-4367-8ab5-34f98314de3f'
                },
                {
                  buildHookId: '5d9d03985af417a5bb6de17a',
                  title: 'Blog Website',
                  name: 'jamstack-gatsby-2',
                  apiId: '05ca2b93-5a41-41d1-884f-9336fb06b213'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajonp/jamstack-gatsby-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jamstack-gatsby-2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
