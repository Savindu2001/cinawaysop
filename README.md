# Cinaway ERP SOP Portal (`sop.cinaway`)

> A complete, lightweight, standalone Standard Operating Procedure (SOP) documentation portal for **Cinaway Logistics ERP**.

![Cinaway SOP Portal](https://img.shields.io/badge/Cinaway%20ERP-SOP%20Portal-10b981?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge)

---

## 🚀 Key Features

1. **Exact ERP Navigation Alignment**: Replicates the real Cinaway ERP sidebar navigation hierarchy (7 sections, 22 module procedures, collapsible groups, live search, and matching URL slugs).
2. **Plain English Explanations**: Written so new employees, field sales agents, cashiers, and storekeepers can understand workflows in seconds.
3. **Interactive Scribe Walkthroughs**: Embedded interactive Scribe tutorials (min height 640px) with fullscreen controls and direct Scribe links.
4. **Actionable Compliance Checklists**: Checkable step-by-step lists for day-to-day shift execution.
5. **Print & Clean PDF Generation**:
   - `page-break-before: always;` / `break-before: page;` for clean multi-page A4 PDF output.
   - Hides interactive UI, navigation, buttons, and headers during printing.
   - Forces background graphics with `-webkit-print-color-adjust: exact !important;`.
6. **Command Palette (`⌘K` / `Ctrl+K`)**: Instant search across titles, summaries, module codes, roles, and slugs.
7. **Direct Production ERP Access**: Sticky header with primary "Portal Login" button linking directly to [Cinaway ERP Sign In](https://cinawaylogistics.com/signin).

---

## 📋 SOP Module Registry (22 Procedures)

| # | Code | Module Title | Slug | Status |
|---|---|---|---|---|
| 01 | `SOP-LOG-01` | Daily Route Sales, Collections & Cashier Settlement | `/day-to-day-routes` | Live |
| 02 | `SOP-FIN-01` | Daily Expense Records & Bill Vouchers | `/expenses` | Live |
| 03 | `SOP-FIN-02` | Registering Office Assets & Monthly Value Drop | `/fixed-assets` | Live |
| 04 | `SOP-FIN-03` | Viewing & Exporting Business Reports | `/reports` | Live |
| 05 | `SOP-LOG-02` | Receiving Customer Payments & Settling Bills | `/collections` | Live |
| 06 | `SOP-HR-01` | Monthly Staff Salaries, Loans & Government Funds | `/payroll` | Live |
| 07 | `SOP-HR-02` | Staff Leave Requests & Manager Approval | `/leaves` | Live |
| 08 | `SOP-HR-03` | Adding New Employees & Setting Up Profiles | `/add-employee` | Live |
| 09 | `SOP-ADM-01` | User Permissions & Staff Access Rights | `/user-roles` | Live |
| 10 | `SOP-ADM-02` | System Login, Password Reset & Safe Logout | `/signin-guide` | Live |
| 11 | `SOP-FLT-01` | Company Vehicle Maintenance & Fleet Pay | `/vehicles` | Live |
| 12 | `SOP-ADM-03` | Sending SMS & Email Alerts to Customers and Staff | `/notifications` | Live |
| 13 | `SOP-LOG-03` | Registering Shops (Outlets) & Managing Shop Balances | `/outlets` | Live |
| 14 | `SOP-SCM-01` | Product Master List & Stock Updates | `/products` | Live |
| 15 | `SOP-LOG-04` | Creating Sales Invoices & Checking Warehouse Stock | `/sales` | Live |
| 16 | `SOP-ADM-04` | First-Time System Setup & Admin Profile | `/initial-setup` | Live |
| 17 | `SOP-HR-04` | Daily Staff Attendance & Biometric Fingerprint Import | `/attendance` | Live |
| 18 | `SOP-HR-05` | Creating Bank Salary Transfer (BOC PRN) Files | `/boc-prn-generation` | Live |
| 19 | `SOP-SCM-02` | Supplier Directory & Payment Terms | `/suppliers` | Live |
| 20 | `SOP-SCM-03` | Purchase Bills & Damaged Stock Returns | `/purchases` | Live |
| 21 | `SOP-FIN-01` | Managing Financial Accounts, Mappings & Bank Reconciliations | `/chart-of-accounts` | Live |
| 22 | `SOP-ADM-03` | Managing, Creating, and Deleting Cloud Database Backups | `/backup` | Live |

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Build output is saved to `./dist`.

---

## 🖨️ PDF Export Guide

1. Navigate to any procedure (e.g. `/day-to-day-routes`).
2. Click **Print SOP** in the top bar or use browser standard `Cmd+P` / `Ctrl+P`.
3. Select **Destination: Save as PDF** and **Paper Size: A4**.
4. Check **Background Graphics: Enabled** (automatically enforced via print styles).
5. Click **Save**.
