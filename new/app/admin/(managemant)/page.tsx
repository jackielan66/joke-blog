import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Admin() {
  const supabase = await createClient();

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link href="/admin/new">➕ New Post</Link>

      {posts?.map((p) => (
        <div key={p.id} className="border-b py-3 flex justify-between">
          <Link href={`/admin/edit/${p.slug}`}>{p.title}</Link>

          <form action={`/admin/delete/${p.id}`} method="post">
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
