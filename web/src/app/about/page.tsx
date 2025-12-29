export const metadata = {
  title: "关于我们 | 臻合方略企业管理咨询有限公司",
  description:
    "臻合方略是一支具备医学与医药背景的会务与咨询团队，专注服务药企医学部/市场部与医学会，提供管家式项目陪伴与合规执行。",
};

const values = [
  {
    title: "医学驱动",
    description: "以医学与循证逻辑为起点设计每一场活动，而不是单纯“办一场会”。",
  },
  {
    title: "管家式服务",
    description: "项目同一负责人全程跟进，从立项沟通到会后复盘提供持续陪伴。",
  },
  {
    title: "长期主义",
    description: "更关注项目和产品在生命周期中的积累与沉淀，陪伴初创项目共同成长。",
  },
];

const tags = [
  "医学背景团队",
  "药企内部合作经验",
  "熟悉 RDPAC 等行业规范",
  "理解医学部与市场部协作模式",
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
            ABOUT US
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            我们是一支
            <span className="block text-sky-300">
              懂医学、懂合规、懂执行的会务团队
            </span>
          </h1>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            臻合方略企业管理咨询有限公司专注于医学会务与学术活动执行，服务对象包括
            药企医学部 / 市场部、医学会与医院科室。
            我们希望通过专业、合规与精细化执行，成为客户在关键项目中的长期合作伙伴。
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            团队成员拥有医学院校和医药企业背景，熟悉药企内部审批流程与合规要求，
            能够在尊重流程的前提下，帮助业务团队提升沟通效率、降低执行风险。
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 text-xs text-slate-200 shadow-sm shadow-slate-900/40 sm:text-sm">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            我们的背景与优势
          </h2>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-300 sm:text-sm">
            {tags.map((tag) => (
              <li key={tag} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                <span>{tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
          服务宗旨
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 text-xs text-slate-200 shadow-sm shadow-slate-900/40 sm:text-sm"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {value.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


