const Header = (props) => {
  return <p>Kurssin nimi on {props.course}</p>;
};
const Content = (props) => {
  return (
    <div>
      {props.part.map((part, i, arr) => (
        <div>
          <h1>Kurssin sisältö {props.part[i]}</h1>
          <p>kurssin tehtävien määrä {props.excercise[i]}</p>
        </div>
      ))}
    </div>
  );
  //<p>kurssin tehtävien määrä {props.excercise[i]}</p>
};
const Total = (props) => {
  return (
    <p>yhteensä tehtäviä on {props.excercise.reduce((sum, a) => sum + a, 0)}</p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        part={[part1, part2, part3]}
        excercise={[exercises1, exercises2, exercises3]}
      />
      <Total excercise={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
