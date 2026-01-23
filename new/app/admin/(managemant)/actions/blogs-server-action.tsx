// blogs 表的server action
'use server'
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export type State = {
    success: boolean;
    message: string;
    errors?: Record<string, string>;
};
export async function createPost(prevState: State, formData: FormData) {
    const supabase = await createClient();
    const form = formData;
    const title = form.get("title") as string;
    const content = form.get("content") as string;

    await supabase.from("posts").insert({
        title,
        slug: title.toLowerCase().replace(/\s+/g, "-"),
        content,
        published: true,
    });
    // revalidatePath('/admin');

    return {
        success: true,
        message: "Post created successfully",
    };

}