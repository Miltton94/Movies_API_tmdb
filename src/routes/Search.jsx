import {useState, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'

import MovieCard from '../components/MovieCard'

import './MovieGrid.css'

const searchURL = import.meta.env.VITE_SEARCH;
const apikey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  console.log(query);

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)

    setMovies(data.results);
    
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apikey}&query=${query}&language=pt-BR`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Search