"use client"

import { FileText, Coins, TerminalSquare, PackageCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Trao đổi requirements",
    description: "Nhận yêu cầu qua Zalo hoặc Facebook, thảo luận mục tiêu cụ thể, công nghệ và scope dự án."
  },
  {
    number: "02",
    icon: Coins,
    title: "Chốt báo giá",
    description: "Báo giá nhanh chóng, cọc và xác nhận milestones trong 30 phút."
  },
  {
    number: "03",
    icon: TerminalSquare,
    title: "Tiến hành code",
    description: "Viết source code, cập nhật repo để bạn theo dõi hằng ngày."
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Bàn giao & Support",
    description: "Deploy, bàn giao tài liệu. Hướng dẫn giải thích source code 1-1."
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0F1A]">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#3B82F6]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-32 lg:gap-24 items-start">

          <div className="md:w-1/3 animate-fade-in-up stagger-1 sticky top-32">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F8FAFC] mb-6">
              Làm việc <br /> có quy trình
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed border-l-2 border-[#334155] pl-6 mb-8">
              Mọi project đều được áp dụng Agile cơ bản. Không sợ trễ deadline, minh bạch và chuyên nghiệp.
            </p>
          </div>

          <div className="md:w-2/3 space-y-12 lg:space-y-16 animate-fade-in-up stagger-2 relative">
            {/* Vertical Line Line */}
            <div className="absolute top-0 bottom-0 left-8 md:left-[3.25rem] w-px bg-gradient-to-b from-[#3B82F6] via-[#334155] to-transparent" />

            {steps.map((step, index) => (
              <div key={step.title} className="relative flex gap-8 md:gap-12 items-start group">
                <div className="flex flex-col items-center flex-shrink-0 z-10 w-16 md:w-[6.5rem]">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0F172A] border border-[#334155] flex items-center justify-center glow-blue transition-colors group-hover:border-[#3B82F6]">
                    <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#3B82F6] to-white tabular-nums">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="pt-1 md:pt-3">
                  <div className="flex items-center gap-4 mb-3">
                    <step.icon className="w-6 h-6 text-[#3B82F6] hidden sm:block" />
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#F8FAFC]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#94A3B8] leading-relaxed text-sm md:text-base max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
