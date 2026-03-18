"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Bài tập đơn lẻ",
    price: "50.000₫",
    description: "Giải bài tập lab, function nhỏ, debug bug lẻ.",
    features: [
      "Bài tập cơ bản / Fix lỗi",
      "Deadline trong 24h",
      "Clean code, có comment",
      "Giải thích ngắn gọn 1-1",
      "Bảo hành sữa lỗi 1 lần",
    ],
    highlighted: false,
  },
  {
    name: "Đồ án môn học",
    price: "500.000₫",
    description: "Web/App full chức năng, phù hợp project giữa kỳ hoặc cuối kỳ.",
    features: [
      "REST API / Cơ sở dữ liệu",
      "Giao diện hiện đại",
      "Báo cáo slide outline",
      "Hướng dẫn cài môi trường",
      "Sửa đổi 3 lần miễn phí",
    ],
    highlighted: true,
    badge: "Sinh viên chọn",
  },
  {
    name: "Đồ án tốt nghiệp",
    price: "2.000.000₫",
    description: "Hệ thống quy mô lớn, phức tạp, báo cáo + slide A-Z, hỗ trợ bảo vệ.",
    features: [
      "Microservices / Kiến trúc khó",
      "Deadline 1-2 tháng",
      "Documentation chuẩn trường",
      "Slide thuyết trình chuyên biệt",
      "Review mockup, vẽ UML",
      "Hỗ trợ bảo vệ trực tiếp",
      "Sửa đổi không giới hạn",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-[0.15]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24 animate-fade-in-up stagger-1">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F8FAFC] mb-6">
            Chi phí tối thiểu
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg leading-relaxed">
            Mức giá khởi điểm tượng trưng. Giá trị thực tế báo theo scope chi tiết (vài chục, vài trăm, vài triệu tuỳ quy mô). Cọc linh hoạt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch animate-fade-in-up stagger-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col hover-lift transition-all duration-300 ${plan.highlighted
                ? 'glass-card glow-blue shadow-lg shadow-blue-500/10 border-[#3B82F6]/50'
                : 'glass'
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 right-8 px-4 py-1.5 gradient-bg rounded-lg shadow-lg">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium tracking-tight text-[#F8FAFC] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed h-[3rem]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 pb-8 border-b border-[#334155]/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-[#64748B]">từ</span>
                  <span className={`text-4xl font-semibold tracking-tight tabular-nums ${plan.highlighted ? 'text-white' : 'text-[#F8FAFC]'}`}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-[#3B82F6]/20' : 'bg-[#1E293B]'
                      }`}>
                      <Check className={`w-3.5 h-3.5 ${plan.highlighted ? 'text-[#3B82F6]' : 'text-[#64748B]'}`} />
                    </div>
                    <span className="text-[#94A3B8] text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="https://www.facebook.com/hquang1705" className="mt-auto block w-full">
                <Button
                  className={`w-full h-14 rounded-xl text-base font-medium press-effect ${plan.highlighted
                    ? 'gradient-bg text-white shadow-lg shadow-blue-500/20'
                    : 'bg-[#1E293B] border border-[#334155] text-[#F8FAFC] hover:bg-[#334155]'
                    }`}
                >
                  Nhận báo giá
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
