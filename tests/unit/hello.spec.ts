import Person from '../../src/person/Person'
let user = new Person("Rafael Levi", "B.", "Costa");

describe('Generate Student name',() => {
    it('should generate an Full Name', () => {
        const full = user.getFullName();        
        expect(full).toHaveLength(20);
    });
});