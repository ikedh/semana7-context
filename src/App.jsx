import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Card from './components/Card'
import StateProv from './context/StateProv'

function App() {

  return (
    <StateProv>
      <Header>
        <TopBar />
      </Header>

      <Footer>
          <Card/>
      </Footer>
    </StateProv>
  )
}

export default App
