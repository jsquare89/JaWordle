import React from "react";
import Cell from "./Cell";

export default function Word(){

    return (
        <div className='flex inline-flex space-x-1 font-bold text-2xl'>
            <Cell value="A"/>
            <Cell value="U"/>
            <Cell value="D"/>
            <Cell value="I"/>
            <Cell value="O"/>
        </div>
    )
}