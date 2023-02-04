import React, { useState ,useContext, Fragment} from "react";
import About from './pages/About';
import Home from "./pages/Home";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Movies from "./components/APICalls/Movies";


const router = createBrowserRouter([
  
  {path:'/about',element:<About/>},
  {path:'/',element:<Home/>}
  
]);

const  App = (props) => {
//   function MoviesList () {
//     fetch('https://swapi.dev/api/films/')
//     .then((response)=>{ return response.json();
// })
//     .then(data=>console.log(data.results))
    
// }
  async function MoviesList () {
      const response= await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      const results= data.results
      return (console.log(results))
      
  }
  return(
  <Fragment>
      <RouterProvider router={router}/>
      <Movies MoviesList={MoviesList}/>
  </Fragment>
    
  )}


export default App;
