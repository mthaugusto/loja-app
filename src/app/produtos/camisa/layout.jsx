import React from 'react'

export default function CamisaLayout({children}) {
  return (
    <div>
        <p className='bg-red-500'>
        Novas Camisas de Fio Egípcio...
        </p>
        {children}
    </div>
  )
}
