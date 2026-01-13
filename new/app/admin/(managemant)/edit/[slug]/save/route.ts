import { createClient } from "@/utils/supabase/server";

export async function POST(req, { params }) {
  const supabase = await createClient();
  const form = await req.formData();

  await supabase
    .from("posts")
    .update({
      title: form.get("title"),
      content: form.get("content"),
    })
    .eq("slug", params.slug);

  return Response.redirect(new URL("/admin", process.env.NEXT_PUBLIC_SITE_URL));
}
