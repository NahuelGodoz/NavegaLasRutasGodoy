import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'




function App() {
  

  return (
    <>
   <ChakraProvider>
   <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path='/' element={<ItemListContainer title='Mundo 3D'/>}/>
          <Route path={'/product/:itemId'} element={<ItemDetailContainer/>} /> 
          <Route path={'/category/:categoryId'} element={<ItemListContainer  title='Tienda'/>} />
          </Routes>
        </BrowserRouter>
    </ChakraProvider>
    
    </>
  )
}

export default App
