import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import GenerateCards from './generateCards';

function App() {

  const [count, setCount] = useState(0)
  const [best, setBest] = useState(0)

  return (
    <div className="App">
      <p className='title'>Memory game</p>
      <p className='count'>Score: {count}</p>
      <p className='best'>Best score: {best}</p>
      <div className='cards'>
        <GenerateCards/>
      </div>
    </div>
  );
}

export default App;
