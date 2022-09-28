
import './App.css';
import Keyboard from './components/Keyboard';
import WordGrid from './components/WordGrid';
import {keys} from './WordData.js'

function App() {

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className='text-3xl font-bold'>JaWordle</h1>
      <WordGrid />
      <Keyboard keys={keys} />
    </div>
  );
}

export default App;
