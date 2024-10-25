import { FormEvent, useState } from 'react';
import type Game from '../utils/interfaces/Game.interface';
import { searchGameAPI } from '../api/API';
import GameCard from '../components/GameCard';


const GameSearch = () => {
  const [currentGame, setCurrentGame] = useState<Game>({
    Id: 0,
    Name: '',
    Released_Date: '',
    Background_Image: '',
    Developer: '',
    Platform: '',
    Genre: '',
    Description: '',
  })
  const [searchInput, setSearchInput] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const addToLibrary = () => {
    if (!currentGame) {
      setErrorMessage('No game is selected to add to the library.');
      return;
    }

    let gamesLibrary: Game[] = [];
    const storedGames = localStorage.getItem('gamesLibrary');
    if (storedGames) {
      gamesLibrary = JSON.parse(storedGames);
    }

    const gameExists = gamesLibrary.some(game => game.Name === currentGame.Name);
    if (gameExists) {
      setErrorMessage('This game is already in your library.');
      return;
    }

    gamesLibrary.push(currentGame);
    localStorage.setItem('gamesLibrary', JSON.stringify(gamesLibrary));
    setErrorMessage(null); // Clear any previous error messages
  };

  const searchGameByTitle = async (event: FormEvent) => {
    event.preventDefault();

    if (!searchInput.trim()) {
      setErrorMessage('Please enter a game title to search.');
      return;
    }

    try {
      const data: Game = await searchGameAPI(searchInput);
      setCurrentGame(data);
      setErrorMessage(null); // Clear any previous error messages
    } catch (error) {
      console.error('Error searching for game:', error);
      setErrorMessage('Failed to fetch the game. Please try again later.');
    }
  };

  return (
    <div>
      <section id="searchSection">
        <form onSubmit={searchGameByTitle}>
          <input
            type="text"
            placeholder="Enter a Game Title"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" id="searchBtn">
            Search
          </button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </section>
      {currentGame && (
        <GameCard
          currentGame={currentGame}
          addToLibrary={addToLibrary}
        />
      )}
    </div>
  );
};

export default GameSearch;


