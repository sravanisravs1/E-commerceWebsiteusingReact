import React ,{useContext} from "react";
import {Button, Container, Navbar,Row,Col} from 'react-bootstrap';
import CartContext from "../../store/cart-context";




const Header = (props)=>{
    const cartCtx = useContext(CartContext);

    const numberofCartItems =cartCtx.items.reduce((curNumber,item)=>{
      return curNumber+item.amount;
    },0)
    return(<Navbar bg="success" expand='sm' variant='light'>
        <Container>
          
            <Row>
              <Col xs={3} className='mb-3'>
                <Navbar.Brand href='/home'>Home</Navbar.Brand>
              </Col>
              <Col xs={3} className='mb-3'>
                <Navbar.Brand href='/store'>STORE</Navbar.Brand>
              </Col>
              <Col className='mb-10' xs={3} >
                <Navbar.Brand href='/about'>ABOUT</Navbar.Brand>
              </Col>
              <Col className="center align" xs={3}>
                <Button variant='danger'
                  onClick={props.showCart}
                  >Cart
                    <span> {numberofCartItems}</span></Button>
              </Col>
            </Row>
          
        </Container>
      </Navbar>);
};  

export default Header;      