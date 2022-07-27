import React, { useState } from "react";
import Stage from "./stage";
import Display from "./display";
import StartButton from "./startButton";
import { createStage } from "../gameHelper";

//styled components
import { StyledTetrisWrapper } from "./style/StyledTetrisWrapper";
import { StyledTetris } from "./style/StyledTetris";

//custom hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player,updatePlayerPosition,resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-rendering Tetris");

  const movePlayer = (dir) => {
    updatePlayerPosition({
        x:dir,y:0,
    })
  };
  const startGame = () => {
    //reset everything
    setStage(createStage());
    resetPlayer();
  };
  const drop = () => {
    updatePlayerPosition({
      x: 0,
      y: 1,
      collided: false,
    });
  };
  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      console.log(keyCode);
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        movePlayer();
      }
    }
  };
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}

          <StartButton onClick={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
