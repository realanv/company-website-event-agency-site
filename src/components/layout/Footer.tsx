export default function Footer() {
  return (
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
  );
}



