import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { getData, storeData, containsKey } from "../storage";
import data from "../data.json"
import { clearWorkouts, getWorkouts, initWorkouts } from "../storage/workout";

export default function useCashedResources() {

    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {

            try {
            
                await initWorkouts();


                await Font.loadAsync({
                    "ubuntu": require("../assets/fonts/Ubuntu-Regular.ttf"),
                    "ubuntu-bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
                })
            } catch (e) {
                console.warn(e);
            } finally {
                const workouts = await getWorkouts();
                setIsLoadingComplete(true);
            }



        }
        loadResourcesAndDataAsync();
    }, [isLoadingComplete])


    return isLoadingComplete;


}