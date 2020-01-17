module.exports = {
    base: '/catovis-docs/',
    dest: 'docs',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/catovis.ico' }],
    ],
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'ABOUT', link: '/' },
            { text: 'Get Started', items: [
                { text: 'Install', link: '/getstarted/install' },
                { text: 'Basic Flow (Word)', link: '/getstarted/withword' },
                ]
            },
            { text: 'Filter', link: '/filter/' },
            { text: 'LICENSE', link: '/LICENSE/' },
        ]
    }
}