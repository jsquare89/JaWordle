import React from "react";
import Cell from "./Cell";

export default function Word(){

    return (
        <div className='flex flex-row space-x-1'>
            <Cell value="A"/>
            <Cell value="U"/>
            <Cell value="D"/>
            <Cell value="I"/>
            <Cell value="O"/>
        </div>
    )
}