import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv'; 
import helmet from 'helmet';
import morgan from 'morgan';
import kpiRoutes from "./routes/kpi.js"
import KPI from './models/kpi.js';
import { kpis } from "./data/data.js"

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

/* ROUTES */
app.use("/kpi", kpiRoutes);


/* MONGOOSE */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(async () => {
        app.listen(PORT, () => console.log(`Server port: ${PORT}`))

        /* ADD DATA ONE TIME ONLYY OR AS NEEDED */
        // await  mongoose.connection.db.dropDatabase();
        // KPI.insertMany(kpis);
    }).catch((error) => console.log(`${error} did not connect`));
