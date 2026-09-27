import React, { useState } from 'react';
import { SOP_REGISTRY, SopModule } from '../data/sopRegistry';
import { SIDEBAR_NAVIGATION } from '../data/navigation';
import { 
  ExternalLink, 
  Search, 
  Truck, 
  Coins, 
  Users2, 
  ShieldCheck, 
  CarFront, 
  BookOpen, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Server, 
  Check, 
  Shield, 
  ArrowUpRight,
  Filter
} from 'lucide-react';

interface DashboardViewProps {
  onNavigate: (slug: string) => void;
  onOpenSearch: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate, onOpenSearch }) => {
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState('');

  // Extract unique roles across all SOPs
  const allRoles = ['All', 'Field Sales Rep', 'Cashier', 'Accountant', 'HR Manager', 'Fleet Manager', 'Storekeeper', 'System Administrator'];

  // Filter modules
  const filteredModules = SOP_REGISTRY.filter(m => {
    const matchesSearch = localSearch.trim() === '' || 
      m.title.toLowerCase().includes(localSearch.toLowerCase()) || 
      m.simpleSummary.toLowerCase().includes(localSearch.toLowerCase()) ||
      m.number.toLowerCase().includes(localSearch.toLowerCase()) ||
      m.slug.toLowerCase().includes(localSearch.toLowerCase());

    const matchesRole = selectedRoleFilter === 'All' || 
      m.roles.some(r => r.name.toLowerCase().includes(selectedRoleFilter.toLowerCase()));

    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* ===================================================================
          1. HERO BANNER & SEARCH HUB
          =================================================================== */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white p-8 sm:p-12 shadow-xl border border-slate-700/60">
        
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Cinaway Logistics ERP Documentation</span>
            <span className="text-emerald-400 font-mono">v2.4</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Standard Operating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                Procedures Manual
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Step-by-step interactive workflow guides written in simple English for all staff members, drivers, sales representatives, accountants, and administrators.
            </p>
          </div>

          {/* Quick Search within Dashboard */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search procedures by topic (e.g. Invoicing, Fuel, EPF, Scribe)..."
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/15 transition-all"
              />
            </div>
            <a
              href="https://cinawaylogistics.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Portal Login</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

        </div>

      </section>

      {/* ===================================================================
          2. KEY METRICS TILES
          =================================================================== */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        
        <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">22</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">SOP Guides</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">20</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Live Scribes</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">7</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Core Modules</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">100%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Plain English</span>
          </div>
        </div>

      </section>

      {/* ===================================================================
          3. DEDICATED PORTAL QUICK ACCESS HUB
          =================================================================== */}
      <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-500" />
              Verified Environment Access Hub
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Direct links to live enterprise logistics servers and authentication endpoints
            </p>
          </div>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All Services Operational
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* 1. Production ERP */}
          <a
            href="https://cinawaylogistics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-all flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Live Production
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                Production ERP Portal
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Primary enterprise logistics, warehouse stock, invoicing & route management system.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">
              https://cinawaylogistics.com
            </span>
          </a>

          {/* 2. Sign In Endpoint */}
          <a
            href="https://cinawaylogistics.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-all flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                  Authentication
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                Direct Portal Sign In
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Employee authentication gateway, MFA verification, and safe password recovery.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">
              https://cinawaylogistics.com/signin
            </span>
          </a>

          {/* 3. UAT Staging */}
          <a
            href="https://test.cinawaylogistics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-all flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  UAT Staging
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                Training & Test Sandbox
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Safe practice sandbox for new employees to test order entries without modifying live accounts.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">
              https://test.cinawaylogistics.com
            </span>
          </a>

        </div>
      </section>

      {/* ===================================================================
          4. FILTERABLE PROCEDURES BROWSER
          =================================================================== */}
      <section className="space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Browse SOP Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Showing {filteredModules.length} procedures matching your filter criteria
            </p>
          </div>

          {/* Role Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              Role:
            </span>
            {allRoles.map(role => (
              <button
                key={role}
                type="button"
                onClick={() => setSelectedRoleFilter(role)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all ${
                  selectedRoleFilter === role
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredModules.map(module => (
            <div
              key={module.id}
              onClick={() => onNavigate(module.slug)}
              className="group bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/80 dark:hover:border-emerald-500/80 p-5 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer relative"
            >
              
              <div className="space-y-3">
                {/* Header info */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    {module.number}
                  </span>
                  {module.status === 'upcoming' ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      Pending Link
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      ~{module.estimatedMinutes}m
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {module.title}
                </h3>

                {/* Plain English summary */}
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {module.simpleSummary}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 truncate max-w-[160px]">
                  {module.category}
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View SOP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="font-bold text-base text-slate-800 dark:text-slate-200">No procedures found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No SOP documents match your search &quot;{localSearch}&quot; with role filter &quot;{selectedRoleFilter}&quot;.
            </p>
            <button
              type="button"
              onClick={() => { setLocalSearch(''); setSelectedRoleFilter('All'); }}
              className="px-4 py-2 text-xs font-semibold text-emerald-600 hover:text-emerald-700 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

    </div>
  );
};
