"use client";

import { useState } from "react";

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "ベーシック",
      price: "49,800",
      period: "8週間",
      description: "個人学習に最適なエントリープラン",
      popular: false,
      features: [
        "全カリキュラムアクセス",
        "オンライン教材（動画・PDF）",
        "コミュニティアクセス",
        "基本サポート（平日対応）",
        "修了証明書",
        "6ヶ月間の復習アクセス"
      ],
      color: "from-slate-500 to-gray-600",
      bgColor: "bg-white",
      textColor: "text-slate-800",
      buttonStyle: "bg-slate-600 hover:bg-slate-700 text-white"
    },
    {
      name: "プロフェッショナル",
      price: "98,000",
      period: "8週間",
      description: "実践的スキル習得を重視するプロ向けプラン",
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
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      textColor: "text-slate-800",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
    },
    {
      name: "エンタープライズ",
      price: "198,000",
      period: "8週間",
      description: "チーム・企業向けのプレミアムプラン",
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
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-white",
      textColor: "text-slate-800",
      buttonStyle: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            料金プラン
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            あなたに最適なプランを
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            学習スタイルと目標に合わせて選べる
            <span className="text-blue-600 font-semibold">3つのプラン</span>
            をご用意しています
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                plan.popular 
                  ? 'border-blue-200 scale-105 lg:scale-110' 
                  : 'border-gray-200 hover:border-gray-300'
              } card-hover`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🎯 最も人気
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center transform ${
                  hoveredPlan === index ? 'scale-110 rotate-3' : ''
                } transition-transform duration-300`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                
                <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>
                  {plan.name}
                </h3>
                
                <p className="text-slate-600 text-sm mb-6">
                  {plan.description}
                </p>
                
                <div className="flex items-baseline justify-center mb-2">
                  <span className={`text-5xl font-bold ${plan.textColor}`}>
                    ¥{plan.price}
                  </span>
                </div>
                
                <div className="text-slate-500 text-sm">
                  {plan.period} / 一括払い
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50/80 transition-colors duration-200"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl ${plan.buttonStyle}`}>
                このプランを選ぶ
              </button>

              {plan.popular && (
                <div className="mt-4 text-center">
                  <span className="text-xs text-slate-500">
                    💡 90%の受講生がこのプランを選択
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700 font-medium">14日間返金保証</span>
            </div>
            <div className="w-px h-6 bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-slate-700 font-medium">無料相談受付中</span>
            </div>
            <div className="w-px h-6 bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3v-8a1 1 0 011-1h4a1 1 0 011 1v8h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700 font-medium">分割払い対応</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}