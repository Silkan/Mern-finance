import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv'; 
import helmet from 'helmet';
import morgan from 'morgan';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express());
app.use(helmet());
app.use(helmet.crossOriginOpenerPolicy({ policy: 'same-origin' }));
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

console.log("hello");

/* MONGOOSE */

