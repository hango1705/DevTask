"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Dịch vụ" },
  { href: "#pricing", label: "Bảng giá" },
  { href: "#testimonials", label: "Review" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      /* Highlight active section based on scroll position */
      const sections = navLinks.map(link => link.href.substring(1))
      let current = ""
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5 shadow-sm"
        : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="DevTask Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] transition-transform group-active:scale-95" />
            <span className="text-2xl font-semibold tracking-tight text-[#F8FAFC]">DevTask</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover-lift pb-1 border-b-2 
                  ${activeSection === link.href.substring(1)
                    ? 'text-[#3B82F6] border-[#3B82F6]'
                    : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'}
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            {/* <Link href="/auth">
              <span className="text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors hover-lift">
                Đăng nhập
              </span>
            </Link>
            <Link href="/auth?tab=register">
              <Button className="gradient-bg text-white px-6 h-11 rounded-lg press-effect hover-lift font-medium shadow-lg shadow-blue-500/20">
                Nhận báo giá
              </Button>
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg bg-[#1E293B]/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden absolute top-full inset-x-0 bg-[#0F172A]/95 backdrop-blur-3xl border-b border-[#334155] p-4 transition-all duration-300 origin-top ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
      >
        <div className="flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#94A3B8] font-medium p-3 rounded-lg hover:bg-[#1E293B] hover:text-[#F8FAFC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="h-px bg-[#1E293B] w-full my-2" />

          {/* <Link href="/auth" onClick={() => setIsMenuOpen(false)}>
            <div className="w-full h-12 flex items-center justify-center rounded-lg border border-[#334155] text-[#F8FAFC] font-medium hover:bg-[#1E293B] transition-colors press-effect">
              Đăng nhập
            </div>
          </Link>
          <Link href="/auth?tab=register" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full h-12 gradient-bg text-white font-medium rounded-lg press-effect">
              Nhận báo giá
            </Button>
          </Link> */}
        </div>
      </div>
    </header>
  )
}
