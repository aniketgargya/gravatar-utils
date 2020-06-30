import { Md5 } from "./deps.ts";

export const getGravatarUrl = (email: string): string => {
  const hash = new Md5();
  hash.update(email);
  return `https://www.gravatar.com/${hash}.json`;
}
