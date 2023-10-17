import { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "Anger is the ultimate destroyer of your own peace of mind. -Dalai Lama",
    "To love your neighbor as yourself, after all, is the great injunction of every religion. -Marc Ian Barasch",
    "When we have respect for ourselves and others, we gravitate towards connections that encourage that. -Simeon Lindstrom",
    "Don’t be afraid. Be focused. Be determined. Be hopeful. Be empowered. -Michelle Obama",
    "The true wealth of a nation lies not in it’s gold or silver but in it’s learning, wisdom and in the uprightness of its sons. -Kahlil Gibran",
    "If you want to see a rainbow you have to learn to see the rain. -Paulo Coelho",
    "Reading without reflecting is like eating without digesting. - Edmund Burke",
  ];

  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const handleVote = () => {
    points[selected] = points[selected] + 1;
    setMostVoted(findAnecdoteWithMostVotes());
  };

  const handleNextAnecdote = () =>
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));

  const findAnecdoteWithMostVotes = () => {
    const pointsArr = Object.values(points);
    const anecdotewithMostVotes = pointsArr.findIndex(
      (point) => point === Math.max(...pointsArr)
    );

    return anecdotewithMostVotes;
  };

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      <h1>Anecdote with the most votes:</h1>
      {anecdotes[mostVoted]}
    </div>
  );
}

export default App;
