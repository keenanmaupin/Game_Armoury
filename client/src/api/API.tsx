import type Game from '../utils/interfaces/Game.interface';

const searchGame = async (query: string): Promise<Game[]> => {
  try {
    console.log(import.meta.env);
    const response = await fetch(
      `https://api.rawg.io/api/games?search=${query}&key=${import.meta.env.VITE_RAWG_API_KEY}`
    );
    console.log('Response:', response);

    if (!response.ok) {
      throw new Error('Invalid API response');
    }

    const gameData = await response.json();
    console.log('Data:', gameData);

    return gameData.results; // Return an array of games from the API response
  } catch (error) {
    console.log('An error occurred', error);
    return []; // Return an empty array in case of an error
  }
};

// const searchById = async (query: string): Promise<Game[]> => {
//   try {
//     console.log(import.meta.env.GAME_API_KEY);
//     const response = await fetch(
//       `https://api.rawg.io/api/games/${query}&key=4599608c12574fd58e53a8206935ab3e`
//     );
//     console.log('Response:', response);

//     if (!response.ok) {
//       throw new Error('Invalid API response');
//     }

//     const gameData = await response.json();
//     console.log('Data:', gameData);

//     return gameData.results; // Return an array of games from the API response
//   } catch (error) {
//     console.log('An error occurred', error);
//     return []; // Return an empty array in case of an error
//   }
// };

export { searchGame };
