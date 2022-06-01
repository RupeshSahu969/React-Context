import React, {  createContext, useContext, useState } from 'react'
import { AuthContext } from './AuthContext';

export const CartContext = createContext()
 

export const CartProvider=({Children})=>{

    const [count,setCount] =useState(0)
const [isAuthorzed] =useContext(AuthContext)

    const addToCart =() => {
        setCount(count +1)
    }
    const buy=() => {
        if(isAuthorzed){
            console.log("can buy")
        }else{
            console.log("can not log in")
        }
    }


return <CartContext.Provider value={{count,addToCart,buy}}>{Children}</CartContext.Provider>

};

