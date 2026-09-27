import React, { useState } from 'react';
import { SopModule } from '../data/sopRegistry';
import { 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Mail, 
  Bell, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface UpcomingPlaceholderProps {
  module: SopModule;
}

export const UpcomingPlaceholder: React.FC<UpcomingPlaceholderProps> = ({ module }) => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-amber-200/80 dark:border-amber-800/50 p-6 sm:p-10 shadow-sm relative overflow-hidden">
      
      {/* Amber Decorative Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500" />

      <div className="flex flex-col md:flex-row md:items-start gap-6">
        
        {/* Status Icon */}
        <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 shadow-sm">
          <Clock className="w-7 h-7 animate-pulse" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
              Interactive Guide Updating Soon
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              {module.number}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
            {module.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The interactive step-by-step Scribe walkthrough for <strong className="text-slate-900 dark:text-white">{module.title}</strong> is currently being finalized with the internal finance & audit committee. In the meantime, please refer to the operational action checklist below or reach out to the assigned department supervisor.
          </p>

          {/* Action Points Preview */}
          <div className="bg-amber-50/50 dark:bg-amber-950/20 rounded-xl p-4 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              Standard Procedures Covered in this Module:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
              {module.actionChecklist.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-amber-200 dark:bg-amber-900/80 text-amber-800 dark:text-amber-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Immediate Assistance & Notification */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Need immediate assistance? Contact IT Operations or Finance Lead.</span>
            </div>

            <button
              type="button"
              onClick={() => setSubscribed(true)}
              disabled={subscribed}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                subscribed 
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
                  : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 shadow-sm'
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{subscribed ? 'Subscribed to Updates!' : 'Notify me when live'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
