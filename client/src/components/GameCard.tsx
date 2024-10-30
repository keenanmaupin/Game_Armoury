import type React from "react";
import type Game from "../utils/interfaces/Game.interface";
import { IoCheckmarkCircle } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { CgPlayListAdd } from "react-icons/cg";

type GameCardProps = {
  currentGame: Game;
  addToLibrary?: (() => void) | null;
  addToFinishedList?: (() => void) | null;
  onPlayList?: boolean | null;
  onFinishedList?: boolean | null;
  removeFromStorage?:
    | ((e: React.MouseEvent<SVGSVGElement, MouseEvent>, currentlyOnPlayList: boolean | null | undefined, currentlyOnFinishedList: boolean | null | undefined, title: string | null) => void)
    | null;
};

const GameCard = ({ currentGame, addToLibrary, addToFinishedList, onPlayList, onFinishedList, removeFromStorage }: GameCardProps) => {
  return (
    <>
      {currentGame?.name ? (
        <section className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100" style={{ width: "30rem" }}>
            {/* Top image with full width */}
            <img
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              src={currentGame.background_image ? currentGame.background_image : "../assets/pexels-atomlaborblog-776092.jpg"}
              alt={currentGame.name}
            />

            <div className="card-body">
              {/* Title in its own row and centered */}
              <div className="row">
                <h2 className="card-title text-center w-100 pb-2">{currentGame.name}</h2>
              </div>

              {/* Content with reduced padding between <p> tags */}
              <div className="row">
                <div className="col-6">
                  <p className="card-text mb-1">
                    <strong>Created by:</strong> {currentGame.developers.length ? currentGame.developers[0].name : "Anonymous"}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Platforms:</strong> {currentGame.platforms.length ? currentGame.platforms[0].platform.name : "..."}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Released:</strong> {currentGame.released}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Genre:</strong> {currentGame.genres.length ? currentGame.genres[0]?.name : "..."}
                  </p>
                </div>

                <div className="col-6">
                  <p className="card-text mb-1">
                    <strong>Plot:</strong> {currentGame.description_raw.slice(0, 100)}
                    {currentGame.description_raw.length > 100 && "..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom center for icons */}
            <div className="card-footer d-flex justify-content-center">
              {onPlayList || onFinishedList ? (
                <ImCross style={{ fontSize: "40px", cursor: "pointer", marginRight: "10px" }} onClick={(e) => removeFromStorage?.(e as React.MouseEvent<SVGSVGElement, MouseEvent>, onPlayList, onFinishedList, currentGame.name)} />
              ) : (
                <>
                  <CgPlayListAdd style={{ fontSize: "40px", cursor: "pointer", marginRight: "10px" }} onClick={() => addToLibrary?.()} />
                  <IoCheckmarkCircle style={{ fontSize: "40px", cursor: "pointer" }} onClick={() => addToFinishedList?.()} />
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <h1 style={{ margin: "16px 0" }}>Please search for a game.</h1>
      )}
    </>
  );
};

export default GameCard;
