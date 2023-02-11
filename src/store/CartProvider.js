import React, { useState,useReducer ,useEffect} from "react";

import CartContext from './cart-context';

// const getLocalCartData = () => {
//     let localCartData = localStorage.getItem("kodurusravani813@gmail.com");
//     if (localCartData == []) {
//       return [];
//     } else {
//       return JSON.parse(localCartData);
//     }
//   };

const defaultState = {
    products: JSON.parse(localStorage.getItem('kodurusravani813@gmail.com')), //getLocalCartData(),
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

    // to add the data in localStorage
  // get vs set

  
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
    // useEffect(() => {
    

    //     localStorage.setItem("kodurusravani813@gmail.com", JSON.stringify(state.products));
    //   }, [state.products]);
    
    
    
    return <CartContext.Provider value={Cart}>{props.children}</CartContext.Provider>
}

export default CartProvider;
