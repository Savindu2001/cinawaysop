import React, { useState, useMemo } from 'react';
import { 
  SIDEBAR_NAVIGATION, 
  NavGroup, 
  NavItem, 
  NavSubItem 
} from '../data/navigation';
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  LayoutDashboard, 
  Truck, 
  Receipt, 
  Store, 
  CircleDollarSign, 
  Package, 
  ShoppingBag, 
  Users2, 
  BookOpenCheck, 
  FileSpreadsheet, 
  Building2, 
  BarChart3, 
  UserCheck, 
  Fingerprint, 
  Coins, 
  CarFront, 
  ShieldCheck, 
  BellRing, 
  KeyRound, 
  Sparkles, 
  DatabaseBackup,
  X,
  FileText,
  Clock,
  Sparkle
} from 'lucide-react';

interface SidebarProps {
  activeSlug: string;
  onNavigate: (slug: string) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

// Icon mapping helper
const renderNavIcon = (name: string, className: string = "w-4 h-4") => {
  switch (name) {
    case 'LayoutDashboard': return <LayoutDashboard className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'Receipt': return <Receipt className={className} />;
    case 'Store': return <Store className={className} />;
    case 'CircleDollarSign': return <CircleDollarSign className={className} />;
    case 'Package': return <Package className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    case 'Users2': return <Users2 className={className} />;
    case 'BookOpenCheck': return <BookOpenCheck className={className} />;
    case 'FileSpreadsheet': return <FileSpreadsheet className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Fingerprint': return <Fingerprint className={className} />;
    case 'Coins': return <Coins className={className} />;
    case 'CarFront': return <CarFront className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'BellRing': return <BellRing className={className} />;
    case 'KeyRound': return <KeyRound className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'DatabaseBackup': return <DatabaseBackup className={className} />;
    default: return <FileText className={className} />;
  }
};

export const Sidebar: React.FC<SidebarProps> = ({
  activeSlug,
  onNavigate,
  mobileOpen,
  onCloseMobile,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Track open state for groups; default all open for effortless exploration
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupId: string) => {
    setCollapsedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  // Filter items if searching
  const filteredGroups = useMemo(() => {
    if (!searchTerm.trim()) return SIDEBAR_NAVIGATION;
    const term = searchTerm.toLowerCase();

    return SIDEBAR_NAVIGATION.map(group => {
      const matchingItems = group.items.filter(item => {
        const itemMatch = item.title.toLowerCase().includes(term) || item.slug.toLowerCase().includes(term);
        const subMatch = item.subItems?.some(s => s.title.toLowerCase().includes(term) || s.slug.toLowerCase().includes(term));
        return itemMatch || subMatch;
      });

      return {
        ...group,
        items: matchingItems
      };
    }).filter(group => group.items.length > 0);
  }, [searchTerm]);

  const handleSelect = (slug: string) => {
    onNavigate(slug);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Aside */}
      <aside 
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 md:w-80 bg-white dark:bg-[#0c121e] border-r border-slate-200 dark:border-slate-800/80 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        
        {/* Search Bar inside Sidebar */}
        <div className="p-3.5 border-b border-slate-100 dark:border-slate-800/80">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter ERP modules..."
              className="w-full pl-9 pr-8 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation Groups List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {filteredGroups.map(group => {
            const isCollapsed = collapsedGroups[group.id] && !searchTerm;
            return (
              <div key={group.id} className="space-y-1.5">
                
                {/* Section Header Button */}
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  className="w-full flex items-center justify-between px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                >
                  <span>{group.title}</span>
                  {isCollapsed ? (
                    <ChevronRight className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>

                {/* Items in this Section */}
                {!isCollapsed && (
                  <div className="space-y-1 pt-1">
                    {group.items.map(item => {
                      const isActive = activeSlug === item.slug;
                      return (
                        <div key={item.id} className="space-y-0.5">
                          
                          {/* Main Menu Item */}
                          <button
                            type="button"
                            onClick={() => handleSelect(item.slug)}
                            className={`w-full group flex items-center justify-between px-3 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${
                              isActive
                                ? 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold shadow-xs'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <span className={`${
                                isActive 
                                  ? 'text-emerald-600 dark:text-emerald-400' 
                                  : 'text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300'
                              }`}>
                                {renderNavIcon(item.iconName)}
                              </span>
                              <span className="truncate">{item.title}</span>
                            </div>

                            {/* Badge */}
                            {item.isUpcoming ? (
                              <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/40">
                                Pending
                              </span>
                            ) : isActive ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ring-2 ring-emerald-400/30" />
                            ) : null}
                          </button>

                          {/* Sub-items list (if any and matching/focused) */}
                          {item.subItems && item.subItems.length > 0 && (
                            <div className="ml-7 pl-2.5 border-l border-slate-200 dark:border-slate-800 space-y-0.5 py-0.5">
                              {item.subItems.map((sub, idx) => {
                                const isSubActive = activeSlug === sub.slug;
                                return (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleSelect(sub.slug)}
                                    className={`w-full text-left px-2 py-1 text-[11px] md:text-xs rounded transition-colors ${
                                      isSubActive
                                        ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                                    }`}
                                  >
                                    <span className="truncate flex items-center justify-between">
                                      <span>{sub.title}</span>
                                      {sub.isUpcoming && (
                                        <span className="text-[9px] text-amber-600 dark:text-amber-400">Soon</span>
                                      )}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>
                )}

              </div>
            );
          })}

          {filteredGroups.length === 0 && (
            <div className="p-4 text-center text-xs text-slate-400 dark:text-slate-500">
              No matching ERP SOP guides found for &quot;{searchTerm}&quot;
            </div>
          )}
        </div>

        {/* Sidebar Footer with Status */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-700 dark:text-slate-300">22 SOP Modules</span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">v2.4 Live</span>
        </div>

      </aside>
    </>
  );
};
