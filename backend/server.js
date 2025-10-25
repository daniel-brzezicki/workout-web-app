import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts.js';

// express app
const app = express();

// middleware
app.use(express.json());
app.use(( req, res, next ) => {
    console.log( req.path, req.method );
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        
        // listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });