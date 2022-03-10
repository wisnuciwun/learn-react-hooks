import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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

  const [result, setResult] = useState('Users')
  const [item, setItem] = useState([])
  const [windowWidth, setWindow] = useState(window.innerWidth)

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${result}`)
    //   .then(response => response.json())
    //   .then(result => setItem(result))

  }, [result])

  const handleResize = () => {
    setWindow(window.innerWidth)
  } // --> its not gonna work if you place setWindow directly in useEffect without array function

  useEffect(() => {
    // window.addEventListener('resize', setWindow(window.innerWidth)) --> its not work
    // window.addEventListener('resize', () => setWindow(window.innerWidth)) -- its work
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    } // --> unmount method
  }, [])

  return (
    <div className="App">
      USE STATE TESTING
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
      USE EFFECT TESTING
      <header className="App-header">
        {/* <button onClick={() => setResult('Users')} >Users</button>
        <button onClick={() => setResult('Comments')} >Comments</button>
        <button onClick={() => setResult('Posts')} >Posts</button>
        <p>{result}</p>
        {item.map(val => {
          return <pre>{JSON.stringify(val)}</pre>
        })} */}
        {windowWidth}
      </header>
    </div>
  );
}

export default App;
