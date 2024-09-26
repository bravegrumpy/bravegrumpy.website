import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = 'localhost';
const port = 3000;

const root = '/';

app.use(helmet());
app.use(express.static(path.join(__dirname, root)));
app.use(express.static('public'));

app.get(root, (res, req) => {
    res.sendFile(path.join(__dirname, root, 'index.html'));
});

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`);
});