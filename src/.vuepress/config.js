module.exports = {
    base: '/catovis-docs/',
    dest: 'docs',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/catovis.ico' }],
    ],
	plugins: [
    	[
			'@vuepress/google-analytics',
    	  	{ 'ga': 'UA-155988647-2' }
    	],
	],
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'トップ', link: '/' },
            { text: '始めよう', items: [
                { text: 'インストール', link: '/getstarted/01_install' },
                { text: '基本の使い方 Word編', link: '/getstarted/02_withword' },
                { text: 'ファイルの読み込み', link: '/getstarted/03_open_import' },
                { text: 'ファイルのエクスポート', link: '/getstarted/04_export' },
                ]
            },
			{ text: '便利な機能', items: [
				{ text: '高度な動かし方', link: '/features/01_move' },
				{ text: 'フィルター', link: '/features/02_filter' },
				{ text: '翻訳スニペット', link: '/features/03_snipets' },
				{ text: 'スタンドアロン', link: '/features/04_standalone' },
				]
			},
            { text: 'FAQ', link: '/faq/' },
            { text: 'ライセンス', link: '/LICENSE/' },
			{ text: 'プライバシーポリシー', link: '/PRIVACY/' },
        ]
    }
}
