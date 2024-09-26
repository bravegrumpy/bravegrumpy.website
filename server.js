import express  from  'express';
import fs from 'fs';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the  current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = '/';
const port = 3000;
const hostname = 'localhost';

const app = express();
app.use(helmet());

//serving static files from the root directory
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//API to fetch all html files  in current directory
app.get('/api/files', (req, res) => {
    const directoryPath = __dirname;

    // Read the  directory, and filter only the HTML files
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }

        const htmlFiles = files.filter(file => file.endsWith('.html'));
        return res.json(htmlFiles);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,  'build', 'index.html'));
});

/*
app.get('*', (req, res) => {
    const filePath = path.join(__dirname, req.url);
    const defaultFile = path.join(__dirname, 'index.html');

    if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
        res.sendFile(filePath);
    } else {
        res.sendFile(defaultFile);
    }
});
*/

app.listen(port, hostname, () => {
    console.log(`Server  is listening on https://${hostname}:${port}/`);
});