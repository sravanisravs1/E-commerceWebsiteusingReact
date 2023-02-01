import React from "react";
import { Button, Card, CardImg, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import './App.css';
import Header from "./components/Header/Header";


const  App = () => {
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
  return (
    <div>
      <Header/>
      {productsArr.map((product =>{
      return (<Container className="products-page">
        <Card className='shadow-lg'>
          <Card.Body>
            <CardHeader>{product.title}</CardHeader>
            <CardImg src={product.imageUrl}/>
            <Card.Footer>
              ${product.price}
              <Button variant="success">Add To Cart</Button>
            </Card.Footer>
            
          </Card.Body>
        </Card>
        
      </Container>)
      }))
    }
      
    </div>
  );
}

export default App;
