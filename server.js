import  express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get(`/api/files`, (req, res) => {

    const directoryPath = __dirname;

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }

        const htmlFiles = files.filter(file => file.endsWith('.html'));
        res.json(htmlFiles);
    });
});



app.get('*', (req, res) => {
    const filePath = path.join(__dirname, req.url);
    const defaultFile = path.join(__dirname, 'index.html');

    if ((fs.existsSync(filePath)) && fs.lstatSync(filePath).isFile()) {
        res.sendFile(filePath);
    } else {
        res.sendFile(defaultFile);
    }
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is  running at http://${hostname}:${port}/`);
});