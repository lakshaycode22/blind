import express from "express"
import dotenv from "dotenv";
import { PORT } from "./constants.js";
import connectDb from "./db/index.js"

dotenv.config();

const app = express()

connectDb();
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
