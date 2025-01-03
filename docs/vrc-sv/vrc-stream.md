---
title: VRC Stream
---

## VRC Stream
### 概要
本サービスは高画質での映像配信で3秒以内の遅延(HLS配信は例外)を目標としている映像配信サービスです。

:::danger warning
本サービスはベータ版です。
:::

### 設定
OBSでの配信設定<br></br>
サービス: カスタム<br></br>
サーバー: `rtmp://vrc-stream-01.krnk.org`<br></br>
ストリームキー: 任意<br></br>
映像ビットレート推奨: 2000~3500kbps<br></br>

### Webからのカメラ配信について
https://vrc-stream-01.krnk.org:8889/{任意のストリームキー}/publish

### プレイヤー側の設定
PCのみ: `rtspt://vrc-stream-01.krnk.org:8554/{OBSで設定した任意のストリームキー}`<br></br>
Quest対応: `rtsp://vrc-stream-01.krnk.org:8554/{OBSで設定した任意のストリームキー}`<br></br>
映像のみ: `https://vrc-stream-01-hls.krnk.org/{OBSで設定した任意のストリームキー}/index.m3u8`

![alt text](vrc-stream-01.png)<br></br>
![alt text](vrc-stream-02.png)

:::danger 警告
2024/12/18時点でVRChat側の不具合(?)でrtspでの視聴ができません。<br></br>
法人利用を行う場合は事前に弊組織までお問い合わせくださいませ。<br></br>
配信サービスで著作権のある配信を行っていた場合直ちに[お問い合わせ](https://discord.krnk.org)にて報告をお願い致します。
:::
