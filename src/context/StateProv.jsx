import React, { useState } from 'react'
import { contadorContext } from './contadorContext'

const StateProv = ({children}) => {

const [contador,setContador] = useState(0)

const incremento = () =>{
    setContador((prev) => prev + 1)
}

const decremento = () =>{
    setContador(prev => prev - 1)
}

const reset = () =>{
    setContador(0)
}

  return (
    <contadorContext.Provider
        value={{
            contador,
            incremento,
            decremento,
            reset
        }}
    >
        {children}
    </contadorContext.Provider>
  )
}

export default StateProv