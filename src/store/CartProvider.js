import React, { useState,useReducer } from "react";

import CartContext from './cart-context'

const defaultState = {
    products: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedAmount = state.totalAmount + action.value.price * action.value.quantity;


        const existsItemIndex = state.products.findIndex((index) => index.id === action.value.id)
        const existsItem = state.products[existsItemIndex]



        let update = state.products.concat(action.value)
        if (existsItem) {
            alert("item alreadry exisits")
            return {
                products:state.products,
                totalAmount:state.totalAmount
            }

        }





        return {
            products: update,
            totalAmount: updatedAmount
        }
    }else if (action.type === "REMOVE"){
        const updatedAmount = state.totalAmount - action.value.price * action.value.quantity;
      const updatedProducts = state.products.filter(product => product.id !== action.value.id)

      return {
                   products: updatedProducts,
                    totalAmount: updatedAmount
               }
    }

    
    return defaultState
}


const CartProvider = (props) => {
    const [state, dispatchFN] = useReducer(cartReducer, defaultState)


    const addProductHandler = (product) => {
        dispatchFN({
            type: "ADD",
            value: product

        })
    }

    

    const removeProductHandler = (product) => { 
        dispatchFN({
            type:"REMOVE",
            value:product
        })
    }


    const Cart = {
        products: state.products,
        totalAmount: state.totalAmount,
        addItem: addProductHandler,
        removeItem: removeProductHandler


    }
    return <CartContext.Provider value={Cart}>{props.children}</CartContext.Provider>
}

export default CartProvider;
