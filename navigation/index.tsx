import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import PlannerScreen from '../screen/PlannerScreen';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import WorkoutDetailScreen from '../screen/WorkoutDetailScreen';



export default function Navigation() {

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )



}

const Stack = createNativeStackNavigator();

function RootNavigator() {


    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WorkoutDetail"
                component={WorkoutDetailScreen}
             options={{ title: "Workout Detail" }}
            />
        </Stack.Navigator>);
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {

    return (
        <BottomTab.Navigator initialRouteName='Home'>

            <BottomTab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />
                }}
            />
            <BottomTab.Screen
                name='Planner'
                component={PlannerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="ios-add-circle-outline" size={size} color={color} />
                }}
            />

        </BottomTab.Navigator>
    );

}