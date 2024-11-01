import express from 'express';

const  app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/dist',express.static('/'));

app.listen(port, () => {
    console.log(`Example listening on port ${port}`);
})