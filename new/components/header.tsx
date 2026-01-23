import React from 'react';
import Link from 'next/link';
const Header = () => {

  const menuList = [
    {
      title: '首页',
      link: '/'
    },
    {
      title: '文章',
      link: '/article'
    },
    {
      title: '分类',
      link: '/category'
    },
    {
      title: '标签',
      link: '/tag'
    },
    {
      title: '关于',
      link: '/about'
    },
    {
      title: '后台管理中心',
      link: '/admin'
    }
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* 主头部区域 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/网站标题 */}
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-800">
              <a href="/" className="hover:text-blue-600 transition-colors duration-300">
                我的博客
              </a>
            </h1>
          </div>

          {/* 导航菜单 - 在小屏幕上隐藏 */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuList.map((item) => (
                <li key={item.link}>
                  <Link 
                    href={`${item.link}`}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 搜索框和移动端菜单按钮 */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索..."
                className="py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="absolute right-3 top-2.5 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* 移动端菜单按钮 */}
            <button className="md:hidden text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端导航菜单 - 默认隐藏 */}
        <div className="md:hidden mt-4 pb-2 hidden">
          <ul className="flex flex-col space-y-2">
            {['首页', '文章', '分类', '标签', '关于'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;