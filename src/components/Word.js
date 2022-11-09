import { nanoid } from "nanoid";
import { useJaWordleStore } from "../App";
import Cell from "./Cell";

export default function Word({ wordIndex }) {
  const store = useJaWordleStore();

  let cellElements = [];
  for (let i = 0; i < 5; i++) {
    const wordKey = store.words[wordIndex].value[i];
    if (wordKey == null) {
      cellElements.push(<Cell key={nanoid()} value="" />);
    } else {
      console.log(wordKey);
      cellElements.push(<Cell key={nanoid()} value={wordKey} />);
    }
  }

  return <div className="flex flex-row space-x-1">{cellElements}</div>;
}
