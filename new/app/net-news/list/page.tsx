// 网易新闻采集首页

import HomeArticleList from '../_components/homeArticleList/homeArticleList';

async function getNews() {
    const url = 'https://m.163.com/touch/reconstruct/article/list/BD21K0DLwangning/0-10.html'
    const res = await fetch(url, {
        // 👇 关键修改：设置 revalidate 时间（秒）
        next: {
            revalidate: 60 * 60 * 24, // 每 24 小时 重新生成一次页面（ISR）
        }
    });
    if (!res.ok) throw new Error('News not found');
    const text = await res.text()
    const jsonStr = text.replace(/^artiList\(/, '').replace(/\)$/, '')
    const json = JSON.parse(jsonStr)
    const articles = json.BD21K0DLwangning || [];
    return articles;
}


export default async function NetListHome() {
    const articles = await getNews();
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">网易新闻采集首页</h1>
            <HomeArticleList articles={articles} />
        </div>
    );
}

