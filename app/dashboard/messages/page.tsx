"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Paperclip, 
  Image as ImageIcon, 
  Smile, 
  Send, 
  FileText, 
  Download,
  ExternalLink,
  Check,
  CheckCheck
} from "lucide-react"
import { cn } from "@/lib/utils"

const conversations = [
  { 
    id: 1, 
    orderTag: "#DT-001", 
    title: "Website PHP Laravel", 
    preview: "Source code đã được cập nhật với các tính năng mới...", 
    time: "10 phút", 
    unread: 2,
    active: true 
  },
  { 
    id: 2, 
    orderTag: "#DT-002", 
    title: "App Mobile React Native", 
    preview: "Bạn có thể test thử API endpoint này...", 
    time: "2 giờ", 
    unread: 1,
    active: false 
  },
  { 
    id: 3, 
    orderTag: "#DT-003", 
    title: "Machine Learning Python", 
    preview: "Model đã được train xong, accuracy đạt 95%...", 
    time: "1 ngày", 
    unread: 0,
    active: false 
  },
  { 
    id: 4, 
    orderTag: "#DT-004", 
    title: "Database Design MySQL", 
    preview: "Em đã hoàn thành phần normalize database...", 
    time: "2 ngày", 
    unread: 0,
    active: false 
  },
]

