import { EaseNews } from "@/model/easenet"
import Image from "next/image"
import Link from "next/link"

const HomeArticleList = ({
    articles
}: {
    articles: EaseNews[]
}) => {

    // const articles = use(fetchData()) as EaseNews[];

    return (
        <div className="space-y-4 p-4">
            {articles.map((article, index) => (
                <Link href={`/blog/${article.docid}`} key={index}
                    className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg shadow-md hover:cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <div className="w-full md:w-1/4 h-40 relative">
                        <Image src={article.imgsrc} alt={article.title}
                            fill={true}
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col justify-between w-full md:w-3/4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{article.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{article.ptime}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default HomeArticleList