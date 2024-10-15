import  express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
app.use(helmet());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const root = '/';
app.use(express.static(path.join(__dirname, root)));

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, req.url);
    if ((fs.existsSync(filePath)) && fs.lstatSync(filePath).isFile()) {
        res.sendFile(filePath);
    } else if ((fs.existsSync(filePath)) && fs.lstatSync(filePath).isDirectory()) {
        res.sendFile(path.resolve(path.join(path.dirname(req.url), 'index.html')));
    } else {
        res.sendFile(path.resolve(root, 'index.html'));
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Server is  running at http://${HOST}:${PORT}/`);
});