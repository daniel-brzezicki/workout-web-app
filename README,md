# Workout Tracker — Learning Project

A small full-stack learning project to track workouts. Built to practice a MERN-style stack with a separate backend (Node/Express/MongoDB) and frontend (React).

## Tech stack
- Backend: Node.js, Express, MongoDB, Mongoose — see [backend/package.json](backend/package.json) and [backend/server.js](backend/server.js).  
- Frontend: React, React Router, date-fns — see [frontend/package.json](frontend/package.json) and [frontend/src/App.js](frontend/src/App.js).
- Styling: plain CSS in [frontend/src/index.css](frontend/src/index.css).

## Project structure (key files)
- Backend
  - Server: [backend/server.js](backend/server.js)
  - Routes: [backend/routes/workouts.js](backend/routes/workouts.js)
  - Controller: [backend/controllers/WorkoutController.js](backend/controllers/WorkoutController.js) — functions: [`getAllWorkouts`](backend/controllers/WorkoutController.js), [`getWorkout`](backend/controllers/WorkoutController.js), [`createWorkout`](backend/controllers/WorkoutController.js), [`deleteWorkout`](backend/controllers/WorkoutController.js), [`updateWorkout`](backend/controllers/WorkoutController.js)
  - Model: [`Workout`](backend/models/WorkoutModel.js) — [backend/models/WorkoutModel.js](backend/models/WorkoutModel.js)

- Frontend
  - App entry: [frontend/src/index.js](frontend/src/index.js) and [frontend/src/App.js](frontend/src/App.js)
  - Pages / Components:
    - Home page: [frontend/src/pages/Home.js](frontend/src/pages/Home.js)
    - Workout form: [frontend/src/components/WorkoutForm.js](frontend/src/components/WorkoutForm.js)
    - Workout details: [frontend/src/components/WorkoutDetails.js](frontend/src/components/WorkoutDetails.js)
    - Navbar: [frontend/src/components/Navbar.js](frontend/src/components/Navbar.js)
  - State & hooks:
    - Context: [`WorkoutsContext`](frontend/src/context/WorkoutsContext.js) — [frontend/src/context/WorkoutsContext.js](frontend/src/context/WorkoutsContext.js) (includes `workoutsReducer` and `WorkoutContextProvider`)
    - Hook: [`useWorkoutsContext`](frontend/src/hooks/UseWorkoutsContext.js) — [frontend/src/hooks/UseWorkoutsContext.js](frontend/src/hooks/UseWorkoutsContext.js)

## What it does
- Backend exposes a simple REST API for workouts under `/api/workouts` (see [backend/routes/workouts.js](backend/routes/workouts.js)).
- Frontend fetches and displays workouts, allows creating and deleting workouts (see [frontend/src/pages/Home.js](frontend/src/pages/Home.js), [frontend/src/components/WorkoutForm.js](frontend/src/components/WorkoutForm.js), [frontend/src/components/WorkoutDetails.js](frontend/src/components/WorkoutDetails.js)).
- Client-side state is handled via React Context + reducer (`WorkoutsContext`) and a small custom hook (`useWorkoutsContext`).

## API (high level)
- GET /api/workouts — handled by [`getAllWorkouts`](backend/controllers/WorkoutController.js)
- GET /api/workouts/:id — handled by [`getWorkout`](backend/controllers/WorkoutController.js)
- POST /api/workouts — handled by [`createWorkout`](backend/controllers/WorkoutController.js)
- DELETE /api/workouts/:id — handled by [`deleteWorkout`](backend/controllers/WorkoutController.js)
- PATCH /api/workouts/:id — handled by [`updateWorkout`](backend/controllers/WorkoutController.js)

(See route implementations: [backend/routes/workouts.js](backend/routes/workouts.js) and controller: [backend/controllers/WorkoutController.js](backend/controllers/WorkoutController.js).)

## Run locally

1. Backend
   - Create `.env` (in `backend/`) with:
     ```
     MONGO_URI=your_mongo_connection_string
     PORT=4000
     ```
   - Install and start:
     ```sh
     cd backend
     npm install
     npm run dev   # uses nodemon or `npm start`
     ```
   - Server file: [backend/server.js](backend/server.js)

2. Frontend
   - Install and start:
     ```sh
     cd frontend
     npm install
     npm start
     ```
   - App entry: [frontend/src/index.js](frontend/src/index.js)

The frontend is proxied to the backend API (`"proxy": "http://localhost:4000"`) via [frontend/package.json](frontend/package.json).

## Notes / learning outcomes
- Practiced building a small REST API with Express and Mongoose models ([backend/models/WorkoutModel.js](backend/models/WorkoutModel.js)).
- Implemented React Context + reducer for global state ([frontend/src/context/WorkoutsContext.js](frontend/src/context/WorkoutsContext.js)).
- Learned basic client-server interaction with fetch and handling validation errors in the UI ([frontend/src/components/WorkoutForm.js](frontend/src/components/WorkoutForm.js)).

## References
- Review server bootstrap: [backend/server.js](backend/server.js)  
- Frontend router and main layout: [frontend/src/App.js](frontend/src/App.js)  
- Example components: [frontend/src/components/WorkoutForm.js](frontend/src/components/WorkoutForm.js), [frontend/src/components/WorkoutDetails.js](frontend/src/components/WorkoutDetails.js)

## License
Use as you like — this was created for learning / demo purposes.
