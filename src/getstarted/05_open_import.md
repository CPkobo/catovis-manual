---
title:  ファイルの読み込み
lang: ja-JP
sidebar: auto
prev: ./04_withls
next: ./06_export
---
#  ファイルの読み込み
## プロジェクトを開く
CATOVISで作成したpjtzipファイルは直接開くことができます。pjtzipファイルには各種設定のほか、翻訳メモリや用語集が階層化されたまま保存されているので、簡単に作業が再開できます。

### プロジェクトの開き方
メニューバーのFileからOpenをクリックします。ファイル選択ダイアログが現れるので、ファイルを選んでください。
元の画面が表示されれば準備完了です。作業を開始してください。

## インポート
CATOVISでは翻訳メモリ／用語集として、以下の形式のファイルをインポートできます。
- TMX/TBX
- xlsx
- csv/tsv
- json 

このうち、TMXは翻訳メモリ、TBXは用語集専用で、その他のファイルはいずれのデータとしても読み込めます。
また、いずれの形式も複数ファイルを一括で読み込むことが可能です。

### TMXのインポート
読み込み形式をTMX/TBX、読み込み先をTranslation Memoriesとすると、TMXファイルをインポートできます。TMXのインポートにはロケール（言語）の設定が必要です。
0.4.7までは、日本語、英語、中国語の主要なロケールのみ選択可能です。
0.5.0では初期状態では日本語、英語、中国語のみですが、ユーザーフォルダの *config.json* を編集することで、任意のロケールを追加／削除できるようになりました。

[翻訳メモリってなに？](../faq/index.html#翻訳メモリってなに？)

[ロケールってなに？](../faq/index.html#ロケールってなに？)

[config項目一覧（json）](./99_reference.html#config項目一覧（json）)

### TBXのインポート
読み込み形式をTMX/TBX、読み込み先をTermbaseとすると、TBXファイルをインポートできます。TBXのインポートには、TMXと同様にロケール（言語）の設定が必要です。
ロケールについてはTMXと同様です。

[用語集（タームベース）ってなに？](../faq/index.html#用語集（タームベース）ってなに？)

### xlsxのインポート

読み込み形式をxlsxとすると、Excelファイルを読み込むことができます。 * Excelの1シート目のみがインポート対象です。*
読み込み先としては翻訳メモリ（Translation Memory）か、用語集（Termbase）から選べます。

Excelのインポートの際は、どの原文、訳文、メモをどの列（A~E）から読み込むかと、最初の数行を読み込まないようにするか（Skip Header）を追加で設定できます。

複数の言語が一つのファイルにまとめられているケースや、先頭行に「日本語」「中国語」のようなExcel用のタイトルがついているケースで活用してください。

### csv/tsvのインポート

csvファイルやtsvファイルからインポートすることも可能です。Excelと同様、読み込み先としては翻訳メモリ（Translation Memory）か、用語集（Termbase）から選べます。

csv/tsvを選択した場合は区切り文字（Delimiter）とエンクロージャ（Enclosure）の設定が必要です。また、Excelと同じくSkip Headerで先頭の数行を読みとばすことができます。

csv/tsvでは列を選択する機能はありません。常に **原文, 訳文, メモ** の順につくってください。

#### Full csv/tsvのインポート
csv/tsvにはもう一つ、Fullバージョンのインポートを準備しています。これはCATOVISからエクスポートした、すべての情報が含まれたファイルをインポートするときに使う機能です。区切り文字（Delimiter）とエンクロージャ（Enclosure）のみ、追加で設定してください。

### JSONファイルのインポート

pjtzipファイルの中には翻訳メモリ／用語集がJSON形式で保存されています。JSONファイルであれば、ロケールの設定等は不要になります。

pjtzipを分解して翻訳メモリ／用語集を管理する場合に使用できます。

## インポートの共通設定

### 内部ファイルと外部ファイル

CATOVISでは翻訳メモリ／用語集を内部ファイル（Internal）と外部ファイル（External）に分けて管理しています。

新しい翻訳メモリ・用語は基本的に内部ファイルにのみ記録されていきます。

外部ファイルに100%マッチの原文があり、その訳文に対して修正を加えた場合も、新しい翻訳メモリとして内部ファイルに蓄積されます。

#### 内部ファイルと外部ファイルの使い分け

上述のとおり、内部ファイルにある翻訳メモリや用語は、作業が進むにしたがって書き換えられていきます。そのため、まだ変更の可能性が高い作業中の翻訳メモリや用語集は、内部ファイルとして読み込むのが良いと思います。

それに対して外部ファイルは **[E]** ボタンをクリックしないと修正されません。そのため、不意に変更したくない、参考用のファイルに向いています。

### 修正の許可

外部ファイルとして読み込んだ際に、 **[E]** ボタンからの修正も受け付けないようにしたい場合は、編集禁止（Prohibit to edit）をチェックして読み込んでください。