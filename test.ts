import { assertEquals } from "./test_deps.ts";
import { getGravatarUrl, getGravatarHash } from "./mod.ts";

Deno.test(
  "Check `Get Gravatar Hash`",
  () => {
    assertEquals(
      getGravatarHash("gargya.aniket@gmail.com"),
      "15d4fc7c2997c7869b3a855fa01cb6d4",
    );
  },
);

Deno.test(
  "Check `Get Gravatar URL`",
  () => {
    assertEquals(
      getGravatarUrl("gargya.aniket@gmail.com"),
      "https://www.gravatar.com/15d4fc7c2997c7869b3a855fa01cb6d4.json",
    );
  },
);
