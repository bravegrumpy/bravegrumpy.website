import express from 'express';
import path from 'path';
import helmet from 'helmet';
import { fileURLToPath } from 'node:url';

const port = 3000;
const root = '/'
const hostname = 'localhost';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var wait = () => {500}

console.log('server starting up');
setTimeout(wait);
const app = express();

console.log("Applying security...")
setTimeout(wait);
app.use(helmet());

console.log('Serving main.js in build directory...');
setTimeout(wait);
app.use(express.static(path.join( __dirname, 'build')));

console.log('Serving root directory...');
setTimeout(wait);
app.use(express.static(path.join(__dirname)));

console.log(`Creating api endpoint at http://${hostname}:${port}/api/files`);
setTimeout(wait);
app.get('/api/files', (req, res) => {
    console.log("setting directory path to root");
    setTimeout(wait);
    const directoryPath = path.join(__dirname, root);
    
    console.log("Using fs  to  read the files  in  the directory");
    setTimeout(wait);
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log("Calling API did not work.");
            setTimeout(wait);
            return res.status(500).send(`Unable to access directory.`);
        }
        console.log("Using filter to get the html files");
        setTimeout(wait);
        const htmlFiles = files.filter(file => file.endsWith(".html"));
        console.log("setting  response to JSONify response");
        setTimeout(waint);
        console.log(res.json(htmlFiles));
        return res.json(htmlFiles);
    });
});

console.log("Creating server listener.");
setTimeout(wait);

app.listen(port, hostname, () => {
    console.log(`Server  is  listening at http://${hostname}:${port}/`);
});



/*
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
*/
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


app.listen(port, hostname, () => {
    console.log(`Server  is listening on https://${hostname}:${port}/`);
});

*/