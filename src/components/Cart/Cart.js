import React, { useContext } from "react";
import { Container ,Row , Col, Button,} from "react-bootstrap";
import classes from './Cart.module.css';
import Modal from "../Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";




    
  const Cart = (props) =>{
    const cartCtx =useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0 ;

    const cartItemRemoveHandler =id =>{
        cartCtx.removeItem(id);
        
    }
    const cartItemAddHandler = product =>{
        cartCtx.addItem({...product,amount:1});
    }
    const items =[
        {
            amount:1,
            price:200,
            total:200,
            title:'albulm1',
            id:20
        }
    
        ]
    
        
        
    return (
        <Modal >
            <Container className={classes.container} fluid>
            
                <Row>
                    <Col >
                        <h1>CART</h1>
                        <>------------------------------------------------------</>
                    </Col>
                    <Col>
                        <Button className={classes.cancel} variant='danger' onClick={props.closeCart}>X</Button>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={3}>
                        <h3>Item</h3>
                        <>_____________</>
                        
                    </Col>
                    <Col sm={3}>
                        <h3 >PRICE</h3>
                        <>_____________</>
                        
                    </Col>
                    <Col sm={3}>
                        <h3>
                            QTY
                        </h3>
                        <>_____________</>
                        
                    </Col>
                </Row>    
                {items.map((product =>{
                    return(<CartItem 
                        key={product.id}
                        amount={product.amount} 
                        price={product.price} 
                        title={product.title}
                        onRemove={cartItemRemoveHandler(null,product.id)}
                        onAdd={cartItemAddHandler.bind(null,product)}/>)
                }))
                }
                <Row>
                    <Col  align='right'>
                    TOTAL
                    </Col>
                    <br />
                    <Col>
                    {totalAmount}
                    </Col>
                </Row>
               
                        
                {hasItems && <Button className={classes.purchasebtn} variant='success'>PURCHASE</Button>}
                    
            </Container>
        </Modal>
        
    )
  };
  
export default Cart;  
    