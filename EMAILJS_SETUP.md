# EmailJS 環境変数設定

## 1. 環境変数ファイルの作成

プロジェクトのルートディレクトリに `.env.local` ファイルを作成し、以下の内容を追加してください：

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=5mo4UfKLbsrlJpYmy
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_37z34u4
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_nuzbdj8
```

## 2. 環境変数の説明

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJSの公開キー
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJSのサービスID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJSのテンプレートID

## 3. 本番環境での設定

### Vercelでの設定
1. Vercelダッシュボードにアクセス
2. プロジェクトの「Settings」→「Environment Variables」
3. 上記の環境変数を追加

### その他のホスティングサービス
各ホスティングサービスの環境変数設定方法に従って設定してください。

## 4. セキュリティ注意事項

- `.env.local` ファイルは `.gitignore` に含まれていることを確認
- 本番環境では環境変数を使用し、コード内に直接記述しない
- `NEXT_PUBLIC_` プレフィックスは、クライアントサイドで使用する環境変数に必要

## 5. 動作確認

環境変数を設定後、開発サーバーを再起動してください：

```bash
npm run dev
```

フォーム送信時にコンソールに設定情報が表示されれば正常に動作しています。 