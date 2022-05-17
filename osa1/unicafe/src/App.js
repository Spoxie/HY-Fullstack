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
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [allClicks, setAll] = useState([]);
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
    </div>
  );
}

export default App;
