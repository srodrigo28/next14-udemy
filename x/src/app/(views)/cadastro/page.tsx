import Link from "next/link";

export default function Cadastro(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            
            <div className=" text-black container w-96 bg-zinc-900 h-96 rounded-xl flex items-center justify-center flex-col gap-3">
                <div className="title bg-slate-500 p-3 w-60 rounded-lg mb-14 flex items-center justify-center">
                    <h1 className="text-white">Cadastro</h1>
                </div>

                <input type="text" placeholder="Nome completo" className="p-2 rounded-md" />
                <input type="text" placeholder="E-mail" className="p-2 rounded-md" />
                <input type="password" placeholder="Senha" className="p-2 rounded-md" />
                <div className="btn-grup flex gap-3">
                <Link href="/login" className="text-center bg-zinc-600 p-2 w-28 rounded-md hover:bg-zinc-500">Logar</Link>
                <Link href="/cadastro" className="text-center bg-blue-900 p-2 w-28 rounded-md hover:bg-blue-700 ">Cadatrar</Link>
                </div>
            </div>
            
        </div>
    )
}