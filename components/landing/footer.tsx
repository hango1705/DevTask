import Link from "next/link"
import { ExternalLink } from "lucide-react"

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/hquang1705" },
  { label: "Zalo", href: "https://zalo.me/0853233321" },
  { label: "Phone", href: "tel:0853233321" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#05080f] py-16 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-8">

          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-6 opacity-90 transition-opacity hover:opacity-100">
              <img src="/logo.png" alt="DevTask Logo" className="h-9 w-auto grayscale contrast-[150%] hue-rotate-180 mix-blend-screen opacity-80" />
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed tracking-tight mb-8">
              DevTask — Team chuyên nhận làm bài tập, build web/app và đồ án sinh viên. Code clean, hỗ trợ bảo vệ.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center gap-1.5 text-sm font-medium text-[#94A3B8] hover:text-[#3B82F6] transition-colors"
                  aria-label={social.label}
                >
                  {social.label}
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24 text-sm text-[#94A3B8]">
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-[#F8FAFC]">Legal</span>
              <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-white transition-colors">Bảo mật thông tin</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-[#F8FAFC]">Liên hệ dev</span>
              <span>Hà Nội</span>
              <span>haquangkr1@gmail.com</span>
            </div>
          </div>

        </div>

        <div className="border-t border-[#1E293B]/60 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#64748B] tracking-wider uppercase">
          <p>© 2026 DevTask Team.</p>
          <p>Built with Next.js & Tailwind</p>
        </div>

      </div>
    </footer>
  )
}
