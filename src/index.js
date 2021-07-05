import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const HookSwitcher = () => {

  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style={{ padding: '10px', backgroundColor: color, fontSize: fontSize + 'px' }}>
      Some Text
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('white')}>White</button>
      <button onClick={() => setFontSize(s => s + 1)}>+</button>
    </div>
  )
}

const App = () => {
  return <div>
    <HookSwitcher/>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

