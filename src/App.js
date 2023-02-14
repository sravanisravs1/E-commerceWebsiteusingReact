import React ,{ lazy, Suspense }from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Header from "./components/Layout/Header";
// import Products from './Pages/Products'
 import CartProvider from "./store/CartProvider";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import ContactUs from './Pages/ContactUs';
// import SingleProduct from "./Pages/SingleProduct";
// import Login from "./components/Auth/Login";
const Header = lazy(() => import("./components/Layout/Header"));
const Home = lazy(() => import("./Pages/Home"));
const Products = lazy(() => import("./Pages/Products"));
const SingleProduct = lazy(() => import("./Pages/SingleProduct"));
const About = lazy(() => import("./Pages/About"));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const Login = lazy(() => import("./components/Auth/Login"));


const router = createBrowserRouter( [ 
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <Suspense><Home/></Suspense> },
      { path: '/products', element: <Suspense><Products/></Suspense> },
      { path: '/about', element: <Suspense><About/></Suspense> },
      { path: '/contact', element: <Suspense><ContactUs/></Suspense>},
      {path: '/products/:id', element: <Suspense><SingleProduct/></Suspense>},
      {path: '/login', element: <Suspense><Login/></Suspense>},
      {path:'*', element:<Suspense><Login/></Suspense>}
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
