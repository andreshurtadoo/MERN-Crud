import { Router } from 'express'
import { pool } from '../db.js'

const route = Router();

route.get('/ping', async (req, res) => {
    const [rows] = await pool.query('SELECT 1+1 as result')
    res.json(rows)
})

export default route;