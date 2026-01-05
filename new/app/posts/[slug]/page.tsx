import { createClient } from "@/utils/supabase/server";
import ReactMarkdown from 'react-markdown'


export default async function PostDetail({ params }:  { params: { slug: string } }) {
    params = await params
    
    const supabase = await createClient()

    console.log(params.slug,"sfdsf")
    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', params.slug)
        .single()

    if (!post) {
      return <div>Not Found {params.slug} </div>  
    }    

    return (
        <article className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="prose">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    )
}
