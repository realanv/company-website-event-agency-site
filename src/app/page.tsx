import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "臻合方略企业管理咨询有限公司 | 医学驱动的专业会务伙伴",
  description:
    "面向药企医学部/市场部、医学会与医院的专业会务与合规会议执行团队，提供专家顾问会、学术研讨会、数字会务与医学传播服务。",
};

const pillars = [
  {
    title: "医学背景",
    description: "核心团队具备临床/医药背景，更懂医学逻辑与学术诉求。",
  },
  {
    title: "严谨合规",
    description: "对标 RDPAC 等行业规范，全流程可追溯、可审计。",
  },
  {
    title: "极致执行",
    description: "从需求澄清到会后复盘，项目管家式陪伴与落地。",
  },
];

const servicePreview = [
  {
    title: "专家顾问会（AdBoard）",
    description: "高规格闭门顾问会，聚焦前沿临床洞察与决策支持。",
    href: "/services#adboard",
  },
  {
    title: "学术研讨会 / 区域会议",
    description: "支持多中心、多城市区域学术活动的标准化执行。",
    href: "/services#regional",
  },
  {
    title: "医学传播与内容服务",
    description: "从内容梳理到视觉呈现的医学传播整体方案。",
    href: "/services#medical-content",
  },
  {
    title: "数字会务与直播",
    description: "兼顾线上体验与合规记录的数字会务解决方案。",
    href: "/services#digital",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* 首屏 Hero */}
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)]">
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300">
            MEDICAL EVENT AGENCY
          </p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight text-slate-50 sm:text-4xl">
            医学驱动的
            <span className="block text-sky-300">
              合规会务与学术活动执行伙伴
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            臻合方略专注服务药企医学部 / 市场部、医学会与医院科室，提供从专家顾问会、
            区域学术会到数字会务的全流程执行支持，在合规框架内帮助品牌完成高质量的医学沟通。
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-sky-400"
            >
              获取会务方案
            </Link>
            <Link
              href="/services"
              className="text-sm text-slate-300 underline-offset-4 hover:text-sky-300 hover:underline"
            >
              查看服务体系
            </Link>

            {/* 新加入的 Shadcn UI 按钮 - 修正了位置和结构 */}
            {/* <Button variant="outline" className="rounded-full border-sky-500/50 text-sky-300 hover:bg-sky-500 hover:text-slate-950">
              在线咨询
            </Button> */}
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>面向药企审计与合规要求设计</span>
            <span className="h-3 w-px bg-slate-700" />
            <span>支持全国多区域项目落地</span>
          </div>
        </div>

        {/* 右侧"学术科技感"可视化模块 */}
        <div className="relative h-56 overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_60px_rgba(56,189,248,0.25)] sm:h-64">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full border border-sky-500/50 blur-[1px]" />
            <div className="absolute right-4 top-6 h-24 w-24 rounded-xl border border-emerald-400/60 bg-emerald-400/10" />
            <div className="absolute bottom-6 left-8 h-24 w-40 rounded-xl border border-slate-600/70 bg-slate-900/80 backdrop-blur">
              <div className="flex items-center justify-between px-3 pt-3 text-[10px] text-slate-300">
                <span>医学合规流程</span>
                <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[9px] text-emerald-300">
                  RDPAC Ready
                </span>
              </div>
              <div className="mt-2 space-y-1.5 px-3 pb-3 text-[9px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-8 rounded-full bg-sky-400/80" />
                  <span>讲者邀约与资质校验</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-8 rounded-full bg-sky-300/70" />
                  <span>合规签到与参会记录</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-8 rounded-full bg-emerald-300/80" />
                  <span>劳务与文件归档闭环</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(52,211,153,0.18),_transparent_55%)]" />
        </div>
      </section>

      {/* 三大核心优势 */}
      <section className="space-y-5">
        <h2 className="text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
          三大核心优势
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 text-sm text-slate-200 shadow-sm shadow-slate-900/40"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 服务预览 */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
            服务概览
          </h2>
          <Link
            href="/services"
            className="text-xs text-slate-300 underline-offset-4 hover:text-sky-300 hover:underline"
          >
            查看全部服务
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {servicePreview.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 text-sm shadow-sm shadow-slate-900/40 transition hover:border-sky-500/60 hover:bg-slate-900/70"
            >
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
              <span className="mt-3 text-xs text-sky-300 opacity-0 transition group-hover:opacity-100">
                了解详情 →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}