import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      第一天学习nextjs
      # nextjs study summary

### 1. RSC 是什么意思

### 4. Next.js 三种主要渲染机制

- **SSR（Server-Side Rendering, 服务器端渲染）**，在每次请求页面的时候，在服务器端去生成 HTML，适合动态、个性化页面。
- **SSG（Static Site Generation, 静态站点生成）** 它在系统本地构建时生成静态 HTML，适合内容稳定、SEO 友好页面。
- **ISR（Incremental Static Regeneration, 增量静态再生成）**：在静态与动态之间做平衡，按失效策略后台再生成。

### 5. Next.js 的 Router 模式以及两种 Router 的差异

1. **App Router（应用路由）**是官方推荐的路由模式（Next.js 13 引入，13.4 稳定），其核心特点包括：

- 根目录位于 `app` 文件夹
- 默认采用 React Server Components（RSC, React 服务器组件），开箱即用
- 原生支持嵌套布局，可轻松实现共享 UI 与数据流
- 提供丰富的文件路由系统，支持动态路由、参数捕获、捕获所有路由等。

2. **Pages Router（页面路由）** 是Next.js 的经典方案（自 Next.js 1.0 起支持）

- 目录结构基于 `pages` 文件夹
- 默认采用 React 客户端组件（Client Components）
- 嵌套布局（layout）需要手动实现，不如 App Router 方便
- 功能虽丰富，但在灵活性与未来特性支持上已不及 App Router
- 新项目建议优先选用 App Router

### 目录结构

- `package.json`：项目配置文件，包含依赖项、脚本命令和项目元数据。其中 scripts 部分定义了常用命令：`dev、build、start、lint`。
    - `dev`：以开发模式启动 Next.js，支持热模块重载、错误报告等功能。
    - `build`：创建经过优化的生产构建，并且显示每个路由的信息。
    - `start`：在生产模式下启动 Next.js，注意我们的应用应该先使用 `next build` 进行编译。
    - `lint`：运行 `ESLint` 检查项目代码，确保符合 Next.js 的编码规范。
    

- `app` 目录：这是 Next.js 应用的核心目录，包含了所有的路由和页面组件。
    -  **`favicon.ico`**: 浏览器标签页的图标。
    -  **`global.css`**: 全局 CSS 样式文件，在本项目中结合 Tailwind CSS 使用，用于配置全局样式。
    -  **`layout.tsx`**: Next.js 应用的根布局组件。这是一个 React 组件，用于包裹所有页面，管理字体、元数据等。**需要注意的是，除了根布局外，Next.js 中的每个页面或路由段都可以定义自己的布局组件，实现更灵活的页面结构管理。**
    -  **`page.tsx`**: 应用的主页面，作为默认首页。它位于 `app` 目录下，并在 `layout.tsx` 组件中渲染。

- `public` 目录: 这个文件夹主要用于存放项目中的静态资源，比如我们常用的 SVG、PNG 等图片，或者一些字体文件，都可以放在 `public` 目录下。
- `.eslintrc.js`: 它是 ESLint 的配置文件。它是默认生成的，我们暂时无需修改，只需了解其用途即可。
- `next-env.d.ts`: 这是一个Next.js 项目类型声明文件，通常我们不需要去修改它。
- `next.config.ts`: 这是 Next.js 的全局配置文件。由于Next.js 提供了许多开箱即用的功能，已经内置了大量默认配置，所以我们暂时不需要修改。后续如果有更高阶的需求，可以参考官方文档去进行配置，比如自定义路由、环境变量、服务器端渲染等，这里就不展开介绍了。
- `postcss.config.js`: 这是 PostCSS 的全局配置文件。目前里面是一些默认配置，预留给我们进行自定义。
- `tsconfig.json`: 这是 TypeScript 的编译配置文件。后续我们会讲解其中一些核心的配置项以及它们的作用。
    </div>
  );
}
