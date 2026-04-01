import axios from 'axios';
import * as cheerio from 'cheerio';
import { EaseNews } from "@/model/easenet"



export default  function List({
  articles
}: {
  articles: EaseNews[]
}) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      </div>
    </div>
  )
}