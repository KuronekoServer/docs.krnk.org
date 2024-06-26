---
title: OpenJTalkAPI
---

# OpenJTalkAPI
## 概要
本APIはOpenJTalkの技術を使用したAPIサービスです。

話者情報取得(GETリクエスト)
```
https://openjtalk-api.kuroneko6423.com/speakers
```

音声合成(POST)
```
https://openjtalk-api.kuroneko6423.com/synthesize?text=読み上げる文字&type=話者&speed=0.7&pitch=0.7
```

サービスページ: https://openjtalk-api.kuroneko6423.com

:::danger warning
10秒間に100回以上リクエストをすると「429 Too many Requests」が返されます。
<br></br>APIのレートリミットの緩和を行いたい場合は[お問い合わせ](https://discord.kuroneko6423.com)をお願いします。
<br></br>※APIの制限は提供しているAPIサービスと制限は共有されています。
:::