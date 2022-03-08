import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // if (condition) {
  //   const [input, setInput] = useState(0) --->  musn't put useState on this, because it is run for same render order
  // }

  function initial() {
    console.log("masuk");
    return 2
  }

  const [inputObj, setInputObj] = useState({ count: 1, color: 'red' })

  const count = inputObj.count
  const color = inputObj.color

  const [input, setInput] = useState(0)
  const [inputLazy, setInputFunctionInit] = useState(() => {
    console.log("masuk");
    return 4
  }) // --> setState with lazy initial (not always render)

  function decrementDouble() {
    // setInput(input - 1)
    // setInput(input - 1) --> won't work double
    setInput((prevState) => prevState - 1)
    setInput((prevState) => prevState - 1)
  }

  function decrementPrev() {
    setInput((prevState) => prevState - 1)
  }

  function decrement() {
    setInput(input - 1)
  }

  function increment() {
    setInput(input + 1)
  }

  function decrementObj() {
    setInputObj(prevState => {
      return { ...prevState, count: prevState.count - 1 }
    })
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <button onClick={increment}>+</button>
        {input}
        <button onClick={decrementDouble}>-</button>
      </header> */}
      <header className="App-header">
        <button onClick={increment}>+</button>
        {count} - {color}
        <button onClick={decrementObj}>-</button>
      </header>
    </div>
  );
}

export default App;
