import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">ポートフォリオ</h1>
          <div className="flex space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              自己紹介
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              プロジェクト
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              お問い合わせ
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl text-white font-bold">👨‍💻</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
              こんにちは、私は
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                開発者
              </span>
              です
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Next.js、React、TypeScriptを使用したモダンなWebアプリケーション開発に情熱を持っています。
              ユーザー体験を重視した、美しく機能的なアプリケーションを作成します。
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                プロジェクトを見る
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            技術スタック
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Node.js", icon: "🟢" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Git", icon: "📝" },
              { name: "Docker", icon: "🐳" }
            ].map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 ポートフォリオ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
