import { createClient } from "@/utils/supabase/server";

export default async function Edit({ params }: { params: { slug: string } }) {
    params = await params;
    const supabase = await createClient();

    const { data: post } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", params.slug)
        .single();

    if (!post) {
        return <div>Not Found {params.slug} </div>
    }
    return (
        <form action={`/admin/edit/${params.slug}/save`} method="post">
            <input name="title" defaultValue={post.title} />
            <textarea name="content" defaultValue={post.content} />
            <button>Save</button>
        </form>
    );
}
