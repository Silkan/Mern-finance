import express from 'express';
import KPI from '../models/kpi.js';

const router = express.Router();

router.get("/kpi", async (req, res) => {
    try{
        const kpi = await Kpi.find();
        res.status(200).json(kpi);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});


export default router;