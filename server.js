import  express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import Csrf from 'csrf';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Initalizing Express
const app = express();

//CSRF Protection
const csrfProtection = Csrf({ cookie: true });

// Rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: 'draft-7', // Combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Middleware
app.use(helmet());
app.use(limiter);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// amplify
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Alloow_Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});


// Defining Static Routes
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const root = './';

// Route to generate csrf token
app.get('/form', (req, res) => {
    const token = csrfProtection.create(req.cookies._csrf_secret || csrfProtection.secretSync());
    res.cookie('_csrf_secret', token.secret);
    res.send(`<form action="/submit" method="POST">
                <input type="hidden" name="_csrf" value="${token}" />
                <button type="submit">Submit</button
            </form>`);
});

// Route to validate csrf token
app.post('/submit', (req, res) => {
    try {
        const secret = req.cookies._csrf_secret;
        csrfProtection.verify(secret, req.body._csrf);
        res.send('Form submission successful');
    } catch (error) {
        res.status(403).send('INvalid CSRF token');
    }
});

app.use(express.static(path.join(__dirname, root)));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, root, 'index.html')))
});

app.listen(PORT, HOST, () => {
    console.log(`Server is  running at http://${HOST}:${PORT}/`);
});