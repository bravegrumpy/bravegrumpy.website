import  express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import csrf from 'csrf-protection';
import cookieParser from 'cookie-parser';

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
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const csrff = csrf({
    secret: 'Hello World'
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const root = './';
app.use(express.static(path.join(__dirname, root)));

app.get('*', csrff.csrfCreate, (req, res) => {
    const csrfToken = req.csrfToken;
    res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(PORT, HOST, () => {
    console.log(`Server is  running at http://${HOST}:${PORT}/`);
});