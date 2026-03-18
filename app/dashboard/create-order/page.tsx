"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { ChevronRight, Upload, X, FileText, Clock, Zap, Flame, Check, Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const fields = [
  { value: "web", label: "Lập Trình Web" },
  { value: "mobile", label: "Mobile App" },
  { value: "database", label: "Cơ Sở Dữ Liệu" },
  { value: "ai", label: "AI & Machine Learning" },
  { value: "thesis", label: "Đồ Án Tốt Nghiệp" },
  { value: "algorithm", label: "Thuật Toán & DSA" },
]

const technologies = [
  "React", "Next.js", "Vue.js", "Angular", "Node.js", "Express",
  "Python", "Django", "Flask", "PHP", "Laravel", "Java", "Spring Boot",
  "React Native", "Flutter", "Swift", "Kotlin",
  "MySQL", "PostgreSQL", "MongoDB", "Firebase",
  "TensorFlow", "PyTorch", "Pandas", "NumPy",
  "C++", "C#", ".NET"
]

const priorityOptions = [
  { value: "normal", label: "Bình thường", description: "Deadline tiêu chuẩn", icon: Clock, multiplier: "x1" },
  { value: "urgent", label: "Gấp", description: "Ưu tiên cao hơn", icon: Zap, multiplier: "x1.5" },
  { value: "super-urgent", label: "Siêu gấp", description: "Làm ngay lập tức", icon: Flame, multiplier: "x2" },
]

