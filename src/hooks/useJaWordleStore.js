import create from "zustand";
import { wordsList } from "../wordsList";
import { generateEmptyWordsData } from "../GenerateEmptyWordsData";
import { LetterState, GameState } from "../Constants";

export const useJaWordleStore = create((set, get) => ({
  wordsList: wordsList,
  dailyWord: "audio",
  words: generateEmptyWordsData(),
  currentWordIndex: 0,
  gameState: GameState.Play,

  getCurrentWordString: () => {
    let currentWord = get().words[get().currentWordIndex].value.map((v) =>
      v.key.toLowerCase()
    );
    currentWord = currentWord.join("");
    return currentWord;
  },

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
      words: state.words.map((word, index) => {
        if (state.currentWordIndex === index) {
          word.value.map((v) => {
            return v;
          });
          return word;
        } else {
          return word;
        }
      }),
    })),
}));
