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
  Layers,
  HelpCircle,
  AlertTriangle,
  ClipboardList,
  ListOrdered
} from 'lucide-react';

interface SopReaderProps {
  module: SopModule;
  onNavigate: (slug: string) => void;
  onPrintCurrent: () => void;
  onPrintAll: () => void;
}

export const SopReader: React.FC<SopReaderProps> = ({
  module,
  onNavigate,
  onPrintCurrent,
  onPrintAll
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [iframeLoading, setIframeLoading] = useState(true);

  // Reset checked steps and loading on module switch
  useEffect(() => {
    setCheckedSteps({});
    setIframeLoading(true);
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
    <article className="sop-module-section space-y-8 animate-fadeIn">
      
      {/* ===================================================================
          1. HEADER & METADATA AREA
          =================================================================== */}
      <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        
        {/* Decorative Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-colors"
                title="Print only this SOP"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Print This SOP</span>
              </button>
            </div>
          </div>

          {/* SOP Main Title */}
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {module.title}
            </h1>
            <div className="mt-1 flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500">
              <span>ERP Path:</span>
              <code className="text-emerald-600 dark:text-emerald-400 font-semibold">{module.slug}</code>
            </div>
          </div>

          {/* Roles Responsible */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Assigned Job Roles:
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
          SECTION 1: "What is this module for?" (Simple 2-sentence explanation)
          =================================================================== */}
      <section className="p-5 sm:p-6 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/25 border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 font-display">
              1. What is this module for?
            </h2>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
              {module.whatIsThisFor}
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 2: "Before you start" (Checklist of things needed)
          =================================================================== */}
      <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <ClipboardList className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            2. Before you start (Checklist)
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Make sure you have the following information and documents ready before opening this screen:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {module.beforeYouStart.map((item, idx) => (
            <li 
              key={idx} 
              className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===================================================================
          SECTION 3: "Step-by-Step Instructions" (Numbered, clear, no complex jargon)
          =================================================================== */}
      <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              3. Step-by-Step Instructions
            </h2>
          </div>
          <span className="text-xs text-slate-400 no-print">
            Click step to check off
          </span>
        </div>

        <div className="space-y-3">
          {module.stepByStepInstructions.map((step, idx) => {
            const isChecked = !!checkedSteps[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isChecked
                    ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-100/60 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    {idx + 1}
                  </span>
                </div>

                <div className="flex-1 text-xs sm:text-sm">
                  <p className={`leading-relaxed ${isChecked ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-100 font-medium'}`}>
                    {step}
                  </p>
                </div>

                <div className="no-print">
                  <button
                    type="button"
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 text-white'
                        : 'border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================================
          SECTION 4: "Common Mistakes & Quick Fixes" (Troubleshooting table)
          =================================================================== */}
      <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            4. Common Mistakes & Quick Fixes (Troubleshooting)
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="p-3.5 border-b border-r border-slate-200 dark:border-slate-800 w-1/3">
                  What Went Wrong? (Mistake)
                </th>
                <th className="p-3.5 border-b border-r border-slate-200 dark:border-slate-800 w-1/3">
                  Why Did It Happen? (Cause)
                </th>
                <th className="p-3.5 border-b border-slate-200 dark:border-slate-800 w-1/3 text-emerald-700 dark:text-emerald-400">
                  How to Fix It Quickly (Fix)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {module.commonMistakes.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                  <td className="p-3.5 font-semibold text-rose-900 dark:text-rose-300 border-r border-slate-200 dark:border-slate-800 bg-rose-50/30 dark:bg-rose-950/10">
                    {item.mistake}
                  </td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800">
                    {item.cause}
                  </td>
                  <td className="p-3.5 font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50/30 dark:bg-emerald-950/10">
                    {item.quickFix}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================================================================
          5. INTERACTIVE SCRIBE VIEWER (ON SCREEN) & CLEAN PRINT CARD (ON PRINT)
          =================================================================== */}
      <section className="space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Visual Step-by-Step Screen Walkthrough
            </h2>
          </div>

          {module.embedUrl && (
            <a
              href={module.viewerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Open Fullscreen Scribe</span>
            </a>
          )}
        </div>

        {/* Fallback for Upcoming Scribes */}
        {module.status === 'upcoming' || !module.embedUrl ? (
          <UpcomingPlaceholder module={module} />
        ) : (
          <>
            {/* Interactive Viewer for Screen */}
            <div className="scribe-container no-print w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner bg-slate-100 dark:bg-slate-950 relative min-h-[640px]">
              {iframeLoading && (
                <div className="absolute inset-0 z-10 bg-slate-50/90 dark:bg-slate-900/90 flex flex-col items-center justify-center gap-3">
                  <div className="w-8 h-8 rounded-full border-3 border-emerald-500 border-t-transparent animate-spin" />
                  <span className="text-xs font-medium text-slate-500">Loading interactive Scribe guide...</span>
                </div>
              )}
              <iframe 
                src={module.embedUrl} 
                title={module.title}
                width="100%" 
                height="750" 
                allow="fullscreen" 
                onLoad={() => setIframeLoading(false)}
                style={{ border: 0, minHeight: "640px" }}
                className="w-full min-h-[640px] sm:min-h-[720px] border-0"
              />
            </div>

            {/* Clean Printable Fallback for PDF */}
            <div className="print-only hidden p-4 border border-dashed border-slate-400 rounded-lg bg-slate-50 my-4">
              <p className="font-semibold text-sm text-slate-800">Online Interactive Guide:</p>
              <a href={module.viewerUrl} className="text-blue-600 underline text-xs break-all">
                {module.viewerUrl}
              </a>
              <p className="text-[11px] text-slate-500 mt-2">
                Scan or visit the link above in any web browser to view the animated click-by-click screenshots and live ERP simulations.
              </p>
            </div>
          </>
        )}

      </section>

      {/* ===================================================================
          6. PREVIOUS / NEXT GUIDE NAVIGATION (SCREEN ONLY)
          =================================================================== */}
      <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 no-print" aria-label="SOP Pagination">
        
        {prevModule ? (
          <button
            type="button"
            onClick={() => onNavigate(prevModule.slug)}
            className="w-full sm:w-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-xs text-left transition-all group"
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
            className="w-full sm:w-auto flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-xs text-right transition-all group ml-auto"
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

    </article>
  );
};
