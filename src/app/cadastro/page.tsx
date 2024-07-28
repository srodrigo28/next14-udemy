'use client'

import { useState } from 'react'
import Link from "next/link";

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleValidar = (e: any) => {
        e.preventDefault()

        if(nome === ''){
            alert('Preencha o nome')
            return
        }
        if(email === ''){
            alert('Preencha o email')
            return
        }
        if(senha === ''){
            alert('Preencha o senha')
            return
        }

        alert('Seja Bem vindo ' + nome)

    }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-96 h-96 bg-slate-900 rounded-l-xl gap-3">
          <div className="title bg-blue-700 p-7">
            <h1 className="text-center text-3xl font-bold">Tela de Cadastro</h1>
          </div>

          <form className="flex flex-col gap-5 p-3 text-black mt-10 mx-10">
            <input 
                type="text" 
                value={nome}
                className="p-2 rounded-md"
                placeholder="Nome Completo" 
                onChange={ e => setNome(e.target.value)}
            />
            <input 
                type="text" 
                value={email}
                placeholder="E-mail" 
                className="p-2 rounded-md"
                onChange={ e => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                value={senha}
                placeholder="Senha" 
                className="p-2 rounded-md" 
                onChange={ e => setSenha(e.target.value)}
            />

            <div className="group-btn text-white gap-3 flex justify-center">
              <Link href="/" className="bg-blue-700 p-3 w-32 text-center rounded-md hover:bg-blue-600" >Entrar</Link>
              <button onClick={handleValidar} className="bg-green-700 p-3 w-32 text-center rounded-md hover:bg-green-600" >Cadastrar</button>
            </div>
          </form>
      </div>
    </div>
  );
}
