import React from 'react'
import Word from './Word'


export default function WordGrid(){



    return (
        <div className='flex flex-col space-y-1 my-6 mx-2 items-center'>
            <Word wordIndex={1} />
            <Word wordIndex={2} />
            <Word wordIndex={3} />
            <Word wordIndex={4} />
            <Word wordIndex={5} />
            <Word wordIndex={6} />
        </div>
        
    )
}