import React from 'react';
import Stage from './stage'
import Display from './display'
import StartButton from './startButton';
import {createStage} from '../gameHelper';



const Tetris = () => { 
return (<div>
    <Stage stage={createStage()}/>

    <aside>
        <div>
            <Display text='Score' />
            <Display text='Rows' />
            <Display text='Level' />
        </div>
        <StartButton/>
    </aside>



</div >);
};
export default Tetris;