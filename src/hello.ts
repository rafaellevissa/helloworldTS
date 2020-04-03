import Person from './model/Person'
import Student from './model/Student'

function hello(person: Person): string {
    return "Hello, " + person.getFullName();
}

let user = new Student("Rafael Levi", "B.", "Costa");

console.log(hello(user));