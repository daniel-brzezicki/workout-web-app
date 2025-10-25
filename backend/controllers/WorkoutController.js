import Workout from '../models/WorkoutModel.js';
import {Types} from 'mongoose';

// get all workouts
export const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1});
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get single workout
export const getWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid workout ID' });
        }
        const workout = await Workout.findById(id);
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// create new workout
export const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a workout
export const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid workout ID' });
        }
        const workout = await Workout.findOneAndDelete({_id: id});
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// update a workout
export const updateWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body});
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}