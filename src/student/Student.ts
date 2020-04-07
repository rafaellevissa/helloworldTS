import Person from '../person/Person'

class Student{
    private matricula: string;
    private pessoa: Person;
    
    public setMatricula(full: string): void{
        this.matricula = full;
    }

    public getMatricula(): string{
        return this.matricula;
    }
}
export default Student