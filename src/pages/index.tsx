import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { saveNews, getNews, getTemp } from '../scratch/ease-news'
import { EaseNews } from "@/model/easenet"
import { Suspense } from 'react'
import HomeArticleList from "@/components/homeArticleList/homeArticleList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getStaticProps() {
  // await saveNews()
  // let newsList = await getNews()
  let newsList = await getTemp()
  return {
    props: { articles: newsList },
    revalidate: 60 * 60 * 24, // 每 24 小时 重新生成一次页面（ISR）
  }
}

export default function Home({ articles }: { articles: EaseNews[] }) {

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
    >
      <main>
        <Suspense fallback={<p>Loading</p>}>
          <HomeArticleList articles={articles} />
        </Suspense>
      </main>
    </div>
  );
}
