// routes.js
import express from 'express';
import helmet from 'helmet';
import Csrf from 'csrf';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// CSRF Protection
const csrfProtection = Csrf({ cookie: true });

// Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, //Limit each IP to 100 requests per `window` (here, per 15 minutes)
    keyGenerator: (req) => req.ip || 'unknown-ip',
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});

// Middleware
router.use(helmet());
router.use(limiter);
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

// CSRF Routes
// // CSRF Token Generation Route
router.get('/csrf-token', (req, res) => {
    const token = csrfProtection.create(req.cookies._csrf_secret || csrfProtection.secretSync());
    res.cookie('_csrf_secret', token.secret);
    res.send(`
        <form action="/submit" method="POST">
            <input type="hidden" name="_csrf" value="${token}" />
            <button type="submit">Submit</button>
        </form>
        `);
});

// // CSRF Validation Route
router.post('/submit', (req, res) => {
    try {
        const secret = req.cookies._csrf_secret;
        csrfProtection.verify(secret, req.body._csrf);
        res.send('Form submission successful');
    } catch (error) {
        res.status(403).send('Form submission failed.');
    }
});

export default router;