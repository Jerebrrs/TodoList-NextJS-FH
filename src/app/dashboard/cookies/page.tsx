import { TabBar } from "@/components/TabBar"
import { cookies } from 'next/headers'

export const metadate = {
    title: "Cookies Page",
    descripction: "Seo TItle"
}
export default async function CookiesPage() {

    const cookieStore = await cookies()
    const cookieTab = cookieStore.get('SelectedTab')?.value ?? '1';

    const allCookies = cookieStore.getAll();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {JSON.stringify(allCookies)}
            <span className="text-3xl">
                <TabBar currentTab={+cookieTab} />
            </span>
        </div>
    )
}
