import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 text-center">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/15 rounded-full blur-[140px] animate-pulse-slow" />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          Yangi imkoniyatlar dunyosi
        </div>

        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/10 select-none">
          LIMITSIZ <br /> IJODKORLIK
        </h1>

        <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl leading-relaxed mb-12 font-medium">
          Biz sizning eng dadil g'oyalaringizni professional darajadagi raqamli
          yechimlarga aylantiramiz. Tezlik, go'zallik va sifat uyg'unligi.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="group px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 transition-all duration-300 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.15)] flex items-center gap-3">
            Loyihani boshlash
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button className="px-10 py-5 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 text-white font-black rounded-2xl hover:bg-zinc-800 transition-all duration-300 active:scale-95 flex items-center gap-3">
            Portfolioni ko'rish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
