import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import gigRoute from './routes/gigRoute.js';
import orderRoute from './routes/orderRoute.js';
import conversationRoute from './routes/conversationRoute.js';
import messageRoute from './routes/messageRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import authRoute from './routes/authRoute.js';


const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

app.use(express.json());

app.use("/api/auth", authRoute)
app.use('/api/users', userRoute)
app.use('/api/gigs', gigRoute)
app.use('/api/orders', orderRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/messages', messageRoute)
app.use('/api/reviews', reviewRoute)




const port = process.env.PORT;
app.listen(port, () => {
    connect();
    console.log(`Backend server is  running on ${port} `);
})





