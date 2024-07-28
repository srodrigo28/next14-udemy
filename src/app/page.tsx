'use client'
import { useState } from 'react'

import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function validar(e:any){
    e.preventDefault()
    // Validar dados e fazer login aqui
    if(!email){ 
      alert("Preencher o campo e-mail") 
      return false;
    }
    if(!senha){ 
      alert("Preencher o campo senha") 
      return false;
    }
    if( email === 'admin@gmail.com' || senha === '123'){
      alert("Login efetuado com sucesso! " + email)
      setEmail('')
      setSenha('')
      return true;
    }else{
      alert("Esse email não está cadastro " + email)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-96 h-96 bg-slate-900 rounded-l-xl gap-3">
          <div className="title bg-blue-700 p-7">
            <h1 className="text-center text-3xl font-bold">Tela de Login</h1>
          </div>

          <form onSubmit={validar} className="flex flex-col gap-5 p-3 text-black mt-10 mx-10">
            <input 
                type="email" 
                value={email}
                placeholder="E-mail" 
                className="p-2 rounded-md" 
                onChange={ text => setEmail(text.target.value)}
            />
            <input 
                type="password" 
                value={senha}
                placeholder="Senha" 
                className="p-2 rounded-md"
                onChange={ text => setSenha(text.target.value)}
            />

            <div className="group-btn text-white gap-3 flex justify-center">
              <button className="bg-blue-700 p-3 w-32 text-center rounded-md hover:bg-blue-600" >Entrar</button>
              <Link href="/cadastro" className="bg-green-700 p-3 w-32 text-center rounded-md hover:bg-green-600" >Cadastrar</Link>
            </div>
          </form>
      </div>
    </div>
  );
}
