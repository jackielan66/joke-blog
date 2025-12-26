import axios from 'axios';
import { load } from 'cheerio';
import { useParams } from 'next/navigation';
import { use, useEffect } from 'react';


export async function getServerSideProps( params:{id:string} ) {
    const { id='99951' } = params 
    console.log(id,"id")
    const url = `https://www.bohaishibei.com/post/${id}/`;
    console.log(url)

    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = load(html);

        // 获取 #main article 内容
        let primaryContent = $(`#main article`).html() || '未找到 #primary 内容';

        if (primaryContent) {
            // 将 primaryContent 转换为 Cheerio 对象
            const $primaryContent = load(primaryContent);

            // 替换 img 标签
            $primaryContent('img').each((_, imgElement) => {
                const $img = $primaryContent(imgElement);
                const originalSrc = $img.attr('src');

                if (originalSrc) {
                    const newSrc = `/api/image-proxy?url=${encodeURIComponent(originalSrc)}`;
                    if (_ < 10) {
                        // less than 10 images, show let placeholder image,to forbid all images to inter screen
                        $img.attr('src', '/default-pic.webp');
                    }
                    $img.attr('data-src', newSrc);
                }
            });

            // 更新 primaryContent 为修改后的 HTML 字符串
            primaryContent = $primaryContent.html() || '未找到 #primary 内容';
        }


        return {
            props: {
                content: primaryContent,
            },
        };
    } catch (error) {
        console.error('抓取失败:', error);
        return {
            props: {
                content: '<p>无法获取内容，请稍后再试。</p>',
            },
        };
    }
}

export default function Home({ content }: { content: string }) {

    useEffect(() => {
        document.querySelectorAll("img").forEach(imgElement => {
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
        <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
