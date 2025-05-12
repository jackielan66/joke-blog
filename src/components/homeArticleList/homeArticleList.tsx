import { EaseNews } from "@/model/easenet"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

const HomeArticleList = ({
    articles
}: {
    articles: EaseNews[]
}) => {

    // const articles = use(fetchData()) as EaseNews[];

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
        <div className="space-y-4 p-4">
            {articles.map((article, index) => (
                <a href={`/blog/${article.docid}`} key={index}
                    className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg shadow-md hover:cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <div className="w-full md:w-1/4 h-40 relative">
                        <img data-src={article.imgsrc} alt={article.title}
                            className="rounded-md w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-between w-full md:w-3/4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{article.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{article.ptime}</p>
                    </div>
                </a>
            ))}
        </div>
    )
}
export default HomeArticleList