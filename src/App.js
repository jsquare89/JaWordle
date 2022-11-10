import React, { useEffect } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import WordGrid from "./components/WordGrid";
import { keys } from "./WordData.js";
import MessageQueue, { useMessageQueue } from "./components/MessageQueue";
import { handleKeyDown } from "./HandleKeys";
import { useJaWordleStore } from "./hooks/useJaWordleStore";

export const messageQueueContext = React.createContext();

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

export default App;
