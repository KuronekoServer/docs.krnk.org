---
title: WhoisAPI
---

### 概要
このAPIは、ドメインのWhois情報を取得するためのAPIです。

### エラーレスポンス

- **Status Code:** 500 Internal Server Error
  - Whoisデータの取得中にエラーが発生した場合

- **Status Code:** 400 Bad Request
  - ドメインパラメータが指定されていない場合

- **Status Code:** 403 Forbidden
  - 制限されたTLDのWhois情報を取得しようとした場合<br/>
  対象TDL: .edu .mil

### API仕様

このAPIは、以下のエンドポイントを提供します:

- **GET /api/whois**
  - 指定したドメインのWhois情報を取得します。
  - パラメータ: `domain` (取得したいドメイン名)
  - レスポンス: テキスト形式のWhois情報

例: ```https://whois-api.kuroneko6423.com/api/whois?domain=google.com```

- **GET /api/whois/json**
  - 指定したドメインのWhois情報をJSON形式で取得します。
  - パラメータ: `domain` (取得したいドメイン名)
  - レスポンス: JSON形式のパースされたWhois情報

例: ```https://whois-api.kuroneko6423.com/api/whois/json?domain=google.com```

:::caution 注意事項

- 一部のTLDについてはWhois情報の取得が制限されています。
- json版での取得は基本的にcomやnetでの場合は動作を確認しておりますが、jpドメインやintドメインなどは動作しないことを確認しています。<br/>この問題は順次対応予定のためしばらくお待ちくださいませ。

:::

:::danger 警告
10秒間に100回以上のリクエストを行うと「429 Too Many Requests」が返されます。
<br></br>APIのレートリミットの緩和を希望する場合は[お問い合わせ](https://discord.kuroneko6423.com)ください。
<br></br>※APIの制限は提供されているAPIサービスと共有されています。
:::
