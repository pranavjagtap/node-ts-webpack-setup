import * as express from 'express';
import { Request, Response } from 'express';
let router = express.Router();
              
router.use('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world1!',
  })
});


export {router}