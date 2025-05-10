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

    let mock = [
        {
        "liveInfo": null,
        "docid": "JV51C7IM000181BR",
        "source": "轻松一刻",
        "title": "轻松一刻：聪明人绞尽脑汁，不如蠢人的灵机一动",
        "priority": 120,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JV51C7IM000181BR.html",
        "commentCount": 622,
        "imgsrc3gtype": "3",
        "stitle": "",
        "digest": "各位秋裤，秋子带着福利又来了，美女小编，美女管理（红红）都在",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0509/edc838d1p00svzryl006nc000s600e3c.png",
        "ptime": "2025-05-09 19:30:47"
        },
        {
        "liveInfo": null,
        "docid": "JV2A6ACK000181BR",
        "source": "轻松一刻",
        "title": "轻松一刻：可以玩抽象，但不要太过粪！",
        "priority": 120,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JV2A6ACK000181BR.html",
        "commentCount": 998,
        "imgsrc3gtype": "3",
        "stitle": "",
        "digest": "各位易丝朋友们大家好啊！一刻出品，必属精品！我是写轻松一刻又",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0508/f74af81bp00svxtf7006lc000s600e3c.png",
        "ptime": "2025-05-08 18:07:07"
        },
        {
        "liveInfo": null,
        "docid": "JV01H4OG000181BR",
        "source": "轻松一刻",
        "title": "轻松一刻：因为回头看美女，他遭此一难",
        "priority": 120,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JV01H4OG000181BR.html",
        "commentCount": 1086,
        "imgsrc3gtype": "1",
        "stitle": "",
        "digest": "各位秋裤，这里是秋子。一周一期的“奇葩礼物大赏参与奖获”奖名",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0508/71e8d733p00svxthw007ec0009c0070c.png",
        "ptime": "2025-05-07 20:57:16"
        },
        {
        "liveInfo": null,
        "docid": "JV4SG92H000181BT",
        "source": "轻松一刻",
        "title": "轻松一秒：“慧根”是个什么东西，有人知道吗？",
        "priority": 119,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JV4SG92H000181BT.html",
        "commentCount": 220,
        "imgsrc3gtype": "1",
        "stitle": "",
        "digest": "开篇提问：下午好呀！终于又见面啦！我是实习生芸芸呀，不知道各",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0509/48b7ce1ep00svzo090010c0009c0070c.png",
        "ptime": "2025-05-09 18:05:36"
        },
        {
        "liveInfo": null,
        "docid": "JV4SD9AV000181BR",
        "source": "轻松一刻",
        "title": "轻松一刻语音版：三哥大气！老婆出轨直接送情夫了",
        "priority": 119,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JV4SD9AV000181BR.html",
        "commentCount": 19,
        "imgsrc3gtype": "1",
        "stitle": "",
        "digest": "轻松一刻值千金，不负光阴不负君，每天收听包开心！恳求大家点赞",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0509/b556defep00svzny8001jc0009c0070c.png",
        "ptime": "2025-05-09 18:03:58"
        },
        {
        "liveInfo": null,
        "docid": "JUVMPIFP000181BT",
        "source": "轻松一刻",
        "title": "轻松一秒:上家和对家都有二筒,看来只能自摸幺鸡了",
        "priority": 119,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JUVMPIFP000181BT.html",
        "commentCount": 604,
        "imgsrc3gtype": "1",
        "stitle": "",
        "digest": "开篇提问：艾瑞巴蒂！下午好呀！欢迎加入我们的网易小蜜蜂群聊~",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0507/de4a3439p00svvxxo001ac0009c0070c.png",
        "ptime": "2025-05-07 17:49:37"
        },
        {
        "liveInfo": null,
        "docid": "JUT89T70000181BR",
        "source": "轻松一刻",
        "title": "轻松一刻：人一旦有钱，就会报复性消费",
        "priority": 119,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JUT89T70000181BR.html",
        "commentCount": 1274,
        "imgsrc3gtype": "1",
        "stitle": "",
        "digest": "各位易丝朋友们大家好啊！一刻出品，必属精品！我是写轻松一刻又",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0508/ea650185p00svx9vd0039c0009c0070c.png",
        "ptime": "2025-05-06 18:58:52"
        },
        {
        "liveInfo": null,
        "docid": "JUDUDKTG000181BR",
        "source": "轻松一刻",
        "title": "轻松一刻：难以想象，我真的回到了五一假期前一天",
        "priority": 120,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JUDUDKTG000181BR.html",
        "commentCount": 1037,
        "imgsrc3gtype": "1",
        "stitle": "",
        "digest": "各位秋裤，五一好啊、五一妙、五一放假呱呱叫！难以想象，我真的",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0506/170baef9p00svu6ja0024c0009c0070c.png",
        "ptime": "2025-04-30 20:16:36"
        },
        {
        "liveInfo": null,
        "docid": "JUT4UTM4000181BT",
        "source": "轻松一刻",
        "title": "轻松一秒：怎么跟同学的妈妈打招呼比较有礼貌？",
        "priority": 119,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JUT4UTM4000181BT.html",
        "commentCount": 543,
        "imgsrc3gtype": "1",
        "stitle": "",
        "digest": "开篇提问：艾瑞巴蒂！下午好呀！终于又见面啦！我是实习生芸芸呀",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0506/f428f34ep00svu3po000zc0009c0070c.png",
        "ptime": "2025-05-06 17:59:29"
        },
        {
        "liveInfo": null,
        "docid": "JUB40A88000181BR",
        "source": "轻松一刻",
        "title": "轻松一刻：江湖不是打打杀杀，是人情世故",
        "priority": 120,
        "hasImg": 1,
        "url": "https://m.163.com/news/article/JUB40A88000181BR.html",
        "commentCount": 2163,
        "imgsrc3gtype": "1",
        "stitle": "",
        "digest": "各位易丝朋友们大家好啊！一刻出品，必属精品！我是写轻松一刻又",
        "imgsrc": "http://cms-bucket.ws.126.net/2025/0506/fc4bb066p00svubbc001kc0009c0070c.png",
        "ptime": "2025-04-29 17:56:27"
        }
        ]

        // 当前节点：JSON.

    const paths:{id:string}[] = mock.map(item=>{
        return {id:item.docid}
    })

    // const paths = posts.map(post => ({
    //     params: { id: post.id.toString() },
    // }));

    return {
        paths, // 预生成这些页面
        // fallback: false, // 对于未预生成的页面返回 404
        fallback: true, // 或 true（推荐 blocking）
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
            <Head>{repo.title}</Head>
            
            <main className="p-2 flex min-h-screen flex-col items-center justify-between">
                <div dangerouslySetInnerHTML={{ __html: repo.content }} />
            </main>
        </>

    );
}