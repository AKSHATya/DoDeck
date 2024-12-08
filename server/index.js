import express from "express";
import bodyParser from "body-parser";
// import axios from "axios";
import cors from 'cors';
import pg from "pg";
import task_route from "./routes/Task_route.js";


const app = express();
const port = 5000;

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Task_Tracker",
    password:"admin",
    port:5432
});
export default db;
db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173", // or the frontend URL
      methods: "GET,POST,PUT,DELETE,PATCH", // Allowed HTTP methods
      credentials: true,
    })
  );
  app.use(cors());

app.use('/api',task_route);





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
