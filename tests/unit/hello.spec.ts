import Student from '../../src/model/Student'
let user = new Student("Rafael Levi", "B.", "Costa");

describe('Generate Student name',() => {
    it('should generate an Full Name', () => {
        const full = user.getFullName();        
        expect(full).toHaveLength(20);
    });
});