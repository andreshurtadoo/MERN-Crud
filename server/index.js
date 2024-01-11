import express from 'express';
import { PORT } from './config.js';
import indexRoute from './routes/index.routes.js';
import taskRoutes from './routes/task.routes.js'

const app = express()

app.use(indexRoute)
app.use(taskRoutes)

app.listen(PORT)
console.log(`Server is runing on port ${PORT}`);