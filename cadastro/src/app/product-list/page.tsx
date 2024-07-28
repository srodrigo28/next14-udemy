import LayoutApp from "@/shared/Layout/page";
import Titulo from "@/shared/Titulo/page";

export default function ProductList(){
    return(
        <LayoutApp>
            {/* titulo */}
            <div className="flex w-full bg-blue-500 p-5 text-white text-3xl rounded-md mb-8">
                <Titulo Titulo="Produtos" subTitulo="Lista de Produtos" />
            </div>


            {/* tabela */}
            <table className="w-full">
                <thead className="bg-blue-500 text-white h-3 p-3">
                    <tr className="h-3 p-3">
                        <th className="p-3 text-center">ID</th>
                        <th className="w-screen text-left">Nome</th>
                        <th className="w-96">Descrição</th>
                        <th className="w-32">Preço</th>
                        <th className="w-60 p-3">Ações</th>
                    </tr>
                </thead>
                <tbody className="bg-green-500">
                    <tr className="bg-green-500 text-white font-bold">
                        <td className="text-center">1</td>
                        <td className="text-left">Produto 1</td>
                        <td className="w-96">Descrição do produto 1</td>
                        <td>R$ 100,00</td>
                        <td className="p-3 flex gap-2 justify-center">
                            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Editar</button>
                            <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">Excluir</button>
                        </td>
                    </tr>
                    <hr />
                    <tr className="bg-green-500 text-white font-bold">
                        <td className="text-center">1</td>
                        <td className="text-left">Produto 1</td>
                        <td className="w-96">Descrição do produto 1</td>
                        <td>R$ 100,00</td>
                        <td className="p-3 flex gap-2 justify-center">
                            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Editar</button>
                            <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">Excluir</button>
                        </td>
                    </tr>
                    <hr />
                    <tr className="bg-green-500 text-white font-bold">
                        <td className="text-center">1</td>
                        <td className="text-left">Produto 1</td>
                        <td className="w-96">Descrição do produto 1</td>
                        <td>R$ 100,00</td>
                        <td className="p-3 flex gap-2 justify-center">
                            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Editar</button>
                            <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </LayoutApp>
    )
}