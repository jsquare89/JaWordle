import React from "react";
import Key from "./Key";

export default function Keyboard(props){
    
    const keyElements = props.keys.map(key =>
        <Key key={key.id} obj={key}/>
    )

    function getKeyElementsRow(row)
    {
        if(row === 1){
            return keyElements.slice(0,9)
        }else if(row === 2){
            return keyElements.slice(9,18)
        }else{
            return keyElements.slice(18,28)
        }

    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center">
                {getKeyElementsRow(1)}
            </div>
            <dv className="flex flex-row justify-center">
                {getKeyElementsRow(2)}
            </dv>
            <div className="flex flex-row justify-center">
                {getKeyElementsRow(3)}
            </div>
        </div>
    )
}

// Keyboard Keys state
// light gray - unpressed
// dark gray - pressed & not in word
// yellow - pressed &in word
// green - pressed, in word and correct