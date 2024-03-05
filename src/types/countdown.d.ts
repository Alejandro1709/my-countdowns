import type IUser from "./user";

export interface ICountdown {
  id: string;
  title: string;
  slug: string;
  targetDate: Date;
  finished: boolean;
  user: IUser;
}
