import { useState } from "react";
import RegisteredStudentFilter from "./RegisteredStudentFilter";
import RegisteredStudentList from "./RegisteredStudentList";
import "./Registrations.css";
import RegisteredStudentChart from "./RegisteredStudentChart";

function Registrations({ registeredStudents, courses }) {
  const [filteredCourseId, setFilteredCourseId] = useState(null);

  const filteredCourse =
    courses.find((course) => course.id === filteredCourseId) ?? courses[0];

  const filterChangeHandler = (selectedCourseId) => {
    setFilteredCourseId(Number(selectedCourseId));
  };

  const filteredRegisteredStudent = filteredCourse
    ? registeredStudents.filter(
        (student) => student.courseId === filteredCourse.id,
      )
    : [];

  return (
    <div className="registrations card">
      <RegisteredStudentChart
        registeredStudents={registeredStudents}
        courses={courses}
      />

      <RegisteredStudentFilter
        selected={filteredCourse ? filteredCourse.id : ""}
        onFilterChangeHandler={filterChangeHandler}
        courses={courses}
      />
      <RegisteredStudentList
        registeredStudents={filteredRegisteredStudent}
        course={filteredCourse}
      />
    </div>
  );
}

export default Registrations;
