import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  

  return (
    <>
    <ChakraProvider>
    <NavBar/>
    </ChakraProvider>
    </>
  )
}

export default App