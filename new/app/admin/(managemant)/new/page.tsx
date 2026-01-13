export default function NewPost() {
  return (
<form
  action="/admin/new/create"
  method="post"
  className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow space-y-4"
>
  <h1 className="text-2xl font-semibold">New Post</h1>

  <input
    name="title"
    placeholder="Post title"
    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
  />

  <textarea
    name="content"
    placeholder="Write in Markdown..."
    className="w-full border border-gray-300 rounded-lg p-3 h-80 focus:ring-2 focus:ring-black"
  />

  <div className="flex justify-end gap-3">
    <a href="/admin" className="px-4 py-2 bg-gray-100 rounded-lg">
      Cancel
    </a>
    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
      Publish
    </button>
  </div>
</form>

  );
}
