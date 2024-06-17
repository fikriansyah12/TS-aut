import express from "express";
import http from "http";
import bodyparser from "body-parser";
import cookiesParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors({

    credentials:true,

}));

app.use(compression());
app.use(cookiesParser());
app.use(bodyparser.json());

const server = http.createServer(app);

    server.listen(8080,() => {
        console.log('server running on http://localhost:8080/');
    });

    const MONGO_URL = "mongodb+srv://fikri:fikri@cluster0.w8ailst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    mongoose.Promise = Promise;
    mongoose.connect(MONGO_URL);
    mongoose.connection.on('error', (error: Error) => console.log(error));