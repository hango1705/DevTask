"use client"

import { Facebook, ExternalLink, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-[#0A0F1A]">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] height-[60rem] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border-[#334155]/50 overflow-hidden relative group">

            {/* Spotlight effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#334155] mb-10 animate-fade-in-up">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span className="text-sm font-medium text-[#F8FAFC]">100% Feedback thật</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#F8FAFC] mb-8 display-heading animate-fade-in-up stagger-1">
                Review & Feedback <br /> từ anh em đã làm bài bên mình
              </h2>

              <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed mb-12 max-w-2xl animate-fade-in-up stagger-2">
                Để đảm bảo tính khách quan và minh bạch nhất, mình không sử dụng các đánh giá giả mạo như 1 vài scammer tự tạo fake acc xong tự feedback chéo. Mọi feedback, tin nhắn cảm ơn và kết quả điểm số đều được mình chia sẻ công khai trên trang cá nhân.
              </p>

              {/* Social Proof Stats */}
              {/* <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 animate-fade-in-up stagger-3">
                <div className="text-center">
                  <p className="text-[#F8FAFC] font-bold text-2xl tabular-nums tracking-tight">4.9/5.0</p>
                  <p className="text-[#64748B] text-xs uppercase tracking-widest font-semibold mt-1">Đánh giá TB</p>
                </div>

                <div className="text-center">
                  <p className="text-[#F8FAFC] font-bold text-2xl tabular-nums tracking-tight">50+</p>
                  <p className="text-[#64748B] text-xs uppercase tracking-widest font-semibold mt-1">Đồ án / năm</p>
                </div>

                <div className="text-center">
                  <p className="text-[#F8FAFC] font-bold text-2xl tabular-nums tracking-tight">99%</p>
                  <p className="text-[#64748B] text-xs uppercase tracking-widest font-semibold mt-1"> Point</p>
                </div>
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-fade-in-up stagger-4">
                <a
                  href="https://www.facebook.com/hquang1705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-16 px-10 rounded-2xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-lg font-medium press-effect hover-lift shadow-xl shadow-blue-500/10 gap-3"
                  >
                    <Facebook className="w-5 h-5 fill-white" />
                    Xem feedback trên Facebook
                    <ExternalLink className="w-4 h-4 opacity-50" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Background elements inside card */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#3B82F6]/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
