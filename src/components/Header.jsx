import { useContext } from "react"
import { contadorContext } from "../context/contadorContext"

const Header = () => {

  const {contador,incrementar} = useContext(contadorContext)

  return (
    <>
        <div>Bienvenidos a UseContext</div>
        <h4>Contador: {contador}</h4>
        <button
          onClick={()=>incrementar()}
        >Incrementar</button>
    </>
  )
}

export default Header