import { Request, Response } from 'express'
import Person from './Person'


class PersonController {
  public async create (req: Request, res: Response): Promise<Response> {
    const name = req.body
    
    const person = await Person.create({name});
    return res.json({ person })
  }
}
export default new PersonController()
