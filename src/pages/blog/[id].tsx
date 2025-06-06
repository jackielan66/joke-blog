import { scratchContent } from "@/utils/tools";
import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

type Repo = {
    title: string
    content: string
}

// // 预生成所有博客文章页面的路径 告诉 Next.js 要静态生成哪些路径
export async function getStaticPaths() {
    // const res = await fetch('https://api.example.com/posts');
    // const posts = await res.json();

    

    // 当前节点：JSON.

    const paths:{params: { id: string }}[] = []

    // const paths = posts.map(post => ({
    //     params: { id: post.id.toString() },
    // }));

    return {
        paths:[], // 预生成这些页面
        // fallback: false, // 对于未预生成的页面返回 404
        fallback: 'blocking', // 或 true（推荐 blocking）
    };
}

// 在构建时获取对应页面数据
// 给每个路径准备数据
export async function getStaticProps({ params }: { params: { id: string } }) {

    let url = `https://m.163.com/news/article/${params.id}.html`
    const {
        content,
        title
    } = await scratchContent(url);

    const repo: Repo = {
        title,
        content
    }
    return { props: { repo } }
}


export default function BlogIdPage({
    repo
}: InferGetStaticPropsType<typeof getStaticProps>
) {

    useEffect(() => {
        document.querySelectorAll(".article-body img").forEach(imgElement => {
            const intersectionObserver = new IntersectionObserver((entry) => {
                if (entry[0].isIntersecting) {
                    // @ts-ignore
                    let src = entry[0].target.dataset.src
                    if (src) {
                        entry[0].target.setAttribute('src', src)
                    }
                    intersectionObserver.disconnect()
                }
            })
            intersectionObserver.observe(imgElement)
        })
    }, [])
    return (
        <>
            <Head>
                <title>{repo.title}</title>
            </Head>

            <main className="p-2 flex min-h-screen flex-col items-center justify-between">
                <div dangerouslySetInnerHTML={{ __html: repo.content }} />
            </main>
        </>

    );
}