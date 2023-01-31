import express from 'express';
import logger from 'morgan';

const app = express();
app.use(logger('dev'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })

app.listen(3000, () => {
    process.stdout.write(`Server is running on port 3000\nurl:\t\u001b[4m\u001b[32mhttp://localhost:3000\u001b[0m\n`);
});