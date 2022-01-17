import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MovieContext } from "../../hooks/movieContext";
import PosterMovie from "../poster/PosterMovie";
import "./listMovie.css";

const ListMovies = () => {
  const { movieFind } = useContext(MovieContext);

  const [movies, setMovies] = useState([]);
  const API_MOVIE = "https://akabab.github.io/starwars-api/api/all.json";

  useEffect(() => {
    obtenerData(API_MOVIE);
  }, [movieFind, API_MOVIE]);

  const obtenerData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
     setTimeout(() => {
      movieFind.length > 0 ? setMovies(movieFind) : setMovies(data);
    }, 0); 
  };

  return (
    <div className="lists">
      <div className="wrapper">
        <div className="lists-container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <PosterMovie
                key={movie.id}
                image={movie.image}
                name={movie.name}
                species={movie.species}
                gender={movie.gender}
                homeworld={movie.homeworld}
                movies={movies}
              />
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListMovies;
