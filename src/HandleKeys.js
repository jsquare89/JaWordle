import { MAX_WORD_LENGTH } from "./Constants";
import { completeWord } from "./CompleteWord";

export function handleSpecificKeyPress(store, key, addMessage) {
  const currentWordLength = store.words[store.currentWordIndex].value.length;
  if (key === "ENTER") {
    handleEnterKeyPress(store, addMessage);
  } else if (key === "DELETE") {
    store.removeKeyFromWord();
  } else if (currentWordLength < MAX_WORD_LENGTH) {
    store.addKeyToCurrentWord(key);
  }
}

export function handleEnterKeyPress(store, addMessage) {
  const currentWordLength = store.words[store.currentWordIndex].value.length;
  const currentWord = store.words[store.currentWordIndex].value
    .join("")
    .toLowerCase();
  if (currentWordLength === MAX_WORD_LENGTH) {
    completeWord(store, currentWord, addMessage);
  } else {
    addMessage("incomplete word.");
  }
}
