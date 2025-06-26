"use client";

import { useState } from "react";

export default function ModernFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "プログラミング初心者でも受講できますか？",
      answer: "基本的なプログラミング知識（変数、条件分岐、ループなど）があれば受講可能です。Claude Codeは初心者にも使いやすいツールですが、HTML/CSS、JavaScript の基礎知識があるとより効果的に学習を進めることができます。事前学習教材もご用意していますので、ご安心ください。"
    },
    {
      question: "受講期間とアクセス期間について教えてください",
      answer: "標準的な受講期間は8週間です。ライブセッションやメンタリングは8週間の期間中に実施されます。教材へのアクセスは、ベーシックプランで6ヶ月、プロフェッショナルプランで12ヶ月、エンタープライズプランで1年間可能です。この期間中は何度でも復習できます。"
    },
    {
      question: "Claude Codeの利用料金は別途必要ですか？",
      answer: "はい、Claude Codeの利用には別途Anthropic社への月額料金（約$20〜）が必要です。ただし、効率的な使い方や料金を最小限に抑える方法も講座内でお教えします。また、講座期間中は教育割引きの適用方法もご案内いたします。"
    },
    {
      question: "オンライン学習が初めてで不安です",
      answer: "ご安心ください。講座開始前にオリエンテーションセッションを実施し、学習プラットフォームの使い方から丁寧にご説明します。また、技術的なサポートチームが常駐しており、学習環境でのトラブルは迅速に解決いたします。録画された解説動画もありますので、ご自身のペースで学習できます。"
    },
    {
      question: "返金保証の詳細を教えてください",
      answer: "受講開始から14日以内であれば、理由を問わず全額返金いたします。返金手続きは簡単で、サポートチームにご連絡いただくだけです。銀行振込手数料のみお客様負担となりますが、それ以外の手数料は一切かかりません。"
    },
    {
      question: "修了後のサポートはありますか？",
      answer: "プロフェッショナルプラン以上では、修了後も継続的なサポートを提供しています。専用のSlackコミュニティでの質問対応、月1回のアフターフォローセッション、最新情報の共有などを行っています。また、転職活動のサポートや案件紹介なども実施しています。"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            よくある質問
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            受講前の疑問や不安を解消できるよう、よくお寄せいただく質問をまとめました
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-card-foreground pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              他にご質問がございますか？
            </h3>
            <p className="text-muted-foreground mb-6">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@claude-code-course.com"
                className="btn btn-primary px-6 py-3"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                メールで相談
              </a>
              <a
                href="#apply"
                className="btn btn-outline px-6 py-3"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                無料相談予約
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}