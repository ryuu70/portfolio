"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
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

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-12">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Profile Image */}
              <div className="text-center lg:text-left">
                <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden shadow-2xl animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse"></div>
                  
                  {/* 装飾的なドット */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  
                  {/* メインアイコン */}
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <div className="text-sm text-white/80 font-mono tracking-wider">DEVELOPER</div>
                  </div>
                  
                  {/* 装飾的な枠線 */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-slow"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  初野流斗
                </h2>
                <p className="text-white/80 leading-relaxed mb-6 text-lg">
                  現在はフルスタック開発者として、モダンなWeb技術を使用したアプリケーション開発に従事しています。
                  Next.js、React、TypeScriptを中心としたフロントエンド開発と、
                  Node.js、PostgreSQLを使用したバックエンド開発の両方に精通しています。
                </p>
                <p className="text-white/80 leading-relaxed mb-8 text-lg">
                  ユーザー体験を重視し、パフォーマンスとセキュリティを考慮した
                  高品質なアプリケーションの開発を心がけています。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/projects"
                    className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span className="mr-2">プロジェクトを見る</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  <Link 
                    href="/contact"
                    className="group px-6 py-3 border-2 border-white/30 text-white rounded-lg font-medium transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                  >
                    <span className="mr-2">お問い合わせ</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Experience */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white">経験</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">フルスタックWebアプリケーション開発</h4>
                    <p className="text-white/70 text-sm">3年の実務経験</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">モバイルアプリ開発</h4>
                    <p className="text-white/70 text-sm">React Native, Flutterを使用</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">クラウドインフラ構築</h4>
                    <p className="text-white/70 text-sm">AWS、Vercelを使用</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">WEB制作会社の立ち上げ経験</h4>
                    <p className="text-white/70 text-sm">某地方病院など、法人への納品実績あり</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Education & Certifications */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-white">学歴・資格</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">法政大学理工学部情報工学科</h4>
                    <p className="text-white/70 text-sm">情報工学学士</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-orange-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">食品衛生管理者</h4>
                    <p className="text-white/70 text-sm">国家資格</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">防災・防火管理者</h4>
                    <p className="text-white/70 text-sm">安全管理資格</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white">技術スキル</h3>
              </div>
                             <div className="space-y-4">
                 <div>
                   <h4 className="font-semibold text-white mb-2">フロントエンド</h4>
                   <div className="flex flex-wrap gap-2">
                     {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((skill) => (
                       <span key={skill} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/90 text-sm rounded-full border border-white/20">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <h4 className="font-semibold text-white mb-2">バックエンド・データベース</h4>
                   <div className="flex flex-wrap gap-2">
                     {["Node.js", "Python", "MySQL", "PostgreSQL"].map((skill) => (
                       <span key={skill} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/90 text-sm rounded-full border border-white/20">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <h4 className="font-semibold text-white mb-2">モバイル・ツール</h4>
                   <div className="flex flex-wrap gap-2">
                     {["Flutter", "Git", "Docker", "Adobe"].map((skill) => (
                       <span key={skill} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/90 text-sm rounded-full border border-white/20">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white">趣味・興味</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <span className="w-3 h-3 bg-pink-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">新しい技術の学習</h4>
                    <p className="text-white/70 text-sm">常に最新技術をキャッチアップ</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">オープンソースプロジェクト</h4>
                    <p className="text-white/70 text-sm">コミュニティへの貢献</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">技術ブログの執筆</h4>
                    <p className="text-white/70 text-sm">知識の共有とアウトプット</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">技術カンファレンス参加</h4>
                    <p className="text-white/70 text-sm">最新トレンドの把握</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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