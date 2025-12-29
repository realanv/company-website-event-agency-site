import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "臻合方略企业管理咨询有限公司 | 医学会务与合规会议执行",
  description:
    "臻合方略专注服务药企医学部/市场部与医学会，提供专家顾问会、学术研讨会、数字会务与医学传播等一站式合规会议解决方案。",
};

const NAV_ITEMS = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务体系" },
  { href: "/compliance", label: "合规流程" },
  { href: "/about", label: "关于我们" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              {/* Logo 区域：公司名称简洁文字版，可后续替换为图片 Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-50"
              >
                <span className="rounded-sm bg-sky-500 px-1.5 py-0.5 text-xs font-bold uppercase tracking-widest text-slate-950">
                  ZHENHE
                </span>
                <span className="hidden text-sm sm:inline">
                  臻合方略企业管理咨询有限公司
                </span>
                <span className="inline text-sm sm:hidden">臻合方略</span>
              </Link>

              <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-sky-300"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-sky-400"
                >
                  联系我们
                </Link>
              </nav>

              {/* 简易移动端导航：仅保留“联系我们”主 CTA，避免复杂交互 */}
              <div className="flex items-center gap-2 md:hidden">
                <Link
                  href="/contact"
                  className="rounded-full bg-sky-500 px-3 py-1 text-xs font-medium text-slate-950 shadow-sm transition hover:bg-sky-400"
                >
                  联系我们
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              {children}
            </div>
          </main>

          <footer className="border-t border-slate-800/80 bg-slate-950">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div>
                <p>© {new Date().getFullYear()} 臻合方略企业管理咨询有限公司</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  医学驱动 · 严谨合规 · 精细执行
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
                <span>医学会务 · 学术研讨会 · 专家顾问会 · 数字会务</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
