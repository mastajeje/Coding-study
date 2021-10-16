import functions from "./functions";
describe("functions", () => {
  test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
  });

  // toBeNull matches only null
  test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
  });

  //toBeFalsy matches anything that an if statement treats as false(null, undefined, 0 etc)
  test("Should be falsy", () => {
    expect(functions.checkValue(null)).toBeFalsy();
  });

  test("User should be Jeongjin Kim", () => {
    expect(functions.createUser()).toEqual({
      firstName: "Jeongjin",
      lastName: "Kim",
    });
  });

  // less than and greater than
  it("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
  });

  // Regex
  //toMatch takes regex
  test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  // Arrays
  test("Admin should be in usernames", () => {
    const userNames = ["john", "karen", "admin"];
    expect(userNames).toContain("admin");
  });

  //Working with async data

  // Promise
  //need both assertions and return to test corretly
  // without both assertions and return test will always pass

  //   test("User fetched name should be Leanne Graham", () => {
  //     expect.assertions(1);
  //     return functions.fetchUser().then((data) => {
  //       expect(data.name).toEqual("Leanne Graham");
  //     });
  //   });

  test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
  });
});
