import { AdminSidebar } from "@/components/dashboard/admin-sidebar"
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <AdminSidebar />
      <div className="lg:ml-64 min-h-screen flex flex-col">
        <DashboardTopbar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
