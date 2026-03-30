import React from 'react';
import { Eye, LogIn } from 'lucide-react';

const LoginCard = ({ onSwitch }) => {
  return (
    <div className="w-full max-w-md bg-[#0B1120]/90 p-8 rounded-[2.5rem] 
    shadow-2xl border border-slate-800 backdrop-blur-sm">
      <div className="mb-10 text-center lg:text-left">
        <div className="flex items-center gap-1 mb-8 justify-center lg:justify-start">
          <span className="text-3xl font-black italic text-white">Platter</span>
          <span className="text-3xl font-black bg-red-500 text-white px-2 py-0.5 rounded-lg ml-1">OS</span>
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-2">Login</h2>
        <p className="text-slate-500">Enter your email and password to Login!</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Email Address *</label>
          <input type="email" placeholder="admin@example.com" className="w-full px-6 py-4 rounded-2xl 
          border-2 border-slate-800 bg-[#111827] text-white focus:border-indigo-500 outline-none transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Password *</label>
          <div className="relative">
            <input type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl 
            border-2 border-slate-800 bg-[#111827] text-white focus:border-indigo-500 outline-none transition-all" />
            <Eye className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-sm text-slate-500 hover:text-indigo-400">Forgot password?</button>
        </div>
        <button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-4 
        rounded-2xl shadow-xl flex items-center justify-center gap-3">
          <LogIn size={20} /> Sign In
        </button>
      </form>
      <p className="text-center text-slate-500 mt-10">
        Don't have an account? 
        <span onClick={onSwitch} 
        className="text-indigo-400 font-bold cursor-pointer hover:underline">
          Sign Up
          </span>
      </p>
    </div>
  );
};

export default LoginCard;