import React, { Fragment, useContext, useState } from "react";
import { Nav,Navbar,Button, Container} from 'react-bootstrap';
import {NavLink,Outlet } from 'react-router-dom'

import Cart from "../Cart/Cart";
import classes from './Header.module.css';
import CartContext from '../../store/cart-context';

const Header = () => {
   const context=useContext(CartContext)
   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
 
 
   const totalNumber = context.products.reduce((acc,cur)=>{
     return acc+cur.quantity;
   },0)
 
   return (
      <Fragment>
         <header className={classes.header}>
            <div className={classes.container}>
                <div>
                <ul className={classes.flex}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Store</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                </ul>
                </div>
                <Button variant="outline-info" onClick={handleShow}>
                     Cart <span>{totalNumber}</span>
                     </Button>
                     <Cart
                     show={show}
                     onHide={handleClose}
                     //   backdrop="static"
                     keyboard={false}
                     onClick={handleClose}
                     />
            </div>
         </header> 
         <Outlet/>
      </Fragment>
      
    );
};
      //   <>
      //   <header className={classes.header}>
      //       <div className={classes.container}>
      //           <div>
      //           <ul className={classes.flex}>
      //               <li><NavLink to="/">Home</NavLink></li>
      //               <li><NavLink to="/products">Store</NavLink></li>
      //               <li><NavLink to='/about'>About</NavLink></li>
      //               <li><NavLink to='/contact'>Contact Us</NavLink></li>
      //           </ul>
      //           </div>
      //           <div className={classes.cartsection}>
      //               <span className={classes.cartqty}> {cartnum}</span>
      //           <button onClick={() => setCart(!show)} className={classes.cart}>Cart</button>
      //           </div>
      //       </div>
      //      { show ? <div className={classes.toggle}>
      //           <Cart/>
      //       </div> : null}
      //   </header>
      //   <Outlet/>
      //   </>
    


export default Header;