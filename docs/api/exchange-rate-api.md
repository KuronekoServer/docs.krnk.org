---
title: 為替レート API
---

## 為替レート API
### 概要
このAPIは、1秒間に1回更新される為替レートAPIです。

## API仕様

API仕様
json形式出力
```
https://exchange-rate-api.kuroneko6423.com/api/rate
```
prometheus形式出力
```
https://exchange-rate-api.kuroneko6423.com/api/prometheus
```

値 | 概要 |
-- | -- |
USD_JPY | 米ドル/日本円
EUR_JPY | ユーロ/日本円
GBP_JPY | 英ポンド/日本円
AUD_JPY | 豪ドル/日本円
NZD_JPY | NZドル/日本円
CAD_JPY | カナダドル/日本円
CHF_JPY | スイスフラン/日本円
TRY_JPY | トルコリラ/日本円
ZAR_JPY | 南アフリカランド/日本円
MXN_JPY | メキシコペソ/日本円

:::danger warning
10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
<br></br>APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.kuroneko6423.com)をお願いします。
<br></br>※APIの制限は提供しているAPIサービスと制限は共有されています。
:::