import * as express from 'express';
import { Request, Response } from 'express';
import {router} from './router';

const app = express();
const PORT = 3000;

app.use('/api', router);

app.listen(PORT, () => {
	console.log('server started at http://localhost:'+PORT);
});

export default app;
