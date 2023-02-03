import React ,{useRef,useState,useContext} from 'react';
import { Button, Card,Row, Col,CardImg, Container ,Navbar} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import classes from './Availableproducts.module.css';


import CartContext from '../../store/cart-context';

const AvailableProducts = (props) =>{
    const cartCtx= useContext(CartContext);
    
    
    const cartItemAddHandler = product =>{
        cartCtx.addItem({...product,amount:1});
    }
    console.log(cartCtx)
    const productsArr = [

        {
        id:20,
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        id:21,
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        id:22,
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        id:23,
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
        
       
        
        
    return (
        <Row>
        {productsArr.map((product =>{
        // return (
        return (
          
            
              <Col >
                  <Card className='shadow-lg' style={{ width: '12rem' }}>
                
                      
                      <Card.Body>
                        <CardHeader>{product.title}</CardHeader>
                        <CardImg src={product.imageUrl}/>
                            
                        <Card.Footer>
                            ${product.price}
                            
                            <Button variant='success' onClick={cartItemAddHandler}>ADD</Button>
                        </Card.Footer>
                        
                      </Card.Body>
                  </Card>
                </Col>
             
        )}))
        
        }
        </Row>);
};

export default AvailableProducts;

