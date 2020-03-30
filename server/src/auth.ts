import { User } from "./entity/User";
import { sign } from "jsonwebtoken";

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "7d",
    }
  );
};
