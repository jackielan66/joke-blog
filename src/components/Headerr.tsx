import Link from "next/link"
import { useState,useEffect } from "react"

export default function Header() {
    const [darkMode, setDarkMode] = useState(false)
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark');
            // document.documentElement.classList.add('dark');

            setIsDark(true);
        } else {
            document.body.classList.remove('dark');
            // document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.body.classList.remove('dark');
            // document.documentElement.classList.remove('dark');

            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark');
            // document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDark(!isDark);
    };

    const menuList = [
        {
            title: 'Home',
            link: '/'
        }
    ]



    return (
        <header className={`bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300`}>
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo 或网站名称 */}
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    <Link href={'/'}>Joke Blog</Link>
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

                {/* 主题切换按钮 */}
                <button
                    onClick={toggleTheme}
                    className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
                >
                    {isDark ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    )
}