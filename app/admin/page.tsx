"use client"

import { DollarSign, FileText, Users, Star, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"

const stats = [
  { 
    label: "Doanh Thu Tháng", 
    value: "12,500,000", 
    unit: "đ", 
    icon: DollarSign, 
    change: "+23%", 
    changeType: "positive",
    color: "border-l-[#22C55E]", 
    iconBg: "bg-[#22C55E]/10", 
    iconColor: "text-[#22C55E]" 
  },
  { 
    label: "Đơn Mới", 
    value: "25", 
    unit: "", 
    icon: FileText, 
    change: "+12%", 
    changeType: "positive",
    color: "border-l-[#3B82F6]", 
    iconBg: "bg-[#3B82F6]/10", 
    iconColor: "text-[#3B82F6]" 
  },
  { 
    label: "Khách Hàng", 
    value: "156", 
    unit: "", 
    icon: Users, 
    change: "+8%", 
    changeType: "positive",
    color: "border-l-[#8B5CF6]", 
    iconBg: "bg-[#8B5CF6]/10", 
    iconColor: "text-[#8B5CF6]" 
  },
  { 
    label: "Đánh Giá", 
    value: "4.8", 
    unit: "", 
    icon: Star, 
    change: "+0.2", 
    changeType: "positive",
    color: "border-l-[#F59E0B]", 
    iconBg: "bg-[#F59E0B]/10", 
    iconColor: "text-[#F59E0B]" 
  },
]

const revenueData = [
  { month: "T1", value: 8500000 },
  { month: "T2", value: 9200000 },
  { month: "T3", value: 7800000 },
  { month: "T4", value: 11000000 },
  { month: "T5", value: 10500000 },
  { month: "T6", value: 12500000 },
]

const orderDistribution = [
  { name: "Web", value: 35, color: "#3B82F6" },
  { name: "Mobile", value: 20, color: "#8B5CF6" },
  { name: "Database", value: 15, color: "#22C55E" },
  { name: "AI/ML", value: 15, color: "#F59E0B" },
  { name: "Tốt nghiệp", value: 15, color: "#EF4444" },
]

const pendingOrders = [
  { id: "DT-010", client: "Trần Văn B", avatar: "TB", title: "Website Bán Hàng", status: "Chờ báo giá", statusColor: "bg-[#F59E0B]/10 text-[#F59E0B]" },
  { id: "DT-011", client: "Nguyễn Thị C", avatar: "NC", title: "App Quản Lý", status: "Chờ xác nhận", statusColor: "bg-[#8B5CF6]/10 text-[#8B5CF6]" },
  { id: "DT-012", client: "Lê Hoàng D", avatar: "LD", title: "Đồ Án AI", status: "Mới", statusColor: "bg-[#3B82F6]/10 text-[#3B82F6]" },
  { id: "DT-013", client: "Phạm Minh E", avatar: "PE", title: "Database Design", status: "Chờ thanh toán", statusColor: "bg-[#EF4444]/10 text-[#EF4444]" },
  { id: "DT-014", client: "Võ Thị F", avatar: "VF", title: "API Backend", status: "Chờ báo giá", statusColor: "bg-[#F59E0B]/10 text-[#F59E0B]" },
]

const activityFeed = [
  { icon: FileText, text: "Đơn hàng #DT-010 mới được tạo", time: "5 phút trước", color: "text-[#3B82F6]" },
  { icon: DollarSign, text: "Nhận thanh toán 2,500,000đ từ #DT-008", time: "30 phút trước", color: "text-[#22C55E]" },
  { icon: Star, text: "Khách hàng đánh giá 5 sao cho #DT-007", time: "1 giờ trước", color: "text-[#F59E0B]" },
  { icon: Users, text: "Khách hàng mới: Nguyễn Văn G", time: "2 giờ trước", color: "text-[#8B5CF6]" },
  { icon: FileText, text: "Đơn hàng #DT-009 đã hoàn thành", time: "3 giờ trước", color: "text-[#22C55E]" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#F8FAFC]">Dashboard</h1>
        <p className="text-[#94A3B8]">Tổng quan hoạt động kinh doanh</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`glass-card rounded-xl p-5 border-l-4 ${stat.color}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-[#F8FAFC] mt-1">
                  {stat.value}
                  <span className="text-lg">{stat.unit}</span>
                </p>
                <div className={`flex items-center gap-1 mt-2 text-sm ${
                  stat.changeType === "positive" ? "text-[#22C55E]" : "text-[#EF4444]"
                }`}>
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-3 glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-[#F8FAFC]">Doanh Thu 6 Tháng</h2>
              <p className="text-sm text-[#64748B]">Tổng: 59,500,000đ</p>
            </div>
            <div className="flex items-center gap-2 text-[#22C55E] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+23% so với kỳ trước</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
                <YAxis stroke="#64748B" fontSize={12} tickFormatter={(v) => `${v/1000000}M`} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B', 
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#F8FAFC'
                  }}
                  formatter={(value: number) => [`${value.toLocaleString()}đ`, 'Doanh thu']}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="url(#lineGradient)" 
                  fill="url(#colorRevenue)"
                  strokeWidth={3}
                  style={{ stroke: 'url(#lineGradient)' }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Distribution Donut */}
        <div className="lg:col-span-2 glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">Phân Loại Đơn</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {orderDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B', 
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#F8FAFC'
                  }}
                  formatter={(value: number) => [`${value}%`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {orderDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-[#94A3B8]">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Pending Orders */}
        <div className="lg:col-span-3 glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#F8FAFC]">Đơn Cần Xử Lý</h2>
            <Link href="/admin/orders">
              <Button variant="ghost" size="sm" className="text-[#3B82F6] hover:text-[#3B82F6] hover:bg-[#3B82F6]/10">
                Xem tất cả
              </Button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#334155]">
                  <th className="text-left text-sm font-medium text-[#64748B] pb-4">Khách hàng</th>
                  <th className="text-left text-sm font-medium text-[#64748B] pb-4">Đơn hàng</th>
                  <th className="text-left text-sm font-medium text-[#64748B] pb-4">Trạng thái</th>
                  <th className="text-left text-sm font-medium text-[#64748B] pb-4">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {pendingOrders.map((order) => (
                  <tr key={order.id} className="border-b border-[#334155]/50">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">{order.avatar}</span>
                        </div>
                        <span className="text-sm text-[#F8FAFC]">{order.client}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div>
                        <p className="text-sm text-[#3B82F6]">{order.id}</p>
                        <p className="text-xs text-[#94A3B8]">{order.title}</p>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <Link href={`/admin/orders/${order.id}`}>
                        <Button variant="ghost" size="sm" className="text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]">
                          Xử lý
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-2 glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">Hoạt Động Gần Đây</h2>
          <div className="space-y-4">
            {activityFeed.map((activity, index) => (
              <div key={index} className="flex gap-4">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center ${activity.color}`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  {index < activityFeed.length - 1 && (
                    <div className="w-px h-full bg-[#334155] my-1" />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-4">
                  <p className="text-sm text-[#F8FAFC]">{activity.text}</p>
                  <p className="text-xs text-[#64748B] mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
