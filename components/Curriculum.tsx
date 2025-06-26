export default function Curriculum() {
  const weeks = [
    {
      week: "1-2週目",
      title: "Claude Code基礎マスター",
      description: "AIペアプログラミングの基本概念から実践的な操作まで",
      topics: [
        "Claude Codeのセットアップと環境構築",
        "効果的なプロンプトエンジニアリング",
        "基本的なコード生成と編集テクニック",
        "ショートカットと効率化のコツ"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      delay: "0"
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      delay: "200"
    },
    {
      week: "5-6週目",
      title: "アドバンスド機能活用",
      description: "Claude Codeの高度な機能を使いこなすプロフェッショナル技術",
      topics: [
        "大規模プロジェクトでの活用戦略",
        "チーム開発での効果的な使い方",
        "カスタムワークフローの構築",
        "APIとの連携・自動化"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500",
      delay: "400"
    },
    {
      week: "7-8週目",
      title: "総合演習・実践プロジェクト",
      description: "学んだスキルを統合した実践的なプロジェクト開発",
      topics: [
        "実践プロジェクトの企画・設計",
        "フルスタック開発の実践",
        "ポートフォリオの作成と発表",
        "継続学習とキャリア戦略"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      delay: "600"
    }
  ];

  return (
    <section id="curriculum" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            カリキュラム
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            8週間で完全マスター
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            段階的に学習を進める
            <span className="text-purple-600 font-semibold">科学的に設計された</span>
            カリキュラムで、確実にスキルを身につけます
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {weeks.map((week, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-white/20 card-hover`}
              style={{
                animationDelay: `${week.delay}ms`
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${week.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {week.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                        {week.week}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                        {week.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {week.description}
                  </p>
                </div>
                
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">学習内容</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {week.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-start gap-3 p-3 bg-slate-50/80 rounded-xl hover:bg-slate-100/80 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm font-medium text-slate-400">
                  {index + 1} / {weeks.length}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700 font-medium">修了証明書付き</span>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-slate-700 font-medium">実践プロジェクト完了</span>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700 font-medium">キャリアサポート</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}