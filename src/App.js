
import './App.css';
import Keyboard from './components/Keyboard';
import WordGrid from './components/WordGrid';
import {nanoid} from 'nanoid'

function App() {
  const keys = [{
    id: nanoid(),
    value: "Q",
    isPressed: false,
    state: "unpressed"
  },{
    id: nanoid(),
    value: "W",
    isPressed: false
  },{
    id: nanoid(),
    value: "E",
    isPressed: false
  },{
    id: nanoid(),
    value: "T",
    isPressed: false
  },{
    id: nanoid(),
    value: "Y",
    isPressed: false
  },{
    id: nanoid(),
    value: "U",
    isPressed: false
  }]

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className='text-3xl font-bold'>JaWordle</h1>
      <WordGrid />
      <Keyboard keys={keys} />
    </div>
  );
}

export default App;
