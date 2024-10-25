const searchGameAPI = async (query: string) => {
  try {
    console.log(import.meta.env.GAME_API_KEY);
    const response = await fetch(
      `https://api.rawg.io/api/games/${query}?key=${import.meta.env.GAME_API_KEY}`
    );
    console.log('Response:', response);
    const gameData = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response');
    }
    console.log('Data:', gameData);
    return gameData;
  } catch (error) {
    console.log('An error occurred', error);
    return [];
  }
};

export { searchGameAPI };