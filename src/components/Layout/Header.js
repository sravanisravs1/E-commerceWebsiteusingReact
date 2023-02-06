import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar ,NavLink} from 'react-bootstrap';

const Header=()=>{
    const count="0"
    return <Navbar bg='dark'  variant='dark'>
        <Container>
            <Nav className="m-auto">
             <Nav.Item className='m-3'>
                <NavLink >Home</NavLink>
             </Nav.Item>
             <Nav.Item className='m-3'>
                <NavLink >Store</NavLink>
             </Nav.Item>
             <Nav.Item className='m-3'> 
                <NavLink  >About</NavLink>
             </Nav.Item>
            </Nav>
         

        </Container>
        <Button variant="outline-info">Cart <span>{count}</span> </Button>


   </Navbar>


}

export default Header; 