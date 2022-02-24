import express, { Request, Response } from 'express';
// @ts-ignore
import { users } from './users';

const app = express();
console.log(users);

// @ts-ignore
app.get( '/', (req: Request, res: Response)=> {
    res.end();
} )


app.listen(5500, () => {
    console.log('Server has started🚀🚀🚀');
});