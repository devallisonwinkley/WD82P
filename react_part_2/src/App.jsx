import "./App.css";
import { useState } from "react";

// what ever code you put inside the curly brace is automatically  a javascript
// In react, all states are constant

function App() {
  // const a = 10;
  // const b = 20;
  // const result = a + b;

  // useState tells react that this variable is reactive
  // Array de-structuring

  // this is how you create a variable in react
  const [count, setCount] = useState(0);

  // const increaseButton = document.querySelector("button");
  // const h1 = document.querySelector("h1");

  // function increaseCount() {
  //   count++;
  //   h1.textContent - countt;
  // }

  // increaseButton.addEventListener("click", increaseCount);

  function increaseCount() {
    // count++;
    // console.log(count);

    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default App;
