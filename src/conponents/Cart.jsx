import React,{useContext} from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {

  const {addTocart}=useContext(CartContext);
  return (
    <div>
        Cart


        <button onClick={addTocart}>Add to Cart</button>
    </div>
  )
}

export default Cart