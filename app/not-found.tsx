import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Terminal, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-[#0A0F1A] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-pattern opacity-30 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-md animate-fade-in-up">
        {/* Animated Terminal Icon */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-3xl glass flex items-center justify-center glow-blue animate-bounce" style={{ animationDuration: '3s' }}>
          <Terminal className="w-10 h-10 text-[#3B82F6]" />
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter text-[#F8FAFC] mb-4 tabular-nums">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold tracking-tight text-[#F8FAFC] mb-4">
          Page Not Found
        </h2>
        
        <p className="text-[#94A3B8] mb-10 text-lg">
          Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển. API trả về status 404!
        </p>

        <Link href="/">
          <Button size="lg" className="w-full sm:w-auto h-14 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 text-base font-medium rounded-xl press-effect border border-[#60A5FA]/20 shadow-lg shadow-blue-500/20 group">
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Về trang chủ
          </Button>
        </Link>
      </div>
    </div>
  )
}
