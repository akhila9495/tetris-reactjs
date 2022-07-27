import React from 'react';
import Stage from './stage'
import Display from './display'
import StartButton from './startButton';
import { createStage } from '../gameHelper';
import StyledTetrisWrapper from './style/StyledTetris';
import  StyledTetris  from './style/StyledTetrisWrapper';



const Tetris = () => {
    return (<StyledTetrisWrapper>
        <Stage stage={createStage()} />
        <StyledTetris>
            <aside>
                <div>
                    <Display text='Score' />
                    <Display text='Rows' />
                    <Display text='Level' />
                </div>
                <StartButton />
            </aside>
        </StyledTetris>
    </StyledTetrisWrapper >);
};
export default Tetris;