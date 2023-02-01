import React from "react";
import { Container,Card, Navbar ,Row , Col, Button, Overlay } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";




    
  const CartModal = (props) =>{
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
    return (
        <Card style={{ width: '30rem' }}>
            <Container md>
                <Row>
                    <Col>
                        <h1>CART</h1>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={props.closeCart}>X</Button>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={3}>
                        <h3>Item</h3>
                        
                    </Col>
                    <Col sm={3}>
                        <h3>PRICE</h3>
                        
                    </Col>
                    <Col sm={3}>
                        <h3>
                            QUANTITY
                        </h3>
                        
                    </Col>
                </Row>    
                {cartElements.map((product =>{
                    return(<Row>
                    <Col sm={3}>
                        <ul>{product.title}</ul>
                    </Col>
                    <Col sm={3}>
                        <ul>{product.price}</ul>
                    </Col>
                    <Col sm={3}>
                    
                        <ul>
                            {product.quantity}
                        </ul>
                    </Col>
                    <Col>    
                        <Button variant='danger' >REMOVE</Button>
                    </Col>
                </Row>)
                }))
                }
                <div>
                    TOTAL
                </div>
                <Button variant='info' size='sm'>PURCHASE</Button>{''}
            </Container>
        </Card>
        
    )
  };
  
export default CartModal;  
    