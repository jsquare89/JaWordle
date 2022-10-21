import React, { useState, useEffect } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import WordGrid from "./components/WordGrid";
import { keys } from "./WordData.js";
import { generateEmptyWordsData } from "./GenerateEmptyWordsData";
import { wordsList } from "./wordsList";
import Notification from "./components/Notification";

export const WordsContext = React.createContext();

function App() {
  const [wordList, setWordList] = useState(wordsList);
  const [dailyWord, setDailyWord] = useState("audio");
  const [words, setWords] = useState(generateEmptyWordsData()); // array of 6 words. word: {id: nonoid(), value: {{letter: "A", state: "correct | exists | nonexist | unfinished"},{...},{...},{...},{...}},}
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(null);

  console.log(wordList);
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col pt-6 mx-auto">
      <h1 className="text-3xl font-bold self-center">JaWordle</h1>
      <div className="flex flex-col space-evenly">
        {showNotification && (
          <Notification
            key={showNotification.id}
            message={showNotification.message}
          />
        )}
        <WordsContext.Provider
          value={{
            words,
            setWords,
            wordList,
            dailyWord,
            currentWordIndex,
            setCurrentWordIndex,
            setShowNotification,
          }}
        >
          <WordGrid />
          <Keyboard keys={keys} />
        </WordsContext.Provider>
      </div>
    </div>
  );
}

export default App;
