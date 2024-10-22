
export interface IReviewsResp {
  count: number;
  data: Review[];
  pagination?: { page: number; limit: number };
  success: boolean;
}

export interface IReviewResp {
  data: Review;
  success: boolean;
}

export interface Review {
  _id: string;
  title: string;
  text: string;
  rating: number;
  createdAt: Date;
  bootcamp: string;
  user: string
}