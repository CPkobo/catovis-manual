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
    locales: {
        '/': {
            lang: 'ja-JP',
            title: 'CATOVIS マニュアル',
            description: 'WYSIWYGな軽量翻訳支援ツール',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'CATOVIS 使用手册',
            description: 'WYSIWYG型轻量级翻译支持工具',
        },
    },
    themeConfig: {
        sidebar: 'auto',
        locales: {
            '/': {
                lang: 'ja-JP',
                title: 'CATOVIS マニュアル',
                description: 'WYSIWYGな軽量翻訳支援ツール',
                selectText: '言語',
                label: '日本語',
                nav: [
                    { text: 'トップ', link: '/index' },
                    {
                        text: '始めよう', items: [
                            { text: 'インストール', link: '/getstarted/01_install' },
                            { text: '基本の使い方 Word編', link: '/getstarted/02_withword' },
                            { text: 'ファイルの読み込み', link: '/getstarted/03_open_import' },
                            { text: 'ファイルのエクスポート', link: '/getstarted/04_export' },
                        ]
                    },
                    {
                        text: '便利な機能', items: [
                            { text: '高度な動かし方', link: '/features/01_move' },
                            { text: 'フィルター', link: '/features/02_filter' },
                            { text: '翻訳スニペット', link: '/features/03_snipets' },
                            { text: 'スタンドアロン', link: '/features/04_standalone' },
                        ]
                    },
                    { text: 'FAQ', link: '/faq/' },
                    { text: 'ライセンス', link: '/LICENSE/' },
                    { text: 'プライバシーポリシー', link: '/PRIVACY/' },
                    { text: '開発者ブログ', link: 'https://www.794562.xyz' }
                ]
            },
            '/zh/': {
                lang: 'zh-CN',
                title: 'CATOVIS 使用手册',
                description: 'WYSIWYG型轻量级翻译支持工具',
                selectText: '语言',
                label: '简体中文',
                nav: [
                    { text: '首页', link: '/zh/index' },
                    {
                        text: '现在开始', items: [
                            { text: '安装', link: '/zh/getstarted/01_install' },
                            { text: '基本使用方法 Word编', link: '/zh/getstarted/02_withword' },
                            { text: '导入文件', link: '/zh/getstarted/03_open_import' },
                            { text: '导出文件', link: '/zh/getstarted/04_export' },
                        ]
                    },
                    {
                        text: '便利功能', items: [
                            { text: '进一步高级的运作', link: '/zh/features/01_move' },
                            { text: '过滤器', link: '/zh/features/02_filter' },
                            { text: '翻译片段', link: '/zh/features/03_snipets' },
                            { text: '独立模式', link: '/zh/features/04_standalone' },
                        ]
                    },
                    { text: '常见问题', link: '/zh/faq/' },
                    { text: '许可', link: '/zh/LICENSE/' },
                    { text: '隐私政策', link: '/zh/PRIVACY/' },
                    { text: '开发者博客', link: 'https://www.794562.xyz' }
                ]
            },
        },
    }
}
