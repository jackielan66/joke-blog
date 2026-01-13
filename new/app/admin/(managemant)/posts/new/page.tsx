'use client'
import { useState } from 'react'
import { createClient } from "@/utils/supabase/client";
import { cookies } from 'next/headers'
export default  function NewPost() {
  const supabase = createClient()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  async function save() {
    // await supabase.from('posts').insert({
    //   title,
    //   slug: title.toLowerCase().replace(/\s+/g, '-'),
    //   content,
    //   published: true
    // })
    // location.href = '/admin'
  }

  return (
    <>
      <input placeholder="title" onChange={e => setTitle(e.target.value)} />
      <textarea onChange={e => setContent(e.target.value)} />
      <button onClick={save}>Save</button>
    </>
  )
}
