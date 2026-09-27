import React from 'react';
import { SOP_REGISTRY } from '../data/sopRegistry';

export const PrintAllView: React.FC = () => {
  return (
    <div className="print-only-container hidden print:block text-slate-900 bg-white">
      
      {/* ===================================================================
          1. FORMAL COVER PAGE
          =================================================================== */}
      <div className="sop-module-section min-h-[92vh] flex flex-col justify-between py-12 px-8 border-b-2 border-slate-300">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                CINAWAY LOGISTICS ERP
              </h1>
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Standard Operating Procedures Manual
              </span>
            </div>
          </div>

          <div className="mt-20 space-y-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
              Official Corporate Operations Manual
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Complete Standard Operating Procedures (SOP)
            </h2>
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              Complete operational instruction manual covering Field Logistics, Route Settlement, Cashier Desks, Inventory Management, Staff Payroll, Fleet Maintenance, and System Administration.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-6 grid grid-cols-2 gap-4 text-xs text-slate-600">
          <div>
            <span className="font-bold block text-slate-800">Operating Company:</span>
            <span>Cinaway Logistics (Pvt) Ltd</span>
          </div>
          <div>
            <span className="font-bold block text-slate-800">Verification Status:</span>
            <span>Audited & Approved — September 2026</span>
          </div>
          <div>
            <span className="font-bold block text-slate-800">Classification:</span>
            <span>Company Operational Manual (Level 2 Confidential)</span>
          </div>
          <div>
            <span className="font-bold block text-slate-800">Digital Portal URL:</span>
            <span>https://sop.cinawaylogistics.com</span>
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. TABLE OF CONTENTS
          =================================================================== */}
      <div className="sop-module-section py-10 px-8">
        <h2 className="text-2xl font-bold pb-4 border-b border-slate-300 text-slate-900">
          Table of Contents (All 22 Procedures)
        </h2>
        <div className="mt-6 space-y-2.5">
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
          3. FULL PROCEDURES BODY (ONE DEDICATED SECTION PER MODULE)
          =================================================================== */}
      {SOP_REGISTRY.map((sop, idx) => (
        <article key={sop.id} className="sop-module-section py-8 px-8 space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-emerald-600 pb-3">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-mono font-bold bg-slate-100 px-2.5 py-0.5 rounded text-slate-700">
                {sop.number}
              </span>
              <span className="font-medium text-slate-500">
                Cinaway ERP SOP Manual • {sop.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {sop.title}
            </h2>
            <div className="mt-1 text-xs font-mono text-emerald-700">
              System Path: {sop.slug}
            </div>
          </div>

          {/* 1. What is this module for? */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
              1. What is this module for?
            </span>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              {sop.whatIsThisFor}
            </p>
          </div>

          {/* 2. Before you start */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
              2. Before you start (Checklist):
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700">
              {sop.beforeYouStart.map((item, bIdx) => (
                <li key={bIdx} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Step-by-Step Instructions */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
              3. Step-by-Step Instructions:
            </span>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
              {sop.stepByStepInstructions.map((step, sIdx) => (
                <li key={sIdx}>{step}</li>
              ))}
            </ol>
          </div>

          {/* 4. Common Mistakes & Quick Fixes (Troubleshooting table) */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
              4. Common Mistakes & Quick Fixes (Troubleshooting):
            </span>
            <table className="w-full text-left text-xs border border-slate-300 rounded overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-2.5 border-b border-r border-slate-300 w-1/3">What Went Wrong?</th>
                  <th className="p-2.5 border-b border-r border-slate-300 w-1/3">Why Did It Happen?</th>
                  <th className="p-2.5 border-b border-slate-300 w-1/3">Quick Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {sop.commonMistakes.map((m, mIdx) => (
                  <tr key={mIdx}>
                    <td className="p-2.5 font-semibold text-rose-900 border-r border-slate-200 bg-rose-50/20">{m.mistake}</td>
                    <td className="p-2.5 text-slate-700 border-r border-slate-200">{m.cause}</td>
                    <td className="p-2.5 font-medium text-emerald-900 bg-emerald-50/20">{m.quickFix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Clean Printable Fallback for PDF */}
          <div className="p-3.5 border border-dashed border-slate-400 rounded-lg bg-slate-50 my-2">
            <p className="font-semibold text-xs text-slate-800">Interactive Scribe Guide Available Online:</p>
            <a href={sop.viewerUrl} className="text-blue-600 underline text-xs break-all">
              {sop.viewerUrl}
            </a>
          </div>

          {/* Footer note */}
          <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-400 flex items-center justify-between">
            <span>Cinaway Logistics ERP • sop.cinawaylogistics.com</span>
            <span className="font-mono">Module {idx + 1} of {SOP_REGISTRY.length}</span>
          </div>

        </article>
      ))}

    </div>
  );
};
