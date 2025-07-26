"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [floatingElements, setFloatingElements] = useState<Array<{
    left: string;
    top: string;
    delay: string;
    duration: string;
  }>>([]);

  // EmailJSの初期化（一度だけ実行）
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS public key is not configured');
      return;
    }
    
    emailjs.init(publicKey);
    
    // EmailJSの設定確認（開発環境のみ）
    if (process.env.NODE_ENV === 'development') {
      console.log('EmailJS initialized with:', {
        publicKey: publicKey,
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      
      if (!serviceId || !templateId) {
        throw new Error('EmailJS service ID or template ID is not configured');
      }
      
      // EmailJSを使用してメール送信
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'ryuuto.anoy@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      console.error('Error details:', {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        formData: formData,
        errorMessage: error instanceof Error ? error.message : 'Unknown error'
      });
      
      // フォールバック: フォームデータをコンソールに出力
      console.log('Form data (fallback):', {
        to: 'ryuuto.anoy@gmail.com',
        from: formData.email,
        name: formData.name,
        subject: formData.subject,
        message: formData.message
      });
      
      // 開発環境では成功として扱う（テスト用）
      if (process.env.NODE_ENV === 'development') {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      <header className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <nav className="flex flex-col sm:flex-row justify-between items-center backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 space-y-4 sm:space-y-0">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ポートフォリオ
          </Link>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <Link href="/" className="text-white/80 hover:text-white transition-colors relative group text-sm sm:text-base">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors relative group text-sm sm:text-base">
              About Me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects" className="text-white/80 hover:text-white transition-colors relative group text-sm sm:text-base">
              プロジェクト
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              お問い合わせ
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            プロジェクトのご相談や技術的な質問など、お気軽にお問い合わせください。
            <br className="hidden sm:block" />
            迅速にご返信いたします。
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  連絡先情報
                </span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8">

                <div className="flex items-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg mb-1">所在地</h3>
                    <p className="text-white/70 text-sm sm:text-base">東京都大田区</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg mb-1">営業時間</h3>
                    <p className="text-white/70 text-sm sm:text-base">平日 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  メッセージを送信
                </span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-3">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300 hover:border-white/40"
                    placeholder="山田太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-3">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300 hover:border-white/40"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-3">
                    件名 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all duration-300 hover:border-white/40"
                  >
                    <option value="" className="bg-gray-800">選択してください</option>
                    <option value="project" className="bg-gray-800">プロジェクトのご相談</option>
                    <option value="collaboration" className="bg-gray-800">協働のご提案</option>
                    <option value="question" className="bg-gray-800">技術的なご質問</option>
                    <option value="other" className="bg-gray-800">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-3">
                    メッセージ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/50 resize-none transition-all duration-300 hover:border-white/40"
                    placeholder="メッセージを入力してください..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full group relative px-8 py-4 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 hover:shadow-2xl'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        <span>送信中...</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">送信する</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </>
                    )}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>

                {/* 送信ステータス表示 */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center">
                    ✅ お問い合わせを送信しました。ありがとうございます！
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center">
                    ❌ 送信に失敗しました。しばらく時間をおいて再度お試しください。
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                お気軽にお問い合わせください
              </h3>
              <p className="text-white/70 mb-8 text-lg">
                プロジェクトのご相談から技術的な質問まで、どんなことでもお気軽にご連絡ください。
                <br />
                通常24時間以内にご返信いたします。
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  href="/projects"
                  className="group px-6 py-3 border-2 border-white/30 text-white rounded-lg font-medium transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                >
                  <span className="mr-2">プロジェクトを見る</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link 
                  href="/about"
                  className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">About Me</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
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