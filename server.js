import  express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: 'draft-7', // Combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();
app.use(helmet());
app.use(limiter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const root = './';
app.use(express.static(path.join(__dirname, root)));

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, req.url);
    if ((fs.existsSync(filePath)) && fs.lstatSync(filePath).isFile()) {
        res.sendFile(filePath);
    } else if ((fs.existsSync(filePath)) && fs.lstatSync(filePath).isDirectory()) {
        res.sendFile(path.resolve(path.join(path.dirname(req.url), 'index.html')));
    } else {
        res.sendFile(path.resolve(path.join(__dirname, root, 'index.html')));
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Server is  running at http://${HOST}:${PORT}/`);
});