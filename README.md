# Vercel Storage を Next13 で使用するデモ

## 前準備
デモを確認するにあたって、必要な前準備の説明です。
> ※ 2023/05/22現在では Vercel Blob　が Private Beta なので waiting list に登録中

### 1. Vercel Dashboard で **KV** と **Postgres** を作成する
[Vercel Dashboard の Storage](https://vercel.com/dashboard/stores)ページから、**KV**と**Postgres**を作成します。

<img width="531" alt="image" src="https://github.com/daichi-iwamoto/next-storage-examples/assets/34328392/3d6633bb-163b-404e-b6c2-31ce195287aa">

### 2. `.env.local` の作成
[`.env.example`](https://github.com/daichi-iwamoto/next-storage-examples/blob/main/.env.example) を参考に、**KV**と**Postgres**の環境変数を `.env.local` に作成する。
<img width="1294" alt="image" src="https://github.com/daichi-iwamoto/next-storage-examples/assets/34328392/0b21ff9c-8fd5-4f02-bc8c-b0806064b540">
<img width="1285" alt="image" src="https://github.com/daichi-iwamoto/next-storage-examples/assets/34328392/89ef3ede-dab7-45b4-9757-52af7f9cb4ca">

