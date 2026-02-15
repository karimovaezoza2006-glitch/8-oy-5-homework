import React from "react";

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      category: "Dizayn",
      title: "Minimalizm va uning zamonaviy interfeyslardagi o'rni",
      desc: "Nega bugungi kunda kamroq narsa ko'proq ma'no anglatishini o'rganamiz.",
      img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800",
      date: "12 Mart, 2024",
    },
    {
      id: 2,
      category: "Dasturlash",
      title: "Next.js 15: Server komponentlari nimalarga qodir?",
      desc: "Yangi avlod veb-ilovalarini yaratishda eng so'nggi texnologiyalar tahlili.",
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800",
      date: "10 Mart, 2024",
    },
    {
      id: 3,
      category: "AI",
      title: "Sun'iy intellekt va ijodiy fikrlash uyg'unligi",
      desc: "AI vositalari ijodkorlarga yordamchimi yoki raqobatchimi?",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
      date: "08 Mart, 2024",
    },
  ];

  return (
    <div className="min-h-screen pt-44 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <div className="mb-20">
        <h2 className="text-6xl font-black mb-6 tracking-tight">
          BLOG POSTLAR
        </h2>
        <div className="w-24 h-2 bg-blue-600 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {articles.map((art) => (
          <div
            key={art.id}
            className="group bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4 shadow-2xl flex flex-col h-full"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={art.img}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">
                {art.category}
              </div>
            </div>
            <div className="p-10 flex flex-col flex-1">
              <span className="text-zinc-600 text-[10px] font-bold uppercase mb-4 tracking-widest">
                {art.date}
              </span>
              <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {art.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                {art.desc}
              </p>
              <button className="w-full py-4 bg-zinc-800 group-hover:bg-blue-600 text-white font-black rounded-2xl transition-all duration-300 active:scale-95 text-xs tracking-widest">
                O'QISHNI DAVOM ETTIRISH
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
