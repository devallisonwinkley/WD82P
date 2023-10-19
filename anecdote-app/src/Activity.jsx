import { useState } from "react";

function Activity(props) {
  const [courses, setCourses] = useState(props.courses);

  // const courseList = courses.map((course) => <li>{course}</li>);

  const totalExercisesOne = useState(0);
  const totalExercisesTwo = useState(0);

  return (
    <div>
      <h1>ACTIVITY</h1>

      <h2>Web Development Curriculum</h2>

      <h3>Half Stack Application Development</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.parts}>{course.name}</li>
        ))}
      </ul>

      {/* {courses?.map((course) => {
        console.log(item);
      })} */}

      {/* <h4>{courses.map((course) => ({ course }))}</h4> */}

      {/* <ul> {courseList} </ul> */}
      {/* <h5>total of {totalExercisesOne} exercises</h5> */}

      <h3>Node.JS</h3>
      {/* <ul>
        {courses?.map((course) => (
          <li key={course[1]}>{course.content}</li>
        ))}
      </ul>
      <h5>total of {totalExercisesTwo} exercises</h5> */}
    </div>
  );
}

export default Activity;
