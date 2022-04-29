const Header = (props) => {
  return <p>Kurssin nimi on {props.course}</p>;
};
const Part = (props) => {
  return (
    <div>
      <h1>
        {props.part} ja {props.excercise}
      </h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.part.map((i) => (
        <Part part={i.name} excercise={i.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const yhteenlasku = props.excercise.map((i) => i.exercises);
  return (
    <p>yhteensä tehtäviä on {yhteenlasku.reduce((sum, a) => sum + a, 0)}</p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  console.log(course.parts);
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total excercise={course.parts} />
    </div>
  );
};

export default App;
