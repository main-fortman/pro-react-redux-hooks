import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TestConext } from './context';


const HookSwitcher = () => {

  const context = useContext(TestConext);
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);
  const [showContext, setShowContext] = useState(true);

  return (
    <div style={{ padding: '10px', backgroundColor: color, fontSize: fontSize + 'px' }}>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('white')}>White</button>
      <button onClick={() => setFontSize(s => s + 1)}>+</button>
      <br/>
      <br/>
      <br/>
      <button
        onClick={() => setShowContext(state => !state)}>
        {showContext ? 'Hide' : 'Show '} Context
      </button>
      <br/>
      <br />
      {
        showContext && 
        <div>
          Context value:
          <HookCounter value={context.value} />
          <button onClick={() => context.change(context.value + 1)}>{context.label}</button>
        </div>
      }
      <br/>
      <Notification/>
    </div>
  )
}

const HookCounter = ({ value }) => {
  
  useEffect(() => {
    console.log('HookCounter mounted');
    return () => console.log('HookCounter unmounted');
  }, []);
  
  useEffect(() => {
    console.log('HookCounter updated');
  });

  return <p>{value}</p>
}

const Notification = () => {

  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 1500);
  }, []);
  return show ? <div>Hello!</div> : null;
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

