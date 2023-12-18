import React from 'react'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <div>
    <header className='header'>
         <nav className="header_navbar">
             
             <div className="header_navbar-div">
                 
                 <ul className='header_navbar-div-ul'>
                     <li className='header_navbar-a'><a href="" className='ar'>INICIO</a></li>
                     <li className='header_navbar-a'><a href="" className='ar'>OFERTAS</a></li>
                     
                     <li className='header_navbar-a'><a href="" className='ar'><CardWidget/>CARRITO</a></li>
                     
                 </ul>
             </div>

         </nav>
     </header>
 
 </div>
)
}

export default NavBar