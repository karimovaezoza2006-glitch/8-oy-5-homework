"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function LoginPage() {
  // --- SIZNING ASLIY FUNKSIYALARINGIZ (O'zgartirilmadi, faqat dizayn qo'shildi) ---
  const loginWithGithub = () => {
    return signIn("github", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  const loginWithGoogle = () => {
    return signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  const loginWithLinkedin = () => {
    return signIn("linkedin", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="w-full max-w-[440px] relative z-10">
        <div className="bg-zinc-950/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Top subtle glow line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-600/20 rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-2xl italic font-black text-white">A</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight mb-3 uppercase italic">
              Xush Kelibsiz
            </h1>
            <p className="text-zinc-500 text-sm font-medium">
              Davom etish uchun tizimga kiring
            </p>
          </div>

          <div className="space-y-4">
            {/* Google Button */}
            <button
              onClick={loginWithGoogle}
              className="w-full group flex items-center justify-between px-6 py-4 bg-white text-black rounded-2xl font-black hover:scale-[1.02] transition-all active:scale-95 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="google"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
                  Google orqali
                </span>
              </div>
              <svg
                className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* GitHub Button */}
            <button
              onClick={loginWithGithub}
              className="w-full group flex items-center justify-between px-6 py-4 bg-zinc-900 border border-white/10 text-white rounded-2xl font-black hover:bg-zinc-800 transition-all active:scale-95"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  className="w-5 h-5 invert"
                  alt="github"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
                  GitHub orqali
                </span>
              </div>
              <svg
                className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* LinkedIn Button */}
            <button
              onClick={loginWithLinkedin}
              className="w-full group flex items-center justify-between px-6 py-4 bg-[#0077b5] text-white rounded-2xl font-black hover:bg-[#006da5] transition-all active:scale-95"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://www.svgrepo.com/show/448234/linkedin.svg"
                  className="w-5 h-5 invert"
                  alt="linkedin"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
                  LinkedIn orqali
                </span>
              </div>
              <svg
                className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.5em]">
              Xavfsiz va Himoyalangan
            </p>
          </div>
        </div>

        {/* Footer link in login page */}
        <p className="text-center mt-8 text-zinc-500 text-xs font-medium">
          Muammo bormi?{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            Yordam oling
          </a>
        </p>
      </div>
    </div>
  );
}
