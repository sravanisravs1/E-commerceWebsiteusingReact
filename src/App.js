import React, { useState ,useContext} from "react";
import { Button, Card,Row, Col,CardImg, Container ,Navbar} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import './App.css';
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import AvailableProducts from "./components/AvailableItems/AvailableProducts";
import CartProvider from "./store/CartProvider";
import CartContext from "./store/cart-context";

import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
  
  {path:'/about',element:<About/>},
  
]);

const  App = (props) => {
  const cartCtx= useContext(CartContext);
  const addToCartHandler= amount =>{
    cartCtx.addItem({
        
        title : props.title,
        amount: amount,
        price : props.price
    })
};
  const [cartState , setCartState ] = useState(false);
  const showCart = ()=>{
    setCartState(true);
    
  }
  const closeCart = () =>{
    setCartState(false);
  }
  

  if (cartState){
    return (<Cart closeCart={closeCart}/>)
  }  
  else{
    return (
      
      <CartProvider>
        <Header showCart={showCart} closeCart={closeCart} />
        <Navbar>
        <Container fluid  style={{backgroundColor: 'pink'}}>
          
          <h1 className="p-3" >
            The Generics
          </h1>
        
      </Container>
        </Navbar>
        
        <Container className="products-page"> 
          
    
      
      </Container> 
      {/* { cartState && <CartModal closeCart={closeCart}/> } */}
      <RouterProvider router={router}/>
      <Footer/>
      </CartProvider>
      
      
    )}
}

export default App;
