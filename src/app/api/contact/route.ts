import { NextRequest, NextResponse } from "next/server";

/**
 * 简易内存级别限流器（示例实现）：
 *  - 以 IP 为维度限制单位时间内的提交次数
 *  - 仅在单实例部署场景下有效（如后续使用多实例/Serverless，请替换为持久化方案）
 */
const rateLimitMap = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

const WINDOW_MS = 60_000; // 1 分钟窗口
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  record.count += 1;
  if (record.count > MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.ip ||
    "unknown";

  if (ip && isRateLimited(ip)) {
    return NextResponse.json(
      { message: "提交过于频繁，请稍后再试。" },
      { status: 429 }
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "请求格式不正确。" },
      { status: 400 }
    );
  }

  const {
    name,
    company,
    phone,
    meetingType,
    date,
    description,
    budget,
    companyWebsite, // 防垃圾隐藏字段
  } = body || {};

  // 简单防垃圾：隐藏字段如被填写，则视为可疑提交
  if (companyWebsite && typeof companyWebsite === "string" && companyWebsite.trim().length > 0) {
    return NextResponse.json(
      { message: "提交已被拦截。" },
      { status: 400 }
    );
  }

  if (
    !name ||
    !company ||
    !phone ||
    !meetingType ||
    !date ||
    !description
  ) {
    return NextResponse.json(
      { message: "请填写所有必填项（带 * 字段）。" },
      { status: 400 }
    );
  }

  // 这里可以接入实际的邮件服务或数据库存储逻辑
  // 示例：将数据发送到企业邮箱或 CRM
  // 重要提示：正式环境请不要直接依赖 console.log 记录敏感信息
  console.log("【新联系表单提交】", {
    name,
    company,
    phone,
    meetingType,
    date,
    budget,
    description,
    ip,
  });

  return NextResponse.json({ message: "提交成功" }, { status: 200 });
}


