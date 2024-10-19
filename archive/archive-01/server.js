// Importing servers
import  express from 'express';
import router from './routes.js';

// Importing directories
import path from 'path';
import { fileURLToPath } from 'url';

// Importing functions
import getFilenames from './getFiles.js';

// Initializing Express
const app = express();
app.set('trust proxy', true);
app.use(router);

// Defining Routing Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const root = process.env.NODE_ENV === 'production' ? 'build' : '/';

// Allowing use of scripts
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", 
        "script-src 'self' 'unsafe-inline");
    next();
});

// Serving Static Files
app.use(express.static(path.resolve(__dirname, root)));

app.get(`/api/files`, (req, res) => {
    const directoryPath = __dirname;
    const htmlFiles = getFilenames(directoryPath, '.html');
    res.json(htmlFiles);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, root, 'index.html'));
});


export async function startServer() {
    app.listen(PORT, HOST, () => {
        console.log(`Server is  running at http://${HOST}:${PORT}/`);
    }).on('close', () => {
        console.log('Server closed');
    });
}

export default app;