import { Course } from "./Course";

export interface IBootcampsResp {
  count: number;
  data: Bootcamp[];
  pagination: { page: number; limit: number };
  success: boolean;
}

export interface IBootcampResp {
  data: Bootcamp;
  success: boolean;
}

export interface Bootcamp {
  _id: string;
  name: string;
  slug: string;
  description: string;
  careers: string[];
  website: string;
  phone: string;
  email: string;
  location: IGeoJsonLocation;
  averageRating: number;
  averageCost: number;
  photo: string;
  housing: string;
  jobAssistance: boolean;
  jobGuarantee: boolean;
  acceptGi?: boolean;
  createdAt: Date;
  user: string;
  courses: Course[]
}


interface IGeoJsonLocation {
  type: string;
  coordinates: number[];
  formattedAddress: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}