import { FormEvent, useState } from 'react';
import type Game from '../utils/interfaces/Game.interface';
import { searchGameAPI } from '../api/API';


const GameSearch = () => {
  const [currentGame, setCurrentGame] = useState<Game>({
    Name: '',
    Released_Date: '',
    Background_Image: '',
    Developer: '',
    Platform: '',
    Genre: '',
    Description: '',
  })
  const [searchInput, setSearchInput] = useState<string>('');

  const addToLibrary = () => {
    let gamesLibrary: Game[] = [];
    const storedGames = localStorage.getItem('gamesLibrary');
    if (storedGames) {
      gamesLibrary = JSON.parse(storedGames);
    }
    gamesLibrary.push(currentGame);
    localStorage.setItem('gamesLibrary', JSON.stringify(gamesLibrary));
  }
  const searchGameByTitle = async (event: FormEvent, game_title: string) => {
    event.preventDefault();
    const data: Game = await searchGameAPI(game_title);
    setCurrentGame(data);
  };

  return (
    <div>
      <section id='searchSection'>
        <form onSubmit={( event: FormEvent ) =>
          searchGameByTitle(event, searchInput)
        }>
          <input
            type='text'
            placeholder='Enter a Game Title'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
      </form>
      </section>
      <GameCard
        currentGame={currentGame}
        addToLibrary={addToLibrary}
      />
    </div>
  );
};

export default GameSearch;