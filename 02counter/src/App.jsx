import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(10);

  // let counter = 5;

  const addValue = () => {
    console.log('value added', counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    console.log('value added', counter);

    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // const addValue = () => {
  //   console.log('value added', counter);
  //   counter++;
  // };

  return (
    <>
      <h1>React Js</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
