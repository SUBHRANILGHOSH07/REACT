import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15

  const addvalue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("Value added:", counter);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };

  const removevalue = () => {
    setCounter(counter - 1);
    console.log("Value  removed:", counter);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App;
