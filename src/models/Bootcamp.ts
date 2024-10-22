
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
  description: string;
}