import React from "react";

export default function Key(props){
    const value = props.obj.value
    const keyStyle = `flex-initial m-0.5 p-2 py-4 rounded-lg bg-slate-300 active:bg-slate-500 font-semibold ${(value === "ENTER" || value === "DELETE") ? " font-sm": ""}`

    
    return (
            <button className={keyStyle}>{value}</button>
    )
}