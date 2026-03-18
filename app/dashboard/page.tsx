import { FileText, Clock, CheckCircle, CreditCard, MessageSquare, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { label: "Tổng Đơn", value: "12", icon: FileText, color: "border-l-[#3B82F6]", iconBg: "bg-[#3B82F6]/10", iconColor: "text-[#3B82F6]" },
  { label: "Đang Làm", value: "3", icon: Clock, color: "border-l-[#F59E0B]", iconBg: "bg-[#F59E0B]/10", iconColor: "text-[#F59E0B]" },
  { label: "Hoàn Thành", value: "8", icon: CheckCircle, color: "border-l-[#22C55E]", iconBg: "bg-[#22C55E]/10", iconColor: "text-[#22C55E]" },
  { label: "Chờ Thanh Toán", value: "1", icon: CreditCard, color: "border-l-[#EF4444]", iconBg: "bg-[#EF4444]/10", iconColor: "text-[#EF4444]" },
]

const recentOrders = [
  { id: "DT-001", title: "Website Bán Hàng PHP Laravel", subject: "Đồ án tốt nghiệp", deadline: "20/03/2024", status: "Hoàn thành", statusColor: "bg-[#22C55E]/10 text-[#22C55E]" },
  { id: "DT-002", title: "App Mobile React Native", subject: "Đồ án môn học", deadline: "25/03/2024", status: "Đang làm", statusColor: "bg-[#3B82F6]/10 text-[#3B82F6]" },
  { id: "DT-003", title: "Machine Learning Python", subject: "Bài tập lớn", deadline: "22/03/2024", status: "Đang làm", statusColor: "bg-[#3B82F6]/10 text-[#3B82F6]" },
  { id: "DT-004", title: "Database Design MySQL", subject: "Bài tập", deadline: "18/03/2024", status: "Chờ thanh toán", statusColor: "bg-[#F59E0B]/10 text-[#F59E0B]" },
  { id: "DT-005", title: "API REST NodeJS", subject: "Đồ án môn học", deadline: "28/03/2024", status: "Chờ xác nhận", statusColor: "bg-[#8B5CF6]/10 text-[#8B5CF6]" },
]



const recentMessages = [
  { name: "Admin DevTask", preview: "Source code đã được cập nhật...", time: "10 phút trước", unread: true },
  { name: "Hỗ trợ kỹ thuật", preview: "Bạn có thể test thử API endpoint...", time: "2 giờ trước", unread: false },
  { name: "Admin DevTask", preview: "Đơn hàng của bạn đã hoàn thành!", time: "1 ngày trước", unread: false },
]

export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#F8FAFC]">Xin chào, Văn A</h1>
        <p className="text-[#94A3B8]">Đây là tổng quan về các đơn hàng của bạn</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`glass-card rounded-xl p-5 border-l-4 ${stat.color}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-[#F8FAFC] mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#F8FAFC]">Đơn Hàng Gần Đây</h2>
          <Link href="/dashboard/orders">
            <Button variant="ghost" className="text-[#3B82F6] hover:text-[#3B82F6] hover:bg-[#3B82F6]/10">
              Xem tất cả
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#334155]">
                <th className="text-left text-sm font-medium text-[#64748B] pb-4">Mã đơn</th>
                <th className="text-left text-sm font-medium text-[#64748B] pb-4">Tiêu đề</th>
                <th className="text-left text-sm font-medium text-[#64748B] pb-4 hidden sm:table-cell">Môn học</th>
                <th className="text-left text-sm font-medium text-[#64748B] pb-4 hidden md:table-cell">Deadline</th>
                <th className="text-left text-sm font-medium text-[#64748B] pb-4">Trạng thái</th>
                <th className="text-left text-sm font-medium text-[#64748B] pb-4">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-[#334155]/50 hover:bg-[#1E293B]/50">
                  <td className="py-4 text-sm text-[#3B82F6] font-medium">{order.id}</td>
                  <td className="py-4">
                    <p className="text-sm text-[#F8FAFC]">{order.title}</p>
                  </td>
                  <td className="py-4 text-sm text-[#94A3B8] hidden sm:table-cell">{order.subject}</td>
                  <td className="py-4 text-sm text-[#94A3B8] hidden md:table-cell">{order.deadline}</td>
                  <td className="py-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <Link href={`/dashboard/orders/${order.id}`}>
                      <Button variant="ghost" size="sm" className="text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]">
                        Chi tiết
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Row: Notifications & Messages */}
      <div className="grid grid-cols-1 gap-6">


        {/* Recent Messages */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#8B5CF6]" />
              <h2 className="text-lg font-semibold text-[#F8FAFC]">Tin Nhắn Gần Đây</h2>
            </div>
            <Link href="/dashboard/messages">
              <Button variant="ghost" size="sm" className="text-[#3B82F6] hover:text-[#3B82F6] hover:bg-[#3B82F6]/10">
                Xem tất cả
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {recentMessages.map((message, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E293B]/50 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">{message.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#F8FAFC]">{message.name}</p>
                    <span className="text-xs text-[#64748B]">{message.time}</span>
                  </div>
                  <p className="text-sm text-[#94A3B8] truncate">{message.preview}</p>
                </div>
                {message.unread && (
                  <div className="w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
