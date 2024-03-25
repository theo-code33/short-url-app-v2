import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from "../pages/OnBoarding/OnBoarding";

const Stack = createNativeStackNavigator();

export const Routing = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Onboarding"
                    component={OnBoarding}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}