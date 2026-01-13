import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from "@/utils/supabase/server";

export default async function AdminLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
 const supabase = await createClient()
 const { data } = await supabase.auth.getUser()


  return <div className="p-6">{children}</div>
}
