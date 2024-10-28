import { FormEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { searchGame } from "../api/API";
import GameCard from "../components/GameCard";
import type Game from "../utils/interfaces/Game.interface";

const GameSearch = () => {
  const [games, setGames] = useState<Game[]>([]); // State to store an array of games
  const [searchInput, setSearchInput] = useState<string>("");

  const addToLibrary = (game: Game) => {
    let parsedGamesToPlay: Game[] = [];
    const storedGamesToPlay = localStorage.getItem("gamesToPlay");
    if (typeof storedGamesToPlay === "string") {
      parsedGamesToPlay = JSON.parse(storedGamesToPlay);
    }
    parsedGamesToPlay.push(game);
    localStorage.setItem("gamesToPlay", JSON.stringify(parsedGamesToPlay));
  };

  const addToFinishedList = (game: Game) => {
    let parsedGamesFinished: Game[] = [];
    const storedGamesFinished = localStorage.getItem("gamesFinished");
    if (typeof storedGamesFinished === "string") {
      parsedGamesFinished = JSON.parse(storedGamesFinished);
    }
    parsedGamesFinished.push(game);
    localStorage.setItem("gamesFinished", JSON.stringify(parsedGamesFinished));
  };

  const searchGameByTitle = async (event: FormEvent) => {
    event.preventDefault();
    const data: Game[] = await searchGame(searchInput); // Expect an array of games
    setGames(data); // Update the state with the array of games
  };

  return (
    <div>
      <section id="searchSection">
        <form onSubmit={searchGameByTitle}>
          <h1>Search for a Game</h1>
          <input type="text" placeholder="Enter a Game Title" onChange={(e) => setSearchInput(e.target.value)} />
          <button className="btn btn-primary" type="submit" id="searchBtn">
            Search
          </button>
        </form>
      </section>
      <section id="gameResults">
        {games.length > 0 ? (
          games.map((game) => (
            <GameCard
              key={game.id || game.slug} // Use a unique identifier
              currentGame={game}
              addToLibrary={() => addToLibrary(game)}
              addToFinishedList={() => addToFinishedList(game)}
            />
          ))
        ) : (
          <h2 style={{ margin: "16px 0" }}>No games found. Please try a different search.</h2>
        )}
      </section>
    </div>
  );
};

export default GameSearch;
