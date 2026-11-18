import { axiosInstance as axios } from "./axiosInstance";

const GET_ALL_COURSES = () => "course/all";
const GET_ALL_STUDENTS = () => "student/all";
const CREATE_STUDENT = () => "student/create";

const getAllCourses = async () => {
  return axios.get(GET_ALL_COURSES());
};

const getAllStudents = async () => {
  return axios.get(GET_ALL_STUDENTS());
};

const createStudent = async (studentBody) => {
  return axios.post(CREATE_STUDENT(), studentBody);
};

export { getAllCourses, getAllStudents, createStudent };
