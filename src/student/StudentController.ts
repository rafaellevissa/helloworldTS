import { Request, Response } from 'express'
import Student from './Student'

class StudentController {
  public async create (req: Request, res: Response): Promise<Response> {
    return res.json("user");
  }
}
export default new StudentController()
