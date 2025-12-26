import axios from 'axios';
import * as cheerio from 'cheerio';
import { EaseNews } from "../scratch/ease-news";


async function fetchRecentContentFromBohaiShibei() {
  try {
    const response = await axios.get('https://www.bohaishibei.com/post/category/main/');
    const html = response.data;
    const $ = cheerio.load(html);
    
    // 提取 id 为 recent-content 的 DOM 内容
    const content = $('#recent-content').html();
    
    return content;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
export async function getStaticProps() {

  return {
    props: { articles:  },
    revalidate: 60 * 60 * 24, // 每 24 小时 重新生成一次页面（ISR）
  }
}

export default  function List({
  articles
}: {
  articles: EaseNews[]
}) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-4"></div>
        ))}
      </div>
    </div>
  )
}