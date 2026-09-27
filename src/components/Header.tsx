import React from 'react';
import { 
  ExternalLink, 
  Printer, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Search,
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
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-hidden backdrop-blur-md bg-white/95 dark:bg-[#0b1120]/95 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors no-print">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side: Mobile Hamburger + Brand Logo & Title */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="lg:hidden p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a 
            href="#/dashboard" 
            className="flex items-center gap-2 group focus:outline-none min-w-0"
            title="Cinaway ERP SOP Portal Home"
          >
            {/* Cinaway Stylized Logistics Logo */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base md:text-lg text-slate-900 dark:text-white tracking-tight truncate">
                  Cinaway<span className="text-emerald-500">.</span>ERP
                </span>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-700/40 shrink-0">
                  SOP Manual
                </span>
              </div>
              <span className="hidden md:block text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                SOP Documentation Portal
              </span>
            </div>
          </a>
        </div>

        {/* Center: Search Bar filtering modules (Desktop only) */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-3 lg:mx-4">
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

        {/* Right Side: Search, Dual Print, Theme, and Portal Login */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Mobile Search Icon Trigger */}
          <button
            type="button"
            onClick={onOpenGlobalSearch}
            className="md:hidden p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title="Search SOP modules"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Dual Print Action 1: Print Current SOP (Desktop wide screens only) */}
          {!isDashboard && (
            <button
              type="button"
              onClick={onPrintCurrent}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
              title="Print active SOP guide to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Print Current SOP</span>
            </button>
          )}

          {/* Dual Print Action 2: Download Full PDF (Tablet/Desktop only) */}
          <button
            type="button"
            onClick={onPrintAll}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/70 dark:hover:bg-emerald-900/70 rounded-lg border border-emerald-300/60 dark:border-emerald-700/60 transition-colors"
            title="Compile all 22 procedures into a single printable PDF manual"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Download Full PDF</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Primary Action Button: Portal Login (Compact on mobile, full on desktop) */}
          <a
            href="https://cinawaylogistics.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg sm:rounded-xl shadow-xs hover:shadow-md transition-all shrink-0"
            title="Open Live Production Cinaway ERP in new tab"
          >
            <span className="md:hidden">Login</span>
            <span className="hidden md:inline">Portal Login</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

        </div>

      </div>
    </header>
  );
};
