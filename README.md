# Next.js + Vercel + KV
This is a blog project use [Next.js](https://nextjs.org) + [Vercel](https://vercel.com) + [upstash/redis](https://github.com/upstash/redis)


## 获取文件，如果有侵权请联系我删除
1. [https://m.163.com/touch/reconstruct/article/list/BD21K0DLwangning/0-10.html](https://m.163.com/touch/reconstruct/article/list/BD21K0DLwangning/0-10.html)
2. [https://www.bohaishibei.com/post/99951/](https://www.bohaishibei.com/post/99951/)

## jest
jest 有哪些测试配置，主配置跟每次都会启动的配置
测试的这几个库是干嘛的
yarn add -D jest 
 jest-environment-jsdom
 @testing-library/react
 @testing-library/dom
 @testing-library/jest-dom
 ts-node @types/jest

## 流式渲染的特点

支持 Suspense 的框架如 Relay 和 Next.js。
使用 lazy 懒加载组件代码。
使用 use 读取缓存的 Promise 值。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## how to use prisma-postgres
[How to use Prisma ORM with Next.js](https://www.prisma.io/docs/guides/nextjs)

1. install prisma and tsx
```
npm install prisma tsx --save-dev
npm install @prisma/client @prisma/extension-accelerate
```

2. Then, run prisma init to initialize Prisma ORM in your project.

```
npx prisma init --db --output ../src/generated/prisma
```

3. Update your database schema
```
npx prisma migrate dev --name init
```

4. Set up Prisma Client
```
mkdir -p lib && touch lib/prisma.ts
```
lib/prisma.ts
```
import { PrismaClient } from '../src/generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
```

5. open prisma studio
```
npx prisma studio
```



