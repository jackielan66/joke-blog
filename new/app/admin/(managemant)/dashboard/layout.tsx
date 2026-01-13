import Link from "next/link";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
   <section className="flex h-screen">
      <nav className="w-64 bg-gray-100 p-4">
        <h2 className="font-bold text-lg mb-4 text-red-50 ">管理后台</h2>
        <ul className="flex flex-col gap-2">
          <li><Link href="/dashboard" className="hover:underline text-black ">仪表盘</Link></li>
          <li><Link href="/dashboard/settings" className="hover:underline text-black">设置</Link></li>
        </ul>
      </nav>
      <main className="flex-1 p-8">{children}</main>
    </section>
  );
}   