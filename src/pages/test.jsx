import { Suspense } from 'react'


export default function Home() {
  let artist = {
    id: 'the-beatles',
    name: 'The Beatles',
  };
  return (
    <main className="p-8 max-w-4xl mx-auto">

      <Suspense fallback={<p>加载中外部数据..</p>}>
        
      </Suspense>
    </main>
  )
}