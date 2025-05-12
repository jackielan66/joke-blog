import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { saveNews, getNews, getTemp } from '../scratch/ease-news'
import { EaseNews } from "@/model/easenet"
import { Suspense } from 'react'
import HomeArticleList from "@/components/homeArticleList/homeArticleList";
import Head from "next/head";

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
    <>
    <Head>
      <title>好玩的段子_糗事_搞笑_内容_每日轻松一刻 - 先疯队</title>
      <meta name="description" content="先疯队，搜集最新的轻松搞笑娱乐生活资讯,各种好玩的段子、糗事等。捕捉时下最新的互联网潮流动态信息，让您在忙碌的生活中，每日轻松一刻." />
    </Head>
       <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
    >
      <main>
        <Suspense fallback={<p>Loading</p>}>
          <HomeArticleList articles={articles} />
        </Suspense>
      </main>
    </div>
    </>
 
  );
}
