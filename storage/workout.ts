import { containsKey, getData, removeItem, storeData } from ".";
import data from "../data.json";
import { Workout } from "../types/data";


export const getWorkouts = async (): Promise<Workout[]> => {

    const workouts = await getData("workout-data");
    return workouts;
}

export const initWorkouts = async (): Promise<boolean> => {
    const hasWorkouts = await containsKey("workout-data");
    if (!hasWorkouts) {
        console.log("storing-data")
        await storeData("workout-data", data);
    }

    return false;

}

export const clearWorkouts = async () => {
    await removeItem("workout-data");
}







