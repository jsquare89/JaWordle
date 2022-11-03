import { nanoid } from "nanoid";
import { useJaWordleStore } from "../App";
import Cell from "./Cell";

export default function Word({ wordIndex }) {
  const store = useJaWordleStore();

  let cellElements = [];
  for (let i = 0; i < 5; i++) {
    if (store.words[wordIndex].value[i] == null) {
      cellElements.push(<Cell key={nanoid()} value="" />);
    } else {
      console.log(store.words[wordIndex].value[i]);
      cellElements.push(
        <Cell key={nanoid()} value={store.words[wordIndex].value[i]} />
      );
    }
  }

  return <div className="flex flex-row space-x-1">{cellElements}</div>;
}
