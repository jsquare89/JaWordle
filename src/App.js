import React, { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import WordGrid from "./components/WordGrid";
import { keys } from "./WordData.js";
import { generateEmptyWordsData } from "./GenerateEmptyWordsData";
import { wordsList } from "./wordsList";
import MessageQueue, { useMessageQueue } from "./MessageQueue";

export const WordsContext = React.createContext();

function App() {
  const [wordList] = useState(wordsList);
  const [dailyWord] = useState("audio");
  const [words, setWords] = useState(generateEmptyWordsData()); // array of 6 words. word: {id: nonoid(), value: {{letter: "A", state: "correct | exists | nonexist | unfinished"},{...},{...},{...},{...}},}
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { addMessage, messages } = useMessageQueue();

  return (
    <div className="flex flex-col pt-6 mx-auto">
      <h1 className="text-3xl font-bold self-center">JaWordle</h1>
      <div className="relative flex flex-col space-evenly">
        <MessageQueue messages={messages} />
        <WordsContext.Provider
          value={{
            words,
            setWords,
            wordList,
            dailyWord,
            currentWordIndex,
            setCurrentWordIndex,
            addMessage,
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
