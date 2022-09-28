import React from "react";

export default function Key(props){

    const keyStyle = "flex-initial p-4 border rounded-lg bg-slate-300 active:bg-slate-500 font-semibold"

    return (
        <div>
            <button className={keyStyle}>{props.obj.value}</button>
        </div>
    )
}