import { Router } from 'express'
import { Request, Response } from 'express'
import PersonController from './person/PersonController'

const routes = Router()

routes.get('/', (req: Request, res: Response) =>
  res.json({
    message: {
      Title: 'Hello World',
      Description:
        'For use this api, see the docs on github -> https://github.com/rafaellevissa/helloworldTS'
    }
  })
)
routes.post('/person', PersonController.create)

export default routes
