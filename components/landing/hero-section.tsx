"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MonitorPlay, Layers, Cpu, Sparkles, Star, Users, CheckCircle } from "lucide-react"

const floatingStats = [
  { icon: CheckCircle, value: "50+", label: "Đồ án hoàn thành" },
  { icon: Users, value: "99+", label: "Khách hàng" },
  { icon: Star, value: "4.9", label: "Đánh giá" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-24 overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl mix-blend-screen" />
      <div className="absolute bottom-1/4 right-10 w-[30rem] h-[30rem] bg-[#2563EB]/10 rounded-full blur-3xl mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-fade-in-up stagger-1">
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-medium text-[#caddff]">Giải pháp IT tối ưu cho bạn</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold display-heading text-[#F8FAFC] animate-fade-in-up stagger-2">
              Nhận làm tools/web/app <br />
              <span className="gradient-text">& bài tập, đồ án liên quan đến IT</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-xl leading-relaxed animate-fade-in-up stagger-3">
              Đội ngũ chất lượng cao, đồng hành cùng bạn giải quyết mọi vấn đề từ bài tập nhỏ đến hệ thống đồ án phức tạp. Đảm bảo tiến độ và chất lượng code.
            </p>

            <div className="flex items-center gap-4 text-sm font-medium text-[#64748B] animate-fade-in-up stagger-4 tabular-nums">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                <span>50+ đồ án</span>
              </div>
              <span>•</span>
              <span>99+ khách hàng</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>4.9/5.0</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-5">
              <Link href="https://www.facebook.com/hquang1705">
                <Button size="lg" className="gradient-bg text-white px-8 h-14 text-base font-medium rounded-xl press-effect hover-lift w-full sm:w-auto shadow-lg shadow-blue-500/20">
                  Trao đổi ngay
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="border-[#334155] text-[#F8FAFC] bg-transparent hover:bg-[#1E293B] px-8 h-14 text-base font-medium rounded-xl press-effect hover-lift w-full sm:w-auto">
                  Xem dịch vụ
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative hidden lg:block animate-fade-in-up stagger-4">
            {/* Main Developer Illustration */}
            <div className="relative z-10">
              <div className="w-full aspect-square max-w-lg mx-auto relative">
                {/* Central Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full gradient-bg opacity-[0.15] blur-3xl mix-blend-screen" />
                </div>

                {/* Code Window */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 glass-card rounded-2xl p-5 glow-blue hover-lift border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#334155]" />
                    <div className="w-3 h-3 rounded-full bg-[#334155]" />
                    <div className="w-3 h-3 rounded-full bg-[#334155]" />
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <p><span className="text-[#3B82F6]">const</span> <span className="text-[#F8FAFC]">project</span> = {"{"}</p>
                    <p className="pl-6"><span className="text-[#64748B]">architecture:</span> <span className="text-[#2563EB]">'microservices'</span>,</p>
                    <p className="pl-6"><span className="text-[#64748B]">status:</span> <span className="text-[#2563EB]">'delivered'</span>,</p>
                    <p className="pl-6"><span className="text-[#64748B]">grade:</span> <span className="text-[#F8FAFC]">9.5</span></p>
                    <p>{"}"}</p>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-8 left-12 glass p-3.5 rounded-2xl animate-bounce shadow-xl" style={{ animationDelay: '0s', animationDuration: '4s' }}>
                  <MonitorPlay className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div className="absolute top-24 right-8 glass p-3.5 rounded-2xl animate-bounce shadow-xl border-white/5" style={{ animationDelay: '1s', animationDuration: '4.5s' }}>
                  <Cpu className="w-6 h-6 text-[#60A5FA]" />
                </div>
                <div className="absolute bottom-24 left-16 glass p-3.5 rounded-2xl animate-bounce shadow-xl" style={{ animationDelay: '0.5s', animationDuration: '5s' }}>
                  <Layers className="w-6 h-6 text-[#2563EB]" />
                </div>
              </div>
            </div>

            {/* Floating Stat Cards */}
            {floatingStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`absolute glass rounded-2xl p-4 shadow-xl border-white/5 hover-lift ${index === 0 ? 'top-4 right-0' :
                  index === 1 ? 'bottom-[20%] left-0' :
                    'bottom-4 right-[20%]'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#F8FAFC] tabular-nums leading-none tracking-tight mb-1">{stat.value}</p>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#64748B]">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
