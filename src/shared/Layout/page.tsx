import { ReactNode } from "react"
import Menu from "../Menu/page"

interface LayoutProps{
    children: ReactNode
}

export default function LayoutApp( props: LayoutProps ){
    return(
        <div className="flex">
            <Menu />
            <section className="w-full p-5 bg-black">
                {props.children}
            </section>
        </div>
    )
}