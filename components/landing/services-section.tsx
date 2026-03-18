"use client"

import { Code2, Smartphone, Wrench, BrainCircuit, GraduationCap, GitMerge } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Lập trình Web",
    description: "Xây dựng ứng dụng web hiện đại với đa ngôn ngữ, đa framework (React, Next.js, Node.js, Python, PHP, ...)",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    theme: "primary"
  },
  {
    icon: Smartphone,
    title: "Phát triển App",
    description: "Ứng dụng đa nền tảng iOS/Android dùng React Native hoặc Flutter mượt mà.",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    theme: "secondary"
  },
  {
    icon: Wrench,
    title: "Tool & Automation",
    description: "Xây dựng các tool tự động hóa quy trình, tối ưu hóa công việc.",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    theme: "secondary"
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Tích hợp mô hình AI, xử lý dữ liệu lớn, xây dựng hệ thống thông minh.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    theme: "primary"
  },
  {
    icon: GitMerge,
    title: "Thiết kế Hệ thống",
    description: "Phân tích yêu cầu nghiệp vụ, vẽ ERD, UML. Xây dựng tài liệu thiết kế kiến trúc rõ ràng.",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    theme: "secondary"
  },
  {
    icon: GraduationCap,
    title: "Đồ án tốt nghiệp",
    description: "Nhận làm đồ án tốt nghiệp, đồ án môn học, đồ án chuyên ngành IT. Hỗ trợ bảo vệ 1-1.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    theme: "primary"
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-40 mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-24 animate-fade-in-up stagger-1">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F8FAFC] mb-6">
            Dịch vụ của DevTask
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
            Từ ứng dụng quy mô nhỏ đến hệ thống đồ án phức tạp. Xây dựng đúng kiến trúc, bàn giao đúng hẹn. Giúp bạn đạt kết quả cao vượt ngoài mong đợi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 animate-fade-in-up stagger-2">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`group glass rounded-3xl p-8 hover-lift border-white/5 relative overflow-hidden flex flex-col justify-between
                ${service.theme === 'primary' ? 'min-h-[280px]' : 'min-h-[220px]'}
                ${service.colSpan}
              `}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl mix-blend-screen transition-opacity group-hover:opacity-100 opacity-0" />

              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 
                  ${service.theme === 'primary' ? 'gradient-bg text-white shadow-xl shadow-blue-500/10' : 'bg-[#1E293B] border border-[#334155] text-[#3B82F6]'}
                `}>
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-medium tracking-tight text-[#F8FAFC] mb-4">
                  {service.title}
                </h3>
              </div>

              <p className="text-[#94A3B8] leading-relaxed relative z-10 text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
