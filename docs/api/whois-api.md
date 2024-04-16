---
title: WhoisAPI
---

## WhoisAPI
### 概要
このAPIは、ドメインのwhois情報を表示するAPIです。

## エラーレスポンス

- **Status Code:** 500 Internal Server Error
    - ドメインが正しくない場合

## API仕様

API仕様
```
https://whois-api.kuroneko6423.com/api/whois?domain=ドメイン
```

リクエスト例
```
https://whois-api.kuroneko6423.com/api/whois?domain=google.com
```

## 注意事項

- 一部ドメインに対応していない場合があります。

サービスページ: https://whois-api.kuroneko6423.com/api/whois?domain=ドメイン


:::danger warning
10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
<br></br>APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.com/invite/Y6w5Jv3EAR)をお願いします。
<br></br>※APIの制限は提供しているAPIサービスと制限は共有されています。
:::