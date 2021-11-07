const Manager = require("../lib/Manager");
test("Can set office number via constructor argument", () => {
  const testValue = 50;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officenumber).toBe(testValue);
});
test("getRole() should return \"Manager\"", () => {
  const testValue = "manager";
  const e = new Manager("Foo", 1, "test@test.com", 50);
  expect(e.getRole()).toBe(testValue);
});
test("Can get office number via getOffice()", () => {
  const testValue = 50;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});