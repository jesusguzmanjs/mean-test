import dotenv from "dotenv";
import express from "express";
import path from "path";
const routes = require('./routes/base')
const cors = require('cors')

dotenv.config();
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);

// Configure routesroutes.register(app);
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console    
    console.log( `server started at http://localhost:${port}`);
});
