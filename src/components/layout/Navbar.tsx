import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务体系" },
  { href: "/compliance", label: "合规流程" },
  { href: "/about", label: "关于我们" },
];

export default function Navbar() {
  return (
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

        {/* 简易移动端导航：仅保留"联系我们"主 CTA，避免复杂交互 */}
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
  );
}

