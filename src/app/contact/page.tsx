export const metadata = {
  title: "联系我们 | 臻合方略企业管理咨询有限公司",
  description:
    "获取会议执行与医学会务服务方案，联系我们的项目团队。支持专家顾问会、学术研讨会、数字会务与医学传播等多场景服务。",
};

export default function ContactPage() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)]">
      {/* 左侧：公司与联系说明（无表单） */}
      <section className="space-y-5">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
            CONTACT
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            联系我们
          </h1>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            如需了解医学会务、专家顾问会或学术研讨会等服务详情，
            欢迎通过电话、邮箱或微信与我们直接联系。我们会根据您的项目阶段与需求，
            安排合适的项目负责人进行一对一沟通。
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 text-sm text-slate-200 shadow-sm shadow-slate-900/40">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            联系方式
          </h2>
          <div className="space-y-2 text-slate-300">
            <p>地址：可在此处补充公司注册地址或办公地址。</p>
            <p>电话：可在此处补充对外公布的联系电话。</p>
            <p>企业邮箱：contact@yourcompany.com（示例，可按实际修改）。</p>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
            对于药企客户，我们也支持通过企业微信或既有供应商管理系统进行对接，
            以便符合贵司内部采购与合规流程。
          </p>
        </div>
      </section>

      {/* 右侧：企业微信 / 二维码占位 */}
      <aside className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 text-xs text-slate-200 shadow-sm shadow-slate-900/40 sm:text-sm">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
          企业微信 / 微信二维码
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex h-28 w-28 items-center justify-center rounded-lg border border-dashed border-slate-700 text-[11px] text-slate-500">
            微信二维码占位
          </div>
          <p className="text-[11px] leading-relaxed text-slate-400 sm:text-xs">
            建议上传企业微信或项目联系人微信二维码，方便在浏览官网后，
            由采购或项目负责人直接添加微信进行沟通，无需注册账号。
          </p>
        </div>
      </aside>
    </div>
  );
}


