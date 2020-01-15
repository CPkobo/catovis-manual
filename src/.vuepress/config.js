module.exports = {
    base: '/catovis-docs/',
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
        ]
    }
}