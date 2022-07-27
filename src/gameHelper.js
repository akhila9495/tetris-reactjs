export const stage_width = 12;//colums
export const stage_height = 20;//rows

export const createStage = () =>{
    return(Array.from(Array(stage_height), () =>          //for each row we create arrays columns of specified number of rows and create a 2D array
        new Array(stage_width).fill([0, 'clear'])     //0,'clear' is used to check collision
    )
    );
    

}