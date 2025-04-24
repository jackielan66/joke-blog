import { Suspense } from 'react'
import HomeArticleList from '../components/homeArticleList/homeArticleList'
import Biography from '../components/homeArticleList/Biography'
import Albums from '../components/homeArticleList/Albums'

export default function Home() {
  let artist = {
    id: 'the-beatles',
    name: 'The Beatles',
  };
  return (
    <main className="p-8 max-w-4xl mx-auto">

      <Suspense fallback={<p>加载中外部数据..</p>}>
        <Biography artistId={artist.id} />
        <Suspense fallback={<>加载最里面的数据中...</>}>
          <Albums artistId={artist.id} />
        </Suspense>
      </Suspense>
    </main>
  )
}