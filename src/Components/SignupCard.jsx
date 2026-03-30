import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';

const SignupCard = ({ onSwitch }) => {
  return (
    <div className="w-full max-w-lg bg-white dark:bg-[#0B1120] p-10 rounded-[2.5rem] 
    shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-500">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Sign Up</h2>
        <p className="text-slate-500 dark:text-slate-400">
          Enter your details to create an account and choose a plan!
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Name Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
              First Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter your first name" 
              className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800
               bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter your last name" 
              className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800
               bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none 
               focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
            Email <span className="text-red-500">*</span>
          </label>
          <input 
            type="email" 
            placeholder="arfatkhan4323@gmail.com" 
            className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800
             bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none 
             focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="••••••••••••" 
              className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800
               bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none 
               focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 
            cursor-pointer hover:text-indigo-500 transition-colors" />
          </div>
        </div>

        {/* Terms & Privacy Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <div className="flex items-center h-5 mt-1">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-indigo-600
               focus:ring-indigo-500 bg-slate-50 dark:bg-slate-900 cursor-pointer"
            />
          </div>
          <label htmlFor="terms" className="text-sm text-slate-500 dark:text-slate-400 leading-tight">
            By creating an account means you agree to the {" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold cursor-pointer hover:underline">
              Terms and Conditions
            </span>
            , and our {" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </label>
        </div>

        {/* Action Button */}
        <button className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-4 mt-4 
        rounded-xl font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all 
        flex items-center justify-center gap-2 group shadow-lg shadow-indigo-200 dark:shadow-none">
          Continue — Choose Plan <ArrowRight size={20} />
          
        </button>
      </form>

      {/* Footer Link */}
      <p className="mt-8 text-center text-slate-500 dark:text-slate-400">
        Already have an account?{" "}
        <span 
          onClick={onSwitch} 
          className="text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupCard;