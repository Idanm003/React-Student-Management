import { dateFormatting } from "../../utils/utils";
import "./CourseDate.css";

function CourseDate({date}) {
  const formattedDate = dateFormatting(date);

  return (
    <div className="registration-date">
      <div>{formattedDate}</div>
    </div>
  );
}

export default CourseDate;
