import React, { useContext } from "react";
import { WordsContext, useJaWordleStore } from "../App";

export default function Key(props) {
  const store = useJaWordleStore();
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

  const {
    words,
    setWords,
    dailyWord,
    wordList,
    currentWordIndex,
    setCurrentWordIndex,
    addMessage,
  } = useContext(WordsContext);

  function handleKey(key) {
    if (store.currentWordIndex <= 5) {
      if (key === "ENTER") {
        if (words[currentWordIndex].value.length === 5) {
          completeWord(
            words[currentWordIndex].value.join("").toLowerCase(),
            dailyWord,
            wordList,
            setCurrentWordIndex,
            addMessage
          );
        } else {
          addMessage("incomplete word.");
          console.log("incomplete word, handle shake animation, notify user");
        }
      } else if (key === "DELETE") {
        removeKeyFromWord(currentWordIndex, setWords);
      } else if (store.words[store.currentWordIndex].value.length < 5) {
        // addKeyToWord(store.currentWordIndex, key, store.words, setWords);
        //addKeyToWordStore(store, key);
        store.addKeyToCurrentWord(key);
      }
    }
  }

  return (
    <button className={keyStyle} onClick={(e) => handleKey(e.target.innerHTML)}>
      {value}
    </button>
  );
}

function completeWord(
  word,
  dailyWord,
  wordList,
  setWords,
  setCurrentWordIndex,
  addMessage
) {
  if (word === dailyWord) {
    //TODO: handleCorrectWord
    // TODO: update letter colors,
    updateWordStatesForCells();
    addMessage("hurray! handle endgame!");
    // TODO: show win endgame
    return;
  }
  // Check the word against list, if in list mark word complete, increment word index and move onto next row. -handleIncorrectWord
  if (wordList.some((w) => w === word)) {
    // TODO: update letter colors
    updateWordStatesForCells();
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
    return;
  }
  // TODO: notify user that is not a word - handleNotAWord
  addMessage("That is not a word. Try again");
  console.log(wordList);
}

function updateWordStatesForCells(word, setWords) {
  setWords((prevWords) =>
    prevWords.map((w) => {
      if (w === word) return {};
    })
  );
}

function removeKeyFromWord(currentWordIndex, setWords) {
  setWords((prevWords) =>
    prevWords.map((word, index) => {
      if (currentWordIndex === index) {
        word.value.pop();
        return word;
      } else {
        return word;
      }
    })
  );
}

function addKeyToWord(currentWordIndex, key, words, setWords) {
  if (words[currentWordIndex].value.length < 5) {
    setWords((prevWords) =>
      prevWords.map((word, index) => {
        if (currentWordIndex === index) {
          word.value.push(key);
          return word;
        } else {
          return word;
        }
      })
    );
  }
}

function addKeyToWordStore(store, key) {
  if (store.words[store.currentWordIndex].value.length < 5) {
    store.words = store.words.map((word, index) => {
      if (store.currentWordIndex === index) {
        word.value.push(key);
        return word;
      } else {
        return word;
      }
    });
  }
}
