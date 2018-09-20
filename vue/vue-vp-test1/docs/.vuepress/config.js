module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'google', link: 'https://google.com' },
        ],
        // sidebar: [
        //     {
        //         title: 'Group 1',
        //         collapsable: false,
        //         children: [
        //             '/'
        //         ]
        //     },
        //     {
        //         title: 'Group 2',
        //         children: [ 
        //             '/test'
        //         ]
        //     }
        // ]
        sidebar: {
            '/foo/': [
              '',     /* /foo/ */
              'foo1',  /* /foo/one.html */
            ],
    
      
            // fallback
            '/': [
                {
                    title: 'title1',
                    collapsable: false,
                    children: [
                        'about'
                    ]
                },
                {
                    title: 'title2',
                    collapsable: false,
                    children: [
                        'contact'
                    ]
                }
            ]
          }
    }
}