import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Eコマースプラットフォーム",
      description: "Next.jsとStripeを使用した完全なEコマースソリューション。商品管理、決済処理、ユーザー管理機能を実装。",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      image: "🛒",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "タスク管理アプリ",
      description: "ReactとFirebaseを使用したリアルタイムタスク管理アプリケーション。チーム協働機能付き。",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
      image: "📋",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 3,
      title: "天気予報アプリ",
      description: "OpenWeatherMap APIを使用した天気予報アプリ。位置情報ベースの予報表示機能。",
      technologies: ["Next.js", "OpenWeatherMap API", "Geolocation API", "Tailwind CSS"],
      image: "🌤️",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 4,
      title: "ブログプラットフォーム",
      description: "Markdown対応のブログプラットフォーム。管理画面とSEO最適化機能付き。",
      technologies: ["Next.js", "Markdown", "MDX", "Vercel", "Tailwind CSS"],
      image: "📝",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 5,
      title: "チャットアプリケーション",
      description: "Socket.ioを使用したリアルタイムチャットアプリケーション。グループチャット機能付き。",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      image: "💬",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 6,
      title: "ポートフォリオサイト",
      description: "このポートフォリオサイト自体。Next.jsとTailwind CSSを使用して作成。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      image: "🎨",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          プロジェクト
        </h1>
        
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          これまでに開発したプロジェクトの一部をご紹介します。
          各プロジェクトの詳細や技術スタックについても記載しています。
        </p>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            注目プロジェクト
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="text-4xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      GitHub →
                    </Link>
                    <Link
                      href={project.demo}
                      className="text-green-600 dark:text-green-400 hover:underline font-medium"
                    >
                      デモを見る →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            その他のプロジェクト
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="text-3xl mb-3">{project.image}</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      href={project.github}
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      GitHub
                    </Link>
                    <Link
                      href={project.demo}
                      className="text-green-600 dark:text-green-400 hover:underline text-sm font-medium"
                    >
                      デモ
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 