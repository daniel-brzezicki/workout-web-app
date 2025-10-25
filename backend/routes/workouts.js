import {Router} from 'express';
import {getAllWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout} from '../controllers/WorkoutController.js';

const router = Router();

router.get('/', getAllWorkouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

export default router;