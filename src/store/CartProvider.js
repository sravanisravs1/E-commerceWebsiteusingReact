import React, { useState,useEffect} from "react";
import axios from "axios";

import CartContext from './cart-context';



    const CartProvider = (props) => {
        const [Item, setCartItems] = useState([]);
      
        const [token, setToken] = useState(localStorage.getItem("idToken"));
        const removeItemFromCartHandler = async (_id) => {
            // const res = Item.filter((cutElm) => (cutElm.id !== id)); //.map(filterdItem => (setCartItems(filterdItem)))
            // setCartItems(res)
            const res = await axios.delete(`https://crudcrud.com/api/b3d518fd13bd41dda38da8b55b85713a/cart${localStorage.getItem("userEmail").split("@")[0]}/${_id}`);
          setItems()
          // console.log('delete', res);
          };
      
          let sum=0;
          Item.forEach((e) => sum+=+(e.price)); 
          // console.log(sum);
      
          //CrudCrud use;
          // const userEmail = localStorage.getItem('userEmail').split("@")[0];
      
          const setItems = async () => {
            const res = await axios.get(`https://crudcrud.com/api/b3d518fd13bd41dda38da8b55b85713a/cart${localStorage.getItem("userEmail").split("@")[0]}`)
            // console.log('CrudCrud',res);
            setCartItems(res.data)
          };
      
          const addItemToCartHandler = async (item) => {
      
            const res = await axios.post(`https://crudcrud.com/api/b3d518fd13bd41dda38da8b55b85713a/cart${localStorage.getItem("userEmail").split("@")[0]}`
            ,{...item, quantity:1}
            );
            // console.log(res);
            setItems(localStorage.getItem("userEmail"));     
          }
      
          useEffect(() => {
            setItems();
          }, [token]);

    const cartContext = {
        item: Item,
        // totalNum: item.length,
        totalAmount: sum,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,    
        token: token,
        setToken: setToken,
        setItems: setItems,
        isLoggedIn: !!token,
      };  
    
    
    
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;
