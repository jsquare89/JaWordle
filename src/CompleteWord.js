export function completeWord(store, word, addMessage) {
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
