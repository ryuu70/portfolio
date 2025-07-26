"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [floatingElements, setFloatingElements] = useState<Array<{
    left: string;
    top: string;
    delay: string;
    duration: string;
  }>>([]);

  // クライアントサイドでのみ浮遊要素を生成
  useEffect(() => {
    const elements = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 4}s`
    }));
    setFloatingElements(elements);
  }, []);
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
          <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ポートフォリオ
          </h1>
          <div className="flex space-x-6">
            <a href="#about" className="text-white/80 hover:text-white transition-colors relative group">
              About Me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link href="/projects" className="text-white/80 hover:text-white transition-colors relative group">
              プロジェクト
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors relative group">
              お問い合わせ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-16">
            {/* アニメーションアイコン */}
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden shadow-2xl animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse"></div>
              
              {/* 装飾的なドット */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              
              {/* コード風の装飾 */}
              <div className="absolute top-2 left-2 text-sm text-white/60 font-mono">{"<"}</div>
              <div className="absolute top-2 right-2 text-sm text-white/60 font-mono">{"/>"}</div>
              
              {/* メインアイコン */}
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-4xl animate-bounce">⚡</span>
                  <span className="text-5xl">💻</span>
                  <span className="text-4xl animate-bounce delay-100">⚡</span>
                </div>
                <div className="text-sm text-white/80 font-mono tracking-wider">DEVELOPER</div>
              </div>
              
              {/* 装飾的な枠線 */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-slow"></div>
            </div>

            {/* タイトル */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                初野流斗
              </span>
            </h1>
            
            {/* サブタイトル */}
            <div className="text-2xl md:text-3xl text-white/80 mb-8 font-light">
              <span className="inline-block animate-fade-in-up">フルスタック</span>
              <span className="inline-block mx-4 text-purple-400 animate-pulse">•</span>
              <span className="inline-block animate-fade-in-up delay-200">開発者</span>
              <span className="inline-block mx-4 text-purple-400 animate-pulse">•</span>
              <span className="inline-block animate-fade-in-up delay-400">フォトグラファー</span>
            </div>

            {/* 説明文 */}
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              現在は主にNext.js、React、TypeScriptを使用した<br />Webアプリケーション開発を行っています。
              <br />
              <br />
              ユーザー体験を重視した、美しく機能的な<br />Webサイト、Webアプリケーションを作成します。
              <br />
              <br />
              PythonやGASを使用した業務効率化ツールの開発や、<br />データ分析なども行っています。
              <br />
              <br />
              Google広告の運用
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">プロジェクトを見る</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/contact"
                className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                <span className="relative z-10">お問い合わせ</span>
              </Link>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <section id="about" className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    初野流斗
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6 text-lg">
                    フルスタック開発者として、モダンなWeb技術を使用したアプリケーション開発に従事しています。
                    Next.js、React、TypeScriptを中心としたフロントエンド開発と、
                    Node.js、PostgreSQLを使用したバックエンド開発の両方に精通しています。
                  </p>
                  <p className="text-white/80 leading-relaxed mb-8 text-lg">
                    ユーザー体験を重視し、パフォーマンスとセキュリティを考慮した
                    高品質なアプリケーションの開発を心がけています。
                  </p>
                  <div className="flex space-x-4">
                    <Link 
                      href="/about"
                      className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      詳細を見る →
                    </Link>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-white mb-4 text-xl">経験</h4>
                    <ul className="text-white/80 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        フルスタックWebアプリケーション開発（3年）
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        モバイルアプリ開発（React Native, Flutter）
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        クラウドインフラ構築（AWS、Vercel）
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        WEB制作会社の立ち上げ経験あり
                      </li>
                    </ul>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-white mb-4 text-xl">学歴・資格</h4>
                    <ul className="text-white/80 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                        法政大学理工学部情報工学科
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        食品衛生管理者
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        防災・防火管理者
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              技術スタック
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Next.js", icon: "⚡", color: "from-purple-500 to-purple-600" },
              { name: "React", icon: "⚛️", color: "from-blue-500 to-blue-600" },
              { name: "TypeScript", icon: "📘", color: "from-cyan-500 to-cyan-600" },
              { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
              { name: "Python", icon: "🐍", color: "from-yellow-500 to-yellow-600" },
              { name: "Flutter", icon: "📱", color: "from-blue-400 to-blue-500" },
              { name: "MySQL", icon: "🐬", color: "from-orange-500 to-orange-600" },
              { name: "PostgreSQL", icon: "🐘", color: "from-indigo-500 to-indigo-600" },
              { name: "Git", icon: "📝", color: "from-red-500 to-red-600" },
              { name: "Docker", icon: "🐳", color: "from-blue-300 to-blue-400" },
              { name: "Tailwind CSS", icon: "🎨", color: "from-teal-500 to-teal-600" },
              { name: "Adobe", icon: "🎭", color: "from-pink-500 to-pink-600" }
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className="group backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <h3 className="font-semibold text-white text-center group-hover:text-purple-300 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/20 py-12 mt-32">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">&copy; 2024 初野流斗. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
