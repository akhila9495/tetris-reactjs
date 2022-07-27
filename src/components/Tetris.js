import React from 'react';
import Stage from './stage'
import Display from './display'
import StartButton from './startButton';
import { createStage } from '../gameHelper';
import { StyledTetrisWrapper } from './style/StyledTetrisWrapper';
import { StyledTetris } from './style/StyledTetris';



const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;