// Importing express
import  express from 'express';
// Importing middleware
import helmet from 'helmet';
import Csrf from 'csrf';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

// Importing directories
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Importing functions
import getFilenames from './getFiles.js';

// Initializing Express
const app = express();

// CSRF Protection
const csrfProtection = Csrf({ cookie: true });

// Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, //Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});

// Middleware
app.use(helmet());
app.use(limiter);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Defining Routing Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

// Serving Static Files
app.use(express.static(__dirname));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
}

// Route to generate csrf token
app.get('/csrf-token', (req, res) => {
    const token = csrfProtection.create(req.cookies._csrf_secret || csrfProtection.secretSync());
    res.cookie('_csrf_secret', token.secret);
    res.send(`
        <form action="/submit" method="POST">
            <input type="hidden" name="_csrf" value="${token}" />
            <button type="submit">Submit</button>
        </form>
        `);
});

// Route to validate csrf token
app.post('/submit', (req, res) => {
    try {
        const secret = req.cookies._csrf_secret;
        csrfProtection.verify(secret, req.body._csrf);
        res.send('Form submision successful');
    } catch (error) {
        res.status(403).send('Form submission failed');
    }
});

app.get(`/api/files`, (req, res) => {
    const directoryPath = __dirname;
    const htmlFiles = getFilenames(directoryPath, '.html');
    res.json(htmlFiles);
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

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
    console.log(`Server is  running at http://${HOST}:${PORT}/`);
});