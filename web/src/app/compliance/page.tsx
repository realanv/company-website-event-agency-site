export const metadata = {
  title: "合规流程 | 臻合方略企业管理咨询有限公司",
  description:
    "以药企审计视角设计的合规专题页，展示从讲者邀约到劳务发放及归档管理的 SOP 流程与证据链闭环。",
};

const sopSteps = [
  {
    title: "01 需求立项与合规评估",
    detail:
      "由医学部/市场部提出会议或项目需求，明确目标人群、预算与关键指标，进行初步合规评估与风险识别。",
  },
  {
    title: "02 讲者与参会专家邀约",
    detail:
      "基于事先约定的专家池与准入标准进行讲者甄选，记录邀约过程、沟通纪要与确认函，建立可追溯记录。",
  },
  {
    title: "03 合同与文件管理",
    detail:
      "依据公司与 RDPAC 等行业规范准备并签署相关协议（如顾问协议、会议合作协议），统一归档在项目文档库中。",
  },
  {
    title: "04 会议执行与现场记录",
    detail:
      "执行现场/线上会议，包括签到、议程控制、拍照与关键节点记录，严格区分学术内容与商业宣传。",
  },
  {
    title: "05 费用结算与劳务发放",
    detail:
      "依据合同与实际参会情况进行核实，完成讲者劳务、差旅及相关费用的合规支付，并保留必要财务与合规凭证。",
  },
  {
    title: "06 会后复盘与证据链闭环",
    detail:
      "形成会后总结、参会数据与关键文件清单，核对并补齐证据链，使项目在审计视角下具备完整闭环。",
  },
];

const archivePoints = [
  "会议方案、议程与背景资料（含版本记录）",
  "讲者与参会专家名单、邀请函与确认记录",
  "现场签到记录（纸质/电子）、合影与关键节点照片",
  "合同协议、开票信息与付款凭证摘要",
  "会后总结报告与主要结论/行动项",
];

export default function CompliancePage() {
  return (
    <div className="space-y-10">
      <section className="max-w-3xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
          COMPLIANCE
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          面向药企审计视角设计的
          <span className="block text-sky-300">合规会议执行与流程管理</span>
        </h1>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          我们以审计与合规团队的视角来设计会议流程与文档管理，
          让每一场活动都能够在需要时提供清晰、完整、可追溯的证据链支持。
        </p>
      </section>

      {/* 合规声明（简版，可根据需要扩展） */}
      <section className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 text-sm text-slate-200 shadow-sm shadow-slate-900/40">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
          合规声明（节选）
        </h2>
        <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
          我们在为医药企业提供会议与活动相关服务时，遵循包括但不限于 RDPAC
          准则及相关行业规范，
          尊重各公司内部合规制度与审批流程，不参与任何形式的不合规支出或利益输送安排。
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
          项目执行过程中，如遇到需要合规或法务部门进一步审阅的情况，
          我们将积极配合客户团队提供所需信息与文件版本记录，并在必要时调整执行方案。
        </p>
      </section>

      {/* SOP 流程图（文字版时间轴） */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
          从“讲者邀约”到“证据链闭环”的 SOP 流程
        </h2>
        <div className="relative border-l border-slate-700/70 pl-4">
          <div className="absolute left-0 top-1 h-2 w-2 -translate-x-[5px] rounded-full bg-sky-400" />
          {sopSteps.map((step, index) => (
            <div key={step.title} className="relative pb-6 last:pb-0">
              {index !== sopSteps.length - 1 && (
                <div className="absolute left-[-1px] top-5 h-full w-px bg-slate-700/70" />
              )}
              <div className="relative rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs text-slate-200 shadow-sm shadow-slate-900/40 sm:text-sm">
                <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-300">
                  STEP {index + 1}
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 归档管理与可追溯性 */}
      <section className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 text-sm text-slate-200 shadow-sm shadow-slate-900/40">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            归档管理与可追溯性
          </h2>
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
            针对每个项目，我们都会按模块对关键文档与记录进行结构化归档，
            结合客户内部系统（如 DMS、CRM 等）进行编号与映射，便于在审计和内部复盘时快速定位。
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
            {archivePoints.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-5 text-xs text-emerald-50 shadow-[0_0_40px_rgba(52,211,153,0.22)] sm:text-sm">
          <h3 className="text-sm font-semibold text-emerald-100 sm:text-base">
            审计视角下的“证据链闭环”
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-emerald-50/90 sm:text-sm">
            我们会在项目启动阶段与客户明确“证据链清单”，
            例如：从立项审批、合同文件、参会名单到付款凭证的全路径节点，
            并在执行过程中对照清单进行实时补齐与检查。
          </p>
          <p className="mt-2 text-xs leading-relaxed text-emerald-50/90 sm:text-sm">
            这样可以在需要审计或内部检查时，快速给出一套连贯、可追溯、逻辑完整的项目材料，
            降低事后补材料的沟通成本。
          </p>
        </div>
      </section>
    </div>
  );
}


