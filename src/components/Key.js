import React from "react";

export default function Key(props){
    const value = props.obj.value
    let keyStyle = "m-0.5 py-4 rounded-lg bg-slate-300 active:bg-slate-500 font-semibold"

    if(value === "ENTER" || value === "DELETE" ){
        keyStyle += " w-20"
    }else{
        keyStyle += " w-10"
    }

    return (
            <button className={keyStyle}>{value}</button>
    )
}