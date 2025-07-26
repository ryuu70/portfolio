export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            自己紹介
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              プロフィール
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              フルスタック開発者として、モダンなWeb技術を使用したアプリケーション開発に従事しています。
              Next.js、React、TypeScriptを中心としたフロントエンド開発と、
              Node.js、PostgreSQLを使用したバックエンド開発の両方に精通しています。
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              ユーザー体験を重視し、パフォーマンスとセキュリティを考慮した
              高品質なアプリケーションの開発を心がけています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                経験
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• フルスタックWebアプリケーション開発（3年）</li>
                <li>• モバイルアプリ開発（React Native）</li>
                <li>• クラウドインフラ構築（AWS、Vercel）</li>
                <li>• CI/CDパイプライン構築</li>
                <li>• チーム開発・コードレビュー</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                学歴・資格
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• 情報工学学士</li>
                <li>• AWS認定ソリューションアーキテクト</li>
                <li>• Google Cloud認定開発者</li>
                <li>• 応用情報技術者</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              趣味・興味
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              新しい技術の学習、オープンソースプロジェクトへの貢献、
              技術ブログの執筆、そしてコーヒーを飲みながらのコーディングが趣味です。
              また、技術カンファレンスへの参加や、開発者コミュニティでの
              知識共有活動も積極的に行っています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 