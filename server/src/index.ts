import dotenv from "dotenv";
import express from "express";
import path from "path";
const routes = require('./routes/base')
const cors = require('cors')
import { MongoClient } from 'mongodb';

dotenv.config();
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);

// Create a MongoDB connection pool and start the application
// after the database connection is ready
MongoClient.connect(`mongodb://localhost:27017`, { promiseLibrary: Promise,  useUnifiedTopology: true  }, (err, db) => {
    if (err) {
        console.warn(`Failed to connect to the database. ${err.stack}`);
        return
    }
    app.locals.db = db.db('welness-test').collection('bills');
    app.listen(port, () => {
        console.info(`Node.js app is listening at http://localhost:${port}`);
    });
});
