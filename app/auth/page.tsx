"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User, Phone, CheckCircle, Component, Sparkles } from "lucide-react"

function AuthContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "register") {
      setActiveTab("register")
    }
  }, [searchParams])

  return (
    <div className="min-h-[100dvh] bg-[#0A0F1A] flex font-sans">
      
      {/* Left Panel - Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0A0F1A]">
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent mix-blend-screen" />
        <div className="absolute inset-0 dot-pattern opacity-30 mix-blend-screen" />
        <div className="absolute top-[30%] -left-[10%] w-[40rem] h-[40rem] bg-[#3B82F6]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 p-16 flex flex-col justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 w-max group">
            <img src="/logo.png" alt="DevTask Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-transform group-hover:scale-95" />
            <span className="text-2xl font-semibold tracking-tight text-[#F8FAFC]">DevTask</span>
          </Link>

          {/* Value Prop */}
          <div className="max-w-md mt-16 animate-fade-in-up stagger-1">
            <h1 className="text-4xl font-semibold tracking-tight text-[#F8FAFC] leading-tight mb-6">
              Trao gửi niềm tin, <br/>nhận về kết quả.
            </h1>
            <p className="text-lg text-[#94A3B8] leading-relaxed mb-12">
              Chúng mình làm việc như một team cross-functional. Frontend, Backend, AI. Từng dòng code đều được chăm chút cẩn thận để pass đồ án.
            </p>

            {/* Testimonial Snippet */}
            <blockquote className="relative glass border-[#334155]/50 rounded-2xl p-6">
               <div className="absolute -top-3 -left-3">
                 <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/30">
                   <Sparkles className="w-4 h-4 text-white" />
                 </div>
               </div>
               <p className="text-[#F8FAFC]/90 text-sm leading-relaxed mb-4">
                 "Dự án app Flutter tuần trước chạy rất mượt, anh bảo vệ được giáo viên tick A. Mọi người support cực kỳ trách nhiệm."
               </p>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1E293B] flex justify-center items-center text-xs font-semibold text-[#3B82F6] tracking-wider border border-[#334155]">HD</div>
                 <div className="flex flex-col">
                   <span className="text-sm font-medium text-[#F8FAFC]">Hải Đăng</span>
                   <span className="text-xs text-[#64748B]">Sinh viên KMA</span>
                 </div>
               </div>
            </blockquote>
          </div>

          <div className="mt-auto animate-fade-in-up stagger-4">
             <div className="flex items-center gap-6 text-sm tabular-nums text-[#64748B] font-medium">
               <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#22C55E]" /> Code sạch</span>
               <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#22C55E]" /> Chuẩn deadline</span>
               <span className="flex items-center gap-2"><Component className="w-4 h-4 text-[#22C55E]" /> Dễ maintain</span>
             </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 relative">
        <div className="w-full max-w-sm sm:max-w-md animate-fade-in-up">
          
          {/* Mobile Head */}
          <Link href="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <img src="/logo.png" alt="DevTask Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
            <span className="text-2xl font-semibold tracking-tight text-[#F8FAFC]">DevTask</span>
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] mb-2">
              {activeTab === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}
            </h2>
            <p className="text-[#94A3B8]">
              {activeTab === 'login' ? 'Nhập thông tin để tiếp tục tới Dashboard.' : 'Tạo tài khoản để tạo đơn hàng mới ngay lập tức.'}
            </p>
          </div>

          {/* Form Content */}
          <div className="relative">
            {activeTab === "login" && (
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#F8FAFC]">Email của bạn</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <Input
                      type="email"
                      placeholder="nhattan98@gmail.com"
                      className="pl-11 h-12 bg-[#0F172A] border-[#334155] rounded-xl text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-[#F8FAFC]">Mật khẩu</label>
                    <Link href="#" className="text-sm text-[#3B82F6] hover:text-[#2563EB] font-medium transition-colors">
                      Quên mật khẩu?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-11 pr-12 h-12 bg-[#0F172A] border-[#334155] rounded-xl text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#F8FAFC]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 gradient-bg text-white hover:opacity-90 transition-opacity font-medium rounded-xl press-effect shadow-lg shadow-blue-500/10 mt-2">
                  Đăng nhập
                </Button>

                <p className="text-center text-sm text-[#64748B] mt-6">
                  Chưa có tài khoản?{" "}
                  <button type="button" onClick={() => setActiveTab('register')} className="text-[#3B82F6] hover:text-[#2563EB] font-medium">
                    Đăng ký ngay
                  </button>
                </p>
              </form>
            )}

            {activeTab === "register" && (
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#F8FAFC]">Họ và tên</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <Input
                      type="text"
                      placeholder="Nhật Tân"
                      className="pl-11 h-12 bg-[#0F172A] border-[#334155] rounded-xl text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#F8FAFC]">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <Input
                      type="email"
                      placeholder="nhattan98@gmail.com"
                      className="pl-11 h-12 bg-[#0F172A] border-[#334155] rounded-xl text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#F8FAFC]">Số điện thoại Zalo</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <Input
                      type="tel"
                      placeholder="0912 345 678"
                      className="pl-11 h-12 bg-[#0F172A] border-[#334155] rounded-xl text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#F8FAFC]">Mật khẩu</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Tối thiểu 8 ký tự"
                      className="pl-11 pr-12 h-12 bg-[#0F172A] border-[#334155] rounded-xl text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#F8FAFC]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 gradient-bg text-white hover:opacity-90 mt-4 transition-opacity font-medium rounded-xl press-effect shadow-lg shadow-blue-500/10">
                  Tạo tài khoản
                </Button>

                <p className="text-center text-sm text-[#64748B] mt-6">
                  Đã có tài khoản?{" "}
                  <button type="button" onClick={() => setActiveTab('login')} className="text-[#3B82F6] hover:text-[#2563EB] font-medium">
                    Đăng nhập
                  </button>
                </p>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#3B82F6] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <AuthContent />
    </Suspense>
  )
}
