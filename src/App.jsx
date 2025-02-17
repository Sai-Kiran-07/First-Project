import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from "./components/Navigation"
import HeroContent from './components/HeroContent'

function App() {

  return (
      <div> 
        <Navigation/>
        <HeroContent/>
      </div>
  )
}

export default App
