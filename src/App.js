
import './App.css';
import Keyboard from './components/Keyboard';
import WordGrid from './components/WordGrid';
import {keys} from './WordData.js'

function App() {

  return (
    <div className="flex flex-col pt-6 mx-auto">
      <h1 className='text-3xl font-bold self-center'>JaWordle</h1>
      <div className='flex flex-col space-evenly'>
        <WordGrid />
        <Keyboard keys={keys} />
      </div>
    </div>
  );
}

export default App;
