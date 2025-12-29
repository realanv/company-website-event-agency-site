import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; last: number }>();

const WINDOW = 60_000;
const MAX = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.last > WINDOW) {
    rateLimitMap.set(ip, { count: 1, last: now });
    return false;
  }

  record.count++;
  record.last = now;

  return record.count > MAX;
}

function getClientIP(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (!forwardedFor) return "unknown";
  return forwardedFor.split(",")[0].trim();
}

function validateForm(data: any): string | null {
  const { name, phone, email, message } = data;

  if (!name || name.length < 2) return "姓名不合法";
  if (!phone || phone.length < 6) return "手机号不合法";
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return "邮箱格式错误";
  if (!message || message.length < 5) return "留言内容过短";

  return null;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIP(req);

    if (ip !== "unknown" && isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "请求过于频繁，请稍后再试" },
        { status: 429 }
      );
    }

    const data = await req.json();
    const error = validateForm(data);

    if (error) {
      return NextResponse.json(
        { success: false, message: error },
        { status: 400 }
      );
    }

    console.log("📩 Contact submission:", {
      ...data,
      ip,
      time: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "提交成功，我们会尽快联系您",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "服务器错误" },
      { status: 500 }
    );
  }
}