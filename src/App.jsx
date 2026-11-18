import { useState } from "react";
import { useEffect } from "react";
import { createStudent, getAllCourses, getAllStudents } from "./services/api";
import { normalizeCourseName, normalizeCourseDate } from "./utils/utils";
import { normalizeStudentFullName } from "./utils/utils";
import NewStudent from "./components/newStudent/NewStudent";
import Registrations from "./components/studentsRegistration/Registrations";

function App() {
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    getAllCourses().then((res) => {
      const courses = res.data.map((course) => {
        return {
          ...course,
          displayName: normalizeCourseName(course.name),
          startDate: normalizeCourseDate(course.startDate),
        };
      });

      getAllStudents().then((res) => {
        const students = res.data.map((student) => {
          return {
            ...student,
            studentName: normalizeStudentFullName(
              student.firstName,
              student.lastName,
            ),
          };
        });
        setAvailableCourses(courses);
        setRegisteredStudents(students);
      });
    });
  }, []);

  const addStudentHandler = (student) => {
    const splitedStudentName = student.studentName.split(" ");
    const studentToCreate = {
      firstName: splitedStudentName[0],
      lastName: splitedStudentName[1],
      courseId: student.courseId,
    };

    createStudent(studentToCreate).then((res) => {
      getAllStudents().then((res) => {
        const students = res.data.map((student) => {
          return {
            ...student,
            studentName: normalizeStudentFullName(
              student.firstName,
              student.lastName,
            ),
          };
        });
        setRegisteredStudents(students);
      });
    });
  };

  return (
    <div>
      {availableCourses.length === 0 ? (
        "Loading..."
      ) : (
        <>
          <NewStudent
            onAddStudentHandler={addStudentHandler}
            courses={availableCourses}
          />
          <Registrations
            registeredStudents={registeredStudents}
            courses={availableCourses}
          />
        </>
      )}
    </div>
  );
}

export default App;
