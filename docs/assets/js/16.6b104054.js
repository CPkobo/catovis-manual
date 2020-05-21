(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{210:function(t,s,a){t.exports=a.p+"assets/img/mtsetting.ead26e03.png"},257:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"機械翻訳との連携"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#機械翻訳との連携"}},[t._v("#")]),t._v(" 機械翻訳との連携")]),t._v(" "),n("p",[t._v("昨今の機械翻訳の発展は目覚ましいものがあり、プロの翻訳においても参考用・省入力用として、あるいは辞書的な用途として活用できるシーンも増えてきました。このような背景のもと、CATOVISにも機械翻訳との連携機能を追加しました。")]),t._v(" "),n("p",[t._v("メニューバーの"),n("strong",[t._v("Page")]),t._v("から"),n("strong",[t._v("MT Settings")]),t._v("を選択してください。\nバージョン0.5.0ではGoogleの翻訳APIにのみ対応しています。")]),t._v(" "),n("img",{staticStyle:{zoom:"75%"},attrs:{src:a(210),alt:"img"}}),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("Googleの翻訳を使用にあたっては、Google Cloud Computingのアカウントを開設し、Translate APIを有効にしておく必要があります。\nどうしても設定が難しい場合はメールかTwitterのDM等でご連絡ください。")])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("DeepLについては、2020年5月現在、日本から有料アカウントを作成することができないため未検証です。\nアカウントができ次第、アップデートをしたいと考えています。")])]),t._v(" "),n("p",[t._v("機械翻訳を使うためには、「原文言語」「訳文言語」「API Key」を入力する必要があります。\nCATOVISのMT Settingsページで上記の３項目を記入し、Googleの前のスイッチをクリックしてONにした状態で、CONFIRMボタンをクリックします。この状態で原文を照会すると、CATOVISが自動的にGoogleの機械翻訳を取得し、CATの結果として表示するようになります。")]),t._v(" "),n("h2",{attrs:{id:"部分的な機械翻訳"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部分的な機械翻訳"}},[t._v("#")]),t._v(" 部分的な機械翻訳")]),t._v(" "),n("p",[t._v("上記の設定が完了していると、Word上で "),n("strong",[t._v("【Alt + G】")]),t._v(" を押すことで、選択中のテキストについて機械翻訳を取得することができます。\n原文が長すぎるなど上手く機械翻訳できない場合でも、部分ごとに機械翻訳を取得することで、使いやすい結果になることがあります。")]),t._v(" "),n("h2",{attrs:{id:"設定の永続化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#設定の永続化"}},[t._v("#")]),t._v(" 設定の永続化")]),t._v(" "),n("p",[t._v("セキュリティの関係で、機械翻訳のAPI KeyはCATOVISに保存されません。\n毎回Googleの機械翻訳を使用したい場合には、config.jsonファイルを使用することで設定を永続化できます。\nconfig.jsonのひな型は、"),n("a",{attrs:{href:"https://github.com/QuanKaoYang/catovis-docs/tree/master/catovis",target:"_blank",rel:"noopener noreferrer"}},[t._v("ダウンロード"),n("OutboundLink")],1),t._v("にあります。\nこのファイルをメモ帳などのテキストエディタで開き、")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useGcp"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gcpKey"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_API_KEY"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("に書き換えてください。\nその後、このconfig.jsonを、<ユーザーフォルダ>\\AppData\\Roaming\\catovis\\にコピーしておきます。\nこうすることでCATOVISの起動時にGoogle翻訳のAPI Keyを自動的に読み込むようになります。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("config.jsonは他にも様々な項目を変更することができます。\nこのファイルを書き換えたことでCATOVISが上手く起動しなくなったら、このファイルを削除してください。\n詳細については"),n("RouterLink",{attrs:{to:"/features/99_reference.html#config項目一覧（json）"}},[t._v("config項目一覧（json）")]),t._v("を参照してください。")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);