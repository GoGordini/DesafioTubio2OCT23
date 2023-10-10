import express from "express";
import handlebars from "express-handlebars";
import {__dirname} from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import productsRouter from './routes/products.router.js';
import { Server } from "socket.io";

const app = express ();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.engine("handlebars",handlebars.engine()); //qué motor de plantillas uso//
app.set('views', `${__dirname}/views`); //donde están las vistas, con path abs//
app.set("view engine", "handlebars"); 
app.use(express.static(`${__dirname}/public`));    
app.use("/", viewsRouter);
app.use("/api/products",productsRouter);
const server= app.listen(8080, ()=>console.log("Server running"));
const io = new Server(server);
app.set("socketio",io);
