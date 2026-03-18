import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0F1A]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] border border-[#334155]/50 bg-[#0F172A] p-12 md:p-20 overflow-hidden text-center hover-lift glow-blue group">

          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 opacity-50" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#F8FAFC] mb-6">
              Bạn đang kẹt deadline?
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
              Nhắn tin ngay cho mình để được hỗ trợ sớm nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://www.facebook.com/hquang1705">
                <Button size="lg" className="w-full sm:w-auto h-14 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-10 text-lg font-medium rounded-xl press-effect border border-[#60A5FA]/20 shadow-lg shadow-blue-500/20">
                  Inbox ngay
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
