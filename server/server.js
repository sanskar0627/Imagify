import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors({
  origin: [
    'https://imagify-ai-saasl.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token']
}));
await connectDB()


app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => res.send("API Working"))

app.listen(PORT, () => console.log('Server running on port ' + PORT));
