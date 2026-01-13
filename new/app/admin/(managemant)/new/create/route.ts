import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();
  const form = await req.formData();

  const title = form.get("title") as string;
  const content = form.get("content") as string;

  await supabase.from("posts").insert({
    title,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
    content,
    published: true,
  });

  return Response.redirect(new URL("/admin", process.env.NEXT_PUBLIC_SITE_URL));
}
