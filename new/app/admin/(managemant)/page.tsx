import { cookies } from 'next/headers'
import { createClient } from "@/utils/supabase/server";


export default async function Admin() {
    const supabase = await createClient()
    const { data } = await supabase.from('posts').select('*')

    return <div className="min-h-screen bg-gray-50 p-10">
  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow">
    <div className="flex justify-between items-center p-6 border-b">
      <h1 className="text-xl font-semibold">Blog CMS</h1>
      <a
        href="/admin/new"
        className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800"
      >
        + New Post
      </a>
    </div>

    <div className="divide-y">
      {data?.map(post => (
        <div key={post.id} className="flex justify-between p-4 hover:bg-gray-50">
          <a
            href={`/admin/edit/${post.slug}`}
            className="font-medium text-gray-800 hover:underline"
          >
            {post.title}
          </a>
          <time>
            {new Date(post.created_at).toDateString()}
          </time>

          <form action={`/admin/delete/${post.id}`} method="post">
            <button className="text-sm text-red-500 hover:text-red-700">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  </div>
</div>

}
