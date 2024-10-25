import type React from 'react';
import type Game from '../utils/interfaces/Game.interface';


type GameCardProps = {
  currentGame: Game;
  addToPlayList?: (() => void) | null;
  addToFinishedList?: (() => void) | null;
  onPlayList?: boolean | null;
  onFinishedList?: boolean | null;
  removeFromStorage?:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnPlayList: boolean | null | undefined,
        currentlyOnFinishedList: boolean | null | undefined,
        title: string | null
      ) => void)
    | null;
}

const GameCard = ({
  currentGame,
  addToPlayList,
  addToFinishedList,
  onPlayList,
  onFinishedList,
  removeFromStorage,
}: GameCardProps) => {
  return (
    <>
      {currentGame?.Name ? (
        <section className='filmCard'>
          <figure>
            <img src={`${currentGame.Background_Image}`} alt={`${currentGame.Name}`} />
          </figure>
          <article className='details'>
            <h2>{currentGame.Name}</h2>
            <p>
              <strong>Created by: </strong> {currentGame.Developer}
            </p>
            <p>
              <strong>Platforms: </strong> {currentGame.Platform}
            </p>
            <p>
              <strong>Released:</strong> {currentGame.Released_Date}
            </p>
            <p>
              <strong>Genre:</strong> {currentGame.Genre}
            </p>
          </article>
          <article className='plot'>
            <p>
              <strong>Plot:</strong> {currentGame.Description}
            </p>
          </article>
          {onPlayList || onFinishedList ? (
            <aside className='icons'>
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                  removeFromStorage?.(
                    e,
                    onPlayList,
                    onFinishedList,
                    currentGame.Name
                  )
                }
              />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToWatchList?.()}
              />
              <IoEyeOutline
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToSeenItList?.()}
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
      )}
    </>
  );
};

export default GameCard;
