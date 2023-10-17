import "./App.css";
import { useState } from "react";
import Titles from "./components/Titles";
import Buttons from "./components/Buttons";
import Paragraphs from "./components/Paragraphs";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeurtal] = useState(0);
  const [bad, setBad] = useState(0);

  const voteGood = () => setGood(good + 1);
  const voteNeutral = () => setNeurtal(neutral + 1);
  const voteBad = () => setBad(bad + 1);

  // const [total, setTotal] = useState(0);
  // const [average, setAverage] = useState(0);
  // const [positive, setPositive] = useState(0);

  // const totalVotes = () => setTotal(totalVotes + 1);
  // const averageVotes = () => setAverage(averageVotes + 1);
  // const positiveVotes = () => setPositive(positiveVotes + 1);

  const total = good + neutral + bad;

  const Statistics = (props) => {
    if (total === 0) {
      return <p>No Feedback Given.</p>;
    }

    return (
      <div>
        <Paragraphs text="Good: " count={good} />
        <Paragraphs text="Neutral: " count={neutral} />
        <Paragraphs text="Bad: " count={bad} />

        <Paragraphs text="All: " count={total} />
        <Paragraphs text="Average: " count={(good - bad) / total} />
        <Paragraphs text="Positive: " count={`${(good / total) * 100}%`} />
      </div>
    );
  };

  return (
    <div>
      {/* <h1>give feedback</h1> */}
      {/* <button onClick={voteGood}>Good</button> */}
      {/* <button onClick={voteNeutral}>Neutral</button> */}
      {/* <button onClick={voteBad}>Bad</button> */}
      <Titles text="Give Feedback" />
      <Buttons handleClick={voteGood} text="Good" />
      <Buttons handleClick={voteNeutral} text="Neutral" />
      <Buttons handleClick={voteBad} text="Bad" />

      {/* <h2>statistics</h2> */}
      {/* <p>good: {good}</p> */}
      {/* <p>neutral: {neutral}</p> */}
      {/* <p>bad: {bad}</p> */}
      <Titles text="Statistics" />
      {/* 
      <Paragraphs text="Good: " count={good} />
      <Paragraphs text="Neutral: " count={neutral} />
      <Paragraphs text="Bad: " count={bad} />

      <Paragraphs text="All: " count={total} />
      <Paragraphs text="Average: " count={(good - bad) / total} />
      <Paragraphs text="Positive: " count={`${(good / total) * 100}%`} /> */}
      <Statistics />
    </div>
  );
}

export default App;
