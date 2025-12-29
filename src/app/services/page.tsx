export const metadata = {
  title: "服务体系 | 臻合方略企业管理咨询有限公司",
  description:
    "专家顾问会、学术研讨会、医学传播与数字会务一体化服务，面向药企医学部与市场部的合规会议执行方案。",
};

const services = [
  {
    id: "adboard",
    name: "专家顾问会（AdBoard）",
    tagline: "高规格 · 高隐私 · 高价值洞察",
    description:
      "面向药企医学部/市场部与临床专家的深度沟通场景，从会前甄选到会后总结，确保每一场顾问会都能产出可执行的洞察与决策建议。",
    highlights: [
      "全流程隐私保护与合规管控（含参会专家筛选与记录）",
      "小型闭门会议体验设计，兼顾学术氛围与流程效率",
      "会议纪要与洞察报告可按审计要求归档与追溯",
    ],
  },
  {
    id: "regional",
    name: "学术研讨会 / 区域会议",
    tagline: "区域覆盖 · 标准流程 · 稳定交付",
    description:
      "为产品全生命周期中的多中心/区域学术活动提供从立项、场地、物料到执行的标准化解决方案，兼顾合规要求与品牌形象。",
    highlights: [
      "全国/多区域统一 SOP 与服务标准，便于跨区域复制",
      "讲者邀约、差旅、签约与劳务支付全流程合规追踪",
      "适配不同规模和预算的多层级会议形态（城市会、科室会等）",
    ],
  },
  {
    id: "medical-content",
    name: "医学传播与内容服务",
    tagline: "内容驱动 · 学术为先",
    description:
      "依托医学背景团队，对医药专业内容进行结构化梳理、视觉化呈现，帮助品牌在合规前提下完成高质量学术沟通。",
    highlights: [
      "PPT 重构、海报与手册设计，兼顾循证逻辑与视觉呈现",
      "会议资料排版与归档，符合药企与医学会审阅标准",
      "支持中英文双语内容的本地化与术语校对",
    ],
  },
  {
    id: "digital",
    name: "数字会务与直播",
    tagline: "稳定连接 · 合规互动 · 数据可追踪",
    description:
      "面向线上或线下+直播场景，提供注册、签到、直播、回放到会后数据分析的一体化数字会务解决方案。",
    highlights: [
      "接入稳定直播与回放平台，支持多终端访问（含微信内）",
      "合规签到、参会记录与互动数据留痕，便于审计与复盘",
      "可定制线上报名页与短信/微信触达流程",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <section className="max-w-3xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
          SERVICES
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          面向药企与医学会的
          <span className="block text-sky-300">
            医学会务与会议执行服务体系
          </span>
        </h1>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          我们围绕「专家沟通、学术传播与数字会务」三大核心场景，提供可审计、可复制、可追踪的精细化执行服务，
          帮助医学部与市场团队在合规框架内完成高质量的学术沟通。
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.id}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-sm shadow-slate-900/40 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900/70"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
                  {service.name}
                </h2>
                <p className="mt-1 text-xs font-medium text-sky-300 sm:text-sm">
                  {service.tagline}
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
              {service.description}
            </p>
            <ul className="mt-1 space-y-1.5 text-xs text-slate-300">
              {service.highlights.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}


