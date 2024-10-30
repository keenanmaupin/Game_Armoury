// AboutPage.tsx

import React from 'react';
import './HomePage.css';


interface Developer {
  name: string;
  bio: string;
}

const developers: Developer[] = [
  {
    name: '~Bob D.~🌙',
    bio: '[Heavy Hitter]:: AKA the one we call upon when the buiss hits the fan. Demonstrating his higher knowledge within the back end: Creating the User Model |  Front end logic for buttons  | Manipulated the Main.tsx by adding a path: profile, element: <Profile/> |  Profile Page .',
  },
  {
    name: '🦇🦇~Kenjy J.~🦇',
    bio: '[Error Gaurdian]:: Showing his advanced aptitude in software development by being our teams Safety net. Mainly Spear-Heading the front end logic and connecting the correct paths for our project to Render at maximum efficency, problem solving/ debugging throughout the projects code structure. ',
  },
  {
    name: '~Keenan M.~🪦🪦',
    bio: '[Server Paladen]:: Structuring the main Skeleton of the projects server. Lending a hand for the front end pages and logic behind variouse user interactive elements. He was majoraly in charge of: Creation of the Games Modle/Middleware/Seeds | main Server end construction | Front end logic for buttons.',
  },
  {
    name: '🧟🧟~Rorac J.~',
    bio: '[Wild Card]:: Bringing the color to the party, he was in charge of styling the Login and Homepage. Being very openminded in what he could do to help further the projects success.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="Spooky-spook">
        <div className="About-header">
            <h1><img src="https://cdn3.emoji.gg/emojis/55376-the-ring.gif" width="64px" height="64px" alt="The_Ring"/>Armours: "Choose you're Character!"</h1>
        </div>
            <div className="developer-cards">
                {developers.map((developer, index) => (
                  <div className="developer-card" key={index}>
                    <br></br>
                    <hr></hr>
                    <h2>{developer.name}</h2>
                    <br></br>
                    <p>{developer.bio}</p>
                    <hr></hr>
                    <hr></hr>
                    
          </div>
        ))}
      </div>
        <h2><img src="https://cdn3.emoji.gg/emojis/63415-skeletondance.gif" width="64px" height="64px" alt="SkeletonDance"/></h2>
      <h2>🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️</h2>
    </div>
  );
};

export default AboutPage;
