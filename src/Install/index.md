---
title: Getting Started!
sidebar: auto
---

## インストール
### 本体のインストール

以下のURLよりzipファイルをダウンロードしてください。

https://drive.google.com/open?id=1klu9zn5CSvBDMsZ89MIl-XbPIOH6oZos

展開すると、

- catovis Setup x.x.x.exe
- SelectAndRequest.dotm
- TemplateSet.ps1

の3ファイルが入っています。

このうち、「catovis Setup」をダブルクリックしてインストールを実行してください。

インストールに成功すると、デスクトップとスタートメニューにショートカットが作成されます。

### Wordマクロのインストール

次にWordと連携するためのマクロをインストールします。「TemplateSet.ps1」のファイルを右クリックして「Powershellで実行」をクリックしてください（ダブルクリックでは実行できません）。

すると同じフォルダにある「SelectAndRequest.dotm」が所定の位置にコピーされ、Wordとの連携ができるようになります。

#### Wordマクロのインストール　確認

Wordを起動して、「ファイル」>「オプション」>「アドイン」の順に進んでください。

最下部のドロップダウンリストから「Wordアドイン」を選び、「設定」ボタンをクリックします。

「アドインとして使用できるテンプレート」の中に「SelectAndRequest.dotm」があって、チェックされていればOKです。

#### Wordマクロのインストール　上手くいかなかったら

「TemplateSet.ps1」でマクロが上手く実行できなかった場合は、手動でマクロをインストールしてください。

まずは開いているWordをすべて閉じて終了します。その後、エクスプローラを起動して、「表示」タブの「隠しファイル」にチェックを入れて表示させます。

次に「ユーザーフォルダ」>「AppData」>「Roaming」>「Microsoft」>「Word」>「STARTUP」と進みます。このフォルダに上記の「SelectAndRequest.dotm」をコピーすれば完了です。

### 起動

CATOVISを起動するには、インストール後に作成されたショートカットをダブルクリックするか、スタートメニューにcatovisと入力して検索してください。
