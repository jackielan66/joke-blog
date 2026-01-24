interface IScratchContent {
  content: string;
  title: string;
}

/**
 * 在Node.js环境中解析HTML内容
 * 使用正则表达式替代DOM操作
 */
function parseContentInNode(html: string): IScratchContent {
  // 查找主文章内容
  const articleRegex = /<main[^>]*class="[^"]*main[^"]*js-main[^"]*"[^>]*>[\s\S]*?<article[^>]*class="[^"]*article[^"]*js-article[^"]*"[^>]*>([\s\S]*?)<\/article>/i;
  const articleMatch = html.match(articleRegex);
  
  let content = '';
  if (articleMatch && articleMatch[1]) {
    content = articleMatch[1].trim();
    
    // 提取并移除标题
    const titleRegex = /<[^>]*class="[^"]*article-title[^"]*"[^>]*>(.*?)<\/[^>]*>/i;
    const titleMatch = content.match(titleRegex);
    const title = titleMatch ? stripHtmlTags(titleMatch[1]).trim() : '';
    
    // 从内容中移除标题部分
    const contentWithoutTitle = content.replace(titleRegex, '').trim();
    
    return {
      content: contentWithoutTitle,
      title
    };
  } else {
    // 如果找不到指定结构，尝试提取页面标题作为fallback
    const titleRegex = /<title[^>]*>(.*?)<\/title>/i;
    const titleMatch = html.match(titleRegex);
    const title = titleMatch ? stripHtmlTags(titleMatch[1]).trim() : '';
    
    return {
      content: '',
      title
    };
  }
}

/**
 * 移除HTML标签
 */
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

/**
 * 获取网页内容（Node.js版本）
 */
async function getEaseContent(url: string = ''): Promise<IScratchContent> {
  let html = '';
  
  if (url) {
    try {
      // 使用fetch API获取HTML内容
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Data Scraper)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      html = await response.text();
    } catch (error) {
      console.error('获取网页内容失败:', error);
      // 如果获取失败，使用mockContent作为备用
    }
  }
  
  return parseContentInNode(html);
}

export function scratchContent(url='',type='163'):Promise<IScratchContent>{
    return new Promise<IScratchContent>((resolve,reject)=>{
        resolve(getEaseContent(url))
    })
}

export { getEaseContent, type IScratchContent};