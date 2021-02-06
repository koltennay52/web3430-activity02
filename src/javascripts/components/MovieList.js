import React, { useState } from "react";
import Movie from "./Movie";
import { top10 } from "../top10";

export default function MovieList() {
  const [movies, setMovies] = useState(top10);
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>List</li>
          <li>About</li>
        </ul>
        <button
          className="primary"
          onClick={() => {
            movies.sort((a, b) => a.rating - b.rating);
            setMovies(movies.map((m) => m));
          }}
        >
          Sort
        </button>
      </nav>
      <main>
        {movies.map((m, i) => {
          return (
            <Movie
              key={m.id}
              movie={m}
              onLike={() => {
                movies[i].likes = movies[i].likes ? movies[i].likes + 1 : 1;

                setMovies(movies.map((m) => m));
              }}
            />
          );
        })}
      </main>
    </>
  );
}
