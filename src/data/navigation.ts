export interface NavSubItem {
  title: string;
  slug: string;
  isUpcoming?: boolean;
}

export interface NavItem {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  isUpcoming?: boolean;
  subItems?: NavSubItem[];
}

export interface NavGroup {
  id: string;
  title: string;
  items: NavItem[];
}

export const SIDEBAR_NAVIGATION: NavGroup[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        id: "nav-initial-setup",
        title: "Initial System Setup",
        slug: "/initial-setup",
        iconName: "Sparkles",
        subItems: [
          { title: "Company Profile & VAT TIN", slug: "/initial-setup" },
          { title: "First Administrator Account", slug: "/initial-setup" }
        ]
      },
      {
        id: "nav-auth-guide",
        title: "Login & Security Guide",
        slug: "/signin-guide",
        iconName: "KeyRound",
        subItems: [
          { title: "Portal Sign In & MFA", slug: "/signin-guide" },
          { title: "Password Recovery via Email", slug: "/signin-guide" }
        ]
      }
    ]
  },
  {
    id: "overview",
    title: "Overview",
    items: [
      {
        id: "nav-dashboard",
        title: "Dashboard",
        slug: "/dashboard",
        iconName: "LayoutDashboard",
        subItems: [
          { title: "System Overview Hub", slug: "/dashboard" },
          { title: "Quick Portal Access", slug: "/dashboard" }
        ]
      }
    ]
  },
  {
    id: "logistics-sales",
    title: "Core Logistics & Sales",
    items: [
      {
        id: "nav-field-routes",
        title: "Field & Route Operations",
        slug: "/day-to-day-routes",
        iconName: "Truck",
        subItems: [
          { title: "Daily Routes & Dispatches", slug: "/day-to-day-routes" },
          { title: "Cashier Desk Handover", slug: "/day-to-day-routes" },
          { title: "Van Loading & Manifests", slug: "/day-to-day-routes" }
        ]
      },
      {
        id: "nav-sales",
        title: "Sales & Invoicing",
        slug: "/sales",
        iconName: "Receipt",
        subItems: [
          { title: "Invoices & Billing", slug: "/sales" },
          { title: "Sales Summary Ingestion", slug: "/sales" },
          { title: "Item-Wise Billing & Reconcile", slug: "/sales" }
        ]
      },
      {
        id: "nav-outlets",
        title: "Outlets Directory",
        slug: "/outlets",
        iconName: "Store",
        subItems: [
          { title: "Outlets Directory", slug: "/outlets" },
          { title: "Add Outlet & GPS Pin", slug: "/outlets" },
          { title: "Bulk Ingestion & Ledgers", slug: "/outlets" }
        ]
      },
      {
        id: "nav-collections",
        title: "Customer Collections",
        slug: "/collections",
        iconName: "CircleDollarSign",
        subItems: [
          { title: "All Collections", slug: "/collections" },
          { title: "Cheque Management", slug: "/collections" },
          { title: "Payment Knock-Off & Advances", slug: "/collections" }
        ]
      }
    ]
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    items: [
      {
        id: "nav-inventory",
        title: "Inventory & Stock",
        slug: "/products",
        iconName: "Package",
        subItems: [
          { title: "Products Master List", slug: "/products" },
          { title: "Stock View & Valuation", slug: "/products" },
          { title: "Barcode Count & Adjustments", slug: "/products" }
        ]
      },
      {
        id: "nav-purchases",
        title: "Purchases & Returns",
        slug: "/purchases",
        iconName: "ShoppingBag",
        subItems: [
          { title: "All Purchases (PO / GRN)", slug: "/purchases" },
          { title: "Purchase Returns & Debit Notes", slug: "/purchases" },
          { title: "Damaged Stock Reconcile", slug: "/purchases" }
        ]
      },
      {
        id: "nav-suppliers",
        title: "Suppliers & Creditors",
        slug: "/suppliers",
        iconName: "Users2",
        subItems: [
          { title: "All Suppliers Directory", slug: "/suppliers" },
          { title: "Trade Creditor Sub-Ledgers", slug: "/suppliers" },
          { title: "Payment Terms & Due Dates", slug: "/suppliers" }
        ]
      }
    ]
  },
  {
    id: "finance-accounting",
    title: "Finance & Accounting",
    items: [
      {
        id: "nav-chart-accounts",
        title: "Chart of Accounts",
        slug: "/chart-of-accounts",
        iconName: "BookOpenCheck",
        subItems: [
          { title: "Accounts Master List", slug: "/chart-of-accounts" },
          { title: "Trial Balance & Reconciliation", slug: "/chart-of-accounts" },
          { title: "Balance Sheet & P&L", slug: "/chart-of-accounts" }
        ]
      },
      {
        id: "nav-expenses",
        title: "Expense Management",
        slug: "/expenses",
        iconName: "FileSpreadsheet",
        subItems: [
          { title: "All Expenses", slug: "/expenses" },
          { title: "Create Expense Voucher", slug: "/expenses" },
          { title: "Expense Categories & Cheques", slug: "/expenses" }
        ]
      },
      {
        id: "nav-fixed-assets",
        title: "Fixed Assets",
        slug: "/fixed-assets",
        iconName: "Building2",
        subItems: [
          { title: "Asset List & Custodians", slug: "/fixed-assets" },
          { title: "Asset Registration Wizard", slug: "/fixed-assets" },
          { title: "Monthly Depreciation Run", slug: "/fixed-assets" }
        ]
      },
      {
        id: "nav-reports",
        title: "All Reports Hub",
        slug: "/reports",
        iconName: "BarChart3",
        subItems: [
          { title: "All Reports Hub", slug: "/reports" },
          { title: "Sales & Debtor Aging Reports", slug: "/reports" },
          { title: "PDF & Excel Exporters", slug: "/reports" }
        ]
      }
    ]
  },
  {
    id: "human-resources",
    title: "Human Resources",
    items: [
      {
        id: "nav-employees",
        title: "Employees & Onboarding",
        slug: "/add-employee",
        iconName: "UserCheck",
        subItems: [
          { title: "Employee Profiles Directory", slug: "/add-employee" },
          { title: "Add New Employee Wizard", slug: "/add-employee" },
          { title: "Documents & Statutory Bank Info", slug: "/add-employee" }
        ]
      },
      {
        id: "nav-attendance",
        title: "Attendance & Biometrics",
        slug: "/attendance",
        iconName: "Fingerprint",
        subItems: [
          { title: "Daily Attendance Log", slug: "/attendance" },
          { title: "Biometric Fingerprint Import", slug: "/attendance" },
          { title: "Late Arrivals & Overtime Review", slug: "/attendance" }
        ]
      },
      {
        id: "nav-hr-mgmt",
        title: "HR Management & Payroll",
        slug: "/payroll",
        iconName: "Coins",
        subItems: [
          { title: "Monthly Staff Payroll", slug: "/payroll" },
          { title: "Leave Management & Approvals", slug: "/leaves" },
          { title: "Employee Loans & Advances", slug: "/payroll" },
          { title: "Bank of Ceylon (BOC) PRN Export", slug: "/boc-prn-generation" }
        ]
      }
    ]
  },
  {
    id: "fleet-operations",
    title: "Fleet Operations",
    items: [
      {
        id: "nav-vehicles",
        title: "Vehicles & Fleet",
        slug: "/vehicles",
        iconName: "CarFront",
        subItems: [
          { title: "Vehicle Master Registry", slug: "/vehicles" },
          { title: "Maintenance & Garage Servicing", slug: "/vehicles" },
          { title: "Fuel Records & Odometer Logs", slug: "/vehicles" },
          { title: "Driver Payroll & Delivery Commissions", slug: "/vehicles" }
        ]
      }
    ]
  },
  {
    id: "settings-admin",
    title: "Settings & Administration",
    items: [
      {
        id: "nav-user-roles",
        title: "User Roles & Permissions",
        slug: "/user-roles",
        iconName: "ShieldCheck",
        subItems: [
          { title: "User Roles & Permission Matrix", slug: "/user-roles" },
          { title: "Access Delegation & Security", slug: "/user-roles" }
        ]
      },
      {
        id: "nav-notifications",
        title: "SMS & Email Dispatch",
        slug: "/notifications",
        iconName: "BellRing",
        subItems: [
          { title: "Notification Center", slug: "/notifications" },
          { title: "Bulk SMS Customer Broadcasts", slug: "/notifications" },
          { title: "Corporate Email Dispatch", slug: "/notifications" }
        ]
      },
      {
        id: "nav-backup",
        title: "System Settings & Backup",
        slug: "/backup",
        iconName: "DatabaseBackup",
        subItems: [
          { title: "Database Backup & Safety Archive", slug: "/backup" },
          { title: "Cloud Archive Management", slug: "/backup" }
        ]
      }
    ]
  }
];
