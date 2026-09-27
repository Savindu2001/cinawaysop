import React, { useState, useEffect } from 'react';
import { SopModule, SOP_REGISTRY } from '../data/sopRegistry';
import { UpcomingPlaceholder } from './UpcomingPlaceholder';
import { 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Copy, 
  Check, 
  Printer, 
  Sparkles, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  Maximize2,
  BookOpen,
  Info,
  Calendar,
  Layers
} from 'lucide-react';

interface SopReaderProps {
  module: SopModule;
  onNavigate: (slug: string) => void;
  onPrintCurrent: () => void;
}

export const SopReader: React.FC<SopReaderProps> = ({
  module,
  onNavigate,
  onPrintCurrent
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [iframeLoading, setIframeLoading] = useState(true);

  // Reset checked steps and loading on module switch
  useEffect(() => {
    setCheckedSteps({});
    setIframeLoading(true);
    // Scroll content to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [module.slug]);

  const toggleCheck = (idx: number) => {
    setCheckedSteps(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${window.location.pathname}#${module.slug}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Find previous and next module in registry
  const currentIndex = SOP_REGISTRY.findIndex(m => m.slug === module.slug);
  const prevModule = currentIndex > 0 ? SOP_REGISTRY[currentIndex - 1] : null;
  const nextModule = currentIndex < SOP_REGISTRY.length - 1 ? SOP_REGISTRY[currentIndex + 1] : null;

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* ===================================================================
          1. HEADER & METADATA AREA
          =================================================================== */}
      <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        
        {/* Decorative Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

        <div className="flex flex-col gap-4">
          
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-emerald-100 text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60">
                {module.number}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <Layers className="w-3 h-3 mr-1 text-slate-400" />
                {module.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                ~{module.estimatedMinutes} min read
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                Audited: {module.lastAudited}
              </span>
            </div>

            {/* Quick Actions (Print, Copy Link) */}
            <div className="flex items-center gap-2 no-print">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
                title="Copy shareable link to this SOP"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copiedLink ? 'Copied Link!' : 'Share SOP'}</span>
              </button>

              <button
                type="button"
                onClick={onPrintCurrent}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
                title="Print this SOP guide"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* SOP Main Title */}
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {module.title}
            </h1>
            <div className="mt-1 flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500">
              <span>Path URL:</span>
              <code className="text-emerald-600 dark:text-emerald-400 font-semibold">{module.slug}</code>
            </div>
          </div>

          {/* Plain English Simple Summary Box */}
          <div className="mt-2 p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-800/50 flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                Simple English Summary (New Employee Guide)
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                {module.simpleSummary}
              </p>
            </div>
          </div>

          {/* Roles Responsible */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Responsible Roles:
            </span>
            {module.roles.map((role, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${role.badgeClass}`}
              >
                <ShieldCheck className="w-3 h-3 mr-1" />
                {role.name}
              </span>
            ))}
          </div>

        </div>

      </section>

      {/* ===================================================================
          2. ACTION CHECKLIST & PREREQUISITES
          =================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Interactive Action Checklist (2 cols) */}
        <section className="lg:col-span-2 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Step-by-Step Action Checklist
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Click step to mark done
            </span>
          </div>

          <div className="space-y-2.5">
            {module.actionChecklist.map((step, idx) => {
              const isChecked = !!checkedSteps[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : 'bg-slate-50/50 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-100/60 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <button
                    type="button"
                    className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 text-white'
                        : 'border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  <div className="flex-1 text-xs sm:text-sm">
                    <span className={`leading-relaxed ${isChecked ? 'line-through text-slate-400 dark:text-slate-500 font-normal' : 'text-slate-700 dark:text-slate-200 font-medium'}`}>
                      {step}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600 shrink-0">
                    Step {idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Prerequisites & Pro Tips (1 col) */}
        <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-5 flex flex-col justify-between">
          
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              Prerequisites & Tools
            </h3>

            {module.prerequisites && module.prerequisites.length > 0 ? (
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {module.prerequisites.map((req, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-slate-400">Standard ERP user credentials required.</p>
            )}

            {module.keyTips && module.keyTips.length > 0 && (
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Important Operational Tip:</span>
                </div>
                <p className="text-xs text-amber-900/90 dark:text-amber-200 leading-relaxed">
                  {module.keyTips[0]}
                </p>
              </div>
            )}
          </div>

          {/* Quick link to live system */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href="https://cinawaylogistics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 rounded-xl transition-colors"
            >
              <span>Practice in Live ERP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </section>

      </div>

      {/* ===================================================================
          3. EMBEDDED SCRIBE READER OR UPCOMING PLACEHOLDER
          =================================================================== */}
      <section className="space-y-3">
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Interactive Visual Walkthrough
            </h2>
          </div>

          {module.embedUrl && (
            <div className="flex items-center gap-2 text-xs no-print">
              <a
                href={module.embedUrl.replace('?as=scrollable', '')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Open Fullscreen in Scribe</span>
              </a>
            </div>
          )}
        </div>

        {module.status === 'upcoming' || !module.embedUrl ? (
          <UpcomingPlaceholder module={module} />
        ) : (
          <div className="relative bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md">
            
            {/* Loading Indicator */}
            {iframeLoading && (
              <div className="absolute inset-0 z-10 bg-slate-50/90 dark:bg-slate-900/90 flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full border-3 border-emerald-500 border-t-transparent animate-spin" />
                <span className="text-xs font-medium text-slate-500">Loading interactive Scribe guide...</span>
              </div>
            )}

            {/* Scribe Embedded Iframe (Min height 640px required by prompt) */}
            <div className="w-full relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] bg-slate-100 dark:bg-slate-950">
              <iframe
                src={module.embedUrl}
                title={module.title}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIframeLoading(false)}
                className="w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] border-0 rounded-2xl"
              />
            </div>

          </div>
        )}

      </section>

      {/* ===================================================================
          4. PREVIOUS / NEXT GUIDE NAVIGATION
          =================================================================== */}
      <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 no-print" aria-label="SOP Pagination">
        
        {prevModule ? (
          <button
            type="button"
            onClick={() => onNavigate(prevModule.slug)}
            className="w-full sm:w-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-xs hover:shadow-sm text-left transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:-translate-x-1 transition-all shrink-0" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Previous SOP ({prevModule.number})
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                {prevModule.title}
              </span>
            </div>
          </button>
        ) : <div />}

        {nextModule && (
          <button
            type="button"
            onClick={() => onNavigate(nextModule.slug)}
            className="w-full sm:w-auto flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-xs hover:shadow-sm text-right transition-all group ml-auto"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Next SOP ({nextModule.number})
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                {nextModule.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all shrink-0" />
          </button>
        )}

      </nav>

    </div>
  );
};
