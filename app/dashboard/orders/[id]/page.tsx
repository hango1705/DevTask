import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ChevronRight, 
  Download, 
  FileText, 
  MessageSquare, 
  Copy,
  Star,
  Check,
  Clock,
  CreditCard,
  Package,
  FileCheck,
  Send,
  Calculator,
  Eye,
  Cog,
  CheckCircle,
  Mail,
  Phone
} from "lucide-react"

const orderInfo = {
  id: "DT-001",
  title: "Website Bán Hàng PHP Laravel",
  status: "Hoàn thành",
  subject: "Đồ án tốt nghiệp",
  technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
  deadline: "20/03/2024",
  priority: "Bình thường",
  createdAt: "01/03/2024",
  completedAt: "18/03/2024",
  description: "Website bán hàng hoàn chỉnh với các chức năng: đăng ký/đăng nhập, quản lý sản phẩm, giỏ hàng, thanh toán VNPay, quản lý đơn hàng, thống kê doanh thu, responsive design cho mobile.",
  files: [
    { name: "requirements.pdf", size: "2.4 MB" },
    { name: "mockup.fig", size: "8.1 MB" },
  ]
}

const timeline = [
  { step: "Tạo đơn hàng", date: "01/03/2024 09:30", icon: Send, completed: true },
  { step: "Nhận báo giá", date: "01/03/2024 11:45", icon: Calculator, completed: true },
  { step: "Xác nhận đơn hàng", date: "01/03/2024 14:00", icon: Check, completed: true },
  { step: "Đặt cọc 50%", date: "01/03/2024 15:30", icon: CreditCard, completed: true },
  { step: "Bắt đầu thực hiện", date: "02/03/2024 08:00", icon: Cog, completed: true },
  { step: "Cập nhật tiến độ 30%", date: "05/03/2024 16:00", icon: Eye, completed: true },
  { step: "Cập nhật tiến độ 70%", date: "12/03/2024 10:00", icon: Eye, completed: true },
  { step: "Hoàn thành 100%", date: "17/03/2024 18:00", icon: Package, completed: true },
  { step: "Bàn giao sản phẩm", date: "18/03/2024 09:00", icon: FileCheck, completed: true },
  { step: "Thanh toán hoàn tất", date: "18/03/2024 14:30", icon: CheckCircle, completed: true },
]

const feedback = {
  overallRating: 5,
  ratings: {
    quality: 5,
    deadline: 5,
    communication: 4,
  },
  comment: "Rất hài lòng với chất lượng đồ án! Code clean, documentation đầy đủ, anh dev còn hướng dẫn mình setup và demo rất tận tình. Đặc biệt là hoàn thành trước deadline 2 ngày. Sẽ quay lại khi có dự án mới!",
  author: "Nguyễn Văn A",
  university: "Đại học Bách Khoa HCM",
  date: "20/03/2024"
}

const payment = {
  totalPrice: 3500000,
  deposit: 1750000,
  remaining: 1750000,
  status: "Đã thanh toán đủ"
}

const client = {
  name: "Nguyễn Văn A",
  email: "vana@gmail.com",
  phone: "0912 345 678",
  totalOrders: 3,
  completedOrders: 2,
}

