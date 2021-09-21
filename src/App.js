import React, { useState } from "react";
import "./App.css";

var moviesList = {
  Action: [
    {
      name: "Black Widow",
      rating: "6.8 / 10",
    },
    {
      name: "Mortal Kombat",
      rating: "6.1 / 10",
    },
    {
      name: "The Tomorrow War",
      rating: "6.6 / 10",
    },
    {
      name: "GodZilla vs Kong",
      rating: "6.4 / 10",
    },
  ],
  Adventure: [
    {
      name: "Shang-Chi and the Legend of the Ten Rings",
      rating: "8 / 10",
    },
    {
      name: "Jungle Cruise",
      rating: "6.6 / 10",
    },
    {
      name: "Suicide Squad 2",
      rating: "7.3 / 10",
    },
    {
      name: "The Green Knight",
      rating: "6.6 / 10",
    },
  ],
  Animation: [
    {
      name: "Soul",
      rating: "8.1 / 10",
    },
    {
      name: "Wolfwalkers",
      rating: "8.1 / 10",
    },
    {
      name: "Onward",
      rating: "7.4 / 10",
    },
    {
      name: "Weathering With You",
      rating: "7.5 / 10",
    },
  ],
  Horror: [
    {
      name: "Don't Breathe 2",
      rating: "6.1 / 10",
    },
    {
      name: "Malignant",
      rating: "6.3 / 10",
    },
    {
      name: "The Conjuring 3",
      rating: "6.3 / 10",
    },
    {
      name: "Escape Room 2",
      rating: "5.8 / 10",
    },
  ],
};

var moviesWeKnow = Object.keys(moviesList);

const App = () => {
  const [defaultGenre, setGenre] = useState("Action");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Movie Recommendation App</h1>
      <p>Checkout my favourite movies list from different genres.</p>
      <div>
        {moviesWeKnow.map((genre) => {
          return (
            <button onClick={() => genreClickHandler(genre)}>{genre}</button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul>
          {moviesList[defaultGenre].map((movie) => (
            <li key={movie.name}>
              <div> {movie.name} </div>
              <div> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
