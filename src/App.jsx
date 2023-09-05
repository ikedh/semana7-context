import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import StateProvider from './context/StateProvider'

function App() {

  return (

    <>
    <StateProvider>
      <Header/>
      <hr/>
      <Card />
      </StateProvider>
    </>

  )
}

export default App
