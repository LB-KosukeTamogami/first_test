"use client";

import { useState } from "react";

export default function ModernPricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      name: "ベーシック",
      description: "個人学習に最適なエントリープラン",
      monthlyPrice: 9800,
      yearlyPrice: 49800,
      popular: false,
      features: [
        "全カリキュラムアクセス",
        "オンライン教材（動画・PDF）",
        "コミュニティアクセス",
        "基本サポート（平日対応）",
        "修了証明書",
        "6ヶ月間の復習アクセス"
      ],
      color: "gray"
    },
    {
      name: "プロフェッショナル",
      description: "実践的スキル習得を重視するプロ向けプラン",
      monthlyPrice: 19800,
      yearlyPrice: 98000,
      popular: true,
      features: [
        "ベーシックプランの全特典",
        "週1回の個別メンタリング（1対1）",
        "追加教材・ケーススタディ",
        "優先サポート（24時間以内回答）",
        "実践プロジェクト個別レビュー",
        "LinkedInスキル認定サポート",
        "12ヶ月間の復習アクセス"
      ],
      color: "blue"
    },
    {
      name: "エンタープライズ",
      description: "チーム・企業向けのプレミアムプラン",
      monthlyPrice: 39800,
      yearlyPrice: 198000,
      popular: false,
      features: [
        "プロフェッショナルプランの全特典",
        "毎日の個別サポート（専任講師）",
        "カスタムカリキュラム対応",
        "チーム開発実習プロジェクト",
        "企業向けワークショップ",
        "導入コンサルティング",
        "1年間のアフターサポート",
        "社内研修資料提供"
      ],
      color: "purple"
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP').format(price);
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            料金プラン
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            あなたに最適なプランを
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
            学習スタイルと目標に合わせて選べる3つのプランをご用意
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-background rounded-lg p-1 border border-border">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              月額払い
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              年額払い
              <span className="ml-2 px-2 py-1 bg-success/20 text-success text-xs rounded">
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card p-8 relative animate-scale-in ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-glow scale-105' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    最人気
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-card-foreground">
                    ¥{formatPrice(getPrice(plan))}
                  </span>
                  <span className="text-muted-foreground">
                    /{billingPeriod === "monthly" ? "月" : "年"}
                  </span>
                </div>
                
                {billingPeriod === "yearly" && (
                  <p className="text-sm text-muted-foreground">
                    月額換算: ¥{formatPrice(Math.floor(getPrice(plan) / 12))}
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-success/20 text-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-card-foreground text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? "btn-primary"
                  : "btn-outline"
              }`}>
                このプランを選ぶ
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">14日間返金保証</h3>
            <p className="text-muted-foreground text-sm">理由を問わず全額返金</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-info/10 text-info rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">24時間サポート</h3>
            <p className="text-muted-foreground text-sm">迅速なサポート対応</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-warning/10 text-warning rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">分割払い対応</h3>
            <p className="text-muted-foreground text-sm">クレジットカード・銀行振込</p>
          </div>
        </div>
      </div>
    </section>
  );
}