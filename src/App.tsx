import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SopReader } from './components/SopReader';
import { DashboardView } from './components/DashboardView';
import { SearchModal } from './components/SearchModal';
import { PrintAllView } from './components/PrintAllView';
import { SOP_REGISTRY, getModuleBySlug, SopModule } from './data/sopRegistry';

export const App: React.FC = () => {
  // Dark mode initialized from localStorage or prefers-color-scheme
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('cinaway_sop_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeSlug, setActiveSlug] = useState<string>('/dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [printAllMode, setPrintAllMode] = useState(false);

  // Sync dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('cinaway_sop_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('cinaway_sop_theme', 'light');
    }
  }, [darkMode]);

  // Read URL hash or pathname on load and when route changes
  useEffect(() => {
    const resolveCurrentRoute = () => {
      // 1. Check hash first (e.g. #/expenses)
      let current = window.location.hash.replace(/^#/, '');

      // 2. If no hash, check pathname (e.g. /expenses on Netlify direct URL)
      if (!current || current === '' || current === '/') {
        const path = window.location.pathname;
        if (path && path !== '' && path !== '/' && path !== '/index.html') {
          current = path;
        }
      }

      if (!current || current === '' || current === '/' || current === '/index.html') {
        current = '/dashboard';
      }

      if (!current.startsWith('/')) {
        current = `/${current}`;
      }

      setActiveSlug(current);
    };

    resolveCurrentRoute();
    window.addEventListener('hashchange', resolveCurrentRoute);
    window.addEventListener('popstate', resolveCurrentRoute);
    return () => {
      window.removeEventListener('hashchange', resolveCurrentRoute);
      window.removeEventListener('popstate', resolveCurrentRoute);
    };
  }, []);

  // Global keyboard shortcut for search (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Router navigation helper
  const navigateTo = (slug: string) => {
    const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
    window.location.hash = cleanSlug;
    setActiveSlug(cleanSlug);
    setMobileMenuOpen(false);
  };

  // Reset print all mode after print dialog finishes
  useEffect(() => {
    const handleAfterPrint = () => {
      setPrintAllMode(false);
    };
    window.addEventListener('afterprint', handleAfterPrint);
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, []);

  const handlePrintCurrent = () => {
    setPrintAllMode(false);
    setTimeout(() => window.print(), 100);
  };

  const handlePrintAll = () => {
    setPrintAllMode(true);
    setTimeout(() => window.print(), 150);
  };

  // Resolve current active module
  const currentModule: SopModule | undefined = getModuleBySlug(activeSlug);
  const isDashboard = activeSlug === '/dashboard' || activeSlug === '/';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-150">
      
      {/* Sticky Header */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        onOpenGlobalSearch={() => setSearchModalOpen(true)}
        onPrintCurrent={handlePrintCurrent}
        onPrintAll={handlePrintAll}
        activeSlug={activeSlug}
      />

      {/* Main Body with Fixed Sidebar + Scrollable Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        
        {/* Left Navigation Sidebar */}
        <Sidebar
          activeSlug={activeSlug}
          onNavigate={navigateTo}
          mobileOpen={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Area (Margin Left on desktop for fixed sidebar; hidden during Print All) */}
        <main className={`flex-1 lg:pl-80 p-4 sm:p-6 lg:p-8 min-w-0 ${printAllMode ? 'print:hidden' : ''}`}>
          <div className="max-w-5xl mx-auto">
            {isDashboard ? (
              <DashboardView 
                onNavigate={navigateTo} 
                onOpenSearch={() => setSearchModalOpen(true)} 
              />
            ) : currentModule ? (
              <SopReader
                module={currentModule}
                onNavigate={navigateTo}
                onPrintCurrent={handlePrintCurrent}
                onPrintAll={handlePrintAll}
              />
            ) : (
              <div className="p-12 text-center bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Procedure Guide Not Found
                </h2>
                <p className="text-sm text-slate-500">
                  The requested slug <code className="text-emerald-500">{activeSlug}</code> does not match any current SOP documentation.
                </p>
                <button
                  type="button"
                  onClick={() => navigateTo('/dashboard')}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        </main>

      </div>

      {/* Quick Command Palette Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Print All Compilation (Visible ONLY during print when Print All is triggered) */}
      {printAllMode && <PrintAllView />}

    </div>
  );
};
