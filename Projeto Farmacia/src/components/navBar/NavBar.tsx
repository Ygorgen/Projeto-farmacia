import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>FarmarciaGen</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Medicamentos</div>
              <div className='hover:underline'>Saúde e Bem Estar</div>
              <div className='hover:underline'>Beleza e Higiene</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar