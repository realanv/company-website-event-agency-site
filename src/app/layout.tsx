import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "臻合方略企业管理咨询有限公司 | 医学会务与合规会议执行",
  description:
    "臻合方略专注服务药企医学部/市场部与医学会，提供专家顾问会、学术研讨会、数字会务与医学传播等一站式合规会议解决方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
