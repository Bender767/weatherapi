import { useState } from 'react';

import { Call } from './components/Call.jsx';
import { Input } from './components/Input.jsx';
import { Displayer } from './components/Displayer.jsx';

import './App.css';



function App() {

const [data, setData] = useState({})
const [coords, setCoords] = useState(["",""])

  return (
    <div className="App">
      <Call payload={[data, setData]} coords={[coords, setCoords]}/>
      {data.main && (
        <Displayer payload={[data, setData]} coords={[coords, setCoords]}/>
      )}
    </div>
  );
}

export default App;
