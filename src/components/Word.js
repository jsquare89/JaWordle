import { nanoid } from 'nanoid';
import React, {useContext} from 'react' 
import { WordsContext } from '../App';
import Cell from "./Cell";

export default function Word(){
    const wordIndex = 0
    const {words} = useContext(WordsContext)

    let cellElements = []
    for(let i = 0; i < 5; i++){
        if(words[wordIndex].value[i] == null){
            cellElements.push(<Cell key={nanoid()} value="X" />)
        }else{
            cellElements.push(<Cell key={nanoid()} value={words[wordIndex].value[i].letter} />)
        }
    }

    return (
        <div className='flex flex-row space-x-1'>
            {cellElements}
        </div>
    )
}