import React from 'react';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem vindo a melhor farmacia de manipulação !</h2>
              <p className='text-xl'>Veja algum de nossos produtos aqui!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
            
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;