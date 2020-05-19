---
title: CATOVIS リファレンス
lang: ja-JP
sidebar: auto
prev: ./07_machine
next: false
---

# CATOVIS リファレンス
CATOVISのショートカットとAPIエンドポイントを照会します。

## ショートカット一覧

|キー|機能|
|:---:|:---|
|Alt + F1 | CATOVIS Controllerを呼び出す|
|Alt + → | 未接続時： 次の文を選択<br />翻訳モード： 次の文を選択し、原文として照会<br />チェックモード：原文ファイルの次の文を原文、現在のファイルの次の文を訳文として照会|
|Ctrl + Alt + → | 未接続時： 次の文の終わりまで選択範囲を拡張<br />翻訳モード： 次の文の終わりまで選択範囲を拡張<br />チェックモード：*開発中 翻訳モードと同じ*|
|Alt + ← | 前の文を選択|
|Ctrl + Alt + ← | 前の文の開始位置まで選択範囲を拡張|
|Alt + ↑ | 現在選択している部分を原文として照会|
|Ctrl + Alt + ↑ | 現在選択している部分を修正の必要な訳文として照会|
|Alt + ↓ | CATOVISに表示されている翻訳メモリの結果のうち、一致率の高いものから貼り付け。押すたびに順じ繰り下がる|
|Ctrl + Alt + ↓ | ファイル内にある、照会していた原文と同じ文を、登録した訳文で置換|
|Alt + s | 現在のカーソル位置から、選択範囲を前後に拡張して一文を選択|
|Alt + q | 選択中のテキストを使ってクイックフィルターを適用|
|Alt + t | 選択中のテキストを原文用語・訳文用語として用語登録ダイアログを呼び出す|
|Alt + , | 翻訳スニペットバーを呼び出す。|
|（フロートボックス）s|選択中のテキストを原文用語として用語登録ダイアログを呼び出す|
|（フロートボックス）t|選択中のテキストを訳文用語として用語登録ダイアログを呼び出す|
|（フロートボックス）q|選択中のテキストをを使ってクイックフィルターを適用|
|（フロートボックス）ESC|フロートボックスを閉じる|
|（スニペット）Ctrl + ↓|入力したテキストでスニペット内の検索を開始|
|（スニペット）Enter|スニペット内の選択したテキストを貼り付け|
|（スニペット）Ctrl + Enter|スニペット内の選択したテキストを貼り付け、スニペットバーを閉じる|
|（スニペット）Esc|スニペットバーを閉じる|

## config項目一覧（json）
|項目|値|説明|
|:---:|:---:|:---|
|applyConfig|Boolean|falseにすることで、config.jsonの内容を無視する|
|MTInfo.srcLang|String|機械翻訳に使用する原文の言語名|
|MTInfo.tgtLang|String|機械翻訳に使用する訳文の言語名|
|MTInfo.useGcp|Boolean|trueにすることで機械翻訳としてGoogleを使用する|
|MTInfo.gcpKey|String|Google翻訳のAPI Keyを入力できる|
|MTInfo.useDeepL|Boolean|trueにすることで機械翻訳としてDeepLを使用する（未検証）|
|MTInfo.gcpKey|String|DeepLのAPI Keyを入力できる（未検証）|
|prefData.upperBound|Int|一致率の計算を行う文字数の差異について、上限の初期値|
|prefData.lowerBound|Int|一致率の計算を行う文字数の差異について、下限の初期値|
|prefData.ratioLimit|Int|一致率の計算を行った後、類似文として判定する下限の初期（%）|
|prefData.realTimeQa|Boolean|falseにすることでリアルタイムQAを行う|
|locales|String[]|CATOVISに表示するロケールの一覧|
|port|Int|CATOVISのポート番号|

## APIエンドポイント一覧

