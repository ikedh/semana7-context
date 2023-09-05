import { useState } from "react";
import { contadorContext } from "./contadorContext";

const StateProvider = ({children}) => {

    const[contador,setContador]=useState(0)

    const incrementar = () =>{
        setContador(()=> contador + 1)
    }

    const decrementar = () => {
        setContador(()=> contador - 1)
    }


  return (
    <contadorContext.Provider
        value={{
            contador,
            incrementar,
            decrementar
        }}
    >
        {children}
    </contadorContext.Provider>
  )
}

export default StateProvider