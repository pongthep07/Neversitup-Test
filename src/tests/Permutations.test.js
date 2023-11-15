import { Permutations } from "../components/Permutations/Permutations";

test("permutations of a non-empty input string and remove duplicates", () => {
  expect(Permutations('a')).toEqual(['a']);
  expect(Permutations('ab')).toEqual(['ab', 'ba']);
  expect(Permutations('abc')).toEqual(['abc','acb','bac','bca','cab','cba']);
  expect(Permutations("aabb")).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);

});
