
export interface IUserResp {
  success: boolean;
  data: User
}

export interface ITokenResp {
  success: boolean;
  token: string 
}

export interface IUsersResp {
  count: number;
  data: User[];
  pagination: { page: number; limit: number };
  success: boolean;
}

export interface User {
  name: string;
  email: string;
  role: string;
  password: string;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  createdAt: Date
}