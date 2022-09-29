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
            return keyElements.slice(10,18)
        }else{
            return keyElements.slice(19,28)
        }

    }

    return (
        <div className="flex flex-col mx-2 align-middle my-auto">
            <div className="flex flex-row justify-center my-0.5">
                <div className="w-3 mr-0.5"></div>
                {getKeyElementsRow(1)}
                <div className="w-3 ml-0.5"></div>
            </div>
            <div className="flex flex-row justify-center my-0.5">
                <div className="w-9"></div>
                {getKeyElementsRow(2)}
                <div className="w-9"></div>
            </div>
            <div className="flex flex-row justify-center my-0.5">
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