export default function CreateOrderPage() {
   const [currentStep, setCurrentStep] = useState(1)
  const [selectedTechs, setSelectedTechs] = useState<string[]>(["React", "Node.js"])
  const [priority, setPriority] = useState("normal")
  const [date, setDate] = useState<Date>()
  const [uploadedFiles, setUploadedFiles] = useState<{name: string, size: string}[]>([
    { name: "requirements.pdf", size: "2.4 MB" },
    { name: "mockup.fig", size: "8.1 MB" },
  ])

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(f => f.name !== fileName))
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/dashboard" className="text-[#64748B] hover:text-[#F8FAFC]">Tổng Quan</Link>
        <ChevronRight className="w-4 h-4 text-[#64748B]" />
        <Link href="/dashboard/orders" className="text-[#64748B] hover:text-[#F8FAFC]">Đơn Hàng</Link>
        <ChevronRight className="w-4 h-4 text-[#64748B]" />
        <span className="text-[#F8FAFC]">Tạo Đơn Mới</span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl font-bold text-[#F8FAFC]">Tạo Đơn Hàng Mới</h1>

      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-4 py-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all",
              step === currentStep 
                ? "gradient-bg text-white glow-gradient" 
                : step < currentStep 
                  ? "bg-[#22C55E] text-white"
                  : "bg-[#1E293B] text-[#64748B] border border-[#334155]"
            )}>
              {step < currentStep ? <Check className="w-5 h-5" /> : step}
            </div>
            {step < 3 && (
              <div className={cn(
                "w-20 h-1 mx-2 rounded-full",
                step < currentStep ? "gradient-bg" : "bg-[#334155]"
              )} />
            )}
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="glass-card rounded-2xl p-8">
        <form className="space-y-6">
          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#F8FAFC]">Tiêu đề đơn hàng</label>
            <Input
              placeholder="VD: Website bán hàng PHP Laravel"
              className="h-12 bg-[#0F172A] border-[#334155] text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6]"
            />
          </div>

          {/* Field & Priority Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Field Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#F8FAFC]">Lĩnh vực</label>
              <Select>
                <SelectTrigger className="h-12 bg-[#0F172A] border-[#334155] text-[#F8FAFC] focus:border-[#3B82F6]">
                  <SelectValue placeholder="Chọn lĩnh vực" />
                </SelectTrigger>
                <SelectContent className="bg-[#1E293B] border-[#334155]">
                  {fields.map((field) => (
                    <SelectItem 
                      key={field.value} 
                      value={field.value}
                      className="text-[#F8FAFC] focus:bg-[#334155] focus:text-[#F8FAFC]"
                    >
                      {field.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Deadline */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#F8FAFC]">Deadline</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal bg-[#0F172A] border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] hover:text-[#F8FAFC] hover:border-[#3B82F6] transition-all",
                      !date && "text-[#64748B]"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-[#3B82F6]" />
                    {date ? format(date, "dd/MM/yyyy") : <span>Chọn ngày hoàn thành</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#0F172A] border-[#334155] shadow-2xl" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="bg-[#0F172A] text-[#F8FAFC]"
                    classNames={{
                      day_selected: "gradient-bg text-white hover:opacity-90",
                      day_today: "bg-[#334155] text-[#F8FAFC]",
                      head_cell: "text-[#64748B] font-medium",
                      nav_button: "border-[#334155] hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC]",
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Technology Multi-select */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#F8FAFC]">Công nghệ yêu cầu</label>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 18).map((tech) => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => toggleTech(tech)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                    selectedTechs.includes(tech)
                      ? "gradient-bg text-white"
                      : "bg-[#1E293B] text-[#94A3B8] border border-[#334155] hover:border-[#3B82F6]"
                  )}
                >
                  {tech}
                </button>
              ))}
            </div>
            {selectedTechs.length > 0 && (
              <p className="text-xs text-[#64748B]">
                Đã chọn: {selectedTechs.join(", ")}
              </p>
            )}
          </div>

          {/* Priority Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#F8FAFC]">Mức độ ưu tiên</label>
            <div className="grid sm:grid-cols-3 gap-4">
              {priorityOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPriority(option.value)}
                  className={cn(
                    "relative p-4 rounded-xl border-2 text-left transition-all",
                    priority === option.value
                      ? "border-[#3B82F6] bg-[#3B82F6]/10"
                      : "border-[#334155] bg-[#1E293B] hover:border-[#3B82F6]/50"
                  )}
                >
                  {priority === option.value && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <option.icon className={cn(
                    "w-6 h-6 mb-2",
                    option.value === "normal" && "text-[#3B82F6]",
                    option.value === "urgent" && "text-[#F59E0B]",
                    option.value === "super-urgent" && "text-[#EF4444]"
                  )} />
                  <p className="font-medium text-[#F8FAFC]">{option.label}</p>
                  <p className="text-xs text-[#64748B] mt-1">{option.description}</p>
                  <span className={cn(
                    "inline-block mt-2 text-xs px-2 py-0.5 rounded-full",
                    option.value === "normal" && "bg-[#3B82F6]/10 text-[#3B82F6]",
                    option.value === "urgent" && "bg-[#F59E0B]/10 text-[#F59E0B]",
                    option.value === "super-urgent" && "bg-[#EF4444]/10 text-[#EF4444]"
                  )}>
                    {option.multiplier}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#F8FAFC]">Ngân sách dự kiến</label>
            <div className="relative">
              <Input
                type="text"
                placeholder="500,000"
                className="h-12 bg-[#0F172A] border-[#334155] text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] pr-16"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]">VNĐ</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#F8FAFC]">Mô tả chi tiết</label>
            <div className="relative">
              <Textarea
                placeholder="Mô tả chi tiết yêu cầu, chức năng cần có, các lưu ý đặc biệt..."
                rows={6}
                className="bg-[#0F172A] border-[#334155] text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#3B82F6] resize-none"
              />
              {/* Mini Toolbar */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <button type="button" className="p-1.5 rounded hover:bg-[#1E293B] text-[#64748B]">
                  <span className="text-sm font-bold">B</span>
                </button>
                <button type="button" className="p-1.5 rounded hover:bg-[#1E293B] text-[#64748B]">
                  <span className="text-sm italic">I</span>
                </button>
                <button type="button" className="p-1.5 rounded hover:bg-[#1E293B] text-[#64748B]">
                  <span className="text-sm underline">U</span>
                </button>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#F8FAFC]">File đính kèm</label>
            <div className="border-2 border-dashed border-[#334155] rounded-xl p-8 text-center hover:border-[#3B82F6] transition-colors cursor-pointer">
              <Upload className="w-10 h-10 text-[#64748B] mx-auto mb-3" />
              <p className="text-[#94A3B8] mb-1">Kéo thả file vào đây hoặc click để chọn</p>
              <p className="text-xs text-[#64748B]">Hỗ trợ: PDF, DOC, ZIP, RAR (tối đa 50MB)</p>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between p-3 bg-[#1E293B] rounded-lg border border-[#334155]"
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
                    <button
                      type="button"
                      onClick={() => removeFile(file.name)}
                      className="p-2 hover:bg-[#0F172A] rounded-lg text-[#64748B] hover:text-[#EF4444] transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-4 border-t border-[#334155]">
            <Link href="/dashboard/orders">
              <Button type="button" variant="outline" className="h-12 px-8 border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] bg-transparent">
                Hủy
              </Button>
            </Link>
            <Button type="submit" className="h-12 px-8 gradient-bg text-white hover:opacity-90 transition-opacity">
              Tiếp Theo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
