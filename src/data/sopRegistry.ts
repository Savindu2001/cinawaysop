export interface SopRole {
  name: string;
  badgeClass: string;
}

export interface TroubleshootingItem {
  mistake: string;
  cause: string;
  quickFix: string;
}

export interface SopModule {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  sectionGroupId: string;
  whatIsThisFor: string; // 2 simple sentences
  beforeYouStart: string[]; // checklist of prerequisites
  stepByStepInstructions: string[]; // numbered simple steps
  commonMistakes: TroubleshootingItem[]; // troubleshooting table (min 2 items)
  embedUrl: string;
  viewerUrl: string;
  status: 'live' | 'upcoming';
  roles: SopRole[];
  estimatedMinutes: number;
  lastAudited: string;
}

export const SOP_REGISTRY: SopModule[] = [
  // =========================================================================
  // 1. GETTING STARTED (TOP PRIORITY ONBOARDING)
  // =========================================================================
  {
    id: "initial-setup",
    slug: "/initial-setup",
    number: "SOP-ONB-01",
    title: "First-Time System Setup & Admin Profile",
    category: "Getting Started",
    sectionGroupId: "getting-started",
    whatIsThisFor: "This module is used when launching the ERP for the first time. It sets up company legal name, VAT tax registration number, logo graphics, fiscal calendar year, and the master administrator account.",
    beforeYouStart: [
      "Official certificate of business registration (PV number)",
      "Inland Revenue Department VAT and TIN registration papers",
      "High-resolution transparent PNG company logo",
      "Company primary bank account details"
    ],
    stepByStepInstructions: [
      "Access the initial setup screen during software setup.",
      "Enter company corporate details: legal name, registered office address, and contact numbers.",
      "Enter official Tax Identification Number (TIN) and Value Added Tax (VAT) rate.",
      "Upload company logo for invoice headers and dispatch documents.",
      "Create the master system administrator username, strong password, and store recovery codes safely."
    ],
    commonMistakes: [
      {
        mistake: "Company logo appears distorted or blurry on printed bills",
        cause: "Uploaded low-resolution JPEG with dark background.",
        quickFix: "Upload a clean transparent PNG image sized 400x120 pixels at 300 DPI."
      },
      {
        mistake: "Fiscal year dates set incorrectly",
        cause: "Selected standard calendar year instead of company April-March financial cycle.",
        quickFix: "Correct the fiscal year start date in System Settings before finalizing any invoice or purchase entries."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Initial_System_Initialization_and_First_Administrator_Onboarding_in_Cinaway_ERP_Copy__T-kGxV7pREqdDKLU6nWSOA?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Initial_System_Initialization_and_First_Administrator_Onboarding_in_Cinaway_ERP_Copy__T-kGxV7pREqdDKLU6nWSOA",
    status: "live",
    roles: [
      { name: "Managing Director", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" },
      { name: "IT Administrator", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300" }
    ],
    estimatedMinutes: 10,
    lastAudited: "September 2026"
  },
  {
    id: "signin-guide",
    slug: "/signin-guide",
    number: "SOP-ONB-02",
    title: "System Login, Password Reset & Safe Logout",
    category: "Getting Started",
    sectionGroupId: "getting-started",
    whatIsThisFor: "This module explains how to log into the Cinaway ERP system safely, recover your password if you forget it, and log out properly. It ensures company data stays protected when computers are shared across shifts.",
    beforeYouStart: [
      "Registered company email address activated by IT",
      "Web browser (Google Chrome, Firefox, or Safari on desktop or tablet)",
      "Secure internet connection"
    ],
    stepByStepInstructions: [
      "Open your web browser and go to: https://cinawaylogistics.com/signin.",
      "Type in your registered company email address and your password.",
      "If you forget your password, click 'Forgot Password?' and check your email inbox for a password reset link.",
      "Never share your password with anyone or write it on sticky notes on warehouse computers.",
      "Always click your profile picture and select 'Sign Out' whenever stepping away from a shared workstation."
    ],
    commonMistakes: [
      {
        mistake: "Account locked after multiple incorrect password attempts",
        cause: "Entering wrong password 5 times in a row triggers automatic security protection.",
        quickFix: "Wait 15 minutes for the automated timer to reset, or contact the IT Helpdesk to unlock your account."
      },
      {
        mistake: "Password reset email does not arrive in inbox",
        cause: "Email went to Spam/Junk folder or typo was made in the email address.",
        quickFix: "Check your email spam folder for 'Cinaway Security' and confirm your exact email spelling with HR."
      }
    ],
    embedUrl: "https://scribehow.com/embed/User_Authentication_Session_Control_and_Password_Recovery_in_Cinaway_ERP__Ebt2yrKzSqGrttPTuPgZDA?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/User_Authentication_Session_Control_and_Password_Recovery_in_Cinaway_ERP__Ebt2yrKzSqGrttPTuPgZDA",
    status: "live",
    roles: [
      { name: "All ERP Users", badgeClass: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" }
    ],
    estimatedMinutes: 3,
    lastAudited: "September 2026"
  },

  // =========================================================================
  // 2. CORE LOGISTICS & SALES
  // =========================================================================
  {
    id: "route-operations",
    slug: "/day-to-day-routes",
    number: "SOP-LOG-01",
    title: "Daily Route Sales, Collections & Cashier Settlement",
    category: "Core Logistics & Sales",
    sectionGroupId: "logistics-sales",
    whatIsThisFor: "This module helps delivery teams record daily shop deliveries, collect customer cash or cheques, and settle money with the head cashier at the end of the day. It makes sure every bottle, pack, and rupee matches physical stock before leaving the office.",
    beforeYouStart: [
      "Assigned delivery route and vehicle number for the day",
      "Login credentials and active PIN for the mobile/tablet app",
      "Loaded vehicle physical inventory count signed by storekeeper",
      "Official receipt booklet and crossed stamp for cheque acceptance"
    ],
    stepByStepInstructions: [
      "Log into Cinaway ERP on your mobile phone or depot tablet at the start of your shift.",
      "Select your assigned route for today and confirm your vehicle loading manifest against physical cartons.",
      "At each retail outlet, mark products delivered, record any damaged return items, and issue the print invoice.",
      "Collect payment from the shopkeeper in cash, bank transfer slip, or crossed cheque, and enter the exact leaf number.",
      "At the end of your route, return to the main cashier desk, hand over all physical cash envelopes and cheques, and collect your signed End-of-Day Settlement slip."
    ],
    commonMistakes: [
      {
        mistake: "Cashier reports cash shortage during evening handover",
        cause: "Mixing personal cash with shop collections or forgetting to record cash discounts given to shopkeeper.",
        quickFix: "Check the 'Unsettled Bills' tab in your app to recount outlet payments before signing the physical handover sheet."
      },
      {
        mistake: "Cheque rejected due to incorrect payee name",
        cause: "Customer wrote their own business name or made a spelling mistake on the payee line.",
        quickFix: "Always ensure cheques are stamped 'Account Payee Only' and written payable strictly to 'Cinaway Logistics (Pvt) Ltd'."
      }
    ],
    embedUrl: "https://scribehow.com/embed/End-to-End_Route_Operations_Daily_Sales_Collection_and_Cashier_Settlement__gf9AmhD2Rsqwhg6rAvssJw?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/End-to-End_Route_Operations_Daily_Sales_Collection_and_Cashier_Settlement__gf9AmhD2Rsqwhg6rAvssJw",
    status: "live",
    roles: [
      { name: "Field Sales Rep", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300" },
      { name: "Cashier", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300" },
      { name: "Driver / Lorry Helper", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026"
  },
  {
    id: "sales-invoicing",
    slug: "/sales",
    number: "SOP-LOG-02",
    title: "Creating Sales Invoices & Checking Warehouse Stock",
    category: "Core Logistics & Sales",
    sectionGroupId: "logistics-sales",
    whatIsThisFor: "This module is used to generate customer delivery bills and confirm products sold. When an invoice is approved, the system automatically deducts sold cartons from warehouse inventory in real time.",
    beforeYouStart: [
      "Customer outlet name or unique code",
      "Customer purchase order or verbal delivery request",
      "Available stock confirmed in warehouse depot"
    ],
    stepByStepInstructions: [
      "Click 'Sales' > 'Invoices' > 'Create New Invoice'.",
      "Select the customer outlet; check that the customer has sufficient credit balance.",
      "Add product items and quantities; verify that warehouse has enough stock on hand.",
      "Review automatic promotional deals (such as 'Buy 10 Get 1 Free') and discounts.",
      "Click 'Issue Invoice'; print 3 copies (Customer Copy, Accounts Copy, and Store Gatepass Copy)."
    ],
    commonMistakes: [
      {
        mistake: "System prevents creating invoice with 'Insufficient Stock' warning",
        cause: "Warehouse intake GRN was not entered for newly arrived stock shipment.",
        quickFix: "Confirm storekeeper has accepted the delivery in Purchases module before creating customer invoices."
      },
      {
        mistake: "Customer billed with incorrect price tier",
        cause: "Special wholesale discount scheme was not selected on the invoice header.",
        quickFix: "Void the draft bill, re-select the customer's contracted price group, and re-generate the invoice."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Sales_Summary_Ingestion_Item-Wise_Billing_and_Inventory_Reconciliations_in_Cinaway_ERP_Copy__GiS7YpXgTB2oTTbePd7yiw?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Sales_Summary_Ingestion_Item-Wise_Billing_and_Inventory_Reconciliations_in_Cinaway_ERP_Copy__GiS7YpXgTB2oTTbePd7yiw",
    status: "live",
    roles: [
      { name: "Billing Clerk", badgeClass: "bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300" },
      { name: "Sales Coordinator", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026"
  },
  {
    id: "outlets-directory",
    slug: "/outlets",
    number: "SOP-LOG-03",
    title: "Registering Shops (Outlets) & Managing Shop Balances",
    category: "Core Logistics & Sales",
    sectionGroupId: "logistics-sales",
    whatIsThisFor: "This module keeps an address book of all retail stores and groceries served by Cinaway. It records store location coordinates, assigned delivery routes, credit limits, and current ledger balances.",
    beforeYouStart: [
      "Physical retail store business name and owner full name",
      "Owner active mobile telephone number for SMS billing alerts",
      "Store GPS location or physical landmark address",
      "Approved credit limit amount (e.g., Rs. 100,000) and credit days"
    ],
    stepByStepInstructions: [
      "Open 'Core Logistics & Sales' and click 'Outlets Directory'.",
      "Click 'Add Outlet' for a single shop, or 'Bulk Import' to upload an Excel sheet of shops.",
      "Enter the shop name, owner name, mobile number, and select the assigned sales route.",
      "Set the maximum credit limit and allowed credit days (e.g. 14 or 21 days).",
      "Click 'Save Outlet' to generate the unique 5-digit outlet code."
    ],
    commonMistakes: [
      {
        mistake: "Driver cannot find newly added outlet on the route",
        cause: "GPS pin placed incorrectly or assigned to wrong route day (e.g., Tuesday instead of Monday).",
        quickFix: "Open the outlet card, verify the GPS pin on Google Maps, and re-assign the correct route schedule."
      },
      {
        mistake: "Billing blocked with 'Credit Limit Exceeded' message",
        cause: "Customer has unpaid invoices older than approved credit days.",
        quickFix: "Collect pending overdue cheques from shopkeeper, or request written temporary credit limit approval."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Outlets_Directory_Bulk_Ingestion_and_Automated_Customer_Ledger_Management_in_Cinaway_ERP_Copy__dXjJ2FHyQeeW8bTpIunyew?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Outlets_Directory_Bulk_Ingestion_and_Automated_Customer_Ledger_Management_in_Cinaway_ERP_Copy__dXjJ2FHyQeeW8bTpIunyew",
    status: "live",
    roles: [
      { name: "Territory Sales Rep", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300" },
      { name: "Sales Manager", badgeClass: "bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026"
  },
  {
    id: "customer-collections",
    slug: "/collections",
    number: "SOP-LOG-04",
    title: "Receiving Customer Payments & Settling Bills",
    category: "Core Logistics & Sales",
    sectionGroupId: "logistics-sales",
    whatIsThisFor: "This module helps accounts staff match incoming customer money with open sales invoices. It handles invoice knock-offs, approved discount deductions, and holds leftover money as customer advances for future orders.",
    beforeYouStart: [
      "Bank deposit slip or customer cheque leaf number",
      "Unique outlet shop code or registered telephone number",
      "Pre-approved prompt payment discount percentage agreement (if applicable)"
    ],
    stepByStepInstructions: [
      "Open 'Collections' and type the shop name or code in the search bar.",
      "Review the list of unpaid bills owed by this customer.",
      "Enter the payment amount and select which specific open bills this money pays off (oldest invoices first).",
      "If the customer qualifies for an early-settlement discount, enter the approved discount percentage.",
      "Click 'Confirm Payment Knock-Off' to update the customer ledger and automatically send a payment SMS receipt."
    ],
    commonMistakes: [
      {
        mistake: "Payment applied to the wrong customer outlet",
        cause: "Selecting a customer with a similar business name from the search dropdown.",
        quickFix: "Always verify the outlet's unique 5-digit code and shop owner mobile number before posting payment."
      },
      {
        mistake: "Unallocated payment left hanging in suspense",
        cause: "Customer paid a lump sum that does not match any single bill.",
        quickFix: "Knock off the oldest invoices completely and leave the remaining balance marked as 'Customer Advance Credit'."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Receivable_Collections_Payment_Knock-Off_Discounts_and_Advance_Settlements_in_Cinaway_ERP__U4W7Mi5kQ_ausM8EiQRT5Q?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Receivable_Collections_Payment_Knock-Off_Discounts_and_Advance_Settlements_in_Cinaway_ERP__U4W7Mi5kQ_ausM8EiQRT5Q",
    status: "live",
    roles: [
      { name: "Credit Controller", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300" },
      { name: "Accounts Receivable", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" },
      { name: "Sales Rep", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300" }
    ],
    estimatedMinutes: 8,
    lastAudited: "September 2026"
  },

  // =========================================================================
  // 3. SUPPLY CHAIN
  // =========================================================================
  {
    id: "products-inventory",
    slug: "/products",
    number: "SOP-SCM-01",
    title: "Product Master List & Stock Updates",
    category: "Supply Chain",
    sectionGroupId: "supply-chain",
    whatIsThisFor: "This module holds the master catalog of all saleable goods. It manages product barcodes, carton packaging quantities, wholesale and retail prices, and records physical warehouse stock count adjustments.",
    beforeYouStart: [
      "Official manufacturer product catalog and barcode number (EAN-13)",
      "Approved wholesale and maximum retail price (MRP) list",
      "Physical count verification sheet signed by warehouse supervisor"
    ],
    stepByStepInstructions: [
      "Go to 'Supply Chain' > 'Inventory' > 'Products Master List'.",
      "Click 'Add New Product' and enter the product name, brand, category, and barcode.",
      "Specify units per carton (e.g., 24 pieces per case) and carton gross weight.",
      "Enter wholesale price and maximum retail price.",
      "To update stock counts after stocktaking, click 'Stock Adjustment', enter variance quantity and reason, and submit for supervisor approval."
    ],
    commonMistakes: [
      {
        mistake: "Barcode scanner fails to recognize item at dispatch desk",
        cause: "Barcode number typed with extra space or missing initial zero.",
        quickFix: "Re-scan the physical product directly into the barcode field to ensure exact 13-digit sequence matches."
      },
      {
        mistake: "Stock adjustment value doubles inventory unexpectedly",
        cause: "Entered total physical count instead of the difference/variance quantity.",
        quickFix: "Verify whether the adjustment screen asks for 'New Count' or 'Count Difference (+/-)' before saving."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Products_Master_Stock_Adjustments_and_Bulk_Ingestion_in_Cinaway_ERP_Copy__ol-6d6dSRVKpoO1PBE7NCg?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Products_Master_Stock_Adjustments_and_Bulk_Ingestion_in_Cinaway_ERP_Copy__ol-6d6dSRVKpoO1PBE7NCg",
    status: "live",
    roles: [
      { name: "Warehouse Manager", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300" },
      { name: "Inventory Clerk", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300" }
    ],
    estimatedMinutes: 8,
    lastAudited: "September 2026"
  },
  {
    id: "purchases-returns",
    slug: "/purchases",
    number: "SOP-SCM-02",
    title: "Purchase Bills & Damaged Stock Returns",
    category: "Supply Chain",
    sectionGroupId: "supply-chain",
    whatIsThisFor: "This module handles incoming stock shipments from product manufacturers. It records warehouse Good Received Notes (GRN), updates stock quantities, and documents damaged items sent back to suppliers.",
    beforeYouStart: [
      "Supplier delivery dispatch note and commercial invoice",
      "Approved company Purchase Order (PO) number",
      "Physical count and quality inspection check by warehouse storekeeper"
    ],
    stepByStepInstructions: [
      "Go to 'Supply Chain' > 'Purchases & Returns'.",
      "Select 'Create Good Received Note (GRN)' and link to approved Purchase Order.",
      "Count cartons offloaded from delivery lorry and inspect seals, batch codes, and expiration dates.",
      "Accept good stock into warehouse inventory bins.",
      "If any cartons are crushed or wet, record them on 'Purchase Return Debit Note' and obtain driver signature."
    ],
    commonMistakes: [
      {
        mistake: "Stock counts in warehouse don't match ERP ledger",
        cause: "Cartons accepted into warehouse without clicking 'Finalize GRN' in system.",
        quickFix: "Open pending GRN list, confirm physical count, and click 'Finalize and Post to Stock'."
      },
      {
        mistake: "Near-expiry goods accepted into main warehouse stock",
        cause: "Storekeeper skipped checking expiration dates printed on carton packaging.",
        quickFix: "Move stock to quarantine location and issue immediate supplier return debit note for exchange."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Procurement_Lifecycle_Bulk_Purchase_Ingestion_and_Return_Reconciliations_in_Cinaway_ERP_Copy__vascJ054SLmzANloNUagzQ?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Procurement_Lifecycle_Bulk_Purchase_Ingestion_and_Return_Reconciliations_in_Cinaway_ERP_Copy__vascJ054SLmzANloNUagzQ",
    status: "live",
    roles: [
      { name: "Storekeeper", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300" },
      { name: "Warehouse Supervisor", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300" }
    ],
    estimatedMinutes: 8,
    lastAudited: "September 2026"
  },
  {
    id: "suppliers-creditors",
    slug: "/suppliers",
    number: "SOP-SCM-03",
    title: "Supplier Directory & Payment Terms",
    category: "Supply Chain",
    sectionGroupId: "supply-chain",
    whatIsThisFor: "This module manages all vendor companies who sell products and services to Cinaway. It tracks supplier bank details, credit payment deadlines, and shows how much money is owed to each company.",
    beforeYouStart: [
      "Vendor commercial business registration and tax TIN certificate",
      "Supplier bank account information and payment instructions",
      "Agreed credit terms (e.g. Net 30 days or Net 60 days)"
    ],
    stepByStepInstructions: [
      "Open 'Supply Chain' and select 'Suppliers Directory'.",
      "Click 'Add Supplier' and enter company name, contact person, email, and phone numbers.",
      "Input supplier bank details and currency (LKR or USD).",
      "Set agreed credit period in days (e.g. 30 days).",
      "Click 'Save Supplier Profile' to open their trade creditor sub-ledger."
    ],
    commonMistakes: [
      {
        mistake: "Supplier ledger balance does not match vendor monthly statement",
        cause: "Purchase return debit notes or damaged stock discounts were not recorded in ERP.",
        quickFix: "Reconcile supplier statement against Good Received Notes (GRN) and post missing debit notes."
      },
      {
        mistake: "Duplicate supplier record created",
        cause: "Searching with abbreviation (e.g. 'Unilever' instead of 'Unilever Sri Lanka Ltd').",
        quickFix: "Merge duplicate accounts under Master Settings to combine transaction history onto one vendor profile."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Suppliers_Master_Directory_Trade_Creditor_Sub-Ledgers_and_Payment_Terms_in_Cinaway_ERP_Copy__03qU9lffTgaKRaRxc0cQsQ?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Suppliers_Master_Directory_Trade_Creditor_Sub-Ledgers_and_Payment_Terms_in_Cinaway_ERP_Copy__03qU9lffTgaKRaRxc0cQsQ",
    status: "live",
    roles: [
      { name: "Procurement Officer", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300" },
      { name: "Accounts Payable", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026"
  },

  // =========================================================================
  // 4. FINANCE & ACCOUNTING
  // =========================================================================
  {
    id: "chart-of-accounts",
    slug: "/chart-of-accounts",
    number: "SOP-FIN-01",
    title: "General Accounting & Chart of Accounts Setup",
    category: "Finance & Accounting",
    sectionGroupId: "finance-accounting",
    whatIsThisFor: "This module organizes all financial ledger accounts into five standard categories: Assets, Liabilities, Equity, Income, and Expenses. It provides the foundation for balance sheets and profit & loss statements.",
    beforeYouStart: [
      "Chartered Accountant approval or Financial Controller credentials",
      "Standard national chart of accounts numbering plan (1000 to 5000)",
      "Opening balances signed off by external auditors"
    ],
    stepByStepInstructions: [
      "Open 'Finance & Accounting' and select 'Chart of Accounts'.",
      "View the five primary accounting classes: Assets, Liabilities, Equity, Revenue, and Expenses.",
      "To add a new bank or cost center, click 'Add Sub-Account' under the appropriate parent header.",
      "Assign a unique 4-digit code and select account currency.",
      "Click 'Save Account' to enable journal posting to this ledger code."
    ],
    commonMistakes: [
      {
        mistake: "Sub-account placed under wrong parent account",
        cause: "Creating an expense account under Assets instead of Expenses (5000 series).",
        quickFix: "Edit the account card, re-select the correct parent category from dropdown, and save."
      },
      {
        mistake: "Trial balance fails to balance at month end",
        cause: "Manual journal voucher entered with unequal debit and credit amounts.",
        quickFix: "Check the 'Unbalanced Journals' alert tab and correct the offsetting entry to balance debits and credits."
      }
    ],
    embedUrl: "",
    viewerUrl: "https://sop.cinawaylogistics.com/#/chart-of-accounts",
    status: "upcoming",
    roles: [
      { name: "Chief Financial Officer", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" },
      { name: "Senior Accountant", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300" }
    ],
    estimatedMinutes: 10,
    lastAudited: "Pending Publication"
  },
  {
    id: "expense-management",
    slug: "/expenses",
    number: "SOP-FIN-02",
    title: "Daily Expense Records & Bill Vouchers",
    category: "Finance & Accounting",
    sectionGroupId: "finance-accounting",
    whatIsThisFor: "This module allows employees to record daily operational expenses such as lorry fuel, puncture repairs, meals, and office supplies. It lets managers review bills and approve repayments quickly without lost paper slips.",
    beforeYouStart: [
      "Original clear paper receipt or tax invoice from the vendor",
      "Vehicle registration number (if claiming vehicle fuel or repair)",
      "Assigned department cost center code",
      "Mobile camera or document scanner to upload receipt photos"
    ],
    stepByStepInstructions: [
      "Click on 'Expenses' in the sidebar and choose 'Create Expense Voucher'.",
      "Choose the correct category from the dropdown (Fuel, Vehicle Maintenance, Office Supplies, Meals, or Travel).",
      "Type in the exact bill amount, date of purchase, and select payment method (Petty Cash, Cheque, or Company Card).",
      "Upload a clear photo or PDF scan of the merchant receipt showing the vendor name, date, and items.",
      "Click 'Submit for Approval' to send the voucher to your department manager."
    ],
    commonMistakes: [
      {
        mistake: "Expense voucher rejected by accounts officer",
        cause: "Blurry receipt photo uploaded or receipt is missing vendor date and cash paid stamp.",
        quickFix: "Re-take the photo in bright light on a dark flat surface ensuring all four corners and the date are clearly visible."
      },
      {
        mistake: "Wrong vehicle charged for fuel expense",
        cause: "Selected the wrong vehicle number from the dropdown list during high-volume data entry.",
        quickFix: "Open the voucher draft, select the correct license plate number from the fleet list, and cross-check the odometer reading."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Expense_Management__myFjp8TeTkm56wp9c9Djpw?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Expense_Management__myFjp8TeTkm56wp9c9Djpw",
    status: "live",
    roles: [
      { name: "All Staff Members", badgeClass: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" },
      { name: "Accountant", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" },
      { name: "Finance Manager", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300" }
    ],
    estimatedMinutes: 5,
    lastAudited: "September 2026"
  },
  {
    id: "fixed-assets",
    slug: "/fixed-assets",
    number: "SOP-FIN-03",
    title: "Registering Office Assets & Monthly Value Drop (Depreciation)",
    category: "Finance & Accounting",
    sectionGroupId: "finance-accounting",
    whatIsThisFor: "This module helps track company equipment like delivery lorries, computers, printers, and warehouse pallet lifters. It keeps record of who is responsible for each item and calculates monthly value drop automatically.",
    beforeYouStart: [
      "Purchase bill and warranty card for the equipment",
      "Equipment serial number or vehicle chassis number",
      "Official printed Cinaway barcode sticker",
      "Name of employee or branch custodian responsible for the item"
    ],
    stepByStepInstructions: [
      "Go to 'Fixed Assets' and click 'Register Asset'.",
      "Select asset class (Motor Vehicles, IT Hardware, Office Furniture, or Warehouse Machinery).",
      "Enter item details: brand, model, purchase price, purchase date, and manufacturer serial number.",
      "Assign the custodian employee and stick the physical barcode sticker onto the device.",
      "At month-end, click 'Run Depreciation' to automatically calculate this month's equipment value drop."
    ],
    commonMistakes: [
      {
        mistake: "Low-value consumable items entered as fixed assets",
        cause: "Registering minor stationery or hand tools valued below Rs. 15,000 as capital assets.",
        quickFix: "Items under Rs. 15,000 must be entered through 'Expense Management' as general supplies, not in Fixed Assets."
      },
      {
        mistake: "Monthly depreciation run fails with error",
        cause: "Depreciation method or useful life years left blank during initial item registration.",
        quickFix: "Edit the asset card, select 'Straight Line Method', set useful life (e.g., 4 years for laptops), and re-run."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Fixed_Asset_Registration_Depreciation_and_Disposal__Vgoiko0-TCyVOBgRe0eadQ?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Fixed_Asset_Registration_Depreciation_and_Disposal__Vgoiko0-TCyVOBgRe0eadQ",
    status: "live",
    roles: [
      { name: "Senior Accountant", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" },
      { name: "Administration Lead", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300" }
    ],
    estimatedMinutes: 7,
    lastAudited: "September 2026"
  },
  {
    id: "all-reports",
    slug: "/reports",
    number: "SOP-FIN-04",
    title: "Viewing & Exporting Business Reports",
    category: "Finance & Accounting",
    sectionGroupId: "finance-accounting",
    whatIsThisFor: "This module gives managers and accountants instant access to business numbers including daily sales totals, unpaid shop bills, and warehouse stock levels. You can filter data by date and download clean files as PDF or Excel spreadsheets.",
    beforeYouStart: [
      "User role permissions to view sensitive financial/sales data",
      "Specific date range you want to analyze (e.g., this month or last quarter)",
      "Depot branch name or sales route number you are checking"
    ],
    stepByStepInstructions: [
      "Click 'Reports' in the sidebar to open the central reports dashboard.",
      "Pick the category you need: Sales Summary, Outstanding Debtors, Stock Movement, or HR Attendance.",
      "Use the date filter to choose the start and end dates for your report.",
      "Check or uncheck column boxes to show only the information you want on your screen.",
      "Click 'Export as Excel' for spreadsheets or 'Export as PDF' to generate a printable management document."
    ],
    commonMistakes: [
      {
        mistake: "Report numbers do not match physical cashier handover sheet",
        cause: "Date filter set to 'Created Date' instead of 'Settlement Date' or cancelled bills included.",
        quickFix: "Change filter criteria to 'Completed Transactions Only' and ensure date range matches the banking cut-off time."
      },
      {
        mistake: "Excel export shows blank rows or missing currency formatting",
        cause: "Very large report query timed out while downloading over slow mobile connection.",
        quickFix: "Narrow down your filter to a single branch or single week before clicking 'Export to Excel'."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Accessing_Reports_in_Cinaway_ERP___uhnrreLTcCUYZKNw799eg?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Accessing_Reports_in_Cinaway_ERP___uhnrreLTcCUYZKNw799eg",
    status: "live",
    roles: [
      { name: "Management", badgeClass: "bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300" },
      { name: "Financial Controller", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" },
      { name: "Auditors", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300" }
    ],
    estimatedMinutes: 4,
    lastAudited: "September 2026"
  },

  // =========================================================================
  // 5. HUMAN RESOURCES
  // =========================================================================
  {
    id: "employee-onboarding",
    slug: "/add-employee",
    number: "SOP-HR-01",
    title: "Adding New Employees & Setting Up Profiles",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    whatIsThisFor: "This module helps HR register newly hired workers, record their national identity and bank details, and upload their signed contract papers. It creates their official employee profile and gives them their initial login.",
    beforeYouStart: [
      "Physical copy of employee National Identity Card (NIC)",
      "Bank passbook copy showing Bank of Ceylon account number and branch code",
      "Signed appointment letter and driving license copy (for vehicle drivers)"
    ],
    stepByStepInstructions: [
      "Open 'Human Resources' and click 'Add Employee'.",
      "Fill in the employee's full legal name, date of birth, home address, and mobile phone number.",
      "Enter statutory identification numbers: NIC number and EPF registration number.",
      "Input Bank of Ceylon branch code and account number for salary deposits.",
      "Upload scans of the appointment letter and NIC, then click 'Save Employee Profile'."
    ],
    commonMistakes: [
      {
        mistake: "Bank salary transfer rejects employee during monthly PRN run",
        cause: "Typo in the 10-to-12 digit bank account number or wrong 3-digit branch code entered.",
        quickFix: "Cross-check the account number against the scanned passbook copy and update the profile before generating payroll."
      },
      {
        mistake: "Duplicate employee record created in system",
        cause: "Re-entering a returning employee who previously worked at the company instead of reactivating them.",
        quickFix: "Search archived records by NIC number and click 'Reactivate Employee' instead of creating a new profile."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Employee_Onboarding_Profile_Configuration_and_Access_Delegation_in_Cinaway_ERP__LyjgT4r_RF2xJtod0DWjGA?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Employee_Onboarding_Profile_Configuration_and_Access_Delegation_in_Cinaway_ERP__LyjgT4r_RF2xJtod0DWjGA",
    status: "live",
    roles: [
      { name: "HR Executive", badgeClass: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300" },
      { name: "System Administrator", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026"
  },
  {
    id: "attendance-biometric",
    slug: "/attendance",
    number: "SOP-HR-02",
    title: "Daily Staff Attendance & Biometric Fingerprint Import",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    whatIsThisFor: "This module imports employee clock-in and clock-out timestamps from warehouse fingerprint machines. It calculates working hours, flags late arrivals, and provides clean data for monthly salary calculations.",
    beforeYouStart: [
      "Connected fingerprint machine on local office network or USB data file",
      "Master employee biometric ID assignment list",
      "Morning shift cut-off time (8:30 AM standard)"
    ],
    stepByStepInstructions: [
      "Open 'Human Resources' and click 'Attendance' > 'Biometric Import'.",
      "Click 'Download from Device' or upload the biometric attendance log file.",
      "Run the automated pairing tool to match in-punches and out-punches for each employee.",
      "Review the exceptions list for workers who forgot to punch out or arrived late.",
      "Submit manual attendance adjustment notes with manager sign-off for off-site delivery drivers."
    ],
    commonMistakes: [
      {
        mistake: "Employee marked absent despite working full day",
        cause: "Employee punched fingerprint but machine displayed 'Try Again' error without user noticing.",
        quickFix: "Submit a manual attendance adjustment voucher signed by warehouse supervisor to add the missing punch."
      },
      {
        mistake: "Overtime hours calculating incorrectly",
        cause: "Shift start and end times configured wrong in company shift master schedule.",
        quickFix: "Verify the shift schedule under Attendance Settings ensuring shift ends at 5:00 PM before overtime starts."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Employee_Attendance_Tracking_and_Biometric_Import_Management_in_Cinaway_ERP_Copy__baxr3ccQTJSe-lZkFu3kMA?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Employee_Attendance_Tracking_and_Biometric_Import_Management_in_Cinaway_ERP_Copy__baxr3ccQTJSe-lZkFu3kMA",
    status: "live",
    roles: [
      { name: "HR Officer", badgeClass: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300" },
      { name: "Timekeeper", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300" }
    ],
    estimatedMinutes: 5,
    lastAudited: "September 2026"
  },
  {
    id: "staff-payroll",
    slug: "/payroll",
    number: "SOP-HR-03",
    title: "Monthly Staff Salaries, Loans & Government Funds",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    whatIsThisFor: "This module calculates monthly employee pay, deducts staff loans and salary advances, and calculates EPF and ETF contributions. It ensures every staff member is paid accurately into their bank account on salary day.",
    beforeYouStart: [
      "Completed and verified attendance records from fingerprint machine",
      "Approved staff salary advance and loan deduction schedule",
      "National identity card (NIC) and Bank of Ceylon account numbers for all staff"
    ],
    stepByStepInstructions: [
      "Go to 'Human Resources' and open 'Monthly Payroll'.",
      "Choose the current pay month and click 'Calculate Salaries from Attendance'.",
      "Check individual deduction lines for salary advances, company loan payments, and unpaid leave days.",
      "Verify statutory deductions: Employee EPF (8%), Company EPF (12%), and Company ETF (3%).",
      "Click 'Approve Payroll Batch' to generate official digital pay slips for all employees."
    ],
    commonMistakes: [
      {
        mistake: "Employee salary shows zero overtime pay",
        cause: "Biometric attendance records were not approved by warehouse manager before calculating payroll.",
        quickFix: "Open Attendance module, approve pending overtime hours, and click 'Recalculate Salary' on the employee pay card."
      },
      {
        mistake: "Duplicate loan installment deducted in same month",
        cause: "Manual loan deduction entered twice by both HR officer and payroll clerk.",
        quickFix: "Open the employee's deductions ledger, delete the duplicate entry, and verify the remaining balance."
      }
    ],
    embedUrl: "https://scribehow.com/embed/End-to-End_Payroll_Lifecycle_Staff_Advances_Loans_and_Statutory_Processing_in_Cinaway_ERP__0Kd6niXQSXWj2m9lDBWJgA?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/End-to-End_Payroll_Lifecycle_Staff_Advances_Loans_and_Statutory_Processing_in_Cinaway_ERP__0Kd6niXQSXWj2m9lDBWJgA",
    status: "live",
    roles: [
      { name: "HR Manager", badgeClass: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300" },
      { name: "Payroll Executive", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300" },
      { name: "Managing Director", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" }
    ],
    estimatedMinutes: 9,
    lastAudited: "September 2026"
  },
  {
    id: "leave-applications",
    slug: "/leaves",
    number: "SOP-HR-04",
    title: "Staff Leave Requests & Manager Approval",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    whatIsThisFor: "This module allows employees to submit leave requests online and enables department managers to review and approve them. It automatically keeps track of how many vacation and sick days each worker has left.",
    beforeYouStart: [
      "Active ERP login username and password",
      "Available leave balance in your annual quota",
      "Doctor medical certificate photo (if taking medical leave longer than 2 days)"
    ],
    stepByStepInstructions: [
      "Click 'HR Management' and choose 'Leave Requests'.",
      "Click 'New Leave Request' and select the type of leave (Annual, Casual, Medical, or Duty Leave).",
      "Pick your start date and end date, choose half-day or full-day, and write a short reason.",
      "Attach a photo of your medical certificate if you were on sick leave.",
      "Click 'Submit'; your supervisor will receive an instant alert to approve or decline your request."
    ],
    commonMistakes: [
      {
        mistake: "Leave request blocked by system with 'Quota Exceeded' alert",
        cause: "Employee has used all allocated casual or annual days for the calendar year.",
        quickFix: "Select 'No Pay Leave' with managerial consent or check with HR for compensatory off adjustments."
      },
      {
        mistake: "Department manager cannot find pending leave request",
        cause: "Employee saved request as a draft instead of clicking the final 'Submit' button.",
        quickFix: "Open 'My Requests' tab, open the draft entry, and click 'Submit for Manager Approval'."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Leave_Configuration_Staff_Applications_and_Approval_Workflows_in_Cinaway_ERP___X32c-tPQoC8BuQ2DnQjTw?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Leave_Configuration_Staff_Applications_and_Approval_Workflows_in_Cinaway_ERP___X32c-tPQoC8BuQ2DnQjTw",
    status: "live",
    roles: [
      { name: "All Employees", badgeClass: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" },
      { name: "Department Heads", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300" }
    ],
    estimatedMinutes: 4,
    lastAudited: "September 2026"
  },
  {
    id: "boc-prn-file",
    slug: "/boc-prn-generation",
    number: "SOP-HR-05",
    title: "Creating Bank Salary Transfer (BOC PRN) Files",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    whatIsThisFor: "This module generates the official Bank of Ceylon PRN bank file from monthly payroll. Uploading this file to BOC Corporate Internet Banking pays all employee salaries directly into their bank accounts in one click.",
    beforeYouStart: [
      "Authorized and finalized monthly payroll batch",
      "Verified BOC account numbers and branch codes for all employees",
      "Corporate BOC Internet Banking security token"
    ],
    stepByStepInstructions: [
      "Go to 'HR Management' and click 'BOC PRN Generation'.",
      "Select the authorized payroll period and confirm total payment matches approved payroll summary.",
      "Click 'Validate Bank Records'; verify that no employee has a missing bank account.",
      "Click 'Generate BOC PRN File' to download the bank file (.txt/.prn).",
      "Log into BOC Corporate Banking, select 'Bulk File Upload - Payroll', upload the file, and authorize with token."
    ],
    commonMistakes: [
      {
        mistake: "BOC Corporate Banking rejects uploaded PRN file with format error",
        cause: "File was opened and re-saved in Microsoft Excel or Notepad, corrupting strict bank spacing.",
        quickFix: "Re-generate a fresh PRN file from Cinaway ERP and upload directly to bank without opening it in text editors."
      },
      {
        mistake: "Salary payment delayed for one worker",
        cause: "Employee bank account number was inactive, dormant, or closed at branch.",
        quickFix: "Verify employee active account status with their branch and issue manual cheque if necessary."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Bank_of_Ceylon_BOC_Bulk_PRN_File_Generation_and_Electronic_Salary_Transfer_in_Cinaway_ERP_Copy__YzlhX_uNSOGHul1XLrifug?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Bank_of_Ceylon_BOC_Bulk_PRN_File_Generation_and_Electronic_Salary_Transfer_in_Cinaway_ERP_Copy__YzlhX_uNSOGHul1XLrifug",
    status: "live",
    roles: [
      { name: "Payroll Accountant", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300" },
      { name: "Finance Director", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300" }
    ],
    estimatedMinutes: 5,
    lastAudited: "September 2026"
  },

  // =========================================================================
  // 6. FLEET OPERATIONS
  // =========================================================================
  {
    id: "fleet-vehicles",
    slug: "/vehicles",
    number: "SOP-FLT-01",
    title: "Company Vehicle Maintenance & Fleet Pay",
    category: "Fleet Operations",
    sectionGroupId: "fleet-operations",
    whatIsThisFor: "This module manages all company delivery lorries, vans, and bikes. It tracks diesel fuel spending, schedules garage oil changes and tyre repairs, and calculates driver trip delivery pay.",
    beforeYouStart: [
      "Vehicle registration license plate number",
      "Current odometer kilometer reading from the lorry dashboard",
      "Physical garage repair estimate or fuel pump receipt"
    ],
    stepByStepInstructions: [
      "Go to 'Fleet Operations' and click on 'Vehicles & Fleet'.",
      "Select the lorry or van by entering its license plate number.",
      "Record daily fuel receipts with liters filled and odometer reading to track fuel efficiency (km per liter).",
      "To schedule a repair, click 'Create Maintenance Job' and enter garage name and repair description.",
      "At month end, click 'Calculate Driver Trip Pay' to generate delivery allowances based on completed routes."
    ],
    commonMistakes: [
      {
        mistake: "Vehicle fuel economy shows impossible reading (e.g. 0.5 km/L)",
        cause: "Wrong odometer kilometers entered (e.g. missing a zero or typing trip meter instead of total odometer).",
        quickFix: "Check the physical odometer on the vehicle and edit the fuel voucher with the correct total reading."
      },
      {
        mistake: "Lorry blocked from route dispatch in morning",
        cause: "System safety rule triggered because vehicle revenue license or insurance is expired.",
        quickFix: "Upload the renewed insurance certificate in the vehicle profile to unblock dispatch immediately."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Managing_Vehicle_Operations_And_Payroll_In_Fleet_Management_System_Copy__nCG15VbyTdCcH5gZQAl7Sg?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Managing_Vehicle_Operations_And_Payroll_In_Fleet_Management_System_Copy__nCG15VbyTdCcH5gZQAl7Sg",
    status: "live",
    roles: [
      { name: "Fleet Manager", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300" },
      { name: "Transport Officer", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300" },
      { name: "Delivery Driver", badgeClass: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" }
    ],
    estimatedMinutes: 7,
    lastAudited: "September 2026"
  },

  // =========================================================================
  // 7. SETTINGS & ADMINISTRATION
  // =========================================================================
  {
    id: "user-roles",
    slug: "/user-roles",
    number: "SOP-ADM-01",
    title: "User Permissions & Staff Access Rights",
    category: "Settings & Administration",
    sectionGroupId: "settings-admin",
    whatIsThisFor: "This module controls which screens and buttons each employee can see in the ERP system. It makes sure sales reps only see their routes, storekeepers only see stock, and only managers see profit and salary numbers.",
    beforeYouStart: [
      "Master Administrator login credentials",
      "Approved user permission request form signed by department head",
      "Employee job title and official company email address"
    ],
    stepByStepInstructions: [
      "Navigate to 'Settings & Administration' and select 'User Roles & Access Control'.",
      "Choose to edit an existing role (e.g. Sales Rep, Cashier, Storekeeper) or create a new custom role.",
      "Check or uncheck permissions: View, Create, Edit, Delete, and Export for each individual module.",
      "Ensure sensitive checkboxes (like 'Delete Invoices' and 'View Profit Margins') remain unchecked for standard staff.",
      "Click 'Save Role' and assign the role to the employee profile."
    ],
    commonMistakes: [
      {
        mistake: "Field sales rep can see company payroll or profit figures",
        cause: "Assigned employee to 'Admin' or 'Finance Manager' group by accident.",
        quickFix: "Edit user profile immediately, switch role back to 'Field Sales Representative', and force sign-out."
      },
      {
        mistake: "Cashier blocked from printing day-end settlement slip",
        cause: "'Print Reports' permission was turned off during role permission cleanup.",
        quickFix: "Open Cashier role settings, check the box for 'Print Daily Cashier Summary', and click save."
      }
    ],
    embedUrl: "https://scribehow.com/embed/User_Roles_and_Permission_Matrix_Configuration_in_Cinaway_ERP__lcadT9SqQa2bCVSpYyYtNA?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/User_Roles_and_Permission_Matrix_Configuration_in_Cinaway_ERP__lcadT9SqQa2bCVSpYyYtNA",
    status: "live",
    roles: [
      { name: "System Administrator", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300" },
      { name: "IT Lead", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300" }
    ],
    estimatedMinutes: 7,
    lastAudited: "September 2026"
  },
  {
    id: "notifications",
    slug: "/notifications",
    number: "SOP-ADM-02",
    title: "Sending SMS & Email Alerts to Customers and Staff",
    category: "Settings & Administration",
    sectionGroupId: "settings-admin",
    whatIsThisFor: "This module allows the company to send automated SMS notifications to shopkeepers about delivery deliveries and payment receipts. It also sends email announcements to internal staff members.",
    beforeYouStart: [
      "Active SMS gateway credit balance",
      "Recipient phone number list in standard format (e.g., 07XXXXXXXX)",
      "Approved notification message template text"
    ],
    stepByStepInstructions: [
      "Click 'Notifications' under Settings & Administration.",
      "Choose 'Send SMS' for text messages or 'Send Email' for internal memos.",
      "Select your audience: All Retail Outlets in Route 04, Customers with Overdue Bills, or All Warehouse Staff.",
      "Use merge tags like {{shop_name}} and {{amount_due}} to personalize each message automatically.",
      "Click 'Send Broadcast' and review delivery confirmation logs to verify messages were delivered."
    ],
    commonMistakes: [
      {
        mistake: "SMS broadcast fails to send to shopkeepers",
        cause: "SMS gateway account balance is depleted or telephone numbers missing leading zero.",
        quickFix: "Top up SMS credits under gateway settings and format phone numbers as standard 10-digit mobile numbers."
      },
      {
        mistake: "Customer complains of receiving late-night payment reminders",
        cause: "Automated SMS job scheduled during off-hours.",
        quickFix: "Configure the SMS dispatch window to strictly send between 8:30 AM and 6:00 PM on business days."
      }
    ],
    embedUrl: "https://scribehow.com/embed/Multi-Channel_Notification_Center_Single_and_Bulk_SMSEmail_Dispatch_in_Cinaway_ERP_Copy__lDnJAm_XRamJVEVM1uGPSA?as=scrollable",
    viewerUrl: "https://scribehow.com/shared/Multi-Channel_Notification_Center_Single_and_Bulk_SMSEmail_Dispatch_in_Cinaway_ERP_Copy__lDnJAm_XRamJVEVM1uGPSA",
    status: "live",
    roles: [
      { name: "Marketing Coordinator", badgeClass: "bg-pink-100 text-pink-800 dark:bg-pink-950/60 dark:text-pink-300" },
      { name: "Operations Supervisor", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300" }
    ],
    estimatedMinutes: 5,
    lastAudited: "September 2026"
  },
  {
    id: "system-backup",
    slug: "/backup",
    number: "SOP-ADM-03",
    title: "Database Backup & Safety Archive",
    category: "Settings & Administration",
    sectionGroupId: "settings-admin",
    whatIsThisFor: "This module ensures that all company invoices, customer balances, and employee records are backed up safely every night. In case of server damage or computer breakdown, data can be restored completely within minutes.",
    beforeYouStart: [
      "Super Administrator server access credentials",
      "Encrypted off-site cloud storage bucket configuration",
      "Secondary offline storage drive connection"
    ],
    stepByStepInstructions: [
      "Navigate to 'Settings & Administration' > 'System Settings & Backup'.",
      "Verify that the automated daily backup schedule is set to run at 2:00 AM every night.",
      "To take an immediate safety copy before year-end closing, click 'Create Manual Snapshot'.",
      "Verify that the backup file size matches the database average and is marked 'Successful'.",
      "Every three months, test restoration in the sandbox test server to guarantee data integrity."
    ],
    commonMistakes: [
      {
        mistake: "Automated nightly backup fails with 'Storage Quota' alert",
        cause: "Cloud backup storage volume reached 100% capacity.",
        quickFix: "Archive backups older than 180 days to cold storage or increase cloud storage allocation."
      },
      {
        mistake: "Manual backup interrupted midway",
        cause: "Triggered during peak daytime hours with high sales invoice volume.",
        quickFix: "Run manual backup operations during low-traffic windows or lunch breaks."
      }
    ],
    embedUrl: "",
    viewerUrl: "https://sop.cinawaylogistics.com/#/backup",
    status: "upcoming",
    roles: [
      { name: "DevOps Engineer", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300" },
      { name: "System Administrator", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300" }
    ],
    estimatedMinutes: 8,
    lastAudited: "Pending Publication"
  }
];

export const getModuleBySlug = (slug: string): SopModule | undefined => {
  const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
  return SOP_REGISTRY.find(m => m.slug === cleanSlug);
};
