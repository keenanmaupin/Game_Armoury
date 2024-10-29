import type Game from "../utils/interfaces/Game.interface";

const searchGame = async (query: string): Promise<Game[]> => {
  try {
    console.log(import.meta.env);
    const response = await fetch(`https://api.rawg.io/api/games?search=${query}&key=${import.meta.env.VITE_RAWG_API_KEY}`);
    console.log("Response:", response);

    if (!response.ok) {
      throw new Error("Invalid API response");
    }

    const gameData = await response.json();
    console.log("Data:", gameData);

    return gameData.results; // Return an array of games from the API response
  } catch (error) {
    console.log("An error occurred", error);
    return []; // Return an empty array in case of an error
  }
};

const searchById = async (ids: string[]): Promise<Game[]> => {
  try {
    console.log(import.meta.env.GAME_API_KEY);

    // Use Promise.all to fetch each ID separately
    const gameData = await Promise.all(
      ids.map(async (id) => {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`);

        if (!response.ok) {
          throw new Error(`Invalid API response for ID ${id}`);
        }

        return await response.json(); // Parse the JSON for each game
      })
    );

    console.log("Data:", gameData);
    return gameData; // Return an array of games
  } catch (error) {
    console.log("An error occurred", error);
    return []; // Return an empty array in case of an error
  }
};

export { searchGame, searchById };
