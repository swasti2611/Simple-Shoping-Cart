import React from 'react'

import './App.css'
import Items from './component/Items';
import CartItem from './component/CartItem'

function App() {
  let arr=[
    {name:"shirt",
     price:2000,
   },
   {name:"pant",
   price:5000,
 },
 {name:"top",
 price:1000,
},
{name:"skirt",
price:7000,
}
  ]

  return (
    <>
    <div style={{display:'flex' ,gap:"20px"}}>
    {arr.map((item)=>{
      return <Items name={item.name} price={item.price}/>
    })}
    </div>
    <CartItem/>
    </>
  )
}

export default App