export default function OrderDetailPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/dashboard" className="text-[#64748B] hover:text-[#F8FAFC]">Tổng Quan</Link>
        <ChevronRight className="w-4 h-4 text-[#64748B]" />
        <Link href="/dashboard/orders" className="text-[#64748B] hover:text-[#F8FAFC]">Đơn Hàng</Link>
        <ChevronRight className="w-4 h-4 text-[#64748B]" />
        <span className="text-[#F8FAFC]">{orderInfo.id}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-[#F8FAFC]">
              {orderInfo.id} — {orderInfo.title}
            </h1>
            <span className="px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm">
              {orderInfo.status}
            </span>
          </div>
          <p className="text-[#94A3B8]">{orderInfo.subject}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Tải về
          </Button>
          <Link href="/dashboard/messages">
            <Button className="gradient-bg text-white hover:opacity-90">
              <MessageSquare className="w-4 h-4 mr-2" />
              Nhắn tin
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Info Card */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">Thông Tin Đơn Hàng</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-[#64748B] mb-1">Môn học / Loại</p>
                <p className="text-[#F8FAFC]">{orderInfo.subject}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748B] mb-1">Mức độ ưu tiên</p>
                <p className="text-[#F8FAFC]">{orderInfo.priority}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748B] mb-1">Deadline</p>
                <p className="text-[#F8FAFC]">{orderInfo.deadline}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748B] mb-1">Ngày tạo</p>
                <p className="text-[#F8FAFC]">{orderInfo.createdAt}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-[#64748B] mb-2">Công nghệ sử dụng</p>
              <div className="flex flex-wrap gap-2">
                {orderInfo.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-[#1E293B] text-[#94A3B8] text-sm border border-[#334155]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-[#64748B] mb-2">Mô tả yêu cầu</p>
              <p className="text-[#94A3B8] leading-relaxed">{orderInfo.description}</p>
            </div>

            <div>
              <p className="text-sm text-[#64748B] mb-3">File đính kèm</p>
              <div className="space-y-2">
                {orderInfo.files.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between p-3 bg-[#0F172A] rounded-lg border border-[#334155]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#3B82F6]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#F8FAFC]">{file.name}</p>
                        <p className="text-xs text-[#64748B]">{file.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#3B82F6] hover:bg-[#3B82F6]/10">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">Tiến Trình Đơn Hàng</h2>
            
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4 pb-6 last:pb-0">
                  {/* Timeline Line & Dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.completed 
                        ? 'gradient-bg' 
                        : 'bg-[#1E293B] border border-[#334155]'
                    }`}>
                      <item.icon className={`w-5 h-5 ${item.completed ? 'text-white' : 'text-[#64748B]'}`} />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className={`w-0.5 flex-1 my-2 ${
                        item.completed ? 'bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6]' : 'bg-[#334155]'
                      }`} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <p className={`font-medium ${item.completed ? 'text-[#F8FAFC]' : 'text-[#64748B]'}`}>
                      {item.step}
                    </p>
                    <p className="text-sm text-[#64748B]">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Card */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">Đánh Giá Của Khách Hàng</h2>
            
            {/* Overall Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < feedback.overallRating ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#334155]'}`} 
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-[#F8FAFC]">{feedback.overallRating}.0</span>
            </div>

            {/* Individual Ratings */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-[#0F172A] rounded-lg">
                <p className="text-sm text-[#64748B] mb-2">Chất lượng</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < feedback.ratings.quality ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#334155]'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[#F8FAFC] font-medium">{feedback.ratings.quality}.0</span>
                </div>
              </div>
              <div className="p-4 bg-[#0F172A] rounded-lg">
                <p className="text-sm text-[#64748B] mb-2">Đúng deadline</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < feedback.ratings.deadline ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#334155]'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[#F8FAFC] font-medium">{feedback.ratings.deadline}.0</span>
                </div>
              </div>
              <div className="p-4 bg-[#0F172A] rounded-lg">
                <p className="text-sm text-[#64748B] mb-2">Giao tiếp</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < feedback.ratings.communication ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#334155]'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[#F8FAFC] font-medium">{feedback.ratings.communication}.0</span>
                </div>
              </div>
            </div>

            {/* Comment */}
            <div className="p-4 bg-[#0F172A] rounded-lg border-l-4 border-[#3B82F6] mb-4">
              <p className="text-[#94A3B8] italic leading-relaxed">
                &ldquo;{feedback.comment}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">VA</span>
              </div>
              <div>
                <p className="text-[#F8FAFC] font-medium">{feedback.author}</p>
                <p className="text-sm text-[#64748B]">{feedback.university} • {feedback.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 1/3 */}
        <div className="space-y-6">
          {/* Payment Summary Card */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">Thanh Toán</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Tổng giá trị</span>
                <span className="text-[#F8FAFC] font-medium">{payment.totalPrice.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Đã đặt cọc (50%)</span>
                <span className="text-[#F8FAFC]">{payment.deposit.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Còn lại</span>
                <span className="text-[#F8FAFC]">{payment.remaining.toLocaleString()}đ</span>
              </div>
              <div className="border-t border-[#334155] pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#94A3B8]">Trạng thái</span>
                  <span className="px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm">
                    {payment.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Info Card */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">Thông Tin Khách Hàng</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VA</span>
              </div>
              <div>
                <p className="text-[#F8FAFC] font-semibold">{client.name}</p>
                <p className="text-sm text-[#64748B]">Khách hàng thân thiết</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#64748B]" />
                <span className="text-[#94A3B8]">{client.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#64748B]" />
                <span className="text-[#94A3B8]">{client.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-[#0F172A] rounded-lg text-center">
                <p className="text-xl font-bold text-[#3B82F6]">{client.totalOrders}</p>
                <p className="text-xs text-[#64748B]">Tổng đơn</p>
              </div>
              <div className="p-3 bg-[#0F172A] rounded-lg text-center">
                <p className="text-xl font-bold text-[#22C55E]">{client.completedOrders}</p>
                <p className="text-xs text-[#64748B]">Hoàn thành</p>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">Thao Tác Nhanh</h2>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] bg-transparent">
                <Download className="w-4 h-4 mr-3 text-[#3B82F6]" />
                Tải source code
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] bg-transparent">
                <FileText className="w-4 h-4 mr-3 text-[#8B5CF6]" />
                Xuất PDF báo cáo
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] bg-transparent">
                <MessageSquare className="w-4 h-4 mr-3 text-[#22C55E]" />
                Nhắn tin hỗ trợ
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] bg-transparent">
                <Copy className="w-4 h-4 mr-3 text-[#F59E0B]" />
                Tạo đơn tương tự
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
