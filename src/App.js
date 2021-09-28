import React, { useState } from "react";
import "./App.css";

var moviesList = {
  Action: [
    {
      name: "Black Widow",
      description:
        "Natasha Romanoff, a former KGB spy, is shocked to find out that her ex handler, General Dreykov, is still alive. While evading capture by Taskmaster, she is forced to confront her dark past.",
      rating: "6.8 / 10",
    },
    {
      name: "Mortal Kombat",
      description:
        "Hunted by the fearsome warrior Sub-Zero, MMA fighter Cole Young finds sanctuary at the temple of Lord Raiden. Training with experienced fighters",
      rating: "6.1 / 10",
    },
    {
      name: "The Tomorrow War",
      description:
        "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message.",
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
      <h1>🎥Movie Recommendation App</h1>
      <p>Checkout my favourite movies list from different genres.</p>
      <div>
        {moviesWeKnow.map((genre) => {
          return (
            <button className="btn" onClick={() => genreClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul>
          {moviesList[defaultGenre].map((movie) => (
            <li className="list" key={movie.name}>
              <div> {movie.name} </div>
              <div> {movie.rating} </div>
              <div> {movie.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
