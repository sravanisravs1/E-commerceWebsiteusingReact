import React, { useState ,useContext, Fragment} from "react";
import About from './pages/About';
import Home from "./pages/Home";
import { Button } from "react-bootstrap";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import MovieList from './components/Movies/MovieList'

const router = createBrowserRouter([
  
  {path:'/about',element:<About/>},
  {path:'/',element:<Home/>},
  // {path:'/store',element:<Store/>}
  
]);

const  App = (props) => {
  const [movies,setMovies ] = useState([]);
  const [isLoading , setIsLoading ] = useState(false);
//   function MoviesList () {
//     fetch('https://swapi.dev/api/films/')
//     .then((response)=>{ return response.json();
// })
//     .then(data=>console.log(data.results))
    
// }
  async function MoviesList () {
      setIsLoading(true)
      const response= await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      const transformedMovies = data.results.map((movieData=>{
        return ({
          id:movieData.episode_id,
          title:movieData.title,
          releaseDate:movieData.release_date,
          openingText:movieData.opening_crawl
        });

      }));
      
    setMovies(transformedMovies);
    setIsLoading(false)  
  }
  return(
  <Fragment>
      <RouterProvider router={router}/>
      <section>
          <Button variant='success' onClick={MoviesList}>
            FetchMovies
          </Button>
          {isLoading && <p>loading....</p>}
      </section>
      <MovieList movies={movies}/>
  </Fragment>
    
  )}


export default App;
