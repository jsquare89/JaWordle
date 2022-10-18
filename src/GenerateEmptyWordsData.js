import { nanoid } from "nanoid";

export function generateEmptyWordsData() {
  let emptyWordsData = [];
  for (let i = 0; i < 6; i++) {
    emptyWordsData.push({
      id: nanoid(),
      value: [],
    });
  }
  return emptyWordsData;
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
