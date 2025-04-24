import { getNews } from "@/scratch/ease-news"
import { use } from "react"

const fetchData = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(getNews())
    }, 5000)
}) 

const HomeArticleList =  () => {

    const articles = use(fetchData());

    return (
        <div>
            {articles.map((article, index) => (
                <div key={index}>
                    <div>{article.title}</div>
                    <div>{article.ptime}</div>
                </div>
            ))}
        </div>
    )
}
export default HomeArticleList