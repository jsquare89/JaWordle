import React from "react";
import Key from "./Key";

export default function Keyboard(props){
    
    const keyElements = props.keys.map(key =>
        <Key key={key.id} obj={key}/>
    )

    function getKeyElementsRow(row)
    {
        if(row === 1){
            return keyElements.slice(0,10)
        }else if(row === 2){
            return keyElements.slice(10,19)
        }else{
            return keyElements.slice(19,28)
        }
    }

    return (
        <div className="flex flex-col mx-2 align-middle my-auto">
            <div className="flex flex-row justify-center my-0.5">
                <div className=""></div>
                {getKeyElementsRow(1)}
                <div className=""></div>
            </div>
            <div className="flex flex-row justify-center my-0.5">
                <div className="w-5 mr-0.5"></div>
                {getKeyElementsRow(2)}
                <div className="w-5 ml-0.5"></div>
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