import { useContext } from "react"
import { contadorContext } from "../context/contadorContext"


const Card = () => {

  const {contador,decrementar} = useContext(contadorContext)


  return (
    <>
      <br/>
      <h4>Contador: {contador}</h4>
        <button
          onClick={()=>decrementar()}
        >Decrementar</button>
    </>
  )
}

export default Card