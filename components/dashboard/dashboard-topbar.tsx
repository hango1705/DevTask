"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DashboardTopbar() {
  return (
    <header className="h-16 border-b border-[#334155] bg-[#0F172A]/80 backdrop-blur-sm flex items-center justify-between px-6">
      {/* Search */}
      <div className="relative w-full max-w-md hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
        <Input
          type="search"
          placeholder="Tìm kiếm đơn hàng, tin nhắn..."
          className="pl-10 h-10 bg-[#1E293B]/50 border-[#334155] text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-auto">
        {/* User Avatar */}
        <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center cursor-pointer">
          <span className="text-white text-sm font-semibold">VA</span>
        </div>
      </div>
    </header>
  )
}
