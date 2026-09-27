import React from 'react';
import { 
  ExternalLink, 
  Printer, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Search,
  BookOpen,
  FileDown
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onOpenGlobalSearch: () => void;
  onPrintCurrent: () => void;
  onPrintAll: () => void;
  activeSlug: string;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  mobileMenuOpen,
  onToggleMobileMenu,
  onOpenGlobalSearch,
  onPrintCurrent,
  onPrintAll,
  activeSlug
}) => {
  const isDashboard = activeSlug === '/dashboard' || activeSlug === '/';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-[#0b1120]/95 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left Side: Mobile toggle + Cinaway ERP Logo & Name */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a 
            href="#/dashboard" 
            className="flex items-center gap-2.5 group focus:outline-none"
            title="Cinaway ERP SOP Portal Home"
          >
            {/* Cinaway Stylized Logistics Logo */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                  Cinaway<span className="text-emerald-500">.</span>ERP
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-700/40">
                  SOP Portal
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                SOP Documentation Portal
              </span>
            </div>
          </a>
        </div>

        {/* Center: Search Bar filtering modules by name and keywords */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <button
            type="button"
            onClick={onOpenGlobalSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100/90 dark:bg-slate-800/80 hover:bg-slate-200/70 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl transition-all shadow-sm group"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <span>Search SOP modules or keywords...</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-mono text-slate-500 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded shadow-xs">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Side: Dual Print Actions, Theme, and Portal Login */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Dual Print Action 1: Print Current SOP (only when inside an SOP) */}
          {!isDashboard && (
            <button
              type="button"
              onClick={onPrintCurrent}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
              title="Print active SOP guide to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Print Current SOP</span>
            </button>
          )}

          {/* Dual Print Action 2: Download Full PDF / Print Complete SOP Manual */}
          <button
            type="button"
            onClick={onPrintAll}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/70 dark:hover:bg-emerald-900/70 rounded-lg border border-emerald-300/60 dark:border-emerald-700/60 transition-colors"
            title="Compile all 22 procedures into a single printable PDF manual"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Download Full PDF</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Primary Action Button: Portal Login */}
          <a
            href="https://cinawaylogistics.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            title="Open Live Production Cinaway ERP in new tab"
          >
            <span>Portal Login</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

        </div>

      </div>
    </header>
  );
};
