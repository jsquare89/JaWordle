import React, { useContext } from "react";
import { WordsContext } from "../App";

export default function Key(props) {
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

  const { words, setWords } = useContext(WordsContext);
  const currentWordIndex = 0;

  function handleKey(key) {
    // if(value === 'ENTER'){
    //     setWords(prevWords => prevWords.map(word => {
    //         return {
    //             ...word,
    //         }
    //     }))
    // }
    // if key is enter
    //      if temp word has 5 letters
    //          if temp word is in word list
    //              update word letters state
    //              if temp word == daily word, update word state

    //      else display not enough letters
    //      return
    // if key is delete
    //      if temp word > 0
    //         pop/remove last word off array
    //      return
    //
    // if there is space in the word (<5 letters)
    //      update temp word, push letter to array
    //

    // if(words[currentWordIndex].value.length < 5){
    //     setWords(prevWords => prevWords.map( () => {
    //         return {
    //             ...prevWords,
    //             ...prevWords[currentWordIndex] }
    //         }
    //     }))
    // }

    if (key === "ENTER") {
      if (words[currentWordIndex].value.length === 5) {
        completeWord();
      } else {
        console.log("incomplete word, handle shake animation, notify user");
      }
    } else if (key === "DELETE") {
      removeKeyFromWord(currentWordIndex, setWords);
    } else {
      addKeyToWord(currentWordIndex, key, words, setWords);
    }
    console.log("words", words);
  }

  return (
    <button className={keyStyle} onClick={(e) => handleKey(e.target.innerHTML)}>
      {value}
    </button>
  );
}

function completeWord() {
  console.log("Complete Word TODO");
}

function removeKeyFromWord(currentWordIndex, setWords) {
  setWords((prevWords) =>
    prevWords.map((word, index) => {
      if (currentWordIndex === index) {
        word.value.pop();
        console.log("new word: ", word);
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
