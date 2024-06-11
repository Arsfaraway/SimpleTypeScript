"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3001;
app.use(body_parser_1.default.json());
app.get('/sum', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: '��������� ������ ���� �������' });
    }
    const result = num1 + num2;
    res.json({ result });
});
app.get('/dif', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: '��������� ������ ���� �������' });
    }
    const result = num1 - num2;
    res.json({ result });
});
app.listen(port, () => {
    console.log('������ ������� �� http://localhost:' + port);
});
