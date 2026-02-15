"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function LoginPage() {
  const loginWithGithub = () =>
    signIn("github", { callbackUrl: "/", redirect: true });
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: "/", redirect: true });
  const loginWithLinkedin = () =>
    signIn("linkedin", { callbackUrl: "/", redirect: true });
  const loginWithDropbox = () =>
    signIn("dropbox", { callbackUrl: "/", redirect: true });

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative bg-black font-sans selection:bg-blue-500/30 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-slow" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="w-full max-w-[460px] relative z-10">
        <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-10 md:p-14 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative group overflow-hidden animate-in zoom-in duration-1000">
          {/* Decorative Glow Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-600/20 -rotate-6 group-hover:rotate-0 transition-all duration-700">
              <span className="text-3xl italic font-black text-white">A</span>
            </div>
            <h1 className="text-3xl font-black tracking-tighter mb-3 uppercase italic text-white">
              Xush Kelibsiz
            </h1>
            <p className="text-zinc-500 text-sm font-medium tracking-tight">
              Xavfsiz ulanish uchun provayderni tanlang
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Google */}
            <button
              onClick={loginWithGoogle}
              className="w-full group flex items-center justify-between px-8 py-4 bg-white text-black rounded-3xl font-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
            >
              <div className="flex items-center gap-5">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="google"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase">
                  Google orqali
                </span>
              </div>
              <svg
                className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5-5 5"
                />
              </svg>
            </button>

            {/* GitHub */}
            <button
              onClick={loginWithGithub}
              className="w-full group flex items-center justify-between px-8 py-4 bg-zinc-800 text-white rounded-3xl font-black hover:bg-zinc-750 transition-all active:scale-95 border border-white/5"
            >
              <div className="flex items-center gap-5">
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  className="w-5 h-5 invert"
                  alt="github"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase">
                  GitHub orqali
                </span>
              </div>
              <svg
                className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5-5 5"
                />
              </svg>
            </button>

            {/* LinkedIn */}
            <button
              onClick={loginWithLinkedin}
              className="w-full group flex items-center justify-between px-8 py-4 bg-[#0077b5] text-white rounded-3xl font-black hover:bg-[#006da5] transition-all active:scale-95"
            >
              <div className="flex items-center gap-5">
                <img
                  src="https://www.svgrepo.com/show/448234/linkedin.svg"
                  className="w-5 h-5 invert"
                  alt="linkedin"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase">
                  LinkedIn orqali
                </span>
              </div>
              <svg
                className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5-5 5"
                />
              </svg>
            </button>

            {/* Dropbox */}
            <button
              onClick={loginWithDropbox}
              className="w-full group flex items-center justify-between px-8 py-4 bg-[#0061ff] text-white rounded-3xl font-black hover:bg-[#0051d6] transition-all active:scale-95 shadow-lg shadow-blue-600/10"
            >
              <div className="flex items-center gap-5">
                <svg
                  className="w-5 h-5 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 1.907L12 5.954L6 10L0 5.954L6 1.907ZM18 1.907L24 5.954L18 10L12 5.954L18 1.907ZM0 14.046L6 10L12 14.046L6 18.092L0 14.046ZM12 14.046L18 10L24 14.046L18 18.092L12 14.046ZM6 19.333L12 15.287L18 19.333L12 23.379L6 19.333Z" />
                </svg>
                <span className="text-[10px] tracking-[0.2em] uppercase">
                  Dropbox orqali
                </span>
              </div>
              <svg
                className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5-5 5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-14 text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-8" />
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.5em]">
              Agency Cloud Security &copy; 2025
            </p>
          </div>
        </div>

        {/* Support Link */}
        <p className="text-center mt-10 text-zinc-500 text-xs font-medium">
          Kirishda muammomi?{" "}
          <a
            href="/contact"
            className="text-blue-500 hover:text-blue-400 font-bold transition-colors"
          >
            Yordam Markazi
          </a>
        </p>
      </div>
    </div>
  );
}
