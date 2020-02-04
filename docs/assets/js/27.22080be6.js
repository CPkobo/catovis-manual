(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{269:function(t,v,s){"use strict";s.r(v);var a=s(0),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ファイルの読み込み"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ファイルの読み込み"}},[t._v("#")]),t._v(" ファイルの読み込み")]),t._v(" "),s("h2",{attrs:{id:"プロジェクトを開く"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#プロジェクトを開く"}},[t._v("#")]),t._v(" プロジェクトを開く")]),t._v(" "),s("p",[t._v("CATOVISで作成したpjtzipファイルは直接開くことができます。pjtzipファイルには各種設定のほか、翻訳メモリや用語集が階層化されたまま保存されているので、簡単に作業が再開できます。")]),t._v(" "),s("h3",{attrs:{id:"プロジェクトの開き方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#プロジェクトの開き方"}},[t._v("#")]),t._v(" プロジェクトの開き方")]),t._v(" "),s("p",[t._v("メニューバーのFileからOpenをクリックします。ファイル選択ダイアログが現れるので、ファイルを選んでください。\n元の画面が表示されれば準備完了です。作業を開始してください。")]),t._v(" "),s("h2",{attrs:{id:"インポート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#インポート"}},[t._v("#")]),t._v(" インポート")]),t._v(" "),s("p",[t._v("CATOVISでは翻訳メモリ／用語集として、以下の形式のファイルをインポートできます。")]),t._v(" "),s("ul",[s("li",[t._v("TMX/TBX")]),t._v(" "),s("li",[t._v("xlsx")]),t._v(" "),s("li",[t._v("csv/tsv")]),t._v(" "),s("li",[t._v("json")])]),t._v(" "),s("p",[t._v("このうち、TMXは翻訳メモリ、TBXは用語集専用で、その他のファイルはいずれのデータとしても読み込めます。")]),t._v(" "),s("p",[t._v("また、いずれの形式も複数ファイルを一括で読み込むことが可能です。")]),t._v(" "),s("h3",{attrs:{id:"tmxのインポート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tmxのインポート"}},[t._v("#")]),t._v(" TMXのインポート")]),t._v(" "),s("p",[t._v("読み込み形式をTMX/TBX、読み込み先をTranslation Memoriesとすると、TMXファイルをインポートできます。TMXのインポートにはロケール（言語）の設定が必要です。\n0.4.5現在では、日本語、英語、中国語の主要なロケールのみ選択可能です。")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/zh/faq/index.html#翻訳メモリってなに？"}},[t._v("翻訳メモリってなに？")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/zh/faq/index.html#ロケールってなに？"}},[t._v("ロケールってなに？")])],1),t._v(" "),s("h3",{attrs:{id:"tbxのインポート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tbxのインポート"}},[t._v("#")]),t._v(" TBXのインポート")]),t._v(" "),s("p",[t._v("読み込み形式をTMX/TBX、読み込み先をTermbaseとすると、TBXファイルをインポートできます。TBXのインポートには、TMXと同様にロケール（言語）の設定が必要です。\n0.4.5現在では、日本語、英語、中国語の主要なロケールのみ選択可能です。")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/zh/faq/index.html#用語集（タームベース）ってなに？"}},[t._v("用語集（タームベース）ってなに？")])],1),t._v(" "),s("h3",{attrs:{id:"xlsxのインポート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xlsxのインポート"}},[t._v("#")]),t._v(" xlsxのインポート")]),t._v(" "),s("p",[t._v("読み込み形式をxlsxとすると、Excelファイルを読み込むことができます。読み込み先としては翻訳メモリ（Translation Memory）か、用語集（Termbase）から選べます。")]),t._v(" "),s("p",[t._v("Excelのインポートの際は、どの原文、訳文、メモをどの列（A~E）から読み込むかと、最初の数行を読み込まないようにするか（Skip Header）を追加で設定できます。")]),t._v(" "),s("p",[t._v("複数の言語が一つのファイルにまとめられているケースや、先頭行に「日本語」「中国語」のようなExcel用のタイトルがついているケースで活用してください。")]),t._v(" "),s("h3",{attrs:{id:"csv-tsvのインポート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csv-tsvのインポート"}},[t._v("#")]),t._v(" csv/tsvのインポート")]),t._v(" "),s("p",[t._v("csvファイルやtsvファイルからインポートすることも可能です。Excelと同様、読み込み先としては翻訳メモリ（Translation Memory）か、用語集（Termbase）から選べます。")]),t._v(" "),s("p",[t._v("csv/tsvを選択した場合は区切り文字（Delimiter）とエンクロージャ（Enclosure）の設定が必要です。また、Excelと同じくSkip Headerで先頭の数行を読みとばすことができます。")]),t._v(" "),s("p",[t._v("csv/tsvでは列を選択する機能はありません。常に "),s("strong",[t._v("原文, 訳文, メモ")]),t._v(" の順につくってください。")]),t._v(" "),s("h4",{attrs:{id:"full-csv-tsvのインポート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-csv-tsvのインポート"}},[t._v("#")]),t._v(" Full csv/tsvのインポート")]),t._v(" "),s("p",[t._v("csv/tsvにはもう一つ、Fullバージョンのインポートを準備しています。これはCATOVISからエクスポートした、すべての情報が含まれたファイルをインポートするときに使う機能です。区切り文字（Delimiter）とエンクロージャ（Enclosure）のみ、追加で設定してください。")]),t._v(" "),s("h3",{attrs:{id:"jsonファイルのインポート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonファイルのインポート"}},[t._v("#")]),t._v(" JSONファイルのインポート")]),t._v(" "),s("p",[t._v("pjtzipファイルの中には翻訳メモリ／用語集がJSON形式で保存されています。JSONファイルであれば、ロケールの設定等は不要になります。")]),t._v(" "),s("p",[t._v("pjtzipを分解して翻訳メモリ／用語集を管理する場合に使用できます。")]),t._v(" "),s("h2",{attrs:{id:"インポートの共通設定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#インポートの共通設定"}},[t._v("#")]),t._v(" インポートの共通設定")]),t._v(" "),s("h3",{attrs:{id:"内部ファイルと外部ファイル"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内部ファイルと外部ファイル"}},[t._v("#")]),t._v(" 内部ファイルと外部ファイル")]),t._v(" "),s("p",[t._v("CATOVISでは翻訳メモリ／用語集を内部ファイル（Internal）と外部ファイル（External）に分けて管理しています。")]),t._v(" "),s("p",[t._v("新しい翻訳メモリ・用語は基本的に内部ファイルにのみ記録されていきます。")]),t._v(" "),s("p",[t._v("外部ファイルに100%マッチの原文があり、その訳文に対して修正を加えた場合も、新しい翻訳メモリとして内部ファイルに蓄積されます。")]),t._v(" "),s("h4",{attrs:{id:"内部ファイルと外部ファイルの使い分け"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内部ファイルと外部ファイルの使い分け"}},[t._v("#")]),t._v(" 内部ファイルと外部ファイルの使い分け")]),t._v(" "),s("p",[t._v("上述のとおり、内部ファイルにある翻訳メモリや用語は、作業が進むにしたがって書き換えられていきます。そのため、まだ変更の可能性が高い作業中の翻訳メモリや用語集は、内部ファイルとして読み込むのが良いと思います。")]),t._v(" "),s("p",[t._v("それに対して外部ファイルは "),s("strong",[t._v("[E]")]),t._v(" ボタンをクリックしないと修正されません。そのため、不意に変更したくない、参考用のファイルに向いています。")]),t._v(" "),s("h3",{attrs:{id:"修正の許可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修正の許可"}},[t._v("#")]),t._v(" 修正の許可")]),t._v(" "),s("p",[t._v("外部ファイルとして読み込んだ際に、 "),s("strong",[t._v("[E]")]),t._v(" ボタンからの修正も受け付けないようにしたい場合は、編集禁止（Prohibit to edit）をチェックして読み込んでください。")])])}),[],!1,null,null,null);v.default=r.exports}}]);