const messages = [
  {
    id: 1,
    sender: "admin",
    content: "Chào bạn! Mình đã nhận được yêu cầu đồ án Website PHP Laravel của bạn. Mình sẽ bắt đầu làm ngay hôm nay nhé!",
    time: "09:30",
    date: "Hôm qua",
    avatar: "AD"
  },
  {
    id: 2,
    sender: "client",
    content: "Dạ em cảm ơn ạ! Anh nhớ làm đúng theo requirements file em gửi nhé. Nếu có gì không rõ cứ hỏi em ạ.",
    time: "09:35",
    read: true
  },
  {
    id: 3,
    sender: "admin",
    content: "Ok em, anh đã đọc qua requirements rồi. Có một số điểm anh muốn confirm với em:",
    time: "10:00",
    avatar: "AD"
  },
  {
    id: 4,
    sender: "admin",
    content: "1. Phần thanh toán online có cần tích hợp VNPay không?\n2. Admin dashboard có cần thống kê doanh thu theo chart không?\n3. Có cần responsive cho mobile không?",
    time: "10:01",
    avatar: "AD"
  },
  {
    id: 5,
    sender: "client",
    content: "Dạ:\n1. Có cần VNPay ạ\n2. Có cần chart thống kê luôn ạ\n3. Có cần responsive ạ, em quên ghi vào file requirements 😅",
    time: "10:15",
    read: true
  },
  {
    id: 6,
    type: "separator",
    text: "Hôm nay"
  },
  {
    id: 7,
    sender: "admin",
    content: "Update: Anh đã hoàn thành 70% rồi nè! Gửi em file source code để em xem trước nhé.",
    time: "14:30",
    avatar: "AD"
  },
  {
    id: 8,
    type: "file",
    sender: "admin",
    fileName: "source_code.zip",
    fileSize: "15.2 MB",
    time: "14:31",
    avatar: "AD"
  },
  {
    id: 9,
    type: "image",
    sender: "admin",
    imageUrl: "/placeholder.svg?height=200&width=300",
    caption: "Screenshot admin dashboard",
    time: "14:32",
    avatar: "AD"
  },
  {
    id: 10,
    sender: "client",
    content: "Wow đẹp quá anh ơi! Em rất hài lòng với giao diện. Anh làm nhanh thật 👍",
    time: "15:00",
    read: true
  },
]

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(1)
  const [filterTab, setFilterTab] = useState<"all" | "unread">("all")
  const [messageInput, setMessageInput] = useState("")

  const filteredConversations = filterTab === "unread" 
    ? conversations.filter(c => c.unread > 0)
    : conversations

  return (
    <div className="h-[calc(100vh-7rem)] flex glass-card rounded-xl overflow-hidden">
      {/* Conversations List */}
      <div className="w-80 border-r border-[#334155] flex flex-col">
        {/* Search & Filter */}
        <div className="p-4 border-b border-[#334155] space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <Input
              placeholder="Tìm kiếm tin nhắn..."
              className="pl-10 h-10 bg-[#0F172A] border-[#334155] text-[#F8FAFC] placeholder:text-[#64748B]"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterTab("all")}
              className={cn(
                "flex-1 py-2 text-sm rounded-lg transition-colors",
                filterTab === "all" 
                  ? "gradient-bg text-white" 
                  : "bg-[#0F172A] text-[#94A3B8] hover:text-[#F8FAFC]"
              )}
            >
              Tất cả
            </button>
            <button
              onClick={() => setFilterTab("unread")}
              className={cn(
                "flex-1 py-2 text-sm rounded-lg transition-colors",
                filterTab === "unread" 
                  ? "gradient-bg text-white" 
                  : "bg-[#0F172A] text-[#94A3B8] hover:text-[#F8FAFC]"
              )}
            >
              Chưa đọc
            </button>
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setActiveConversation(conv.id)}
              className={cn(
                "w-full p-4 text-left hover:bg-[#1E293B]/50 transition-colors relative",
                activeConversation === conv.id && "bg-[#1E293B]"
              )}
            >
              {activeConversation === conv.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 gradient-bg rounded-r-full" />
              )}
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#3B82F6] font-medium">{conv.orderTag}</span>
                <span className="text-xs text-[#64748B]">{conv.time}</span>
              </div>
              <p className="text-sm font-medium text-[#F8FAFC] mb-1 truncate">{conv.title}</p>
              <p className="text-xs text-[#94A3B8] truncate">{conv.preview}</p>
              {conv.unread > 0 && (
                <span className="absolute top-4 right-4 w-5 h-5 gradient-bg text-white text-xs rounded-full flex items-center justify-center">
                  {conv.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-[#334155] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#3B82F6] font-medium">#DT-001</span>
              <span className="text-[#64748B]">—</span>
              <span className="text-[#F8FAFC] font-medium">Website PHP Laravel</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6]">
              Đang làm
            </span>
          </div>
          <Button variant="outline" size="sm" className="border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] bg-transparent">
            <ExternalLink className="w-4 h-4 mr-2" />
            Xem đơn hàng
          </Button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => {
            // Date separator
            if (msg.type === "separator") {
              return (
                <div key={msg.id} className="flex items-center gap-4 py-2">
                  <div className="flex-1 border-t border-[#334155]" />
                  <span className="text-xs text-[#64748B]">{msg.text}</span>
                  <div className="flex-1 border-t border-[#334155]" />
                </div>
              )
            }

            const isAdmin = msg.sender === "admin"

            return (
              <div key={msg.id} className={cn("flex gap-3", !isAdmin && "justify-end")}>
                {/* Admin Avatar */}
                {isAdmin && (
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-semibold">{msg.avatar}</span>
                  </div>
                )}

                {/* Message Content */}
                <div className={cn("max-w-[70%]", !isAdmin && "items-end")}>
                  {/* File Message */}
                  {msg.type === "file" && (
                    <div className={cn(
                      "rounded-2xl p-4",
                      isAdmin ? "bg-[#1E293B]" : "gradient-bg"
                    )}>
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          isAdmin ? "bg-[#3B82F6]/10" : "bg-white/20"
                        )}>
                          <FileText className={cn("w-5 h-5", isAdmin ? "text-[#3B82F6]" : "text-white")} />
                        </div>
                        <div className="flex-1">
                          <p className={cn("text-sm font-medium", isAdmin ? "text-[#F8FAFC]" : "text-white")}>
                            {msg.fileName}
                          </p>
                          <p className={cn("text-xs", isAdmin ? "text-[#64748B]" : "text-white/70")}>
                            {msg.fileSize}
                          </p>
                        </div>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className={cn(
                            "h-8 w-8",
                            isAdmin ? "text-[#3B82F6] hover:bg-[#3B82F6]/10" : "text-white hover:bg-white/10"
                          )}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Image Message */}
                  {msg.type === "image" && (
                    <div className={cn(
                      "rounded-2xl p-2",
                      isAdmin ? "bg-[#1E293B]" : "gradient-bg"
                    )}>
                      <div className="w-64 h-40 rounded-xl bg-[#0F172A] flex items-center justify-center overflow-hidden">
                        <ImageIcon className="w-8 h-8 text-[#64748B]" />
                      </div>
                      {msg.caption && (
                        <p className={cn(
                          "text-xs mt-2 px-2",
                          isAdmin ? "text-[#94A3B8]" : "text-white/80"
                        )}>
                          {msg.caption}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Text Message */}
                  {!msg.type && (
                    <div className={cn(
                      "rounded-2xl px-4 py-3",
                      isAdmin 
                        ? "bg-[#1E293B] rounded-tl-sm" 
                        : "gradient-bg rounded-tr-sm"
                    )}>
                      <p className={cn(
                        "text-sm whitespace-pre-line",
                        isAdmin ? "text-[#F8FAFC]" : "text-white"
                      )}>
                        {msg.content}
                      </p>
                    </div>
                  )}

                  {/* Time & Read Status */}
                  <div className={cn(
                    "flex items-center gap-1 mt-1 px-1",
                    !isAdmin && "justify-end"
                  )}>
                    <span className="text-xs text-[#64748B]">{msg.time}</span>
                    {!isAdmin && msg.read && (
                      <CheckCheck className="w-3.5 h-3.5 text-[#3B82F6]" />
                    )}
                    {!isAdmin && !msg.read && (
                      <Check className="w-3.5 h-3.5 text-[#64748B]" />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-[#334155]">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-[#64748B] hover:text-[#F8FAFC] hover:bg-[#1E293B]">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#64748B] hover:text-[#F8FAFC] hover:bg-[#1E293B]">
              <ImageIcon className="w-5 h-5" />
            </Button>
            <div className="flex-1 relative">
              <Input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Nhập tin nhắn..."
                className="h-11 bg-[#0F172A] border-[#334155] text-[#F8FAFC] placeholder:text-[#64748B] pr-10"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#F8FAFC] hover:bg-transparent"
              >
                <Smile className="w-5 h-5" />
              </Button>
            </div>
            <Button className="h-11 w-11 gradient-bg text-white hover:opacity-90">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
