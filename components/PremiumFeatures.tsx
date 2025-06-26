"use client";

import { useState } from "react";
import HolographicCard from "./HolographicCard";
import ScrollReveal from "./ScrollReveal";

export default function PremiumFeatures() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "開発速度 10倍革命",
      subtitle: "Lightning Fast Development",
      description: "AI駆動のコード生成とリアルタイム最適化により、従来の開発プロセスを根本から変革。コーディングからデバッグまで、すべての工程で圧倒的な速度向上を実現します。",
      features: [
        "インテリジェントコード補完",
        "自動リファクタリング",
        "予測的バグ検出",
        "ワンクリックデプロイ"
      ],
      gradient: "from-blue-400 via-purple-500 to-pink-500",
      glowColor: "shadow-blue-500/50",
      stats: { value: "1000%", label: "効率向上" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "次世代学習体験",
      subtitle: "Immersive Learning Journey",
      description: "VRやARを活用した没入型学習環境で、従来の教育の枠を超えた革新的な体験を提供。理論と実践を完璧に融合させた学習メソッドです。",
      features: [
        "3D可視化コーディング",
        "AIメンター常時サポート",
        "リアルタイムコラボレーション",
        "個別学習パス生成"
      ],
      gradient: "from-emerald-400 via-cyan-500 to-blue-500",
      glowColor: "shadow-emerald-500/50",
      stats: { value: "99%", label: "理解度" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "エリートコミュニティ",
      subtitle: "Elite Developer Network",
      description: "世界トップクラスの開発者たちとの直接的な交流機会。業界のエキスパートから直接学び、キャリアを加速させるネットワークを構築できます。",
      features: [
        "グローバルネットワーキング",
        "1on1エキスパートセッション",
        "限定技術勉強会",
        "キャリアメンタリング"
      ],
      gradient: "from-purple-400 via-pink-500 to-red-500",
      glowColor: "shadow-purple-500/50",
      stats: { value: "500+", label: "エキスパート" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "業界認定資格",
      subtitle: "Industry-Recognized Certification",
      description: "国際的に認知される資格システムで、あなたのスキルを証明。グローバル企業での就職やフリーランスでの高単価案件獲得をサポートします。",
      features: [
        "国際認定証明書",
        "スキルバッジシステム",
        "就職支援プログラム",
        "案件紹介サービス"
      ],
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      glowColor: "shadow-yellow-500/50",
      stats: { value: "92%", label: "就職成功率" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "最先端技術スタック",
      subtitle: "Cutting-Edge Tech Stack",
      description: "業界をリードする最新技術を常に取り入れた学習カリキュラム。技術の進歩に遅れることなく、常に最前線で活躍できるスキルを習得できます。",
      features: [
        "最新フレームワーク対応",
        "クラウドネイティブ開発",
        "マイクロサービス設計",
        "DevOps実践"
      ],
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      glowColor: "shadow-cyan-500/50",
      stats: { value: "100+", label: "技術スタック" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "収入向上保証",
      subtitle: "Income Growth Guarantee",
      description: "受講生の平均年収向上率300%の実績。スキルアップが直接収入アップに繋がる、結果にコミットしたプログラムを提供します。",
      features: [
        "年収向上保証制度",
        "高単価案件斡旋",
        "フリーランス支援",
        "副業サポート"
      ],
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      glowColor: "shadow-green-500/50",
      stats: { value: "300%", label: "年収向上" }
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-white/20 mb-8">
            <span className="text-white/90 font-medium">🎯 革新的特徴</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            Why <span className="text-holographic">Choose Us?</span>
          </h2>
          
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            業界を変革する6つの革新的特徴で、あなたの
            <span className="text-neon mx-2">デベロッパーライフ</span>
            を完全に変える
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              direction="scale" 
              delay={index * 100}
              className="h-full"
            >
              <HolographicCard 
                className="h-full group cursor-pointer"
                intensity={20}
              >
                <div 
                  className={`h-full p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 transition-all duration-500 ${
                    activeFeature === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                  } ${feature.glowColor}`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    
                    {/* Stats badge */}
                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                      {feature.stats.value}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-holographic transition-all duration-500">
                        {feature.title}
                      </h3>
                      <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                        {feature.subtitle}
                      </p>
                    </div>

                    <p className="text-white/80 leading-relaxed line-clamp-3">
                      {feature.description}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3 text-white/70">
                          <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`} />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats display */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">{feature.stats.label}</span>
                        <span className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                          {feature.stats.value}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                </div>
              </HolographicCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={600} className="text-center mt-20">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                準備はできましたか？
              </h3>
              <p className="text-white/70 mb-4">
                今すぐ革命的な開発体験を始めましょう
              </p>
              
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">現在募集中 - 残り12席</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}