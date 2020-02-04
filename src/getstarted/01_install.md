---
title: インストール
sidebar: auto
prev: false
next: ./02_withword
---

## 本体のインストール

以下のURLよりzipファイルをダウンロードしてください。

[ダウンロード](https://github.com/QuanKaoYang/catovis-docs/tree/master/catovis)

適切なファイルを選んでクリックします。特に理由がなければ、最新版を使用することをお勧めします。

<img src="./pict/github1.png" alt="img" style="zoom:67%;" />

次に **「Download」** ボタンをクリックします。

<img src="./pict/github2.png" alt="img" style="zoom:67%;" />

ダウンロードしたzipファイルを展開すると、

- catovis Setup x.x.x.exe
- CATOVIS_VBA_Core.dotm
- TemplateSet.ps1
- UpdataLog.txt

の4ファイルが入っています。

このうち、「catovis Setup」をダブルクリックしてインストールを実行してください。

インストールに成功すると、デスクトップとスタートメニューにショートカットが作成されます。

::: tip

Ver 0.4.6未満では、**CATOVIS_VBA_Core.dotm** の代わりに **SelectAndRequest.dotm** というファイルが入っています。過去バージョンを使用する場合は適宜、読み替えてください。

:::

## Wordマクロのインストール
次にWordと連携するためのマクロをインストールします。「TemplateSet.ps1」のファイルを右クリックして「Powershellで実行」をクリックしてください（ダブルクリックでは実行できません）。

<img src="./pict/powershell1.png" alt="img" style="zoom:75%;" />

PowerShellが起動し、上図の画面が表示されます。キーボードで「1」を押し、インストールを実行してください。

同じフォルダにある「CATOVIS_VBA_Core.dotm」が所定の位置にコピーされ、Wordとの連携ができるようになります。

### Wordマクロのインストール　確認
Wordを起動して、「ファイル」>「オプション」>「アドイン」の順に進んでください。

最下部のドロップダウンリストから「テンプレート」または「Wordアドイン」を選び、「設定」ボタンをクリックします。

![img](./pict/word_template1.png)

![img](./pict/word_option3.png)

上図のように「アドインとして使用できるテンプレート」の中に「CATOVIS_WordCore.dotm」があり、チェックされていればOKです。

### Wordマクロのインストール　上手くいかなかったら
「TemplateSet.ps1」でマクロが上手く実行できなかった場合は、手動でマクロをインストールしてください。

まずは開いているWordをすべて閉じて終了します。その後、エクスプローラを起動して、「表示」タブの「隠しファイル」にチェックを入れて表示させます。

##### Word2016までの場合

ユーザーフォルダを開き、AppData > Roaming > Microsoft > Word > STARTUPの順に進みます。

このフォルダに「CATOVIS_VBA_Core.dotm」をコピーして、Wordを再起動してください。

##### Word2019 / 365の場合

ユーザーフォルダを開き、AppData > Local > Packages > Microsoft.Office.Desktop_8wekyb3d8bbwe > LocalCache > Roaming > Microsoft > Word > STARTUPの順に進みます。

このフォルダに「CATOVIS_VBA_Core.dotm」をコピーして、Wordを再起動してください。

::: warning
Wordをインストールして、初めて起動するまでは上記の場所に「STARTUP」フォルダがないことがあります。

その場合は一度Wordを起動し、終了してから再度実行してください。
:::

## 起動
CATOVISを起動するには、インストール後に作成されたショートカットをダブルクリックするか、スタートメニューにcatovisと入力して検索してください。
