---
title: ひらがな変換API
---

# ひらがな変換API
## 概要
`ローマ字`を`ひらがな`or`カタカナ`に変換するAPIサービスです。

GETリクエストでAPIにリクエストでリクエストしローマ字、漢字を平仮名に変換するAPIとなっています。
<br></br>また、韓国語のハングルにも対応しております。

## API仕様
```
https://eng-jpn-api.krnk.org/query?text=文章
```

リクエスト例
```
https://eng-jpn-api.krnk.org/query?text=안녕하세요私はnihonngoを喋ります
```
結果例
```
あっにぇおんぐはせよわたしはにほんごをしゃべります
```

サービスページ: https://eng-jpn-api.krnk.org

:::danger warning
10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
<br></br>APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.krnk.org)をお願いします。
<br></br>※APIの制限は提供しているAPIサービスと制限は共有されています。
:::
