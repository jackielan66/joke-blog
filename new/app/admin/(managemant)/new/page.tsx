'use client'
import { createPost ,State,sayHello} from '@/app/admin/(managemant)/actions/blogs-server-action'
import { useActionState } from 'react'
export default function NewPost() {

  const initialState: State = {
    success: false,
    message: '',
    errors: undefined
  };

  // useActionState 自动管理生命周期
  // state: 最新状态, action: 提交动作, isPending: 加载状态
  const [state, action, isPending] = useActionState(createPost,initialState);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
   const res =await  sayHello('jackie')
   console.log(res,"server 返回结果")
  }

  return (
    <form
      action={action}
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
          {isPending?'发布中...':'确认'}
        </button>
      </div>
    </form>

  );
}
