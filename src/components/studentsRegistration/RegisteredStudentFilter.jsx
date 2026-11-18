import "./RegisteredStudentFilter.css";
import Options from "../shared/Options";

function RegisteredStudentFilter({ selected, onFilterChangeHandler, courses }) {
  const dropdownChangeHandler = (event) => {
    onFilterChangeHandler(event.target.value);
  };

  return (
    <div className="registrations-filter">
      <div className="registrations-filter__control">
        <label>Filter by Course Name</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <Options options={courses} />
        </select>
      </div>
    </div>
  );
}

export default RegisteredStudentFilter;
