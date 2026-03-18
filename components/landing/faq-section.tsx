"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Có cần cọc không?",
    answer: "Không cần cọc nếu mình cảm thấy bạn uy tín. Còn không thì cọc 30-50% tùy dự án."
  },
  {
    question: "Giao dịch qua hình thức nào?",
    answer: "Chuyển khoản hoặc gặp mặt trực tiếp. Với các dự án giá trị lớn, có thể chia ra nhiều đợt chuyển khoản song song với tiến độ công việc."
  },
  {
    question: "Có support cài đặt không?",
    answer: "Chắc chắn. Mọi đồ án bàn giao đều kèm một khung call 15-30 phút hướng dẫn set up DB, cài npm/pip, và trỏ API. Đảm bảo chạy localhost 100%."
  },
  {
    question: "Nếu giảng viên bắt bẻ code thì sao?",
    answer: "Mình hỗ trợ chỉnh sửa theo flow đồ án miễn phí (1-3 lần hoặc không giới hạn tùy gói). Nếu feature scope ban đầu không thỏa thuận thì tính phí bổ sung nhỏ."
  },
  {
    question: "Thời gian làm bài tập nhỏ có gấp trong đêm được không?",
    answer: "Được luôn nha, mình chuyên overnight cho khách. Tùy stack (Web/AI) thì báo luôn khả thi trong mấy tiếng. Thường sẽ có surcharge 50% nếu deadline dưới 12 giờ."
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 animate-fade-in-up stagger-1 items-start">

          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F8FAFC] mb-6">
              FAQ / Hỏi đáp
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Bạn chưa rõ về cách làm việc, giá cả, hoặc policy? Đọc nhanh qua FAQ để tiết kiệm thời gian hỏi đáp.
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#0F172A] border border-[#334155] rounded-2xl px-6 data-[state=open]:border-[#3B82F6] transition-colors"
                >
                  <AccordionTrigger className="text-left text-[#F8FAFC] hover:text-[#3B82F6] hover:no-underline py-6 [&[data-state=open]>svg]:text-[#3B82F6] text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#94A3B8] pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  )
}
