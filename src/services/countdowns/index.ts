import { type ICountdown } from "@/types/countdown";
import axios, { type AxiosResponse } from "axios";

export const handleFetchCountdowns = async () => {
  const { data }: AxiosResponse<ICountdown[], Error> =
    await axios.get("/api/countdowns");
  return data;
};

export const handleCreateCountdown = async (body: {
  title: string;
  targetDate: Date;
}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const countdown: ICountdown = await axios.post(
    "/api/countdowns",
    body,
    config,
  );

  return countdown;
};
