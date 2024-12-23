---
title: VRC Stream
---

## VRC Stream
### 概要
本サービスは高画質での映像配信で10秒以内の遅延を目標としている映像配信サービスです。<br></br>
今後は低遅延に挑戦し運営する予定です。

### 設定
OBSでの配信設定<br></br>
サービス: カスタム<br></br>
サーバー: `rtmp://vrc-stream-01.krnk.org`<br></br>
ストリームキー: 任意<br></br>
映像ビットレート推奨: 3000kbps<br></br>

![alt text](vrc-stream-01.png)<br></br>
![alt text](vrc-stream-02.png)

### プレイヤー側の設定
PCのみ: `rtspt://vrc-stream-01.krnk.org:8554/{OBSで設定した任意のストリームキー}`<br></br>
Quest対応: `rtsp://vrc-stream-01.krnk.org:8554/{OBSで設定した任意のストリームキー}`<br></br>
映像のみ: `https://vrc-stream-01.krnk.org/{OBSで設定した任意のストリームキー}/index.m3u8`

:::danger 警告
2024/12/18時点でVRChat側の不具合(?)でrtspでの視聴ができません。
:::

