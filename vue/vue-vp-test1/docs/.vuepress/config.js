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
            '/': [
                '',
                'test'
            ]
        }
    }
}