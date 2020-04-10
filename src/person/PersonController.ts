import { Request, Response } from 'express'
import Person from './Person'
import { getRepository } from "typeorm";

class PersonController {
  public async create (req: Request, res: Response): Promise<Response> {
    const {name} = req.body
    const person = new Person(name)
    const personRepository = await getRepository(Person);
    const result = await personRepository.save(person);
    return res.json( result )
  }
}
export default new PersonController()
