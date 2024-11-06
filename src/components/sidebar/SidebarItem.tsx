'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
    icon: React.ReactNode,
    path: string,
    title: string
}

export const SidebarItem = ({ icon, path, title }: Props) => {

    const pathName = usePathname();
    return (
        <div>
            <li>
                <Link href={path}
                    className={`relative px-4 py-3 flex items-center space-x-4 rounded-md  group hover:bg-gradient-to-r  hover:text-yellow-500 ${path === pathName ? 'text - white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}`}>
                    {icon}
                    <span className="group-hover:text-blue-300">{title}</span>
                </Link>
            </li>
        </div >
    )
}
