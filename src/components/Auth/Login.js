import React, { useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import CartContext from "../../store/cart-context";
import classes from './Login.module.css';
import AuthContext from "../../store/Auth-context";

const Login = () => {
    const authCtx = useContext(AuthContext);
    const cartCt = useContext(CartContext);
    const history = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault()

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
     //console.log(enteredEmail,enteredPassword)
     localStorage.setItem('userEmail', enteredEmail)
     
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRorahRJ_juKatl8aQXmkip1wxxy28S84",
    {
        method: 'POST',
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true, //always 
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(res => {

   if (res.ok) {
     return res.json();
   } else {
     res.json().then(data => {   // Json also return promises 
       let errorMessage = 'Authentication failed'
       if(data && data.error && data.error.message) {
       errorMessage = data.error.message
       }
     throw new Error(errorMessage)
     
     })
   }
 })
 .then((data) => {                          
  //console.log(data.idToken); 
  cartCt.setToken(data.idToken); 
  cartCt.setItems(); 
  // authCtx.login(data.idToken);
  history('/products');
  localStorage.setItem('token', data.idToken);
   
 })
 .catch((err) => {
   alert(err.message)
 })
    };

    return (
        <React.Fragment>
      <h1 className={classes.contactHeading}>Login</h1>
      <form onSubmit={submitHandler} className={classes.contactform}>

        <div className={classes.contactField}>
          <label className={classes.contactLable}>Email address</label>
          <input
            ref={emailInputRef}
            className={classes.contactInput}
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div className={classes.contactField}>
          <label className={classes.contactLable}>Password</label>
          <input
            ref={passwordInputRef}
            className={classes.contactInput}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className={classes.contactSubmit}>Submit</button>
      </form>
    </React.Fragment>
    );
};

export default Login;