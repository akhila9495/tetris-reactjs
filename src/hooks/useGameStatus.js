import { useState, useEffect, useCallback } from "react";

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const linePoints = [40, 100, 500, 1200];//score from wikipedia
    const calcScore = useCallback(() => {
        // check id we have score
        if (rowsCleared > 0) {
            //original tetris score calculator frm online
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1))
            setLevel(prev => prev +1)
            setRows(prev => prev + rowsCleared);
        }
    },[level,linePoints,rowsCleared]);
    useEffect(()=>{
        calcScore();

    },[calcScore,rowsCleared,score]);

    return [score, setScore, rows, setRows, level, setLevel];

}