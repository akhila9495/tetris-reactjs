import React, { useState } from 'react';
import Stage from './stage'
import Display from './display'
import StartButton from './startButton';
import { createStage } from '../gameHelper';
//styled components
import { StyledTetrisWrapper } from './style/StyledTetrisWrapper';
import { StyledTetris } from './style/StyledTetris';
//custom hooks 
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';


const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(true);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);


    console.log('re-rendering Tetris');
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (<Display gameOver={gameOver} text="Game Over" />) : (
                        <div>
                            <Display text="Score" />
                            <Display text="Rows" />
                            <Display text="Level" />
                        </div>

                    )}

                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;