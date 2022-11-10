import create from "zustand";
import { wordsList } from "../wordsList";
import { generateEmptyWordsData } from "../GenerateEmptyWordsData";
import { LetterState } from "../Constants";

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
