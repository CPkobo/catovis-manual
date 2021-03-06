---
title:  ファイルのエクスポート
lang: zh-CN
sidebar: auto
prev: ./03_open_import
next: false
---

## エクスポート

CATOVISでは翻訳メモリ／用語集を、以下の形式のファイルとしてエクスポートできます。

- TMX/TBX
- csv/tsv
- json 

複数の翻訳メモリ／用語集を同時にエクスポートできます。また、複数のファイルを一つのファイルにまとめて保存することも可能です。

::: tip
xlsxのエクスポートは現在開発中です。
:::

### TMX／TBXのエクスポート

エクスポート形式でTMX/TBXを選択すると、選択した翻訳メモリ／用語集をそれぞれtmx／tbxファイル形式でエクスポートできます。TMX／TBXのエクスポートにはロケール（言語）の設定が必要です。
0.4.5現在では、日本語、英語、中国語の主要なロケールのみ選択可能です。

[ロケールってなに？](../faq/index.html#ロケールってなに？)

### csv/tsvのエクスポート

選択した翻訳メモリ／用語集をcsvファイルやtsvファイルにエクスポートします。

csv/tsvを選択した場合は区切り文字（Delimiter）とエンクロージャ（Enclosure）の設定が必要です。原文または訳文に区切り文字が含まれている場合は、エンクロージャを設定しておかないときちんとしたcsv／tsvファイルになりません。

この機能でエクスポートしたcsv/tsvを、CATOVISでインポートする場合、 **Full CSV/TSV** を選んでください。

### JSONファイルのエクスポート

CATOVISオリジナルのJSONファイルでエクスポートします。JSON形式の場合、インポート時の設定項目が少ないため、すぐに使い始めることができます。今すぐ他のCATツールと連携したり、CSV等の表形式にまとめたりしない場合はJSON形式で保存しておくのが良いでしょう。

[JSONってなに？](../faq/index.html#jsonってなに？)

## エクスポートの共通設定

### ファイルの結合

Merge to 1 fileをONにすると、選択した翻訳メモリ／用語集を一つのファイルにまとめてエクスポートします。

### ファイルの選択

翻訳メモリ／用語集ともに、外部ファイルとして複数ファイルを読み込んでいる場合、**Select Export File(s)**　の下に箇条書きで表示されます。

エクスポートしたいファイルにチェックを入れてから、最下部の **Exportボタン** をクリックしてください。

