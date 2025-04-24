// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { neteaseUrlList } from "../config";
import { addItemToKv, getListItemsFromKv } from "@/utils/kvStorage";
import { EaseNews } from "@/model/easenet";
const SAVE_KEY = "ease-news"



export async function saveNews() {
  let url = neteaseUrlList[0].url;
  const res = await fetch(url)
  const text = await res.text()
  // 去掉 JSONP 回调函数（因为它不是标准 JSON）
  const jsonStr = text.replace(/^artiList\(/, '').replace(/\)$/, '')
  const json = JSON.parse(jsonStr)
  const articles = json.BD21K0DLwangning || [];
  let recently30List = await getListItemsFromKv(SAVE_KEY, 30) as unknown as EaseNews[]
  for (var index = 0; index < articles.length; index++) {
    const article = articles[index];
    let findAtObj = recently30List.find(item => item.docid === article.docid);
    if (findAtObj) {
      if (index > 1) {
        // 大于1，则跳过循环了
        break;
      }
      continue;
    }
    await addItemToKv(SAVE_KEY, article)
  }
}


export async function getNews(page=0,size=50) {
  return getListItemsFromKv(SAVE_KEY,(page+1)*size) as unknown as EaseNews[]
}

