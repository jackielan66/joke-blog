import { scratchContent } from "@/utils/tools";
import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

type Repo = {
    title: string
    content: string
}

// export const getServerSideProps = (async ({
//     params
// }: {
//     params: { id: string }
// }) => {

//     let url = `https://m.163.com/news/article/${params.id}.html`

//     const {
//         content,
//         title
//     } = await scratchContent(url);


//     const repo: Repo = {
//         title,
//         content
//     }
//     return { props: { repo } }
// })

// // 预生成所有博客文章页面的路径 告诉 Next.js 要静态生成哪些路径
export async function getStaticPaths() {
    // const res = await fetch('https://api.example.com/posts');
    // const posts = await res.json();
    const posts = [
        { id: 'JST65UOV000181BR' },
    ];
    const paths = posts.map(post => ({
        params: { id: post.id.toString() },
    }));

    return {
        paths, // 预生成这些页面
        // fallback: false, // 对于未预生成的页面返回 404
        fallback: "blocking", // 或 true（推荐 blocking）
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
        console.log("repo", repo)
    }, [])
    return (
        <>
            <Head>{repo.title}</Head>
            <main className="flex min-h-screen flex-col items-center justify-between">
                <div dangerouslySetInnerHTML={{ __html: repo.content }} />
            </main>
            <Script id="lazyload-script" strategy="afterInteractive">
                {
                    `
                    document.querySelectorAll(".article-body img").forEach(imgElement => {
                        // console.log("imgElement", imgElement)
                        const intersectionObserver = new IntersectionObserver((entry) => {
                            if (entry[0].isIntersecting) {
                                // console.log("entry", entry)
                                if (entry[0].target.dataset.src) {
                                    entry[0].target.setAttribute('src', entry[0].target.dataset.src)
                                }
                                intersectionObserver.disconnect()
                            }
                        })
                        intersectionObserver.observe(imgElement)
                    })
                    `
                }
            </Script>
        </>

    );
}