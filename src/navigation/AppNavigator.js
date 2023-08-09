import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoviesList from "../screens/MoviesList";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="MoviesList">
                <Stack.Screen name="MoviesList" component={MoviesList} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default AppNavigator;