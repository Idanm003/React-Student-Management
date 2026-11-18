import CourseDate from "./CourseDate";
import "./RegisteredStudent.css";

function RegisteredStudent({ course, registeredStudent }) {
  return (
    <div className="registration-student card">
      <CourseDate date={course.startDate} />
      <div className="registration-student__description">
        <h2>{registeredStudent.studentName}</h2>
        <div className="registration-student__course">
          {course.displayName}
        </div>
      </div>
    </div>
  );
}

export default RegisteredStudent;
