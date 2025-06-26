import Image from "next/image";

export default function ModernHero() {
  return (
    <section id="hero" className="pt-16 pb-12 md:pb-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                最新のAI開発ツール
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Claude Codeで
                <br />
                <span className="gradient-text">開発を革新</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
                AIペアプログラミングの最前線で、あなたの開発スキルを次のレベルへ。
                実践的な学習で、効率的なコーディングを身につけましょう。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="btn btn-primary px-8 py-4 text-base font-semibold"
              >
                今すぐ始める
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="#curriculum"
                className="btn btn-outline px-8 py-4 text-base font-semibold"
              >
                カリキュラムを見る
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">1,000+</div>
                <div className="text-sm text-muted-foreground">受講生</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">満足度</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">8週間</div>
                <div className="text-sm text-muted-foreground">で完了</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-last animate-fade-in">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Developer working with AI coding tools"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating cards - Hidden on mobile */}
            <div className="hidden md:block absolute -top-6 -left-6 card p-4 shadow-glow animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-card-foreground">コード生成完了</div>
                  <div className="text-xs text-muted-foreground">99.2% 精度</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-6 -right-6 card p-4 shadow-glow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-card-foreground">開発速度</div>
                  <div className="text-xs text-muted-foreground">10倍向上</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-fade-in">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">詳細を見る</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}