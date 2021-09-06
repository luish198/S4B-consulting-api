import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import express from 'express';
//import bodyParser from 'body-parser';
//import Client from './models/Client.js';
import clientsRouter from './routes/clients.js';
import cors from 'cors';
import { createClient } from './controllers/clients.js';


const app = express()

app.use(express.json())
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true })); 


/*app.get("/",(req,res)=>{
    res.send("hello !")
})*/

app.use("/clients", clientsRouter)


/*app.post("/clients", async (req, res) => {
    console.log("POST recieved", req.body)
    const client = await Client.create(req.body)
    res.status("200")
    res.send(client)
    res.end()
})*/

/*app.get("/clients", async (req, res) => {    
    const clients = await Client.find()
    res.send(clients)
})*/





mongoose.connect(process.env.CONNECTION_URI, ()=>{
    console.log("Mongo is connected !")
    app.listen(process.env.PORT, ()=>{
        console.log("Server Runnin on port " + process.env.PORT)
    })
})

