import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from "../pages/OnBoarding/OnBoarding";
import {Register} from "../pages/Register/Register";
import {SignIn} from "../pages/SignIn/SignIn";

const Stack = createNativeStackNavigator();

export const Routing = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Onboarding"
                    component={OnBoarding}
                />
                <Stack.Screen name={'Register'} component={Register}/>
                <Stack.Screen name={'SignIn'} component={SignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}