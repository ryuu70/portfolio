# ポートフォリオサイト

Next.js、TypeScript、Tailwind CSSを使用して作成されたポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel
- **その他**: ESLint, PostCSS

## 機能

- 🏠 **ホームページ**: 自己紹介と技術スタックの表示
- 👤 **自己紹介ページ**: 詳細なプロフィール情報
- 💼 **プロジェクトページ**: 開発したプロジェクトの一覧
- 📧 **お問い合わせページ**: 連絡フォームと連絡先情報

## 開発環境のセットアップ

### 前提条件

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### 利用可能なスクリプト

```bash
# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start

# リントの実行
npm run lint
```

## デプロイ

このプロジェクトはVercelに最適化されています。

### Vercelへのデプロイ手順

1. [Vercel](https://vercel.com)にアカウントを作成
2. GitHubリポジトリをVercelに接続
3. 自動デプロイが設定されます

### 手動デプロイ

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

## プロジェクト構造

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # 自己紹介ページ
│   ├── projects/
│   │   └── page.tsx          # プロジェクトページ
│   ├── contact/
│   │   └── page.tsx          # お問い合わせページ
│   ├── globals.css           # グローバルスタイル
│   ├── layout.tsx            # ルートレイアウト
│   └── page.tsx              # ホームページ
├── components/               # 再利用可能なコンポーネント
└── lib/                      # ユーティリティ関数
```

## カスタマイズ

### 個人情報の更新

各ページの内容を自分の情報に更新してください：

- `src/app/page.tsx`: ホームページの自己紹介
- `src/app/about/page.tsx`: 詳細なプロフィール
- `src/app/projects/page.tsx`: プロジェクト情報
- `src/app/contact/page.tsx`: 連絡先情報

### スタイルのカスタマイズ

Tailwind CSSを使用してスタイルをカスタマイズできます：

- `src/app/globals.css`: グローバルスタイル
- 各コンポーネント内のclassName: コンポーネント固有のスタイル

## ライセンス

MIT License

## お問い合わせ

ご質問やご提案がございましたら、お気軽にお問い合わせください。
