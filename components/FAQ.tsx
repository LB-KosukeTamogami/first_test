"use client";

import { useState } from "react";

export default function FAQ() {
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
    },
    {
      question: "企業研修としての利用は可能ですか？",
      answer: "エンタープライズプランでは企業研修に対応しています。チーム単位での受講、カスタムカリキュラムの作成、社内ワークショップの実施などが可能です。請求書払いや複数名割引もご用意していますので、詳細はお問い合わせください。"
    },
    {
      question: "課題や宿題はありますか？",
      answer: "各週に実践課題があり、学習した内容を実際に試していただきます。課題は段階的に難易度が上がるよう設計されており、最終的には実際のプロジェクトを完成させます。提出は任意ですが、講師からのフィードバックを受けることで効果的にスキルアップできます。"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            よくある質問
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            受講前の疑問や不安を解消できるよう、
            <span className="text-orange-600 font-semibold">よくお寄せいただく質問</span>
            をまとめました
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-8 pb-6 pt-2">
                  <div className="w-full h-px bg-gradient-to-r from-orange-200 to-red-200 mb-4"></div>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                他にご質問がございますか？
              </h3>
              <p className="text-slate-600 mb-4 sm:mb-0">
                お気軽にお問い合わせください。専門スタッフが丁寧にお答えします。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:support@claude-code-course.com"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                メールで相談
              </a>
              <a
                href="#apply"
                className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
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