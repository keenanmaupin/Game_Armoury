import type React from 'react';
import type Game from '../utils/interfaces/Game.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';


type GameCardProps = {
  currentGame: Game;
  addToLibrary?: (() => void) | null;
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
  addToLibrary,
  addToFinishedList,
  onPlayList,
  onFinishedList,
  removeFromStorage,
}: GameCardProps) => {
  return (
    <>
      {currentGame?.name ? (
        <section className='gameCard'>
          <figure>
            <img width="200px" src={currentGame.background_image ? `${currentGame.background_image}` : `https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?cs=srgb&dl=pexels-pixabay-275033.jpg&fm=jpg`} alt={`${currentGame.name}`} />
          </figure>
          <article className='details'>
            <h2>{currentGame.name}</h2>
            <p>
              <strong>Created by: </strong> {}
            </p>
            <p>
              <strong>Platforms: </strong> {currentGame.platforms.length ? currentGame.platforms[0].platform.name : "null"}
            </p>
            <p>
              <strong>Released:</strong> {currentGame.released}
            </p>
            <p>
              <strong>Genre:</strong> {currentGame.genres.length ? currentGame.genres[0]?.name : "null"}
            </p>
          </article>
          <article className='plot'>
            <p>
              <strong>Plot:</strong>
            </p>
            <p>{currentGame.description_raw.slice(0, 100)}{currentGame.description_raw.length > 100 && '...'}</p>
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
                    currentGame.name
                  )
                }
              />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToLibrary?.()}
              />
              <IoEyeOutline
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToFinishedList?.()}
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a game.</h1>
      )}
    </>
  );
};

export default GameCard;
