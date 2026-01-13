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
    return <form
        action={`/admin/edit/${params.slug}/save`}
        method="post"
        className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow space-y-4"
    >
        <h1 className="text-2xl font-semibold">Edit Post</h1>

        <input
            name="title"
            defaultValue={post.title}
            className="w-full border border-gray-300 rounded-lg p-3"
        />

        <textarea
            name="content"
            defaultValue={post.content}
            className="w-full border border-gray-300 rounded-lg p-3 h-80"
        />

        <div className="flex justify-between">
            <a
                href={`/posts/${post.slug}`}
                className="text-sm text-gray-500 hover:underline"
            >
                View live
            </a>

            <div className="space-x-2">
                <a href="/admin" className="px-4 py-2 bg-gray-100 rounded-lg">
                    Back
                </a>
                <button className="px-6 py-2 bg-black text-white rounded-lg">
                    Save
                </button>
            </div>
        </div>
    </form>

}