|URL|メソッド|ボディ|戻り値|説明|
|:---:|:---:|:---|:---|:---|
|/debugstatus|GET|*なし*|{General: GeneralInfo, Data: DataInfo, tms: TMDoc[], tbs: TBDoc}|ブラウザからアクセスすることで現在の設定やTM、TBを一覧できる|
|/status|GET|(クエリーストリング)dbType=all|TMs|TBs<br />fid=int|TMDoc 及び/または TBDoc|ブラウザからアクセスすることでTM、TBの中身を見ることができる|
|/inqure-source|PATCH|原文: string|InfoResponse \| string <sup>*1</sup>|原文の照会をする。hostappを”VBA”とすると特別な文字列を返す|
|/setnewtrans|PATCH|原文[->]訳文: string|InfoResponse |原文・訳文をTMに登録する|
|/to-amend|PATCH|訳文: string|null |修正したい訳文をセットする|
|/amend-tt|PATCH|訳文: string|null |修正後の訳文で、修正したい訳文を書き換える|
|/qfilter|PATCH|テキスト: string|null |送信したテキストでクイックフィルターを実行する|
|/inqure-check|PATCH|原文[->]訳文: string|InfoResponse |送信した原文と訳文でチェック用の計算を実行する|
|/addterm|PUT|原文[->]訳文: string|null |送信した原文と訳文で用語集に登録する|
|/qa/st|PUT|原文: string|null |QA用の原文をセットする|
|/qa/tt|PUT|原文: string|null |QA用の訳文をセットする|
|/qa|GET|*なし*|null |QAを実行する|

*1: 類似原文1[->]類似訳文1[;]類似原文2[->]類似訳文2[;]...[#;]原文用語1[->]訳文用語1-1[&]訳文用語1-2[&]訳文用語1-3[&]...[;]原文用語2[->]訳文用語2-1[&]訳文用語2-2[&]...[;]

## インターフェース／タイプ（Typescript）

|名前|説明|内容|
|:---:|:---|:------|
|InfoResponse|プロジェクトの状態を返すときの型|general: GeneralInfo;<br />data: DataInfo;<br />|
|GeneralInfo|pjtzipに保存しておくべき情報|ver: VerInfo;<br />tmFilelist: DBContentsInfo[];<br />tbFilelist: DBContentsInfo[];<br />pref: PrefInfo;<br />|
|VerInfo|バージョン情報|ver1: number;<br />ver2: number;<br />ver3: number;<br />|
|DBContentsInfo|データベースの状態としてファイル名と数量を管理|name: string;<br />nums: number;<br />|
|PrefInfo|環境設定を管理|upperBound: number;<br />lowerBound: number;<br />ratioLimit: number;<br />realTimeQa: boolean;<br />|
|DataInfo|保存時に書き出さない情報|CAT: CatInfo;<br />QA: QaInfo;<br />filtered: {TM: BaseDoc[],TB: BaseDoc[],};<br />Amending: TMDoc | null;<br />message: string;<br />|
|CatInfo|特定の原文セグメントに対するCAT情報|st: string;<br />tt: string;<br />annotated: string;<br />similars: SimilarInfo[];<br />usedTerms: UsedTerm[];<br />|
|SimilarInfo|特定のTMとの一致情報|st: string;<br />tt: string;<br />memo: string;<br />from: string;<br />fid: number;<br />keyId: number;<br />ratio: number;<br />opcode: Opcode[];<br />toCheck?: SimilarTargetInfo;<br />|
|SimilarTargetInfo|特定のTMとの一致情報（訳文）|ttInTM: string;<br />tgtRatio: number;<br />tgtOpcode: Opcode[];<br />|
|Opcode（type）|オペコードのタイプ。類似分の表示に使用|[string, number, number, number, number]|
|UsedTerm|CAT情報内の使用している用語。一つの原文に対して、複数の訳文用語があることがあるため、ttは配列|st: string;<br />tts: string[];<br />memo: string;<br />times: number;<br />|
|QaInfo|Qaの結果をまとめたインターフェース|from: string;<br />st: string;<br />tt: string;<br />results: QaResultInfo[];<br />|
|QaResultInfo|Qaエラーの結果を保存するインターフェース|errtype: string;<br />sInfo: string;<br />tInfo: string;<br />|
|BaseDoc|TM/TBのドキュメントのうち、共有部分|st: string;<br />tt: string;<br />memo: string;<br />fid: number;<br />keyId: number;<br />len: number;<br />_id?: string;<br />|
|TMDoc extends BaseDoc|TMドキュメント用のインターフェース|cg: boolean;<br />from: string;<br />ott: string[];<br />rev: number;<br />|
|TBDoc extends BaseDoc|TMドキュメント用のインターフェース|cg: boolean;<br />qa: boolean;<br />rep: boolean;<br />|
