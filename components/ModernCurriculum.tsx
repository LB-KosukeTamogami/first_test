import Image from "next/image";

export default function ModernCurriculum() {
  const weeks = [
    {
      week: "1-2週目",
      title: "Claude Code基礎",
      description: "AIペアプログラミングの基本概念から実践的な操作まで",
      topics: [
        "Claude Codeのセットアップと環境構築",
        "効果的なプロンプトエンジニアリング",
        "基本的なコード生成と編集テクニック",
        "ショートカットと効率化のコツ"
      ],
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      bgColor: "bg-blue-500/10"
    },
    {
      week: "3-4週目",
      title: "実践的開発手法",
      description: "実際の開発現場で使える高度なテクニックを習得",
      topics: [
        "レガシーコードのリファクタリング",
        "テスト駆動開発（TDD）の実践",
        "デバッグとトラブルシューティング",
        "コードレビューとベストプラクティス"
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      bgColor: "bg-purple-500/10"
    },
    {
      week: "5-6週目",
      title: "アドバンスド機能",
      description: "Claude Codeの高度な機能を使いこなすプロフェッショナル技術",
      topics: [
        "大規模プロジェクトでの活用戦略",
        "チーム開発での効果的な使い方",
        "カスタムワークフローの構築",
        "APIとの連携・自動化"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      bgColor: "bg-emerald-500/10"
    },
    {
      week: "7-8週目",
      title: "実践プロジェクト",
      description: "学んだスキルを統合した実践的なプロジェクト開発",
      topics: [
        "実践プロジェクトの企画・設計",
        "フルスタック開発の実践",
        "ポートフォリオの作成と発表",
        "継続学習とキャリア戦略"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section id="curriculum" className="py-12 md:py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            カリキュラム
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            8週間で完全マスター
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            段階的に学習を進める科学的に設計されたカリキュラムで、確実にスキルを身につけます
          </p>
        </div>

        {/* Curriculum Timeline */}
        <div className="space-y-8 lg:space-y-12">
          {weeks.map((week, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center animate-scale-in ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`px-3 py-1 ${week.bgColor} rounded-full text-sm font-medium`}>
                      {week.week}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Week {index + 1}-{index + 2}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    {week.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {week.description}
                  </p>
                </div>

                {/* Topics */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">学習内容</h4>
                  <ul className="space-y-2">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                  <Image
                    src={week.image}
                    alt={week.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">修了証明書</h3>
            <p className="text-muted-foreground text-sm">業界認定の証明書を発行</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-info/10 text-info rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">コミュニティアクセス</h3>
            <p className="text-muted-foreground text-sm">卒業後も継続的なサポート</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-warning/10 text-warning rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">キャリアサポート</h3>
            <p className="text-muted-foreground text-sm">就職・転職支援も充実</p>
          </div>
        </div>
      </div>
    </section>
  );
}