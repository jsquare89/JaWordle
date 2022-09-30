
import React, { useState } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import WordGrid from './components/WordGrid';
import {keys} from './WordData.js';
import { generateEmptyWordsData } from './GenerateEmptyWordsData';

export const WordsContext = React.createContext()

function App() {

  const [dailyWord, setDailyWord]= useState("audio")
  const [words, setWords] = useState(generateEmptyWordsData()) // array of 6 words. word: {id: nonoid(), value: {{letter: "A", state: "correct | exists | nonexist | unfinished"},{...},{...},{...},{...}},}
  const [currentWord, setCurrentWord] = useState(0)

  


  return (
    <div className="flex flex-col pt-6 mx-auto">
      <h1 className='text-3xl font-bold self-center'>JaWordle</h1>
      <div className='flex flex-col space-evenly'>
        <WordsContext.Provider value={{words, setWords}}>
          <WordGrid />
          <Keyboard keys={keys} />
        </WordsContext.Provider>
        
      </div>
    </div>
  );
}

export default App;
