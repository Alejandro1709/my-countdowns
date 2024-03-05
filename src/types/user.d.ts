import { type ICountdown } from "./countdown";

export default interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image?: string;
  countdowns: ICountdown[];
}
