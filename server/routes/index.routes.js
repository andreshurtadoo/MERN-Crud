import { Router } from 'express'
import { pool } from '../db.js'

const route = Router();

route.get('/ping', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1+1 as result')
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ "message": error.message })
    }
})

export default route;