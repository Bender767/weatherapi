import { useState } from 'react';

import { Call } from './components/Call.jsx';
import { Input } from './components/Input.jsx';
import { Displayer } from './components/Displayer.jsx';

import './App.css';



function App() {

const [data, setData] = useState({})

  return (
    <div className="App">
      <Call payload={[data, setData]}/>
      <Displayer payload={[data, setData]}/>
    </div>
  );
}

export default App;
