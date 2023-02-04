import React, { useState ,useContext, Fragment} from "react";
import About from './pages/About';
import Home from "./pages/Home";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import MovieList from './components/Movies/MovieList'

const router = createBrowserRouter([
  
  {path:'/about',element:<About/>},
  {path:'/',element:<Home/>}
  
]);

const  App = (props) => {
  const [movies,setMovies ] = useState([]);
//   function MoviesList () {
//     fetch('https://swapi.dev/api/films/')
//     .then((response)=>{ return response.json();
// })
//     .then(data=>console.log(data.results))
    
// }
  async function MoviesList () {
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
      
    setMovies(transformedMovies)  
  }
  return(
  <Fragment>
      <RouterProvider router={router}/>
      <section>
          <button onClick={MoviesList}>
            FetchMovies
          </button>
      </section>
      <MovieList movies={movies}/>
  </Fragment>
    
  )}


export default App;
