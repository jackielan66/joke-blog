// 网易新闻详情页

import { scratchContent } from './_tool'
import  NetDetail  from '../_components/generateDetail'
type Props = {
    params: Promise<{ id: string }>;
};


export default async function NetListDetail({ params }: Props) {
    const { id } = await params;
    const url = `https://m.163.com/news/article/${id}.html`
    const {
        content,
        title
    } = await scratchContent(url);


    return (
        <main className="p-2 flex min-h-screen flex-col items-center justify-between">
            <NetDetail content={content} />
        </main>
    );
}

