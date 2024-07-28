import Link from "next/link";
import { ElementType } from "react";
import { MdDashboard, MdHome, MdProductionQuantityLimits } from 'react-icons/md'

interface ItemProps{
    icone: ElementType;
    nome: string;
    url: string;
}

function ItemMenu(props : ItemProps){
    return(
        <Link href={props.url} className="flex gap-3 p-3 hover:bg-green-600 text-2xl">
            <props.icone className="text-white" size={30} />
            <span className="text-white">{props.nome}</span>
        </Link>
    )
}

export default function Menu(){
    return(
        <nav className="hidden md:block w-62 bg-slate-900 h-screen p-3">
            <ItemMenu icone={MdDashboard} nome="Dashboard" url="/dashboard"  />
            <ItemMenu icone={MdProductionQuantityLimits} nome="Produtos" url="/product"  />
            <ItemMenu icone={MdProductionQuantityLimits} nome="Produtos List" url="/product-list"  />
            <ItemMenu icone={MdHome} nome="Sair" url="/"  />
        </nav>
    )
}