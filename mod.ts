import { Md5 } from "./deps.ts";

export const getGravatarHash = (email: string): string => {
  const hash = new Md5();
  hash.update(email);
  return hash.toString();
};

export const getGravatarUrl = (email: string): string => {
  return `https://www.gravatar.com/${getGravatarHash(email)}.json`;
};
