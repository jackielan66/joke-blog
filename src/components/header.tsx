import Link from "next/link"

export default function Header() {
    let menuList = [
        {
            title: 'Home',
            link: '/'
        }
    ]

    return <>
        <div className="flex justify-between fixed">
            {
                menuList.map((item, index) => {
                    return <Link key={index} href={item.link} className="text-blue-500 hover:text-blue-700">{item.title}</Link>
                })
            }
        </div>
    </>
}