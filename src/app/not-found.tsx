import Link from "next/link";

export default function NotFound() {
  return <main className="mx-auto max-w-xl px-5 py-16"><h1 className="text-3xl font-bold">Không tìm thấy trang</h1><p className="mt-3">Đường dẫn chưa được cho phép hoặc nội dung chưa hoàn tất.</p><Link href="/" className="mt-4 inline-block text-rose-700 underline">Về trang chủ</Link></main>;
}
