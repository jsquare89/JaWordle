import React, { useEffect } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import WordGrid from "./components/WordGrid";
import { keys } from "./WordData.js";
import { generateEmptyWordsData } from "./GenerateEmptyWordsData";
import { wordsList } from "./wordsList";
import MessageQueue, { useMessageQueue } from "./components/MessageQueue";
import create from "zustand";
import { handleSpecificKeyPress } from "./HandleKeys";

const LetterState = {
  Correct: "correct",
  InWord: "inword",
  Neutral: "neutral",
};

export const messageQueueContext = React.createContext();
export const useJaWordleStore = create((set) => ({
  wordsList: wordsList,
  dailyWord: "audio",
  words: generateEmptyWordsData(),
  currentWordIndex: 0,

  addKeyToCurrentWord: (key) =>
    set((state) => ({
      words: state.words.map((word, index) => {
        if (state.currentWordIndex === index) {
          word.value.push({ key: key, state: LetterState.Neutral });
          return word;
        } else {
          return word;
        }
      }),
    })),
  removeKeyFromWord: () =>
    set((state) => ({
      words: state.words.map((word, index) => {
        if (state.currentWordIndex === index) {
          word.value.pop();
          return word;
        } else {
          return word;
        }
      }),
    })),
  updateWordStateForCells: () =>
    set((state) => ({
      words: () => {},
    })),
}));

function App() {
  // array of 6 words. word: {id: nonoid(), value: {{letter: "A", state: "correct | exists | nonexist | unfinished"},{...},{...},{...},{...}},}
  const { addMessage, messages } = useMessageQueue();
  const store = useJaWordleStore();

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (e) => handleKeyDown(e, store, addMessage),
      true
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col pt-6 mx-auto">
      <h1 className="text-3xl font-bold self-center">JaWordle</h1>
      <div className="relative flex flex-col space-evenly">
        <MessageQueue messages={messages} />
        <WordGrid />
        <messageQueueContext.Provider
          value={{
            addMessage,
          }}
        >
          <Keyboard keys={keys} />
        </messageQueueContext.Provider>
      </div>
    </div>
  );
}

const handleKeyDown = (e, store, addMessage) => {
  if (e.key === "Enter") {
    handleSpecificKeyPress(store, "ENTER", addMessage);
  } else if (e.key === "Backspace") {
    handleSpecificKeyPress(store, "DELETE", addMessage);
  } else if (e.which >= 65 && e.which <= 90) {
    handleSpecificKeyPress(store, e.key.toUpperCase(), addMessage);
  }
};

export default App;
