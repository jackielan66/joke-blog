import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

export default async function PostsPage() {

    const supabase = await createClient()

  

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>

        <a
          href={`/posts/`}
          className="block mb-4 border-b pb-4"
        >
          跳转到文字列表
        </a>
    </main>
  )
}
