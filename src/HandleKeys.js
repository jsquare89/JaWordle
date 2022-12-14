import { GameState, MAX_WORD_LENGTH } from "./Constants";
import { completeWord } from "./CompleteWord";

export function handleKey(key, store, addMessage) {
  if (
    store.gameState === GameState.Play &&
    store.currentWordIndex <= MAX_WORD_LENGTH
  ) {
    handleSpecificKeyPress(store, key, addMessage);
  }
}

export const handleKeyDown = (e, store, addMessage) => {
  if (store.gameState !== GameState.Play) {
    return;
  }
  if (e.key === "Enter") {
    handleSpecificKeyPress(store, "ENTER", addMessage);
  } else if (e.key === "Backspace") {
    handleSpecificKeyPress(store, "DELETE", addMessage);
  } else if (e.which >= 65 && e.which <= 90) {
    handleSpecificKeyPress(store, e.key.toUpperCase(), addMessage);
  }
};

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
  if (store.getCurrentWordString().length === MAX_WORD_LENGTH) {
    completeWord(store, addMessage);
  } else {
    addMessage("incomplete word.");
  }
}
