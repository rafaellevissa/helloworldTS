import Person from './Person'

class Student implements Person{
    private firstName: string;
    private lastName: string;
    private fullName: string;

    constructor(firstName: string, middleInitial: string, lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    public setFirstName(first: string): void{
        this.firstName = first;
    }

    public getFirstName(): string{
        return this.firstName;
    }

    public setLastName(last: string): void{
        this.lastName = last;
    }

    public getLastName(): string{
        return this.lastName;
    }

    public setFullName(full: string): void{
        this.fullName = full;
    }

    public getFullName(): string{
        return this.fullName;
    }
}
export default Student