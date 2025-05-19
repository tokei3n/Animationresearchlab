// pages/index.jsx
export default function HomePage() {
  const articles = [
    {
      title: "芸能界スキャンダルの裏側とは",
      excerpt: "芸能界のタブーに迫る驚きの取材内容を独占公開。",
      image: "/images/article1.jpg",
      category: "芸能",
    },
    {
      title: "政界再編の動きとその裏事情",
      excerpt: "新政党結成に向けたキーマンたちの思惑とは。",
      image: "/images/article2.jpg",
      category: "政治",
    },
    {
      title: "人気俳優が語る“あの夜”の真相",
      excerpt: "週刊誌報道の真相を本人が独白。",
      image: "/images/article3.jpg",
      category: "独占",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ヘッダー */}
      <header className="border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">週刊風ニュース</h1>
          <nav className="space-x-4 text-sm font-semibold">
            <a href="#" className="hover:text-red-600">芸能</a>
            <a href="#" className="hover:text-red-600">社会</a>
            <a href="#" className="hover:text-red-600">政治</a>
            <a href="#" className="hover:text-red-600">スポーツ</a>
            <a href="#" className="hover:text-red-600">経済</a>
          </nav>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">特集記事</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <div key={idx} className="bg-white shadow hover:shadow-lg transition p-4">
                <img src={article.image} alt={article.title} className="w-full h-40 object-cover mb-2" />
                <p className="text-sm text-red-600">{article.category}</p>
                <h3 className="font-semibold text-lg mb-1">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black text-white text-sm py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © 2025 週刊風ニュース. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}