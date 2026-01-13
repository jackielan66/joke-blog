export default function NewPost() {
  return (
    <form action="/admin/new/create" method="post" className="p-6 max-w-2xl mx-auto">
      <input name="title" placeholder="Title" className="border p-2 w-full" />
      <textarea name="content" className="border p-2 w-full h-60 mt-2" />
      <button className="mt-4 bg-black text-white px-4 py-2">Publish</button>
    </form>
  );
}
