import React, { useState ,useContext,Fragment,useCallback, useEffect} from "react";
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
  const [error,setError] = useState(null);
  const [isRetry,setIsRetry] = useState(true)
  const retry = ()=>{setTimeout(MoviesList(), 5000)}
  const clearRetry=()=>{clearTimeout(retry)}
  
//   function MoviesList () {
//     fetch('https://swapi.dev/api/films/')
//     .then((response)=>{ return response.json();
// })
//     .then(data=>console.log(data.results))
    
// }
const MoviesList = useCallback(async()=> {
      
  setIsLoading(true);
  setError(null);
  
  try{
      const response= await fetch('https://swapi.dev/api/films/');
      if (!response.ok ){
        retry();
        throw new Error('something went wrong,Retrying...');
      }
      
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
    

  } catch(error) {
        setError(error.message);    
  }   
  setIsLoading(false) ;  

  
},[]);

useEffect(()=>{
  MoviesList();
 },[])
  
  let content = <p>Found no Movies</p>
  if(movies.length > 0) {
    content = <MovieList movies={movies}/>
  }
  if (error){
    content = <p>{error}</p>
  }
  if(isLoading) {
    content = <p>Loading...</p>
  }

  
  return(
  <Fragment>
      <RouterProvider router={router}/>
      <section>
          <Button variant='success' onClick={MoviesList}>
            FetchMovies
          </Button>
          <Button variant='danger' onClick={clearRetry}>Cancel </Button>
          
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MovieList movies={movies}/>}
        {!error && isLoading && <p>loading....</p>}
        {!error && !isLoading && movies.length === 0 && <p>Found no Movies.</p>}
        {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
      
  </Fragment>
    
  )}

    


export default App;
