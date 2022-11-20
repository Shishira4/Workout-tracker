import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext=()=>{
    const context = useContext(WorkoutsContext)
    if (!context)
    {
        throw Error('useWorkoutsContect must be used inside a workoutcontext')
    }
    return context
}