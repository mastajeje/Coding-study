import { hello, add, removeSNames } from "./App";

describe("hello", () => {
  it("should output hello", () => {
    expect(hello()).toBe("Hello");
  });
});

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(1, -2)).toBe(-1);
    expect(add(-1, -4)).toBe(-5);
  });

  it("should only add numbers ", () => {
    expect(add(2, "2")).toBe(undefined);
    // 자바스크립트에서는 x + {object} 의 결과 값이
    // "x[object object]"로 나온다
    expect(add(2, {})).toBe(undefined);
    expect(add(2, [])).toBe(undefined);
  });
});

describe("removeSnames", () => {
  it("should remove all s names", () => {
    const names = ["Scott", "Courtney", "Steve"];
    //to check if something is not in the result
    expect(removeSNames(names)).not.toContain("Scott");
    expect(removeSNames(names)).not.toContain("Steve");
  });
  it("should not remove other names", () => {
    const names = ["Scott", "Courtney", "JJ"];
    //to check if something is in the result
    expect(removeSNames(names)).toContain("Courtney");
    expect(removeSNames(names)).toContain("JJ");
  });
  it("should account for case", () => {
    const names = ["Scott", "Courtney", "JJ", "scott"];
    expect(removeSNames(names)).not.toContain("Scott");
    expect(removeSNames(names)).not.toContain("scott");
  });
});
