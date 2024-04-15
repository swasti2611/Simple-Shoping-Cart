import React, { useContext } from 'react'
import {CartContext} from '../context/Cart'

const CartItem = () => {
    const cart=useContext(CartContext);
    let total=0;
  for(let i=0;i<cart.item.length;i++){
       total+=cart.item[i].price
  } 
  console.log(total) 
  return (
    <div>
      <div>
        <h1>cart</h1>
        {cart && cart.item.map(item=><li>{item.name}-{item.price}</li>)}
      </div>
      <div>
         total :{total}
      </div>
    </div>
  )
}

export default CartItem
