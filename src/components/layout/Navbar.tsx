"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务体系" },
  { href: "/compliance", label: "合规流程" },
  { href: "/about", label: "关于我们" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // 统一按钮样式
  const getNavLinkClass = (href: string) => {
    const active = isActive(href);
    return `rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
      active
        ? "bg-slate-800/60 text-sky-400" 
        : "text-slate-300 hover:bg-slate-800/40 hover:text-slate-100"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/40 bg-slate-950/70 backdrop-blur-xl">
      {/* justify-between 让 Logo 在左，nav 在右 */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* 左侧 Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="rounded bg-sky-500 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-950">
            ZHENHE
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-50">
            臻合方略
          </span>
        </Link>

        {/* 右侧统一菜单区域 */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={getNavLinkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          
          {/* 联系我们：现在和菜单项完全排在一起，样式也完全统一 */}
          <Link href="/contact" className={getNavLinkClass("/contact")}>
            联系我们
          </Link>
        </nav>

        {/* 移动端适配（小屏幕显示的联系我们） */}
        <div className="md:hidden">
           <Link href="/contact" className={getNavLinkClass("/contact")}>
            联系我们
          </Link>
        </div>
      </div>
    </header>
  );
}