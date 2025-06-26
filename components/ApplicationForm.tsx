"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    experience: "",
    motivation: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ここで実際の送信処理を行う
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("お申し込みありがとうございます！担当者より24時間以内にご連絡いたします。");
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      plan: "",
      experience: "",
      motivation: ""
    });
  };

  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/30">
            お申し込み
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Claude Codeマスターへの
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
              第一歩を踏み出そう
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            AIと共に創る新しい開発スタイルを身につけ、プログラミングの可能性を最大限に引き出しましょう
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    お名前 <span className="text-pink-300">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="山田太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    メールアドレス <span className="text-pink-300">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="090-1234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-blue-100 mb-2">
                    希望プラン <span className="text-pink-300">*</span>
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="text-slate-800">プランを選択してください</option>
                    <option value="basic" className="text-slate-800">ベーシックプラン - ¥49,800</option>
                    <option value="professional" className="text-slate-800">プロフェッショナルプラン - ¥98,000</option>
                    <option value="enterprise" className="text-slate-800">エンタープライズプラン - ¥198,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-blue-100 mb-2">
                  プログラミング経験
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="text-slate-800">経験レベルを選択してください</option>
                  <option value="beginner" className="text-slate-800">初心者（1年未満）</option>
                  <option value="intermediate" className="text-slate-800">中級者（1-3年）</option>
                  <option value="advanced" className="text-slate-800">上級者（3年以上）</option>
                  <option value="expert" className="text-slate-800">エキスパート（5年以上）</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-blue-100 mb-2">
                  受講動機・目標
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Claude Codeを学ぶ目的や、講座で達成したい目標をお聞かせください..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-800'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      送信中...
                    </span>
                  ) : (
                    '今すぐ申し込む'
                  )}
                </button>
                
                <button
                  type="button"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl font-semibold text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  無料相談を予約
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-blue-100 text-sm">
                  送信いただいた情報は、
                  <a href="#" className="text-yellow-300 hover:text-yellow-200 underline">プライバシーポリシー</a>
                  に従って適切に管理いたします
                </p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">14日間返金保証</h3>
              <p className="text-blue-100 text-sm">安心してお試しいただけます</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">24時間以内にご連絡</h3>
              <p className="text-blue-100 text-sm">迅速なサポート対応</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">満足度97%</h3>
              <p className="text-blue-100 text-sm">受講生から高い評価</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 bg-slate-900/80 backdrop-blur-sm py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Claude Code講座</h3>
            <p className="text-slate-300 mb-8">
              AIプログラミングの新時代を、一緒に切り開きましょう
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">利用規約</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">特定商取引法に基づく表記</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">お問い合わせ</a>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 Claude Code講座. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}