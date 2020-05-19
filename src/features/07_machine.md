---
title: 機械翻訳との連携
lang: ja-JP
sidebar: auto
prev: ./06_standalone
next: ./99_reference
---

# 機械翻訳との連携
昨今の機械翻訳の発展は目覚ましいものがあり、プロの翻訳においても参考用・省入力用として、あるいは辞書的な用途として活用できるシーンも増えてきました。このような背景のもと、CATOVISにも機械翻訳との連携機能を追加しました。

メニューバーの**Page**から**MT Settings**を選択してください。
バージョン0.5.0ではGoogleの翻訳APIにのみ対応しています。

<img src="./pict/mtsetting.png" alt="img" style="zoom:75%;" />

::: tip
Googleの翻訳を使用にあたっては、Google Cloud Computingのアカウントを開設し、Translate APIを有効にしておく必要があります。
どうしても設定が難しい場合はメールかTwitterのDM等でご連絡ください。
:::

::: warning
DeepLについては、2020年5月現在、日本から有料アカウントを作成することができないため未検証です。
アカウントができ次第、アップデートをしたいと考えています。
:::

機械翻訳を使うためには、「原文言語」「訳文言語」「API Key」を入力する必要があります。
CATOVISのMT Settingsページで上記の３項目を記入し、Googleの前のスイッチをクリックしてONにした状態で、CONFIRMボタンをクリックします。この状態で原文を照会すると、CATOVISが自動的にGoogleの機械翻訳を取得し、CATの結果として表示するようになります。

## 部分的な機械翻訳

上記の設定が完了していると、Word上で **【Alt + G】** を押すことで、選択中のテキストについて機械翻訳を取得することができます。
原文が長すぎるなど上手く機械翻訳できない場合でも、部分ごとに機械翻訳を取得することで、使いやすい結果になることがあります。

## 設定の永続化

セキュリティの関係で、機械翻訳のAPI KeyはCATOVISに保存されません。
毎回Googleの機械翻訳を使用したい場合には、config.jsonファイルを使用することで設定を永続化できます。
config.jsonのひな型は、[ダウンロード](https://github.com/QuanKaoYang/catovis-docs/tree/master/catovis)にあります。
このファイルをメモ帳などのテキストエディタで開き、

```json
{
    "useGcp": true,
    "gcpKey": "YOUR_API_KEY",
}
```

に書き換えてください。
その後、このconfig.jsonを、<ユーザーフォルダ>\AppData\Roaming\catovis\にコピーしておきます。
こうすることでCATOVISの起動時にGoogle翻訳のAPI Keyを自動的に読み込むようになります。

::: tip
config.jsonは他にも様々な項目を変更することができます。
このファイルを書き換えたことでCATOVISが上手く起動しなくなったら、このファイルを削除してください。
詳細については[config項目一覧（json）](./99_reference.html#config項目一覧（json）)を参照してください。
:::