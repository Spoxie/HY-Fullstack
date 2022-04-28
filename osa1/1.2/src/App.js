const Header = (props) => {
  return <p>Kurssin nimi on {props.course}</p>;
};
const Part = (props) => {
  console.log(props.part);
  return (
    <div>
      <h1>{props.index}</h1>
      <h1>Kurssin sisältö {props.part}</h1>
      <p>kurssin tehtävien määrä {props.excercise}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[1]} excercise={props.excercise[1]} />
      <Part part={props.part[2]} excercise={props.excercise[2]} />
      <Part part={props.part[3]} excercise={props.excercise[3]} />
    </div>
  );
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
