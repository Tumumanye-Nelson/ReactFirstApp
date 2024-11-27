import express from 'express';
import path from 'path';

// Initialize the Express application
const app = express();
const port = 1113;

// Middleware to log requests in a friendly way
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next(); // Continue to the next middleware or route handler
});

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Serve static files from the "public" directory (for HTML, CSS, JS, images, etc.)
app.use(express.static('public'));

// Array of quotes to make our app interesting!
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life isn’t about getting and having, it’s about giving and being.",
    "The purpose of life is to be happy.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going."
];

// Route to serve a random quote as JSON
app.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
});

// Home route that welcomes users
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Creative Server!</h1>
              <p>Go to <a href="/quote">/quote</a> to get a motivational quote!</p>`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`🎉 Server is running at http://localhost:${port}`);
});
