"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  MessageSquare, 
  DollarSign, 
  Star, 
  FolderKanban, 
  Settings, 
  LogOut,
  ChevronLeft,
  Menu
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const mainNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin", badge: null },
  { icon: FileText, label: "Đơn Hàng", href: "/admin/orders", badge: "5" },
  { icon: Users, label: "Khách Hàng", href: "/admin/customers", badge: null },
  { icon: MessageSquare, label: "Tin Nhắn", href: "/admin/messages", badge: "8" },
  { icon: DollarSign, label: "Doanh Thu", href: "/admin/revenue", badge: null },
  { icon: Star, label: "Feedback", href: "/admin/feedback", badge: null },
  { icon: FolderKanban, label: "Dịch Vụ", href: "/admin/services", badge: null },
]

const bottomNavItems = [
  { icon: Settings, label: "Cài Đặt", href: "/admin/settings" },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass-card rounded-lg"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-[#F8FAFC]" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-[#0F172A] border-r border-[#334155] z-50 transition-all duration-300",
        isCollapsed ? "w-20" : "w-64",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo & Collapse Button */}
          <div className="flex items-center justify-between p-4 border-b border-[#334155]">
            <Link href="/admin" className={cn("flex items-center gap-2", isCollapsed && "justify-center")}>
              <img src="/logo.png" alt="DevTask Logo" className="w-12 h-12 rounded-xl object-contain flex-shrink-0" />
              {!isCollapsed && <span className="text-xl font-bold text-[#F8FAFC]">DevTask</span>}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-[#64748B] hover:text-[#F8FAFC] hover:bg-[#1E293B]"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ChevronLeft className={cn("w-5 h-5 transition-transform", isCollapsed && "rotate-180")} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#64748B] hover:text-[#F8FAFC] hover:bg-[#1E293B]"
              onClick={() => setIsMobileOpen(false)}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          {/* Admin Profile Mini */}
          <div className={cn(
            "p-4 border-b border-[#334155]",
            isCollapsed && "flex justify-center"
          )}>
            <div className={cn("flex items-center gap-3", isCollapsed && "flex-col")}>
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                <span className="text-white font-semibold">AD</span>
              </div>
              {!isCollapsed && (
                <div>
                  <p className="text-sm font-medium text-[#F8FAFC]">Admin</p>
                  <p className="text-xs text-[#64748B]">Quản trị viên</p>
                </div>
              )}
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all relative",
                    isActive 
                      ? "bg-[#1E293B] text-[#F8FAFC]" 
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]/50",
                    isCollapsed && "justify-center px-2"
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full gradient-bg" />
                  )}
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="text-sm">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto text-xs gradient-bg text-white px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  {isCollapsed && item.badge && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] gradient-bg text-white rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Divider */}
          <div className="mx-4 border-t border-[#334155]" />

          {/* Bottom Navigation */}
          <nav className="p-4 space-y-1">
            {bottomNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
                    isActive 
                      ? "bg-[#1E293B] text-[#F8FAFC]" 
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]/50",
                    isCollapsed && "justify-center px-2"
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span className="text-sm">{item.label}</span>}
                </Link>
              )
            })}
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-[#EF4444] hover:bg-[#EF4444]/10",
                isCollapsed && "justify-center px-2"
              )}
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm">Đăng Xuất</span>}
            </Link>
          </nav>
        </div>
      </aside>
    </>
  )
}
