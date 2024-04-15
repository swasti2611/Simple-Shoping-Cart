import React, { useContext } from 'react'
import {CartContext} from '../context/Cart'
const Items = (prop) => {
  const context=useContext(CartContext);
  console.log("context",context)
function handleclick(){
   context.setItem([...context.item,{ name:prop.name,price:prop.price}])
}
  return (
    <div>
       <div>
        <div>name:{prop.name}</div>
        <div>price:{prop.price}</div>
        <button onClick={handleclick}>add to cart</button>
       </div>
    </div>
  )
}

export default Items;
