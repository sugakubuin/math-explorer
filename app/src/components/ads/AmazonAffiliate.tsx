

interface AmazonAffiliateProps {
  keyword?: string; // 検索キーワードとして使う（例：代数学、トポロジーなど）
  className?: string;
}

export default function AmazonAffiliate({ keyword = '数学', className = '' }: AmazonAffiliateProps) {
  const associateId = "sugakubuin-22";
  
  // 検索結果へのリンクのため特定の書籍画像の取得が難しいため、
  // 綺麗な学術書・参考書のフリー画像（Unsplash）を表示します。
  // より明るく、学習意欲のわく清潔感のある画像（白いデスクと本）に変更しました。
  const placeholderImageUrl = "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&q=80&w=300";

  return (
    <div className={`p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl my-8 transition-colors shadow-sm ${className}`}>
      <div className="flex flex-row items-center gap-4 sm:gap-6">
        
        {/* Book Image */}
        <div className="w-16 h-20 sm:w-20 sm:h-28 flex-shrink-0 rounded-md overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
          <img 
            src={placeholderImageUrl} 
            alt="参考書のイメージ" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <h3 className="text-sm sm:text-lg font-bold text-slate-800 dark:text-slate-100 mb-1 leading-tight">
            おすすめの参考書を探す
          </h3>
          <p className="text-[10px] sm:text-sm text-slate-500 dark:text-slate-400 mb-1 sm:mb-2 leading-relaxed hidden sm:block">
            学習に行き詰まったら、体系的にまとまった書籍を参照するのも効果的です。
          </p>
          <p className="text-[11px] sm:text-sm text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 line-clamp-2">
            Amazonで「<strong>{keyword}</strong>」に関連する専門書を探してみましょう。
          </p>
          <div>
            <a
              href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}&tag=${associateId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 bg-[#e58a00] hover:bg-[#d47e00] text-white text-xs sm:text-sm font-bold rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e58a00] focus:ring-offset-2 w-full sm:w-auto text-center border-b-2 border-[#b36b00] active:border-b-0 active:translate-y-[2px]"
            >
              Amazonで「{keyword}」に関する書籍を検索
            </a>
          </div>
        </div>
      </div>
      <div className="text-right mt-3 text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-600">
        ※Amazonのアソシエイトとして、当サイトは適格販売により収入を得ています。
      </div>
    </div>
  );
}
