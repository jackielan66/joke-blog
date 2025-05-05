import Link from "next/link"

export default function Header() {
    const menuList = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Blog',
            link: '/blog'
        },
        {
            title: 'Contact',
            link: '/contact'
        }
    ]

    return (
        <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo 或网站名称 */}
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                   <Link href={'/'} >Joke Blog</Link>  
                </div>

                {/* 导航菜单 */}
                <nav>
                    <ul className="flex space-x-6">
                        {menuList.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}