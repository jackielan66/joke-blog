'use client'
import { deletePost } from '@/app/admin/(managemant)/actions/blogs-server-action'

export function DeleteButton({ id }: { id: string }) {
  return (
    <button
      className="text-red-500"
      onClick={() => {
        if (confirm('确定删除？')) {
          deletePost(id)
        }
      }}
    >
      删除
    </button>
  )
}
