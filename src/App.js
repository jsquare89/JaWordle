
import './App.css';
import Keyboard from './components/Keyboard';
import WordGrid from './components/WordGrid';
import {keys} from './WordData.js'

function App() {

  return (
    <div className="flex flex-col py-6 mx-auto">
      <h1 className='text-3xl font-bold self-center'>JaWordle</h1>
      <WordGrid />
      <Keyboard keys={keys} />
    </div>
  );
}

export default App;
