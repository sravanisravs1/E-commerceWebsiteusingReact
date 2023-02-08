import React from 'react'

const CartContext=React.createContext({
    products:[],
    totalAmount:0,
    addItem:(product)=>{},
    removeItem:(id)=>{}
})

export default CartContext;