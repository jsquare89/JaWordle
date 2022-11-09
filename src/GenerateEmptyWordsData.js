import { nanoid } from "nanoid";

export function generateEmptyWordsData() {
  let emptyWordsData = [];
  for (let i = 0; i < 6; i++) {
    emptyWordsData.push({
      id: nanoid(),
      value: [],
      state: "", // state correct(green), inword(yellow), wrong(gray)
    });
  }
  return emptyWordsData;
}

function generateEmptyLetters() {
  const letters = [];
  for (let i = 0; i < 5; i++) {
    letters.push({ key: "", state: "neutral" });
  }
  return letters;
}
// export function generateEmptyWordsData(){
//     let emptyWordsData = []
//     for(let i=0; i<6; i++){
//       emptyWordsData.push({
//         id: nanoid(),
//         value: (() => {
//           let values = []
//           for(let l = 0; l < 5; l++){
//             values.push({
//               letter: "",
//               state: "unfinished"
//             })
//           }
//           return values
//         })()})
//     }
//     console.log (emptyWordsData)
//     return emptyWordsData;
//   }
