const Header = ({ title }) => <h2>{title}</h2>;

const Content = ({ parts }) => (
  <div>
    {parts.map((exercisesByPart) => (
      <Part
        key={exercisesByPart.id}
        part={exercisesByPart.name}
        numberOfExercises={exercisesByPart.exercises}
      />
    ))}
  </div>
);

const Total = ({ parts }) => {
  const initialValue = 0;
  const sumOfExercises = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  return (
    <b>
      <p>total of exercises {sumOfExercises}</p>
    </b>
  );
};

const Part = ({ part, numberOfExercises }) => (
  <p>
    {part} {numberOfExercises}
  </p>
);

const Chapter = ({ chapter }) => (
  <div>
    <Header title={chapter.name} />
    <Content parts={chapter.parts} />
    <Total parts={chapter.parts} />
  </div>
);

const CourseChapter = ({ courses }) => (
  <div>
    {courses.map((chapter) => (
      <Chapter key={chapter.id} chapter={chapter} />
    ))}
  </div>
);

const Course = ({ courses }) => <CourseChapter courses={courses} />;

export default Course;
