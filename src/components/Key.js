import React, { useContext } from "react";
import { messageQueueContext, useJaWordleStore } from "../App";

const MAX_WORD_LENGTH = 5;
export default function Key(props) {
  const store = useJaWordleStore();
  const { addMessage } = useContext(messageQueueContext);
  const currentWordLength = store.words[store.currentWordIndex].value.length;

  let value = props.obj.value;
  let keyStyle =
    "mx-0.5 py-4 rounded bg-slate-300 active:bg-slate-500 font-semibold text-sm select-none";
  if (value === "ENTER") {
    keyStyle += " w-16 text-xs ml-0";
  } else if (value === "DELETE") {
    keyStyle += " w-16 text-xs mr-0";
  } else {
    keyStyle += " w-10";
  }

  function handleKey(key) {
    console.log(store);
    if (store.currentWordIndex <= MAX_WORD_LENGTH) {
      handleSpecificKeyPress(key);
    }
  }

  function handleSpecificKeyPress(key) {
    if (key === "ENTER") {
      handleEnterKeyPress();
    } else if (key === "DELETE") {
      store.removeKeyFromWord();
    } else if (currentWordLength < MAX_WORD_LENGTH) {
      store.addKeyToCurrentWord(key);
    }
  }

  function handleEnterKeyPress() {
    const currentWord = store.words[store.currentWordIndex].value
      .join("")
      .toLowerCase();
    if (currentWordLength === MAX_WORD_LENGTH) {
      completeWord(store, currentWord, addMessage);
    } else {
      addMessage("incomplete word.");
    }
  }

  return (
    <button className={keyStyle} onClick={(e) => handleKey(e.target.innerHTML)}>
      {value}
    </button>
  );
}

function completeWord(store, word, addMessage) {
  if (word === store.dailyWord) {
    //TODO: handleCorrectWord
    // TODO: update letter colors,
    store.updateWordStateForCells();
    addMessage("hurray! handle endgame!");
    // TODO: show win endgame
    return;
  }
  // Check the word against list, if in list mark word complete, increment word index and move onto next row. -handleIncorrectWord
  if (store.wordsList.some((w) => w === word)) {
    // TODO: update letter colors
    store.updateWordStateForCells();
    store.currentWordIndex = store.currentWordIndex + 1;
    return;
  }
  // TODO: notify user that is not a word - handleNotAWord
  addMessage("That is not a word. Try again");
  console.log(store.wordsList);
}
