import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* 关于我们部分 */}
          <div>
            <h3 className="text-xl font-bold mb-4">我的博客</h3>
            <p className="text-gray-300 mb-4">
              分享技术心得、生活感悟和各种有趣的想法。致力于为读者提供有价值的内容。
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'github'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    {social.charAt(0).toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {[
                { name: '首页', link: '/' },
                { name: '文章', link: '/posts' },
                { name: '分类', link: '/categories' },
                { name: '标签', link: '/tags' },
                { name: '关于', link: '/about' },
                { name: '联系', link: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 分类 */}
          <div>
            <h3 className="text-xl font-bold mb-4">热门分类</h3>
            <ul className="space-y-2">
              {[
                { name: '前端开发', count: 12 },
                { name: '后端开发', count: 8 },
                { name: 'JavaScript', count: 15 },
                { name: 'React', count: 9 },
                { name: 'Node.js', count: 6 },
                { name: 'CSS', count: 7 }
              ].map((category) => (
                <li key={category.name} className="flex justify-between">
                  <a 
                    href={`/categories/${category.name}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {category.name}
                  </a>
                  <span className="text-gray-400">({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 订阅 */}
          <div>
            <h3 className="text-xl font-bold mb-4">订阅更新</h3>
            <p className="text-gray-300 mb-4">
              订阅我们的邮件列表，获取最新文章和更新通知。
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="您的邮箱地址" 
                className="px-4 py-2 w-full rounded-l text-gray-800 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition-colors duration-300">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* 底部版权信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} 我的博客. 版权所有.
            </p>
          </div>
          <div className="flex space-x-6">
            {[
              { name: '隐私政策', link: '/privacy' },
              { name: '服务条款', link: '/terms' },
              { name: 'Cookie政策', link: '/cookies' }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;