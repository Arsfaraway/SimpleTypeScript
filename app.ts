import express, { Request, Response } from 'express';
import bodyParser from 'body-parser'

const app = express();
const port = 3001;

app.use(bodyParser.json())

app.get('/sum', (req: Request, res: Response) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Параметры должны быть числами' });
    }

    const result = num1 + num2;
    res.json({ result });
});

app.get('/dif', (req: Request, res: Response) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Параметры должны быть числами' });
    }

    const result = num1 - num2;
    res.json({ result });
});

app.listen(port, () => {
    console.log('сервер запущен на http://localhost:' + port);
});