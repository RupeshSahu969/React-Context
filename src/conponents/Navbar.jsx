import React, { useContext } from 'react'
import Wishlist from './Wishlist'

import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const {isAuthorzed,login,logout} =useContext(AuthContext)

  const {buy} =useContext(AuthContext)


  return (
    <div>
        Navbar
        <button
        onClick={() => {
          if(isAuthorzed) logout()
          else login("r","z");
        }}
        >{isAuthorzed?"logout" : "logoin"}</button>
        <button onClick={buy}>Buy</button>
        <Wishlist/>
        </div>
  )
}

export default Navbar