import React from "react";
import Key from "./Key";

export default function Keyboard(props){
    
    const keyElements = props.keys.map(key =>
        <Key key={key.id} obj={key}/>
    )

    console.log(keyElements)

    return (
        <div className="flex">
            {keyElements}
        </div>
    )
}

// Keyboard Keys state
// light gray - unpressed
// dark gray - pressed & not in word
// yellow - pressed &in word
// green - pressed, in word and correct