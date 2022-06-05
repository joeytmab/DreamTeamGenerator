const Intern = require("../lib/intern");

describe("Ensure getSchool() functions correctly", () => {
    const school = "UCSD";
    const emp = new Intern("Joey", 1337, "test@test.com", "UCSD");
    it('should return the school from the method', () => {
    expect(emp.getSchool()).toBe(school);
    })
});

describe("Ensure getRole() functions correctly", () => {
    const role = "Intern";
    const emp = new Intern("Joey", 1337, "test@test.com", "UCSD", "Intern");
    it('should return intern as role', () => {
    expect(emp.getRole()).toBe(role);
    })
});
