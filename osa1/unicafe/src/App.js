import { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handler}>{props.text}</button>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [allClicks, setAll] = useState([]);
  console.log(allClicks.length);
  const numbers = allClicks.reduce(
    (total, currentvalue) => (total = total + currentvalue),
    0
  );
  const average = numbers / allClicks.length;

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

  return (
    <div>
      <h1>Give feedback pls</h1>
      <Button text="good" handler={handleGood} />
      <Button text="bad" handler={handleBad} />
      <Button text="neutral" handler={handleNeutral} />
      <h1>Stats</h1>
      <p>good {good}</p>
      <p>bad {bad}</p>
      <p>neutral {neutral}</p>
      <p>{good + bad + neutral}</p>
      <p>{average}</p>
    </div>
  );
}

export default App;
