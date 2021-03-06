---
title: より高度なカーソル操作
lang: zh-CN
sidebar: auto
prev: false
next: ./02_filter
---
# より高度なカーソル操作
### 選択範囲の拡張

**【Alt + →】** による原文の照会はあくまで「。」や「.」といった句点記号、もしくは段落記号を目安に行われます。そのため、括弧の中の句点や小数点に使われるピリオドなどにより、途中で切れてしまうことがあります。
このような場合、Word上で原文を修正して照会し直してもよいのですが、そのまま **【Ctrl + Alt + →】** を押すことで、次の区切りまでを一文として照会できます。

### 任意の範囲の照会

Wordの表で、セルが結合されている場合など、**【Alt + →】** と   **【Ctrl + Alt + →】**  だけでは上手く選択範囲を調整できないケースがあります。

その場合は、マウスやカーソルキーを使って任意の範囲を選択してから、 **【Alt + ↑】** を押します。

すると、現在の選択範囲を原文として照会することができます。

## チェックモード

翻訳のチェックをする際は、原文と訳文を行ったり来たりすることが多くなります。

そんな場合に備えて、CATOVISでは他のWordファイルを原文として操作できるようにしています。

まず **【Alt + F1】** を押してCATOVISの設定ウィンドウを表示させます。

ここで「動作モード」の「Check」を選択します。その後、下にある「チェック対象ファイル」のプルダウンから、原文ファイルとして使いたいファイルを選択します。

この状態で **【Alt + →】** を押すと、「チェック対象ファイル」のテキストを原文として、現在開いているファイルを訳文として同時に照会できます。

なお同時に照会した際、CATOVISに表示される翻訳メモリの表示は、通常とは若干異なったものになります。

原文に似たものがないかを計算するのは従来どおりなのですが、同時に訳文についても登録されているものと類似しているかどうかを計算します。

原文が酷似しているのに、訳文が大きく異なる場合、表現の統一が取れていない可能性が高くなります。