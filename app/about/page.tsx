import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-44 px-6 max-w-7xl mx-auto animate-in fade-in duration-1000">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-7xl font-black mb-10 tracking-tighter leading-none">
            BIZ KIMMZ <br /> VA NIMA <br /> QILAMIZ?
          </h2>
          <div className="space-y-8 text-zinc-500 text-lg leading-relaxed">
            <p>
              Biz 2024-yilda tashkil etilgan raqamli agentlikmiz. Bizning asosiy
              maqsadimiz - mijozlarimizga nafaqat texnik yechimlar, balki
              haqiqiy qiymat va o'sish olib keladigan mahsulotlarni yetkazib
              berish.
            </p>
            <p>
              Har bir loyiha biz uchun individual san'at asari. Biz dizayn va
              kodlashni bir butunlikda ko'ramiz.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10">
            <div className="group p-8 bg-zinc-900/40 border border-zinc-800 rounded-[2rem] hover:border-indigo-500/30 transition-all">
              <h4 className="text-5xl font-black text-white group-hover:text-indigo-400 transition-colors">
                150+
              </h4>
              <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest mt-3">
                Muvaffaqiyatli loyiha
              </p>
            </div>
            <div className="group p-8 bg-zinc-900/40 border border-zinc-800 rounded-[2rem] hover:border-blue-500/30 transition-all">
              <h4 className="text-5xl font-black text-white group-hover:text-blue-400 transition-colors">
                12+
              </h4>
              <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest mt-3">
                Sohada tajriba
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative z-10 rounded-[4rem] overflow-hidden border border-zinc-800 shadow-[0_40px_100px_rgba(0,0,0,0.8)] aspect-square transform rotate-2 hover:rotate-0 transition-transform duration-1000">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
              alt="Team Work"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 animate-pulse" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-600/20 blur-[100px] -z-10 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default About;
