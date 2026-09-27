import React from 'react';
import { SOP_REGISTRY } from '../data/sopRegistry';

export const PrintAllView: React.FC = () => {
  return (
    <div className="print-only-container hidden print:block text-slate-900 bg-white">
      
      {/* ===================================================================
          1. FORMAL COVER PAGE
          =================================================================== */}
      <div className="sop-section-page min-h-[90vh] flex flex-col justify-between py-12 px-8 border-b-2 border-slate-300">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                CINAWAY LOGISTICS ERP
              </h1>
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Enterprise Operations & Documentation
              </span>
            </div>
          </div>

          <div className="mt-20 space-y-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
              Official Company Manual
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Standard Operating Procedures (SOP) Manual
            </h2>
            <p className="text-base text-slate-600 max-w-xl">
              Complete operational guide covering Route Logistics, Cashier Settlement, Inventory Ingestion, Fixed Assets, Staff Payroll, and System Administration.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-6 grid grid-cols-2 gap-4 text-xs text-slate-600">
          <div>
            <span className="font-bold block text-slate-800">Published Entity:</span>
            <span>Cinaway Logistics (Pvt) Ltd</span>
          </div>
          <div>
            <span className="font-bold block text-slate-800">Verification Status:</span>
            <span>Audited & Approved - September 2026</span>
          </div>
          <div>
            <span className="font-bold block text-slate-800">Document Classification:</span>
            <span>Internal Operational Handbook (Level 2 Confidential)</span>
          </div>
          <div>
            <span className="font-bold block text-slate-800">Portal Endpoint:</span>
            <span>https://cinawaylogistics.com (sop.cinaway)</span>
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. TABLE OF CONTENTS
          =================================================================== */}
      <div className="sop-section-page py-10 px-8">
        <h2 className="text-2xl font-bold pb-4 border-b border-slate-300 text-slate-900">
          Table of Contents
        </h2>
        <div className="mt-6 space-y-3">
          {SOP_REGISTRY.map((sop, idx) => (
            <div key={sop.id} className="flex items-center justify-between text-xs py-1.5 border-b border-dotted border-slate-200">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-slate-500 w-24">
                  {sop.number}
                </span>
                <span className="font-semibold text-slate-800">
                  {sop.title}
                </span>
              </div>
              <span className="text-slate-500 font-mono text-[11px]">
                {sop.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ===================================================================
          3. PROCEDURES BODY (ONE PAGE PER SOP)
          =================================================================== */}
      {SOP_REGISTRY.map((sop, idx) => (
        <article key={sop.id} className="sop-section-page py-10 px-8 space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-emerald-600 pb-4">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                {sop.number}
              </span>
              <span className="font-medium text-slate-500">
                Cinaway ERP SOP Manual • {sop.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {sop.title}
            </h2>
            <div className="mt-2 text-xs font-mono text-emerald-700">
              Direct System Slug: {sop.slug}
            </div>
          </div>

          {/* Simple English Summary */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
              Plain English Summary (New Employee Standard)
            </span>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {sop.simpleSummary}
            </p>
          </div>

          {/* Responsible Roles & Metadata */}
          <div className="grid grid-cols-2 gap-4 text-xs p-3 border border-slate-200 rounded-lg">
            <div>
              <span className="font-bold text-slate-600 block mb-1">Responsible Roles:</span>
              <div className="flex flex-wrap gap-1">
                {sop.roles.map((r, rIdx) => (
                  <span key={rIdx} className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-[10px] font-semibold">
                    {r.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-600 block mb-1">Audit Status:</span>
              <span className="text-slate-700 font-medium">Verified • Last Audited {sop.lastAudited}</span>
            </div>
          </div>

          {/* Step-by-Step Detailed Guide */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Standard Operating Execution Sequence:
            </h3>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
              {sop.detailedGuide.map((step, sIdx) => (
                <li key={sIdx}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Action Checklist */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Required Compliance Action Checklist:
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {sop.actionChecklist.map((check, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2">
                  <span className="w-3.5 h-3.5 border border-slate-400 rounded shrink-0 mt-0.5" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Walkthrough Link Note */}
          <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Online Interactive Scribe Guide Available at: sop.cinaway#{sop.slug}</span>
            <span className="font-mono">Page {idx + 3} of {SOP_REGISTRY.length + 2}</span>
          </div>

        </article>
      ))}

    </div>
  );
};
