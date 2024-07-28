'use client'
import { useState } from "react";

import LayoutApp from "@/shared/Layout/page";
import Titulo from "@/shared/Titulo/page";

export default function Product(){
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')

    function handleValidation(e: any){
        e.preventDefault()

        // Validar dados e cadastrar no banco de dados aqui
        if(!nome){
            alert("Preencher o nome do produto")
            return false
        }
        if(!descricao){
            alert("Preencher a descrição do produto")
            return false
        }
        if(!quantidade){
            alert("Preencher a quantidade do produto")
            return false
        }
        if(!preco){
            alert("Preencher o preço do produto")
            return false
        }
        alert(" Cadastro com sucesso ");
        setNome('')
        setDescricao('')
        setQuantidade('')
        setPreco('')


        /**
            fetch('/api/produtos', { // Enviar requisição para o backend para cadastrar o produto
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, descricao, quantidade, preco }),
            })
            .then(response => response.json())
        */
    }
    return(
        <LayoutApp>
            {/* titulo */}
            <div className="flex w-full bg-green-500 p-5 text-white text-3xl rounded-md mb-8">
                <Titulo Titulo="Produtos" subTitulo="Cadastrar de Produtos" />
            </div>

            {/* formulario */}
            <form onSubmit={handleValidation} className="flex gap-3 flex-col">
                <input 
                    type="text" 
                    value={nome}
                    placeholder="Nome do produto"
                    onChange={ e => setNome(e.target.value)}
                    className="bg-slate-200 p-3 rounded-md outline-none font-bold"
                />
                <input 
                    type="text" 
                    value={descricao}
                    placeholder="Descrição"
                    onChange={ e => setDescricao(e.target.value)}
                    className="bg-slate-200 p-3 rounded-md outline-none font-bold"
                />
                <input 
                    type="text" 
                    value={quantidade}
                    placeholder="Quantidade"
                    onChange={ e => setQuantidade(e.target.value)}
                    className="bg-slate-200 p-3 rounded-md outline-none font-bold"
                />
                 <input 
                    type="text" 
                    value={preco}
                    placeholder="Preço do produto"
                    onChange={ e => setPreco(e.target.value)}
                    className="bg-slate-200 p-3 rounded-md outline-none font-bold"
                />
                <div className="flex gap-3">
                    <button className="bg-blue-500 text-white p-3 w-28 rounded-md">Cadastrar</button>
                    <button className="bg-gray-500 text-white p-3 w-28 rounded-md">Cancelar</button>
                </div>
            </form>

            {/* tabela */}
        </LayoutApp>
    )
}