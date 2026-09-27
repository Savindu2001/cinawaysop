export interface SopRole {
  name: string;
  badgeClass: string;
}

export interface SopModule {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  sectionGroupId: string;
  simpleSummary: string;
  detailedGuide: string[];
  actionChecklist: string[];
  embedUrl: string;
  status: 'live' | 'upcoming';
  roles: SopRole[];
  estimatedMinutes: number;
  lastAudited: string;
  prerequisites?: string[];
  keyTips?: string[];
}

export const SOP_REGISTRY: SopModule[] = [
  {
    id: "route-operations",
    slug: "/day-to-day-routes",
    number: "SOP-LOG-01",
    title: "Daily Route Sales, Collections & Cashier Settlement",
    category: "Core Logistics & Sales",
    sectionGroupId: "logistics-sales",
    simpleSummary: "Learn how to record daily shop deliveries, collect cash or cheques from customers, and hand over the money to the cashier at the end of the day.",
    detailedGuide: [
      "Select your assigned delivery route and sales vehicle in the system before leaving the warehouse.",
      "Record shop arrivals, customer invoice handovers, and return item counts in real time.",
      "Collect cash, crossed cheques, or bank transfer slips for each bill delivered.",
      "At day end, return to the main cashier desk and complete the daily physical cash handover settlement.",
      "Confirm that system balances match physical cash, cheques, and returned inventory."
    ],
    actionChecklist: [
      "Confirm vehicle loading checklist and route manifest before morning dispatch",
      "Record delivery status for each outlet stop (Delivered / Partial / Rescheduled)",
      "Collect payment receipt reference numbers and enter cheque leaf details",
      "Hand over physical cash envelopes and cheques to the head cashier",
      "Receive printed Cashier Settlement Confirmation slip before clocking out"
    ],
    embedUrl: "https://scribehow.com/embed/End-to-End_Route_Operations_Daily_Sales_Collection_and_Cashier_Settlement__gf9AmhD2Rsqwhg6rAvssJw?as=scrollable",
    status: "live",
    roles: [
      { name: "Field Sales Rep", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300" },
      { name: "Cashier", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" },
      { name: "Logistics Supervisor", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026",
    prerequisites: ["Assigned route in ERP", "Active login PIN", "Loaded delivery manifest"],
    keyTips: ["Never accept post-dated cheques without written credit approval from the Financial Controller."]
  },
  {
    id: "expense-management",
    slug: "/expenses",
    number: "SOP-FIN-01",
    title: "Daily Expense Records & Bill Vouchers",
    category: "Finance & Accounting",
    sectionGroupId: "finance-accounting",
    simpleSummary: "Learn how to enter daily spending like fuel, vehicle repairs, and small office bills, attach photos of receipts, and send them for manager approval.",
    detailedGuide: [
      "Open the Expense Management module and select 'Create Expense Voucher'.",
      "Choose the appropriate spending category (Fuel, Vehicle Maintenance, Office Supplies, Travel, or Meals).",
      "Enter the exact amount paid, currency, payment method (Petty Cash, Cheque, or Bank Transfer), and tax details.",
      "Upload high-resolution camera photos or scans of the original physical receipt or invoice.",
      "Submit the voucher into the multi-tier approval workflow for department manager sign-off."
    ],
    actionChecklist: [
      "Verify that the physical paper receipt contains vendor name, date, and tax TIN",
      "Select the right vehicle registration number if recording fuel or maintenance",
      "Attach clear JPG/PNG/PDF receipt scan showing the full receipt edges",
      "Confirm ledger cost center allocation before final submission",
      "Track voucher approval status in the 'My Pending Approvals' dashboard"
    ],
    embedUrl: "https://scribehow.com/embed/Expense_Management__myFjp8TeTkm56wp9c9Djpw?as=scrollable",
    status: "live",
    roles: [
      { name: "Accountant", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" },
      { name: "Finance Manager", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" },
      { name: "All Staff", badgeClass: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" }
    ],
    estimatedMinutes: 5,
    lastAudited: "September 2026",
    prerequisites: ["Original physical vendor receipt", "Assigned department cost center"],
    keyTips: ["Expenses over Rs. 10,000 require pre-authorization from the Managing Director."]
  },
  {
    id: "fixed-assets",
    slug: "/fixed-assets",
    number: "SOP-FIN-02",
    title: "Registering Office Assets & Monthly Value Drop (Depreciation)",
    category: "Finance & Accounting",
    sectionGroupId: "finance-accounting",
    simpleSummary: "Guide to adding company vehicles, laptops, and machines into the system, assigning them to staff, and calculating monthly value loss.",
    detailedGuide: [
      "Access the Fixed Assets module and click 'Register Asset'.",
      "Input asset category (Motor Vehicles, IT Equipment, Office Furniture, Plant & Machinery).",
      "Tag serial numbers, chassis numbers, purchase date, cost value, and physical location.",
      "Assign the custodian employee responsible for the asset's security and maintenance.",
      "Run the monthly automated straight-line or diminishing depreciation calculation batch."
    ],
    actionChecklist: [
      "Print and affix the official Cinaway barcoded asset sticker to the physical item",
      "Record vendor invoice reference and warranty expiration period",
      "Assign the custodian staff member and obtain digital sign-off handover",
      "Run end-of-month depreciation batch job before finalizing balance sheet",
      "Perform quarterly physical asset verification against the registry ledger"
    ],
    embedUrl: "https://scribehow.com/embed/Fixed_Asset_Registration_Depreciation_and_Disposal__Vgoiko0-TCyVOBgRe0eadQ?as=scrollable",
    status: "live",
    roles: [
      { name: "Senior Accountant", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" },
      { name: "Admin Officer", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" }
    ],
    estimatedMinutes: 7,
    lastAudited: "September 2026",
    prerequisites: ["Purchase invoice", "Equipment serial number", "Barcode sticker"],
    keyTips: ["Assets valued under Rs. 15,000 are expensed immediately as consumable tools."]
  },
  {
    id: "all-reports",
    slug: "/reports",
    number: "SOP-FIN-03",
    title: "Viewing & Exporting Business Reports",
    category: "Finance & Accounting",
    sectionGroupId: "finance-accounting",
    simpleSummary: "How to open company reports for sales, staff, and money, choose which columns you want to see, and download files as PDF or Excel.",
    detailedGuide: [
      "Navigate to the centralized All Reports Hub from the sidebar.",
      "Select your required report domain (Sales Performance, Inventory Movement, Debtor Aging, or HR Payroll).",
      "Filter data by date ranges, specific sales reps, branch warehouses, or vehicle routes.",
      "Customize table visibility by toggling display columns on or off.",
      "Export reports directly to formatted PDF or raw Excel (.xlsx) files for executive presentation."
    ],
    actionChecklist: [
      "Set beginning and ending fiscal dates accurately",
      "Verify filter criteria (e.g. including/excluding canceled transactions)",
      "Select appropriate currency conversion if viewing international vendor reports",
      "Preview data on screen before executing export download",
      "Save exported files using standardized company naming conventions"
    ],
    embedUrl: "https://scribehow.com/embed/Accessing_Reports_in_Cinaway_ERP___uhnrreLTcCUYZKNw799eg?as=scrollable",
    status: "live",
    roles: [
      { name: "Management", badgeClass: "bg-sky-100 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300" },
      { name: "Financial Controller", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" },
      { name: "Auditors", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" }
    ],
    estimatedMinutes: 4,
    lastAudited: "September 2026",
    prerequisites: ["Report viewer permissions assigned in user role"],
    keyTips: ["Use Excel export for pivoting data; use PDF export when sharing with bank managers or auditors."]
  },
  {
    id: "customer-collections",
    slug: "/collections",
    number: "SOP-LOG-02",
    title: "Receiving Customer Payments & Settling Bills",
    category: "Core Logistics & Sales",
    sectionGroupId: "logistics-sales",
    simpleSummary: "How to enter money received from shops, match payments with open bills, handle discounts, and record advance payments.",
    detailedGuide: [
      "Open the Collections & Receivables interface and look up the customer shop.",
      "Review the customer's outstanding invoices and aged debt balance.",
      "Allocate the incoming payment against specific invoice line items (knock-off allocation).",
      "Apply pre-approved early settlement prompt payment discounts if applicable.",
      "Record any unallocated balance as a Customer Advance against future orders."
    ],
    actionChecklist: [
      "Search outlet name or unique outlet code to verify customer ledger",
      "Compare payment bank slip or cheque leaf image against physical bank alert",
      "Apply payment knock-off strictly from oldest invoice to newest (FIFO basis)",
      "Verify discount percentage conforms to client credit agreement policy",
      "Issue automated SMS receipt notification to shop owner upon completion"
    ],
    embedUrl: "https://scribehow.com/embed/Receivable_Collections_Payment_Knock-Off_Discounts_and_Advance_Settlements_in_Cinaway_ERP__U4W7Mi5kQ_ausM8EiQRT5Q?as=scrollable",
    status: "live",
    roles: [
      { name: "Credit Controller", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" },
      { name: "Accounts Receivable", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" },
      { name: "Sales Rep", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300" }
    ],
    estimatedMinutes: 8,
    lastAudited: "September 2026",
    prerequisites: ["Bank credit confirmation or physically validated cheque leaf"],
    keyTips: ["Always double-check cheque clearance dates before releasing credit hold on high-value accounts."]
  },
  {
    id: "staff-payroll",
    slug: "/payroll",
    number: "SOP-HR-01",
    title: "Monthly Staff Salaries, Loans & Government Funds",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    simpleSummary: "How to calculate monthly employee pay, deduct salary loans and advances, and process EPF and ETF contributions.",
    detailedGuide: [
      "Access HR Management and open the Monthly Payroll run for the current pay period.",
      "Import verified biometric attendance logs to compute working days, overtime, and unpaid leaves.",
      "Check automatic deductions: staff loan installments, mid-month salary advances, and canteen expenses.",
      "Verify statutory calculations: Employee EPF (8%), Employer EPF (12%), and Employer ETF (3%).",
      "Finalize pay slips and submit batch for managing director authorization."
    ],
    actionChecklist: [
      "Lock attendance data on the 25th of the calendar month",
      "Review employee advance ledger and deduct recurring loan installments",
      "Verify tax withholding (APIT) thresholds against national inland revenue guidelines",
      "Generate draft payroll summary and reconcile variance against previous month",
      "Publish employee digital pay slips to email or employee portal"
    ],
    embedUrl: "https://scribehow.com/embed/End-to-End_Payroll_Lifecycle_Staff_Advances_Loans_and_Statutory_Processing_in_Cinaway_ERP__0Kd6niXQSXWj2m9lDBWJgA?as=scrollable",
    status: "live",
    roles: [
      { name: "HR Manager", badgeClass: "bg-teal-100 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300" },
      { name: "Payroll Executive", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" },
      { name: "Finance Director", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" }
    ],
    estimatedMinutes: 9,
    lastAudited: "September 2026",
    prerequisites: ["Approved biometric attendance", "Loan ledger reconciliation"],
    keyTips: ["Run payroll test simulation 3 days prior to salary release to catch missing tax numbers."]
  },
  {
    id: "leave-applications",
    slug: "/leaves",
    number: "SOP-HR-02",
    title: "Staff Leave Requests & Manager Approval",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    simpleSummary: "How staff can request leave days, how managers check leave balances, and how to approve or reject requests.",
    detailedGuide: [
      "Employees log in to their profile and click 'Apply for Leave'.",
      "Select leave classification (Annual Leave, Casual Leave, Medical Leave, or Duty Leave).",
      "Pick start/end dates, specify half-day or full-day, and provide operational reasoning or medical certificates.",
      "The designated department head receives an instant system notification and email alert.",
      "Manager reviews department shift coverage and approves or declines with written remarks."
    ],
    actionChecklist: [
      "Check that employee has remaining accrued days in their annual quota",
      "Attach doctor's medical certificate for sick leaves exceeding 2 continuous days",
      "Ensure minimum warehouse/fleet operational crew coverage before granting leave",
      "Notify acting cover person for operational responsibilities",
      "Verify leave status reflects in the monthly payroll attendance calculation"
    ],
    embedUrl: "https://scribehow.com/embed/Leave_Configuration_Staff_Applications_and_Approval_Workflows_in_Cinaway_ERP___X32c-tPQoC8BuQ2DnQjTw?as=scrollable",
    status: "live",
    roles: [
      { name: "All Employees", badgeClass: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" },
      { name: "Department Heads", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" },
      { name: "HR Officer", badgeClass: "bg-teal-100 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300" }
    ],
    estimatedMinutes: 4,
    lastAudited: "September 2026",
    prerequisites: ["Configured annual leave entitlement balance"],
    keyTips: ["Urgent casual leaves must be submitted within 24 hours of returning to duty."]
  },
  {
    id: "employee-onboarding",
    slug: "/add-employee",
    number: "SOP-HR-03",
    title: "Adding New Employees & Setting Up Profiles",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    simpleSummary: "How to register a new hire, fill in identity and bank account numbers, upload job documents, and create system login details.",
    detailedGuide: [
      "From Human Resources, click 'Add Employee' to initiate the master registration wizard.",
      "Fill in personal data: full name, National Identity Card (NIC) number, contact numbers, and residential address.",
      "Enter statutory bank account details for salary wire transfer and assign an EPF registration number.",
      "Upload digital attachments: NIC copy, birth certificate, driving license (for drivers), and signed appointment letter.",
      "Assign job title, department, reporting supervisor, and generate ERP login credentials."
    ],
    actionChecklist: [
      "Verify NIC number against original physical government identity card",
      "Confirm employee bank account number, bank code, and branch code accurately",
      "Set correct employment type (Permanent / Probation / Contract / Intern)",
      "Enroll employee biometric ID code into fingerprint scanner device",
      "Assign security role permissions corresponding to their job description"
    ],
    embedUrl: "https://scribehow.com/embed/Employee_Onboarding_Profile_Configuration_and_Access_Delegation_in_Cinaway_ERP__LyjgT4r_RF2xJtod0DWjGA?as=scrollable",
    status: "live",
    roles: [
      { name: "HR Executive", badgeClass: "bg-teal-100 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300" },
      { name: "IT Administrator", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026",
    prerequisites: ["Signed employment contract", "Verified bank passbook copy", "Valid NIC scan"],
    keyTips: ["Drivers must have heavy vehicle commercial licenses checked on government portal."]
  },
  {
    id: "user-roles",
    slug: "/user-roles",
    number: "SOP-ADM-01",
    title: "User Permissions & Staff Access Rights",
    category: "Settings & Administration",
    sectionGroupId: "settings-admin",
    simpleSummary: "How to give staff correct screen access (such as Salesperson, Cashier, or Admin) so they only see the pages they need.",
    detailedGuide: [
      "Open Settings & Administration > User Roles & Access Control.",
      "Create or edit a predefined role (e.g. Sales Representative, Warehouse Staff, Cashier, Auditor, Admin).",
      "Configure module permission flags: Read, Create, Edit, Delete, Export, or Approve.",
      "Restrict sensitive financial tabs (Profit margins, Payroll data, Statutory reports) from general staff.",
      "Assign the role to specific user profiles and enforce 2-Factor Authentication where appropriate."
    ],
    actionChecklist: [
      "Apply Principle of Least Privilege: only grant access essential for daily duty",
      "Disable 'Delete' permissions on completed invoices and ledger vouchers for non-admin staff",
      "Require supervisor override for manual price discounts and credit limit extensions",
      "Audit quarterly user permissions log for terminated or transferred staff",
      "Deactivate inactive accounts after 30 days of inactivity"
    ],
    embedUrl: "https://scribehow.com/embed/User_Roles_and_Permission_Matrix_Configuration_in_Cinaway_ERP__lcadT9SqQa2bCVSpYyYtNA?as=scrollable",
    status: "live",
    roles: [
      { name: "System Administrator", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" },
      { name: "Chief Technology Officer", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" }
    ],
    estimatedMinutes: 7,
    lastAudited: "September 2026",
    prerequisites: ["Super Admin clearance credentials"],
    keyTips: ["Never share admin credentials; create separate named admin accounts for each system manager."]
  },
  {
    id: "signin-guide",
    slug: "/signin-guide",
    number: "SOP-ADM-02",
    title: "System Login, Password Reset & Safe Logout",
    category: "Settings & Administration",
    sectionGroupId: "settings-admin",
    simpleSummary: "Basic guide on how to log in safely, recover a lost password using email verification, and keep the user account secure.",
    detailedGuide: [
      "Open your web browser and go to the official portal at https://cinawaylogistics.com/signin.",
      "Enter your registered company email address and strong alphanumeric password.",
      "If you forget your password, click 'Forgot Password?' and check your corporate inbox for a one-time reset token.",
      "Always click 'Sign Out' when walking away from your workstation to protect company data.",
      "Change your password every 90 days to maintain maximum enterprise system security."
    ],
    actionChecklist: [
      "Confirm secure HTTPS padlock appears in your browser address bar",
      "Ensure passwords are at least 8 characters long with uppercase, numbers, and symbols",
      "Never save passwords on shared warehouse kiosk computers",
      "Check spam folder if password reset email does not arrive within 2 minutes",
      "Notify IT helpdesk immediately if you detect unauthorized login alerts"
    ],
    embedUrl: "https://scribehow.com/embed/User_Authentication_Session_Control_and_Password_Recovery_in_Cinaway_ERP__Ebt2yrKzSqGrttPTuPgZDA?as=scrollable",
    status: "live",
    roles: [
      { name: "All ERP Users", badgeClass: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" }
    ],
    estimatedMinutes: 3,
    lastAudited: "September 2026",
    prerequisites: ["Registered email address activated by Admin"],
    keyTips: ["Cinaway IT will never ask for your password via phone or WhatsApp message."]
  },
  {
    id: "fleet-vehicles",
    slug: "/vehicles",
    number: "SOP-FLT-01",
    title: "Company Vehicle Maintenance & Fleet Pay",
    category: "Fleet Operations",
    sectionGroupId: "fleet-operations",
    simpleSummary: "How to log company lorries and vans, track fuel bills, record workshop repairs, and process driver pay.",
    detailedGuide: [
      "Navigate to Fleet Operations > Vehicles & Fleet to view company transport assets.",
      "Register new lorries, vans, and three-wheelers with engine number, license class, and revenue license expiry.",
      "Enter daily fuel receipts with odometer readings to monitor fuel efficiency (km/liter).",
      "Schedule preventive maintenance servicing (oil change, tyre replacement, brake shoe renewal).",
      "Process driver route allowances and trip incentive payments based on verified delivery performance."
    ],
    actionChecklist: [
      "Verify vehicle odometer reading on fuel pump receipts before logging fuel entry",
      "Set alert threshold 14 days before vehicle revenue license and insurance expiration",
      "Attach garage repair quote and obtain Fleet Manager signature prior to major overhauls",
      "Perform weekly safety tire pressure and fluid level inspections",
      "Calculate driver monthly delivery commissions based on successfully delivered cartons"
    ],
    embedUrl: "https://scribehow.com/embed/Managing_Vehicle_Operations_And_Payroll_In_Fleet_Management_System_Copy__nCG15VbyTdCcH5gZQAl7Sg?as=scrollable",
    status: "live",
    roles: [
      { name: "Fleet Manager", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300" },
      { name: "Transport Officer", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" },
      { name: "Driver", badgeClass: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" }
    ],
    estimatedMinutes: 7,
    lastAudited: "September 2026",
    prerequisites: ["Vehicle registration documents", "Service history book"],
    keyTips: ["Vehicles overdue for mechanical servicing are automatically blocked from route assignment."]
  },
  {
    id: "notifications",
    slug: "/notifications",
    number: "SOP-ADM-03",
    title: "Sending SMS & Email Alerts to Customers and Staff",
    category: "Settings & Administration",
    sectionGroupId: "settings-admin",
    simpleSummary: "How to send delivery alerts and payment reminders to shop owners via SMS, and email notices to internal teams.",
    detailedGuide: [
      "Open Settings & Administration > Notifications (SMS & Email dispatch).",
      "Select message channel: Bulk SMS Gateway or Corporate SMTP Email server.",
      "Choose target recipient group (All Outlets in Route 04, Overdue Debtors, Warehouse Staff, or All Employees).",
      "Use dynamic merge tags like {{shop_name}}, {{amount_due}}, {{delivery_date}}, and {{invoice_id}}.",
      "Review campaign cost credits and dispatch messages with automated delivery receipt tracking."
    ],
    actionChecklist: [
      "Check remaining SMS gateway credits before launching large bulk customer broadcasts",
      "Test merge tags with a single sample phone number before sending full broadcast",
      "Ensure outbound marketing messages comply with national customer communication time windows (8 AM - 8 PM)",
      "Include opt-out or helpline contact number on all customer billing reminders",
      "Review delivery logs to identify bounced numbers or failed transmissions"
    ],
    embedUrl: "https://scribehow.com/embed/Multi-Channel_Notification_Center_Single_and_Bulk_SMSEmail_Dispatch_in_Cinaway_ERP_Copy__lDnJAm_XRamJVEVM1uGPSA?as=scrollable",
    status: "live",
    roles: [
      { name: "Marketing Coordinator", badgeClass: "bg-pink-100 text-pink-800 dark:bg-pink-950/40 dark:text-pink-300" },
      { name: "Operations Supervisor", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" },
      { name: "Credit Controller", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" }
    ],
    estimatedMinutes: 5,
    lastAudited: "September 2026",
    prerequisites: ["Configured SMS gateway API key", "Verified mobile numbers in outlet records"],
    keyTips: ["Bulk payment reminders send between 9 AM and 11 AM yield highest recovery rates."]
  },
  {
    id: "outlets-directory",
    slug: "/outlets",
    number: "SOP-LOG-03",
    title: "Registering Shops (Outlets) & Managing Shop Balances",
    category: "Core Logistics & Sales",
    sectionGroupId: "logistics-sales",
    simpleSummary: "How to add new shops, import bulk store lists from Excel, and check each shop's ledger balance.",
    detailedGuide: [
      "Navigate to Core Logistics & Sales > Outlets Directory.",
      "Click 'Add Outlet' to register a single retailer with shop name, owner contact, GPS coordinates, and route assignment.",
      "Or use 'Bulk Ingestion' to upload a standardized Excel spreadsheet of hundreds of retail outlets.",
      "Configure credit terms: maximum credit limit (e.g. Rs. 150,000) and allowed credit days (e.g. 14 days or 21 days).",
      "Inspect the live customer sub-ledger to see historical invoices, collected cheques, and return notes."
    ],
    actionChecklist: [
      "Capture exact retail shop name as indicated on business registration or sign board",
      "Pinpoint location using mobile GPS or Google Maps pin to optimize driver route sequencing",
      "Verify owner's active mobile number for automated delivery SMS notifications",
      "Set conservative credit limit for first 3 months before reviewing repayment track record",
      "Assign correct delivery territory and weekly visit day (e.g. Monday & Thursday)"
    ],
    embedUrl: "https://scribehow.com/embed/Outlets_Directory_Bulk_Ingestion_and_Automated_Customer_Ledger_Management_in_Cinaway_ERP_Copy__dXjJ2FHyQeeW8bTpIunyew?as=scrollable",
    status: "live",
    roles: [
      { name: "Territory Sales Executive", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300" },
      { name: "Sales Operations Manager", badgeClass: "bg-sky-100 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026",
    prerequisites: ["Shop visit form with GPS coordinates", "Owner NIC and telephone number"],
    keyTips: ["Duplicate outlet phone numbers prevent automated SMS delivery—always check before creating."]
  },
  {
    id: "products-inventory",
    slug: "/products",
    number: "SOP-SCM-01",
    title: "Product Master List & Stock Updates",
    category: "Supply Chain",
    sectionGroupId: "supply-chain",
    simpleSummary: "How to add new sale items, update warehouse stock quantities, and import item price lists.",
    detailedGuide: [
      "Go to Supply Chain > Inventory > Products Master List.",
      "Register new stock keeping units (SKUs) with universal barcode, unit of measure (Cartons/Pieces), and brand hierarchy.",
      "Set wholesale price, maximum retail price (MRP), and dealer discount tier matrices.",
      "Perform physical inventory stock adjustments with documented adjustment reasons (Damage, Breakage, Expiry, or Found Stock).",
      "Use barcode batch scanning to quickly audit physical stock counts against virtual system ledgers."
    ],
    actionChecklist: [
      "Assign correct manufacturer product code and barcode (EAN-13)",
      "Specify carton inner quantity packaging (e.g., 24 units per master case)",
      "Set minimum reorder threshold level to trigger automated purchase replenishment alerts",
      "Submit inventory adjustment vouchers for dual-approval before changing warehouse ledger totals",
      "Run quarterly inventory reconciliation to ensure warehouse balance sheet alignment"
    ],
    embedUrl: "https://scribehow.com/embed/Products_Master_Stock_Adjustments_and_Bulk_Ingestion_in_Cinaway_ERP_Copy__ol-6d6dSRVKpoO1PBE7NCg?as=scrollable",
    status: "live",
    roles: [
      { name: "Warehouse Manager", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" },
      { name: "Inventory Controller", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" }
    ],
    estimatedMinutes: 8,
    lastAudited: "September 2026",
    prerequisites: ["Product catalog specification sheet", "Official distributor price list"],
    keyTips: ["Always verify whether prices entered are inclusive or exclusive of Value Added Tax (VAT)."]
  },
  {
    id: "sales-invoicing",
    slug: "/sales",
    number: "SOP-LOG-04",
    title: "Creating Sales Invoices & Checking Warehouse Stock",
    category: "Core Logistics & Sales",
    sectionGroupId: "logistics-sales",
    simpleSummary: "How to issue bills to customers, confirm products sold, and check that stock counts reduce properly.",
    detailedGuide: [
      "Open Core Logistics & Sales > Sales Invoices.",
      "Select outlet shop name; system automatically pulls active credit terms and outstanding balance.",
      "Add SKU line items, specify order quantities, and view real-time warehouse available-to-promise inventory.",
      "Apply contractual trade promotions, free issue deals, and approved cash discount percentages.",
      "Authorize invoice to auto-deduct warehouse stock inventory and generate legal printable 3-part delivery tax invoice."
    ],
    actionChecklist: [
      "Check outlet credit ceiling before completing invoice creation",
      "Confirm stock lot batch expiry date is minimum 90 days out before dispatching food items",
      "Apply applicable promo schemes (e.g. Buy 10 Cartons Get 1 Free)",
      "Generate 3 physical printed invoice copies: Customer Copy, Accounts Copy, and Store Gatepass Copy",
      "Confirm inventory ledger deducts quantity in real time upon invoice approval"
    ],
    embedUrl: "https://scribehow.com/embed/Sales_Summary_Ingestion_Item-Wise_Billing_and_Inventory_Reconciliations_in_Cinaway_ERP_Copy__GiS7YpXgTB2oTTbePd7yiw?as=scrollable",
    status: "live",
    roles: [
      { name: "Billing Clerk", badgeClass: "bg-sky-100 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300" },
      { name: "Sales Coordinator", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300" },
      { name: "Storekeeper", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026",
    prerequisites: ["Active customer account", "Available inventory stock in warehouse location"],
    keyTips: ["System will block billing if customer has overdue invoices older than 45 days."]
  },
  {
    id: "initial-setup",
    slug: "/initial-setup",
    number: "SOP-ADM-04",
    title: "First-Time System Setup & Admin Profile",
    category: "Settings & Administration",
    sectionGroupId: "settings-admin",
    simpleSummary: "First-day guide for company setup, adding company name, contact numbers, and creating the main admin account.",
    detailedGuide: [
      "Access the initial deployment configuration screen during initial ERP installation.",
      "Enter legal enterprise profile: Cinaway Logistics legal entity name, corporate address, and VAT registration TIN.",
      "Upload high-resolution vector corporate logos for automated invoice headers and dispatch notes.",
      "Define operating currency (LKR / USD), fiscal calendar year start/end dates, and default tax rates.",
      "Configure the root Master Administrator account with multi-factor authentication credentials."
    ],
    actionChecklist: [
      "Verify company corporate registration number with Department of Registrar of Companies",
      "Upload clean transparent PNG logo formatted at 400x120 pixels for high-DPI document printing",
      "Set standard operating warehouse time zone (Asia/Colombo UTC+05:30)",
      "Configure company bank accounts for receiving customer direct remittances",
      "Store master super-admin recovery keyphrase in the corporate physical fireproof safe"
    ],
    embedUrl: "https://scribehow.com/embed/Initial_System_Initialization_and_First_Administrator_Onboarding_in_Cinaway_ERP_Copy__T-kGxV7pREqdDKLU6nWSOA?as=scrollable",
    status: "live",
    roles: [
      { name: "Managing Director", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" },
      { name: "Implementation Consultant", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" }
    ],
    estimatedMinutes: 10,
    lastAudited: "September 2026",
    prerequisites: ["Corporate legal papers", "TIN certificate", "Bank mandate documentation"],
    keyTips: ["Once company registration number is locked in, changes require written database audit request."]
  },
  {
    id: "attendance-biometric",
    slug: "/attendance",
    number: "SOP-HR-04",
    title: "Daily Staff Attendance & Biometric Fingerprint Import",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    simpleSummary: "How to import attendance records from fingerprint machines, mark manual attendance, and view daily late arrivals.",
    detailedGuide: [
      "Open Human Resources > Attendance > Biometric Import module.",
      "Connect to networked warehouse fingerprint and facial recognition scanners or upload device .dat/.csv files.",
      "Execute automated time reconciliation to pair clock-in and clock-out timestamps for each employee.",
      "Review exception alerts: late arrivals, half days, early departures, and missing punches.",
      "Submit manual attendance correction vouchers with managerial approvals for off-site field sales reps."
    ],
    actionChecklist: [
      "Perform daily biometric sync every morning by 10:00 AM",
      "Flag and investigate employees with single in-punch or missing out-punch",
      "Match field staff location check-ins against mobile sales GPS tracking logs",
      "Apply official grace period rules (e.g. 15 minutes grace past official 8:30 AM shift start)",
      "Approve overtime hours for warehouse night-loading crew prior to payroll calculation"
    ],
    embedUrl: "https://scribehow.com/embed/Employee_Attendance_Tracking_and_Biometric_Import_Management_in_Cinaway_ERP_Copy__baxr3ccQTJSe-lZkFu3kMA?as=scrollable",
    status: "live",
    roles: [
      { name: "HR Executive", badgeClass: "bg-teal-100 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300" },
      { name: "Timekeeper", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" }
    ],
    estimatedMinutes: 5,
    lastAudited: "September 2026",
    prerequisites: ["Biometric device network connectivity", "Active employee fingerprint registration"],
    keyTips: ["Fingerprint device time clocks must sync with the national NTP time server every 24 hours."]
  },
  {
    id: "boc-prn-file",
    slug: "/boc-prn-generation",
    number: "SOP-HR-05",
    title: "Creating Bank Salary Transfer (BOC PRN) Files",
    category: "Human Resources",
    sectionGroupId: "human-resources",
    simpleSummary: "How to generate the official Bank of Ceylon PRN file from monthly payroll to pay staff salaries directly via online banking.",
    detailedGuide: [
      "After final payroll approval, navigate to HR Management > BOC PRN Generation.",
      "Select approved payroll batch period and verify total bank disbursement sum against payroll summary.",
      "System validates Bank of Ceylon account formatting (10 to 12 digits, valid branch codes).",
      "Click 'Generate BOC PRN File' to download encrypted bank-compliant ASCII flat file.",
      "Upload file into Bank of Ceylon Corporate Online Banking portal for multi-authorization release."
    ],
    actionChecklist: [
      "Verify that all newly onboarded staff have verified BOC account and branch codes",
      "Confirm net pay total matches certified payroll journal entry",
      "Download generated .PRN / .TXT batch file directly into secure accounting directory",
      "Log in to BOC Corporate Banking and upload file under 'Bulk File Upload - Payroll'",
      "Notify authorized signatories (Managing Director & CFO) for token authentication"
    ],
    embedUrl: "https://scribehow.com/embed/Bank_of_Ceylon_BOC_Bulk_PRN_File_Generation_and_Electronic_Salary_Transfer_in_Cinaway_ERP_Copy__YzlhX_uNSOGHul1XLrifug?as=scrollable",
    status: "live",
    roles: [
      { name: "Payroll Accountant", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" },
      { name: "Finance Director", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" }
    ],
    estimatedMinutes: 5,
    lastAudited: "September 2026",
    prerequisites: ["Authorized monthly payroll run", "Valid BOC Corporate Internet Banking account"],
    keyTips: ["Never edit the PRN file in text editor after generation—it will break strict bank checksums!"]
  },
  {
    id: "suppliers-creditors",
    slug: "/suppliers",
    number: "SOP-SCM-02",
    title: "Supplier Directory & Payment Terms",
    category: "Supply Chain",
    sectionGroupId: "supply-chain",
    simpleSummary: "How to register product vendors, view how much money is owed to each vendor, and review payment due dates.",
    detailedGuide: [
      "Navigate to Supply Chain > Suppliers Directory.",
      "Create vendor records: company name, commercial registration number, business address, and contact executives.",
      "Record vendor bank account details, accepted currencies, and agreed credit terms (e.g. Net 30, Net 60).",
      "Inspect supplier trade creditor sub-ledgers to monitor outstanding invoices, debit notes, and payment history.",
      "Generate Vendor Aged Payable reports to plan upcoming treasury cash flow requirements."
    ],
    actionChecklist: [
      "Obtain certified vendor registration certificate and VAT registration confirmation",
      "Record commercial sales representative contact details for emergency order follow-ups",
      "Set payment reminder alerts 7 days prior to invoice maturity due dates",
      "Reconcile monthly supplier statements against internal ERP accounts payable ledgers",
      "Process vendor credit notes for returned damaged shipments promptly"
    ],
    embedUrl: "https://scribehow.com/embed/Suppliers_Master_Directory_Trade_Creditor_Sub-Ledgers_and_Payment_Terms_in_Cinaway_ERP_Copy__03qU9lffTgaKRaRxc0cQsQ?as=scrollable",
    status: "live",
    roles: [
      { name: "Procurement Officer", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" },
      { name: "Accounts Payable", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" }
    ],
    estimatedMinutes: 6,
    lastAudited: "September 2026",
    prerequisites: ["Supplier contract agreement", "Verified vendor bank details"],
    keyTips: ["Always match supplier monthly statement with warehouse Good Received Notes (GRN) before paying."]
  },
  {
    id: "purchases-returns",
    slug: "/purchases",
    number: "SOP-SCM-03",
    title: "Purchase Bills & Damaged Stock Returns",
    category: "Supply Chain",
    sectionGroupId: "supply-chain",
    simpleSummary: "How to enter supplier purchase invoices, receive items into warehouse stock, and return damaged goods.",
    detailedGuide: [
      "Open Supply Chain > Purchases & Returns module.",
      "Create Purchase Order (PO) and dispatch to product vendor with agreed unit prices and delivery timelines.",
      "Upon delivery truck arrival, receive goods against PO by generating a Good Received Note (GRN).",
      "Inspect delivered stock for damaged cartons, seal tampering, or near-expiry batches.",
      "Create Purchase Return Debit Notes for rejected goods to instantly credit supplier ledger balances."
    ],
    actionChecklist: [
      "Verify delivered cartons match vendor physical delivery order before driver departs",
      "Log batch numbers and expiration dates during GRN goods intake",
      "Quarantine broken, dented, or contaminated items in designated returns holding zone",
      "Obtain delivery driver signature on rejected stock return note",
      "Confirm stock increase in warehouse bins corresponds to exact accepted GRN quantity"
    ],
    embedUrl: "https://scribehow.com/embed/Procurement_Lifecycle_Bulk_Purchase_Ingestion_and_Return_Reconciliations_in_Cinaway_ERP_Copy__vascJ054SLmzANloNUagzQ?as=scrollable",
    status: "live",
    roles: [
      { name: "Storekeeper", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" },
      { name: "Warehouse Supervisor", badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" },
      { name: "Purchasing Manager", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" }
    ],
    estimatedMinutes: 8,
    lastAudited: "September 2026",
    prerequisites: ["Approved Purchase Order", "Vendor delivery challan and invoice"],
    keyTips: ["Stock batches with under 6 months shelf life must not be accepted without written General Manager clearance."]
  },
  {
    id: "chart-of-accounts",
    slug: "/chart-of-accounts",
    number: "SOP-FIN-04",
    title: "General Accounting & Chart of Accounts Setup",
    category: "Finance & Accounting",
    sectionGroupId: "finance-accounting",
    simpleSummary: "Accounting structure guide for setting up ledger accounts, profit and loss, and balance sheets. [Scribe link updating soon]",
    detailedGuide: [
      "Access Finance & Accounting > Chart of Accounts.",
      "Explore 5 root accounting classes: Assets (1000s), Liabilities (2000s), Equity (3000s), Revenue (4000s), and Expenses (5000s).",
      "Create sub-ledger accounts for specific banks, regional petty cash funds, and departmental cost centers.",
      "Configure tax liability accounts for Value Added Tax (VAT) and Social Security Contribution Levy (SSCL).",
      "Review automated trial balance mapping to ensure balanced debit/credit posting for all automated journal entries."
    ],
    actionChecklist: [
      "Review account coding structure with Senior Chartered Accountant",
      "Verify default accounts for Accounts Receivable, Accounts Payable, and Inventory Valuation",
      "Lock parent summary accounts against direct manual journal entries",
      "Confirm fiscal year rollover settings before closing fiscal year books",
      "Audit Trial Balance report monthly to ensure Zero Out-of-Balance variance"
    ],
    embedUrl: "",
    status: "upcoming",
    roles: [
      { name: "Chief Financial Officer", badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300" },
      { name: "Senior Accountant", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" }
    ],
    estimatedMinutes: 10,
    lastAudited: "Pending Publication",
    prerequisites: ["Chartered Accounting qualification or CFO administrative delegation"],
    keyTips: ["Interactive Scribe walkthrough is currently undergoing final audit review and will be linked shortly."]
  },
  {
    id: "system-backup",
    slug: "/backup",
    number: "SOP-ADM-05",
    title: "Database Backup & Safety Archive",
    category: "Settings & Administration",
    sectionGroupId: "settings-admin",
    simpleSummary: "How to download safety backups of system data and keep records safe. [Scribe link updating soon]",
    detailedGuide: [
      "Navigate to Settings & Administration > System Settings & Backup.",
      "Configure daily automated hot database snapshots scheduled during low-traffic hours (2:00 AM daily).",
      "Execute manual on-demand point-in-time database backup prior to major fiscal year closing or server upgrades.",
      "Verify automated cloud synchronization to secondary geographically isolated offsite backup vaults.",
      "Conduct quarterly disaster recovery restoration drill in the staging sandbox environment."
    ],
    actionChecklist: [
      "Confirm active backup storage quota on primary cloud storage bucket",
      "Verify encrypted AES-256 backup archives are generating without corruption",
      "Test sandbox restoration drill every 90 days to guarantee Recovery Time Objective (RTO < 2 hrs)",
      "Maintain offline cold storage copy on encrypted physical media for regulatory compliance",
      "Inspect database error logs daily for replication warnings"
    ],
    embedUrl: "",
    status: "upcoming",
    roles: [
      { name: "DevOps Engineer", badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" },
      { name: "System Administrator", badgeClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" }
    ],
    estimatedMinutes: 8,
    lastAudited: "Pending Publication",
    prerequisites: ["Root server infrastructure access permissions"],
    keyTips: ["Interactive Scribe walkthrough is currently being recorded and will be linked soon."]
  }
];

export const getModuleBySlug = (slug: string): SopModule | undefined => {
  const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
  return SOP_REGISTRY.find(m => m.slug === cleanSlug);
};
