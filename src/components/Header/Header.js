import React from "react";
import {Button, Container, Navbar,Row,Col} from 'react-bootstrap';




const Header = ()=>{
    return(<Navbar bg="success" expand='sm' variant='light'>
        <Container>
            <Row>
              <Col xs={4}>
                <Navbar.Brand href='/'>Home</Navbar.Brand>
              </Col>
              <Col xs={4}>
                <Navbar.Brand href='/'>STORE</Navbar.Brand>
              </Col>
              <Col xs={4}>
                <Navbar.Brand href='/'>ABOUT</Navbar.Brand>
              </Col>
              <Col xs={4}>
                <Button>Cart</Button>
              </Col>
            </Row>
          
        </Container>
      </Navbar>);
};  

export default Header;      