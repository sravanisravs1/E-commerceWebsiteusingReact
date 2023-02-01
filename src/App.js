import React, { useState } from "react";
import { Button, Card,Row, Col,CardImg, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import './App.css';
import Header from "./components/Header/Header";
import CartModal from "./components/Cart/CartItems";




const  App = () => {
  const [cartState , setCartState ] = useState(false);
  const showCart = ()=>{
    setCartState(true);
    
  }
  const closeCart = () =>{
    setCartState(false);
  }
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

  if (cartState){
    return (<CartModal closeCart={closeCart}/>)
  }  
  else{
    return (
      <div>
        <Header showCart={showCart} closeCart={closeCart}/>
        <Container fluid>
          
            <h1>
              The Generics
            </h1>
          
        </Container>
        
        <Container className="products-page"> 
          <Row >   
        {productsArr.map((product =>{
        // return (
        return (
          
            
              <Col >
                  <Card className='shadow-lg' style={{ width: '10rem' }}>
                
                      
                      <Card.Body>
                        <CardHeader>{product.title}</CardHeader>
                        <CardImg src={product.imageUrl}/>
                        <Card.Footer>
                            ${product.price}
                            <Button 
                              variant="success">Add To Cart</Button>
                        </Card.Footer>
                        
                      </Card.Body>
                  </Card>
                </Col>
              
        )}))
        }
          </Row>
    
      
      </Container> 
      {/* { cartState && <CartModal closeCart={closeCart}/> } */}
        
      </div>
    )}
}

export default App;
