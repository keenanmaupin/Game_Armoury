import React from 'react';
import ProfileCard from '../components/ProfileCard';
import type Game from '../utils/interfaces/Game.interface';
import { useState, useEffect } from 'react';
import './ProfilePage.css';

// FOR REFERENCE
// const userLibrary: Game[] = [
//   {
//     id: 1,
//     name: "Call of Duty: Black Ops 6",
//     background_image: "https://i0.wp.com/xboxera.com/wp-content/uploads/2024/09/black-ops-6-beta-end.jpg?ssl=1",
//     developers: [{ name: "Developer 1" }],
//     platforms: [{ platform: { name: "Platform 1" } }],
//     released: "2023-09-15",
//     genres: [{ name: "Genre 1" }],
//     description_raw: "This is the plot of Game Title 1...",
//   },
//   {
//     id: 2,
//     name: "The Legend of Zelda",
//     background_image: "https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_Hub_TheLegendOfZelda_ToTK.jpg",
//     developers: [{ name: "Developer 2" }],
//     platforms: [{ platform: { name: "Platform 2" } }],
//     released: "2024-01-10",
//     genres: [{ name: "Genre 2" }],
//     description_raw: "This is the plot of Game Title 2...",
//   },
//   // Add more games as needed
// ];

const ProfilePage: React.FC = () => {
  const [userLibrary, setUserLibrary] = useState<Game[]>([]);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const response = await fetch('/api/games/library', {
          method: 'GET',
          headers: {
            "authorization": `Bearer ${localStorage.getItem('id_token')}`
          }
        });
        const data = await response.json();
        setUserLibrary(data);
      } catch (error) {
        console.error('Error fetching library', error);
      }
    };

    fetchLibrary();
  }, []);
  
  return (
    <div className="profile-page">
      <h1 className="logo">
        {"Your Game Library".split("").map((char, index) => (
          <span key={index} className={`colored-letter letter-${index % 12}`}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      <div className="game-cards-container">
        {userLibrary.length > 0 ? (
          userLibrary.map((game) => (
            <ProfileCard key={game.id} currentGame={game} />
          ))
        ) : (
          <p>No games in your library yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
