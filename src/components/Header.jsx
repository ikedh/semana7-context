import { useContext } from "react"
import { contadorContext } from "../context/contadorContext"


const Header = ({children}) => {

const {contador,incremento} = useContext(contadorContext)

  return (
    <>
        <div>Header</div>
        <h4>{contador}</h4>
        <button onClick={()=>incremento()}>Incrementar</button>
    </>
    
  )
}

export default Header