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
      description:
        "King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem.",
      rating: "6.4 / 10",
    },
  ],
  Adventure: [
    {
      name: "Shang-Chi and the Legend of the Ten Rings",
      description:
        "Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.",
      rating: "8 / 10",
    },
    {
      name: "Jungle Cruise",
      description:
        "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat.",
      rating: "6.6 / 10",
    },
    {
      name: "Suicide Squad 2",
      description:
        "Assemble a team of the world's most dangerous, incarcerated Super Villains, provide them with the most powerful arsenal at the government's disposal, and send them off on a mission to defeat an enigmatic, insuperable entity.",
      rating: "7.3 / 10",
    },
    {
      name: "The Green Knight",
      description:
        "King Arthur's headstrong nephew embarks on a daring quest to confront the Green Knight, a mysterious giant who appears at Camelot.",
      rating: "6.6 / 10",
    },
  ],
  Animation: [
    {
      name: "Soul",
      description:
        "A jazz musician, stuck in a mediocre job, finally gets his big break.",
      rating: "8.1 / 10",
    },
    {
      name: "Wolfwalkers",
      description:
        "In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, a young apprentice hunter, Robyn, comes to Ireland with her father to wipe out the last pack.",
      rating: "8.1 / 10",
    },
    {
      name: "Onward",
      description:
        "In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers, set out on an epic adventure to resurrect their late father for a day.",
      rating: "7.4 / 10",
    },
    {
      name: "Weathering With You",
      description:
        "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
      rating: "7.5 / 10",
    },
  ],
  Horror: [
    {
      name: "Don't Breathe 2",
      description:
        "Blind veteran Norman Nordstrom has been hiding out for several years in an isolated cabin. He lives with a young girl and has recreated the family stolen from him by a drunken driver.",
      rating: "6.1 / 10",
    },
    {
      name: "Malignant",
      description:
        "Madison, a young woman, is terrified by visions of the murders of strangers. Later, Madison decides to find and save the victims.",
      rating: "6.3 / 10",
    },
    {
      name: "The Conjuring 3",
      description:
        "Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers after a cop stumbles upon a dazed and bloodied young man walking down the road.",
      rating: "6.3 / 10",
    },
    {
      name: "Escape Room 2",
      description:
        "Six people unwittingly find themselves locked in another series of escape rooms, slowly uncovering what they have in common to survive -- and discovering they've all played the game before.",
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
