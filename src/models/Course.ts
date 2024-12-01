import { Bootcamp } from "./Bootcamp";

export interface ICoursesResp {
  count: number;
  data: Course[];
  pagination?: { page: number; limit: number };
  success: boolean;
}

export interface ICourseResp {
  data: Course;
  success: boolean;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  minimumSkill: string;
  scholarshipAvailable: boolean;
  tuition: number;
  weeks: number;
  bootcamp: Partial<Bootcamp>;
  user: string
}