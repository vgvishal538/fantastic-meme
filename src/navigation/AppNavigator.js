import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoviesList from "../screens/MoviesList";
import SearchMovies from "../screens/SearchMovies";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="MoviesList">
                <Stack.Screen name="MoviesList" component={MoviesList} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={SearchMovies} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default AppNavigator;