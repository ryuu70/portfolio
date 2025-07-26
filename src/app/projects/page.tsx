"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Projects() {
  const [floatingElements, setFloatingElements] = useState<Array<{
    left: string;
    top: string;
    delay: string;
    duration: string;
  }>>([]);

  // クライアントサイドでのみ浮遊要素を生成
  useEffect(() => {
    const elements = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 4}s`
    }));
    setFloatingElements(elements);
  }, []);
  const projects = [
    {
      id: 1,
      title: "ウェブサービス開発",
      description: "WEBサービスの開発・運用。Next.jsとPostgreSQLを使用した本格的なWebアプリケーション。ユーザー管理、データベース設計、本番環境での運用まで一貫して担当。",
      technologies: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Vercel"],
      image: "　",
      github: "#",
      demo: "#",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "モバイルアプリ開発",
      description: "某ウェブサービスのAndroid・iPhoneアプリ化プロジェクト。React Nativeでクロスプラットフォーム開発、FlaskでバックエンドAPIを構築。",
      technologies: ["React Native", "Flask", "Python", "JavaScript", "Firebase"],
      image: "　",
      github: "#",
      demo: "#",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "ポートフォリオサイト",
      description: "このポートフォリオサイトの制作・運用。Next.jsとTailwind CSSを使用したモダンなデザイン。レスポンシブ対応とSEO最適化を実装。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      image: "　",
      github: "#",
      demo: "#",
      featured: false,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "法人ウェブ制作",
      description: "企業向けウェブサイトの制作。WordPressを使用したCMS構築、デザイン制作、SEO対策まで包括的に対応。",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
      image: "　",
      github: "#",
      demo: "#",
      featured: false,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      title: "地方病院ウェブ制作",
      description: "地方病院の公式ウェブサイト制作。Next.jsを使用した高速で安全な医療機関向けサイト。患者向け情報の分かりやすい表示を実現。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      image: "　",
      github: "#",
      demo: "#",
      featured: false,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      title: "個人店ウェブ制作",
      description: "複数の個人店向けウェブサイト制作。WordPress、Next.js、STUDIO、PHP、JavaScriptなど、店舗のニーズに応じて最適な技術を選択。",
      technologies: ["WordPress", "Next.js", "STUDIO", "PHP", "JavaScript"],
      image: "　",
      github: "#",
      demo: "#",
      featured: false,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      title: "業務効率化ツール",
      description: "企業向け業務効率化ツールの開発。クローラー、スクレイピング、位置情報取得スクリプトなど、PythonとGASを使用した自動化ツールを多数開発。",
      technologies: ["Python", "Google Apps Script", "Selenium", "BeautifulSoup", "Google Maps API"],
      image: "　",
      github: "#",
      demo: "#",
      featured: false,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 背景の装飾要素 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* 浮遊する装飾要素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: element.duration
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
          <Link href="/" className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ポートフォリオ
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-white/80 hover:text-white transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors relative group">
              About Me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors relative group">
              お問い合わせ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              プロジェクト
            </span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            これまでに開発したプロジェクトの一部をご紹介します。
            <br />
            各プロジェクトの詳細や技術スタックについても記載しています。
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              注目プロジェクト
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={project.id} 
                className="group backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl mb-4 animate-bounce">{project.image}</div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/90 text-sm rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="group/link flex items-center text-purple-300 hover:text-purple-200 font-medium transition-colors duration-300"
                    >
                      <span className="mr-2">GitHub</span>
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                    <Link
                      href={project.demo}
                      className="group/link flex items-center text-cyan-300 hover:text-cyan-200 font-medium transition-colors duration-300"
                    >
                      <span className="mr-2">デモを見る</span>
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              その他のプロジェクト
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={project.id} 
                className="group backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-4xl animate-pulse">{project.image}</div>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 backdrop-blur-md text-white/80 text-xs rounded border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 backdrop-blur-md text-white/80 text-xs rounded border border-white/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      href={project.github}
                      className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors duration-300"
                    >
                      GitHub
                    </Link>
                    <Link
                      href={project.demo}
                      className="text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors duration-300"
                    >
                      デモ
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              プロジェクトについて詳しく知りたいですか？
            </h3>
            <p className="text-white/70 mb-8 text-lg">
              お気軽にお問い合わせください。プロジェクトの詳細や技術的な質問にお答えします。
            </p>
            <Link 
              href="/contact"
              className="inline-block group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">お問い合わせ</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/20 py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">&copy; 2024 初野流斗. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 