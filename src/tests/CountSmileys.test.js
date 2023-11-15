import { countSmileys } from "../components/CountSmileys/CountSmileys";

it("should return the correct number of valid smiley faces", () => {
  expect(countSmileys([":)", ";(", ";}", ":-D"])).toBe(2);
  expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
  expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
});

it("should return 0 for an empty array", () => {
  expect(countSmileys([])).toBe(0);
});
