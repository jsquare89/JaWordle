import React from 'react'
import Word from './Word'


export default function WordGrid(){
    return (
        <div className='flex flex-col space-y-1 my-6'>
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
        </div>
        
    )
}