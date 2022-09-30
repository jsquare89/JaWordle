import React from "react";

export default function Key(props){
    let value = props.obj.value
    let keyStyle = "mx-0.5 py-4 rounded bg-slate-300 active:bg-slate-500 font-semibold text-sm select-none"
    if(value === "ENTER"){
        keyStyle += " w-16 text-xs ml-0"
    }else if(value === "DELETE" ){
        keyStyle += " w-16 text-xs mr-0"
    }else{
        keyStyle += " w-10"
    }

    return (
            <button className={keyStyle}>{value}</button>
    )
}