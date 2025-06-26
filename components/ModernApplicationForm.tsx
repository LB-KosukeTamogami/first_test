"use client";

import { useState } from "react";
import Image from "next/image";

export default function ModernApplicationForm() {
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
    <section id="apply" className="py-12 md:py-20 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                お申し込み
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Claude Codeマスターへの
                <br />
                <span className="gradient-text">第一歩を踏み出そう</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                AIと共に創る新しい開発スタイルを身につけ、プログラミングの可能性を最大限に引き出しましょう
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&crop=center&auto=format&q=80"
                alt="Team collaboration and coding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 text-success rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">14日間返金保証</div>
                  <div className="text-muted-foreground text-xs">安心して始められます</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-info/10 text-info rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">24時間以内対応</div>
                  <div className="text-muted-foreground text-xs">迅速なサポート</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-warning/10 text-warning rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">満足度97%</div>
                  <div className="text-muted-foreground text-xs">高い受講生評価</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="animate-scale-in">
            <div className="card p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      お名前 <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input"
                      placeholder="山田太郎"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      メールアドレス <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="090-1234-5678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-foreground mb-2">
                      希望プラン <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      onChange={handleInputChange}
                      required
                      className="input"
                    >
                      <option value="">プランを選択してください</option>
                      <option value="basic">ベーシックプラン - ¥49,800</option>
                      <option value="professional">プロフェッショナルプラン - ¥98,000</option>
                      <option value="enterprise">エンタープライズプラン - ¥198,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    プログラミング経験
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">経験レベルを選択してください</option>
                    <option value="beginner">初心者（1年未満）</option>
                    <option value="intermediate">中級者（1-3年）</option>
                    <option value="advanced">上級者（3年以上）</option>
                    <option value="expert">エキスパート（5年以上）</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-foreground mb-2">
                    受講動機・目標
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    className="input min-h-[120px] resize-none"
                    placeholder="Claude Codeを学ぶ目的や、講座で達成したい目標をお聞かせください..."
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                        : 'btn-primary'
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
                    className="w-full btn-outline py-3"
                  >
                    無料相談を予約
                  </button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  送信いただいた情報は、
                  <a href="#" className="text-primary hover:underline">プライバシーポリシー</a>
                  に従って適切に管理いたします
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-16 border-t border-border">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Claude Code講座</h3>
            <p className="text-muted-foreground mb-8">
              AIプログラミングの新時代を、一緒に切り開きましょう
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">利用規約</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">プライバシーポリシー</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">特定商取引法に基づく表記</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">お問い合わせ</a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Claude Code講座. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}