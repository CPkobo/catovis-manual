module.exports = {
//    base: '/docs/',
//    dest: 'docs',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/catovis.ico' }],
    ],
    plugins: [
        [
			'@vuepress/google-analytics',
    	  	{ 'ga': 'UA-146588348-4' }
    	],
    	[
    		'sitemap',
    		{ 'hostname': 'https://man.catovis.com'}
    	],
    ],
    locales: {
        '/': {
            lang: 'ja-JP',
            title: 'CATOVIS マニュアル',
            description: '軽量・軽快な翻訳支援ツール',
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
                description: '軽量・軽快な翻訳支援ツール',
                selectText: '言語',
                label: '日本語',
                ariaLabel: 'ja-JP',
                nav: [
                    { text: 'トップ', link: '/index' },
                    {
                        text: '始めよう', items: [
                            { text: 'はじめに', link: '/getstarted/00_introduction' },
                            { text: 'インストール', link: '/getstarted/01_install' },
                            { text: '基本の使い方 Word編(1)', link: '/getstarted/02_vbacore' },
                            { text: '基本の使い方 Word編(2)', link: '/getstarted/03_vbacore2' },
                            { text: 'CATOVIS LSと連携', link: '/getstarted/04_withls' },
                            { text: 'ファイルの読み込み', link: '/getstarted/05_open_import' },
                            { text: 'ファイルのエクスポート', link: '/getstarted/06_export' },
                        ]
                    },
                    {
                        text: '便利な機能', items: [
                            { text: '高度な動かし方', link: '/features/01_move' },
                            { text: '見た目の変更', link: '/features/02_viewmode' },
                            { text: '様々な補助機能', link: '/features/03_assistance' },
                            { text: 'フィルター', link: '/features/04_filter' },
                            { text: '翻訳スニペット', link: '/features/05_snipets' },
                            { text: 'スタンドアロン', link: '/features/06_standalone' },
                            { text: '機械翻訳との連携', link: '/features/07_machine' },
                            { text: 'リファレンス', link: '/features/99_reference' },
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
                ariaLabel: 'zh-CN',
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
                            { text: '更换外观', link: '/zh/features/02_viewmode' },
                            { text: '各种辅助功能', link: '/zh/features/03_assistance' },
                            { text: '过滤器', link: '/zh/features/04_filter' },
                            { text: '翻译片段', link: '/zh/features/05_snipets' },
                            { text: '独立模式', link: '/zh/features/06_standalone' },
                            { text: '参照文件', link: '/zh/features/99_reference' },
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
