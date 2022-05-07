import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import baguetestRouter from './routers/baguetestRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import path from 'path';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from 'cors';
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

 

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/uploads', uploadRouter);

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(cookieParser());
app.use(cors());


app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/diamelle');
app.use('/api/users', userRouter);
app.use('/api/baguestest', baguetestRouter);
app.use('/api/orders', orderRouter);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))



app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log('Server initiated succesfully');
});