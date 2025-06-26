export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "開発速度10倍アップ",
      description: "Claude Codeの強力なAI機能を駆使して、従来の開発速度を劇的に向上させます。コード生成からデバッグまで、すべてのプロセスを高速化。",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "実践的ハンズオン学習",
      description: "理論だけでなく、実際のプロジェクトを通じて学ぶ実践重視のカリキュラム。現場で即戦力となるスキルを身につけます。",
      gradient: "from-purple-500 to-pink-500",
      delay: "200"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 エキスパートサポート",
      description: "経験豊富な講師陣による個別指導と、活発なコミュニティでのピアサポート。学習で困ったときはいつでもサポートを受けられます。",
      gradient: "from-emerald-500 to-teal-500",
      delay: "400"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "認定証明書付き",
      description: "コース修了後は、業界で認知される認定証明書を発行。あなたのスキルを証明し、キャリアアップに活用できます。",
      gradient: "from-orange-500 to-red-500",
      delay: "600"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "最新技術を網羅",
      description: "Claude Codeの最新機能から、実践的なワークフローまで。業界のトレンドを先取りした最新の技術スタックを学習できます。",
      gradient: "from-indigo-500 to-purple-500",
      delay: "800"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "キャリア成長保証",
      description: "受講生の平均年収向上率は30%以上。スキルアップによる具体的な成果を実感できる、結果にコミットしたプログラムです。",
      gradient: "from-green-500 to-blue-500",
      delay: "1000"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            特徴
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            なぜ選ばれるのか？
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Claude Code講座が選ばれる理由は、単なる技術習得を超えた
            <span className="text-blue-600 font-semibold">真の価値創造</span>にあります
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group card-hover bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl`}
              style={{
                animationDelay: `${feature.delay}ms`
              }}
            >
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 font-medium">現在受講生募集中</span>
            </div>
            <div className="text-slate-400">|</div>
            <div className="text-slate-600">
              <span className="font-bold text-blue-600">残り12名</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}