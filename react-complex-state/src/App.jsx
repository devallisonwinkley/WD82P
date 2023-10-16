import { useState } from "react";
import "./App.css";
import History from "./components/history";
import Display from "./components/display";
import Button from "./components/button";

function App() {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  // Event Handlers Logic
  const handleLeftClick = () => {
    const newClicks = { ...clicks, left: clicks.left + 1 }; // "..." copy all the state from this object | this is a SPREAD OPERATOR

    setClicks(newClicks);
    setAllClicks(allClicks.concat("L")); // We don't use push in react, only concat
    setTotal(newClicks.left + newClicks.right);
  };

  const handleRightClick = () => {
    const newClicks = { ...clicks, right: clicks.right + 1 };

    setClicks(newClicks);
    setAllClicks(allClicks.concat("R"));
    setTotal(newClicks.left + newClicks.right);
  };

  // What we're doing here is rendering - we are rendering this on the screen/display
  return (
    <div>
      <Display value={clicks.left} />
      {/* <p>{clicks.left}</p> */}
      {/* <button onClick={() => setLeft(left + 1)}>Left</button> */}
      {/* <button onClick={handleLeftClick}>Left</button> */}
      <Button onClick={handleLeftClick} text="Left Button" />
      {/* <p>{clicks.right}</p> */}
      <Display value={clicks.right} />
      {/* <button onClick={() => setRight(right + 1)}>Right</button> */}
      {/* <button onClick={handleRightClick}>Right</button> */}
      <Button onClick={handleRightClick} text="Right Button" />
      <p>{allClicks.join(" ")}</p>
      <History allClicks={allClicks} />
      <Display value={total} />
      {/* <p>Total: {total}</p> */}
    </div>
  );
}

export default App;
