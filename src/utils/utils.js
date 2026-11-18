function normalizeCourseName(courseName = "") {
  const splitedCourseName = courseName.split(" ");
  const newSplitedCourseNameArray = splitedCourseName.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });
  return newSplitedCourseNameArray.join(" ") + " Course";
}

function dateFormatting(date) {
  const year = date.toLocaleDateString("default", { year: "numeric" });
  const month = date.toLocaleDateString("default", { month: "2-digit" });
  const day = date.toLocaleDateString("default", { day: "2-digit" });

  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}

function normalizeCourseDate(date = "") {
  const splitedDate = date.split("-");
  const formattedDate = new Date(
    Number(splitedDate[0]),
    Number(splitedDate[1]) - 1,
    Number(splitedDate[2]),
  );

  return formattedDate;
}

function normalizeStudentFullName(firstName = "", lastName = "") {
  return firstName + " " + lastName;
}

export {
  normalizeCourseName,
  dateFormatting,
  normalizeCourseDate,
  normalizeStudentFullName,
};
