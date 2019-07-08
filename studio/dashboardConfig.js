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
                  buildHookId: '5d233d027d1305ed2fea01cc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iucfq9xv',
                  apiId: '9c7a637f-12ec-43b2-a186-554dce4563b8'
                },
                {
                  buildHookId: '5d233d027d13052f48ea01bc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jbnjwipd',
                  apiId: '9dd34d8e-f587-413a-ace9-c852c456009a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kristofferj/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jbnjwipd.netlify.com', category: 'apps'}
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
