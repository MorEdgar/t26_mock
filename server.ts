// Unless directed specifically by the tutor, you MUST NOT change any of the pre-written code
// other than to fill in the blanks (?????)

import express, { Request, Response } from 'express';
const app = express();
import Database from 'better-sqlite3';
import ViteExpress from 'vite-express';

// Interfaces for database row shapes — you may use these to type query results.
interface Room {
    id: number;
    city: string;
    hotel: string;
    date: string;
    rtype: string;
    nbeds: number;
    price: number;
}

interface Booking {
    id: number;
    username: string;
    roomid: number;
    nnights: number;
}

app.use(express.static('public'));

// HINT: For Q10, you will need to enable the server to read JSON request bodies.
// Look at the lecture notes / class work to see how to do this.

const db = new Database("staysmart.db");

// Q4 complete the route to find all matching rooms
app.get('/search/:city/:hotel/:date', (req: Request, res: Response) => {
    const stmt = db.prepare("SELECT * FROM ????? WHERE ????? AND ????? AND ?????");

    // Q5 send back the results as JSON


});


// Q7 complete the route to allow the user to book a room.
// For this mock, use a hard-coded username (e.g. "fred") and a hard-coded number of nights (1).
app.post('/room/book/:id', (req: Request, res: Response) => {
    const stmt = db.prepare("?????");
});


// Q10 complete the route to allow the user to add a room.
// HINT: The data will arrive in req.body. You will only see it once you have enabled
// JSON body parsing above.
app.post('/room/new', (req: Request, res: Response) => {
    const stmt = db.prepare("?????");
});


const PORT = 3000;

ViteExpress.listen(app, PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
