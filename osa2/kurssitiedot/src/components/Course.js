const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => {
  var summa = sum.reduce(function (total, arr) {
    return total + arr.exercises;
  }, 0);

  return (
    <div>
      <p>courses in total; {summa}</p>
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts} />
    </div>
  );
};

export default Course;
