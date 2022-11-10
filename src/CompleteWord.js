import { GameState } from "./Constants";

export function completeWord(store, addMessage) {
  if (store.getCurrentWordString() === store.dailyWord) {
    console.log(
      "correct word: ",
      store.getCurrentWordString(),
      store.dailyWord
    );
    console.log("store.words: ", store.words);
    //TODO: handleCorrectWord
    // TODO: update letter colors,
    //store.updateWordStateForCells();
    addMessage("hurray! handle endgame!");
    store.gameState = GameState.Win;
    // TODO: show win endgame
    return;
  }
  // Check the word against list, if in list mark word complete, increment word index and move onto next row. -handleIncorrectWord
  if (store.wordsList.some((w) => w === store.getCurrentWordString())) {
    // TODO: update letter colors
    store.updateWordStateForCells();
    store.currentWordIndex = store.currentWordIndex + 1;
    return;
  }
  // TODO: notify user that is not a word - handleNotAWord
  addMessage("That is not a word. Try again");
  console.log(store.wordsList);
}
