import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { TestConext } from './context';


const HookSwitcher = () => {

  const context = useContext(TestConext);
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style={{ padding: '10px', backgroundColor: color, fontSize: fontSize + 'px' }}>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('white')}>White</button>
      <button onClick={() => setFontSize(s => s + 1)}>+</button>
      <br/>
      Context value: {context.value}
      <button onClick={() => context.change(context.value + 1)}>{context.label}</button>
    </div>
  )
}

const App = () => {

  const [ contextValue, setContextValue ] = useState(10);

  return <div>
    <TestConext.Provider value={{label: 'Context Button', value: contextValue, change: setContextValue}}>
      <HookSwitcher />
    </TestConext.Provider>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

