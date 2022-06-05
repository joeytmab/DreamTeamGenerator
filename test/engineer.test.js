const Engineer = require("../lib/engineer");

describe("Ensure github account set via constructor", () => {
    const testGithub = "conebone69";
    const emp = new Engineer("Joey", 1337, "test@test.com", 'conebone69');
    it('should return github username', () => {
    expect(emp.getGithub()).toBe(testGithub);
    })
});

describe("Ensure getRole() functions properly", () => {
    const role = "Engineer";
    const emp = new Engineer("Joey", 1337, "test@test.com", "conebone69", 'Engineer');
    it('should return engineer as role', () => {
    expect(emp.getRole()).toBe(role);
    })
});

