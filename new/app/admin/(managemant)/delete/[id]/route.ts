// 删除文章（Server Action）  Server Action 

import { createClient } from "@/utils/supabase/server";

export async function POST(_: Request, { params }) {
  const supabase = await createClient();

  await supabase.from("posts").delete().eq("id", params.id);

  return Response.redirect(new URL("/admin", process.env.NEXT_PUBLIC_SITE_URL));
}
