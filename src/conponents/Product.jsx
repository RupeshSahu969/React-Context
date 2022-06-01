import React,{useContext} from 'react'
import Cart from './Cart'
import { AuthContext } from '../context/AuthContext'
const Product = () => {
  const  {isAuthorzed} =useContext(AuthContext)


  return (
    <div>
      Product: {isAuthorzed ? "Login" : "Logout"}
        <Cart/>
    </div>
  )
}

export default Product