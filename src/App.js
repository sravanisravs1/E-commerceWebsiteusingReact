import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Layout/Header";
import Products from './Pages/Products'
import CartProvider from "./store/CartProvider";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from './Pages/ContactUs';
import SingleProduct from "./Pages/SingleProduct";
import Login from "./components/Auth/Login";


const router = createBrowserRouter( [ 
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/products', element: <Products/> },
      { path: '/about', element: <About/> },
      { path: '/contact', element: <ContactUs/>},
      {path: '/products/:id', element: <SingleProduct/>},
      {path: '/login', element: <Login/>},
      // {path:'/logout',element:<Logout/>}
    ],
  },
] );

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}/>
      {/* <Header/>
      //<main>
       // <Products/>
      //</main> */}
    </CartProvider>
  );
}

export default App;
