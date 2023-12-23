import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemLIstContainer/ItemLIstContainer'




function App() {
  

  return (
    <>
   <ChakraProvider>
    <NavBar/>
    <ItemListContainer title = 'Mundo 3D'/>
    </ChakraProvider>
    
    </>
  )
}

export default App
