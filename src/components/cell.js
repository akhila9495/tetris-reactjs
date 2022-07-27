import React from 'react';
import {StyledCell} from './style/StyledCell' ;
import {TETROMINOS} from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell  type={type} color={TETROMINOS[type].color}>
        cell
    </StyledCell>
);
export default Cell;