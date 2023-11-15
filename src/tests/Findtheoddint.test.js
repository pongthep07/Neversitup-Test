import { Findtheoddint } from "../components/Findtheoddint/Findtheoddint";

test("should find the integer that appears an odd number of times", () => {
  expect(Findtheoddint([7])).toBe(7);
  expect(Findtheoddint([0])).toBe(0);
  expect(Findtheoddint([1,1,2])).toBe(2);
  expect(Findtheoddint([0,1,0,1,0])).toBe(0);
  expect(Findtheoddint([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4);
});
