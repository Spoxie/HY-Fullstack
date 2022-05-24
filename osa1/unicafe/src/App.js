import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handler}>{props.text}</button>;
};

const Statistics = (props) => {
  const numbers = props.allClicks.reduce(
    (total, currentvalue) => (total = total + currentvalue),
    0
  );
  const average = numbers / props.allClicks.length;
  const percentage = props.good / (props.neutral + props.bad);

  return (
    <div>
      <StatisticsLine
        text="total"
        value={props.good + props.bad + props.neutral}
      />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="percentage" value={percentage * 100} />
    </div>
  );
};

const StatisticsLine = (props) => {
  console.log(props);
  if (props === 0) {
    return (
      <div>
        <p>no data</p>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </table>
      </div>
    );
  }
};

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

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [selected, setSelected] = useState(0);
  console.log(allClicks.length);

  const handleGood = () => {
    setGood(good + 1);
    setAll(allClicks.concat(1));
  };

  const handleBad = () => {
    setBad(bad + 1);
    setAll(allClicks.concat(-1));
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(allClicks.concat(0));
  };

  const propobject = {
    good: good,
    bad: bad,
    neutral: neutral,
    allClicks: allClicks,
  };

  return (
    <div>
      <h1>Give feedback pls</h1>

      <Button text="good" handler={handleGood} />
      <Button text="bad" handler={handleBad} />
      <Button text="neutral" handler={handleNeutral} />
      <h1>Stats</h1>
      {allClicks.length === 0 && (
        <div>
          <h1>no stats</h1>
        </div>
      )}

      {allClicks.length > 0 && (
        <div>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="neutral" value={neutral} />
          <Statistics {...propobject} />
        </div>
      )}
      <h1>ANECDOTES</h1>

      <div>{anecdotes[selected]}</div>
    </div>
  );
}

export default App;
