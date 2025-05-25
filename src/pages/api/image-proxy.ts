// pages/api/image-proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const cacheDir = path.join(process.cwd(), 'public', 'cache');

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const imageUrl = req.query.url as string;

  const imageUrlHash = require('crypto').createHash('sha256').update(imageUrl).digest('hex');
  const cacheFilePath = path.join(cacheDir, `${imageUrlHash}.gif`);

  if (fs.existsSync(cacheFilePath)) {
    console.log("有缓存到缓存")
    // 从缓存中读取文件
    const cachedImage = fs.readFileSync(cacheFilePath);
    res.setHeader('Content-Type', 'image/gif');
    res.status(200).send(cachedImage);
    return;
  }

  try {
    
    const response = await axios.get(imageUrl, {
      headers: {
        Referer: 'https://www.bohaishibei.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      responseType: 'arraybuffer',
    });

    // 将图片数据写入缓存文件
    fs.writeFileSync(cacheFilePath, Buffer.from(response.data, 'binary'));

    res.setHeader('Content-Type', 'image/gif');
    res.status(200).send(Buffer.from(response.data, 'binary'));
  } catch (error) {
    console.error('Failed to fetch image:', error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
}