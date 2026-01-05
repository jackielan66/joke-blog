import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

export default async function PostsPage() {

  const supabase = await createClient()


  const { data: posts, error } = await supabase.from('posts')
    .select('*')






  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      {posts?.map(post => (
        <a key={post.id} href={`/posts/${post.slug}`}>
          <h2>{post.title}</h2>
        </a>
      ))}
    </div>
  )
}
