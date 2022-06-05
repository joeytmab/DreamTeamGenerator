const Manager = require("../lib/manager");
const emp = new Manager('Joey', 1337, 'test@test.com', 528491, 'Manager')

describe('Test determining proper terminology in new Manager constructor', () => {
    
    it ('name',() => {
        expect(emp.name).toBe('Joey')
    })

    it ('id',() => {
        expect (emp.id).toBe(1337)
    })

    it ('email', () => {
        expect (emp.email).toBe('test@test.com')
    })

    it ('officeNumber', () => {
        expect (emp.officeNumber).toBe(528491)
    })
    
});

describe('get employee name via getName()', () => {
    expect(emp.getName()).toBe('Joey');
});

describe('get employee ID via getID()', () => {
    expect(emp.getId()).toBe(1337);   
});

describe('Get Email via getEmail()', () => {
    expect(emp.getEmail()).toBe('test@test.com');
})

describe("Get Office Number via getOffice()", () => {
    
    it('should return the office number', () => {
    expect(emp.getOfficeNumber()).toBe(528491);
    
    })
});

describe("Ensure getRole() functions properly", () => {

    it('should return manager as role', () => {
    expect(emp.getRole()).toBe('Manager');
    })
})