const Employee = require("../lib/employee");
const emp = new Employee('Joey', 1337, 'test@test.com');  

describe("Make employee name, via constructor and getName", () => {
    
    it('should return new employee object', () => {
    expect(emp.name).toBe("Joey");
    })
});

describe("Get ID via getId()", () => {
    
    it('should return ID number for new employee object', () => {
    expect(emp.id).toBe(1337);
    })
});

describe("Set Email through constructor via getEmail()", () => {
    
    it('should return email of new employee object', () => {
    expect(emp.email).toBe('test@test.com');
    })
});
