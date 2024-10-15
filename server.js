import  express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const root = '/';

const app = express();
app.use(helmet());
app.use(express.static(__dirname));
//if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, 'build')));
//}

app.get(`/api/files`, (req, res) => {

app.use(helmet());
app.use(express.static(path.join(__dirname, root)));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
    console.log(`Server is  running at http://${HOST}:${PORT}/`);
});