import LayoutApp from "@/shared/Layout/page";
import Titulo from "@/shared/Titulo/page";

export default function Dashboard(){
    return(
        <LayoutApp>
            <div className="flex w-full bg-blue-500 p-5 text-white text-3xl rounded-md mb-8">
                <Titulo Titulo="Dashboard" subTitulo="página" />
            </div>
        </LayoutApp>
    )
}