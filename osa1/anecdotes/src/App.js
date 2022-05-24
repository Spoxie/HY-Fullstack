import "./App.css";

import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  const [top, setTop] = useState(selected);
  const handleClick = () => {
    var random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };
  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);

    if (copy[selected] > copy[top]) {
      setTop(selected);
    }
  };

  return (
    <div className="App">
      <div>{anecdotes[selected]}</div>
      <button onClick={handleClick}>Next anecdote!</button>
      <button onClick={handleVote}>Vote for this anectode</button>
      <p>This anecdote has {points[selected]} points</p>
      <br />
      <h1>This anecdote has most votes with a whopping {points[top]} votes!</h1>
      <p>{anecdotes[top]}</p>
    </div>
  );
}

export default App;
