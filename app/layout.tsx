import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
})

export const metadata: Metadata = {
  title: 'DevTask — Nhận làm bài tập & đồ án IT',
  description: 'Dịch vụ nhận làm bài tập lập trình, đồ án môn học, đồ án tốt nghiệp IT. 50+ đồ án hoàn thành, hỗ trợ bảo vệ 1-1.',
  keywords: ['làm bài tập IT', 'đồ án lập trình', 'thuê code', 'đồ án tốt nghiệp', 'freelance developer'],
  openGraph: {
    title: 'DevTask — Nhận làm bài tập & đồ án IT',
    description: 'Dịch vụ nhận làm bài tập lập trình, đồ án môn học, đồ án tốt nghiệp IT.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={geist.variable}>
      <body className="font-sans antialiased bg-[#0F172A] text-[#F8FAFC]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#3B82F6] focus:text-white focus:rounded-lg">
          Chuyển đến nội dung chính
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
