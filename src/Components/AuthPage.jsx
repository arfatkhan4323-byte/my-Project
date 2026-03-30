import React, { useState, useEffect } from 'react';
import LoginCard from './LoginCard';
import SignupCard from './SignupCard';
import { Sun, Moon } from 'lucide-react';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // THEME TOGGLE LOGIC
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen w-full flex bg-gray-50 dark:bg-[#060D1E] transition-all duration-500">
      
      {/* LEFT: Kitchen Image */}
      <div className="hidden lg:flex lg:w-[95%] p-6">
        <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2
         border-slate-200 dark:border-slate-800 shadow-2xl transition-all">
          <img 
            src="/bg.jpg" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Kitchen"
          />
          {/* Overlay color changes based on theme */}
          <div className="absolute inset-0 bg-black/10 dark:bg-black/40 transition-colors"></div>
        </div>
      </div>

      {/* RIGHT: Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
        
        {/* TOP RIGHT THEME BUTTON */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="absolute top-8 right-8 p-4 bg-white dark:bg-slate-800 
          shadow-2xl rounded-2xl border border-gray-100 dark:border-slate-700 
          z-50 transition-all hover:scale-110 active:rotate-12"
        >
          {isDark ? (
            <Sun className="text-yellow-400 w-6 h-6" />
          ) : (
            <Moon className="text-indigo-600 w-6 h-6" />
          )}
        </button>

        <div className="w-full flex justify-center">
          {isLogin ? (
            <LoginCard onSwitch={() => setIsLogin(false)} />
          ) : (
            <SignupCard onSwitch={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;