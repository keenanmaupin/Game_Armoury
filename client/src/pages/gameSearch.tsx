import { FormEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { searchGame, searchById } from "../api/API";
import GameCard from "../components/GameCard";
import type Game from "../utils/interfaces/Game.interface";

const GameSearch = () => {
  const [games, setGames] = useState<Game[]>([]); // State to store an array of games
  const [searchInput, setSearchInput] = useState<string>("");

  const addToLibrary = async (game: Game) => {
    try {
      const username = localStorage.getItem('username')
      const response = await fetch("/api/games/playlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem('id_token')}`
        },
        body: JSON.stringify({
          slug: game.slug,
          name: game.name,
          released: game.released,
          background_image: game.background_image,
          developer: game.developers.map((dev) => dev.name).join(", "),
          platform: game.platforms.map((plat) => plat.platform.name).join(", "),
          genres: game.genres.map((genre) => genre.name).join(", "),
          description_raw: game.description_raw,
          username
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Game added to playlist successfully:", result);
      } else {
        console.error("Failed to add game to playlist");
      }
    } catch (error) {
      console.error("Error adding game to library:", error);
    }
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

    const gameIds = data.map((game) => game.id).filter((id): id is string => id !== null);
    console.log("Game IDs:", gameIds);

    const gameDataById: Game[] = await searchById(gameIds);

    setGames(gameDataById); // Update the state with the array of games
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
