interface TituloProps{
    Titulo: string;
    subTitulo: string;
}
export default function Titulo(props: TituloProps){
    return(
        <header className="bg-blue-600 p-3 h-20 w-full text-white flex flex-col items-center">
            <h1>{props.Titulo}</h1>
            <h1>{props.subTitulo}</h1>
        </header>
    )
}