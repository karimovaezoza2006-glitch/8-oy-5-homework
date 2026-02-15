import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-44 pb-24 px-6 flex items-center justify-center animate-in slide-in-from-top-12 duration-1000">
      <div className="w-full max-w-5xl bg-zinc-900/40 backdrop-blur-3xl border border-zinc-800 rounded-[4rem] overflow-hidden flex flex-col md:row shadow-[0_50px_150px_rgba(0,0,0,1)] border-t-white/5">
        <div className="grid md:grid-cols-2 w-full">
          <div className="p-16 bg-gradient-to-br from-blue-700 to-indigo-800 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-5xl font-black mb-6 tracking-tight">
                Keling, birga <br /> yaratamiz!
              </h2>
              <p className="text-blue-100/70 text-lg mb-12">
                O'z g'oyangizni ayting va biz uni dunyoga tanitamiz.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    📍
                  </div>
                  <p className="font-bold text-sm">
                    Toshkent, O'zbekiston, 100000
                  </p>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <p className="font-bold text-sm">hello@agency.uz</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 relative z-10">
              Agentlik Markazi &copy; 2024
            </div>
          </div>

          <div className="p-16 bg-black/40">
            <form className="space-y-8">
              <div className="group space-y-2">
                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                  To'liq ism-sharifingiz
                </label>
                <input
                  className="w-full bg-zinc-800/30 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-blue-500 focus:outline-none transition-all text-white font-medium"
                  placeholder="Ismingizni kiriting..."
                />
              </div>
              <div className="group space-y-2">
                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                  Email manzilingiz
                </label>
                <input
                  className="w-full bg-zinc-800/30 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-blue-500 focus:outline-none transition-all text-white font-medium"
                  placeholder="example@mail.com"
                />
              </div>
              <div className="group space-y-2">
                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                  Sizning xabaringiz
                </label>
                <textarea
                  className="w-full bg-zinc-800/30 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-blue-500 focus:outline-none transition-all text-white font-medium min-h-[150px] resize-none"
                  placeholder="Loyiha haqida batafsil..."
                />
              </div>
              <button className="w-full py-6 bg-white hover:bg-zinc-100 text-black font-black rounded-2xl transition-all shadow-2xl active:scale-[0.98] uppercase tracking-widest text-xs">
                Xabarni yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
